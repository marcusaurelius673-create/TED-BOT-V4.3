const fs = require('fs');
const path = require('path');

// Configuração do timezone para Brasil
process.env.TZ = 'America/Sao_Paulo';

// Função para calcular tempo restante até o próximo horário
function calcularTempoRestante(horaMinuto) {
    const [hora, minuto] = horaMinuto.split(':').map(Number);
    const agora = new Date();
    const alvo = new Date();

    alvo.setHours(hora, minuto, 0, 0);

    // Se já passou, agenda para o próximo dia
    if (alvo <= agora) {
        alvo.setDate(alvo.getDate() + 1);
    }

    return alvo.getTime() - agora.getTime();
}

// Envio seguro de mensagens
async function safeSendMessage(tednexmart, chatId, text) {
    try {
        if (!chatId || !text) return false;

        // Se for grupo, verifica se o bot ainda está nele
        if (chatId.endsWith('@g.us')) {
            const metadata = await tednexmart.groupMetadata(chatId).catch(() => null);
            if (!metadata) return false;
        }

        await tednexmart.sendMessage(chatId, { text });
        return true;
    } catch (error) {
        console.error(`Erro ao enviar mensagem para ${chatId}:`, error.message);
        return false;
    }
}

// Agenda execução de uma ação
function programarAcao(tednexmart, grupo, horario, acao, mensagem, tipo, caminhoArquivo) {
    const executarAcao = async () => {
        try {
            const resultado = await acao();
            if (resultado !== false) {
                await safeSendMessage(tednexmart, grupo, mensagem);

                // 🔹 Remove o horário que já foi cumprido
                try {
                    const dados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8'));

                    if (tipo === 'fechar') {
                        delete dados.horaFechar;
                    } else if (tipo === 'abrir') {
                        delete dados.horaAbrir;
                    }

                    // Se não tiver mais nenhum horário, remove o arquivo
                    if (!dados.horaFechar && !dados.horaAbrir) {
                        fs.unlinkSync(caminhoArquivo);
                    } else {
                        fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
                    }
                } catch (e) {
                    console.error(`[ERRO] Ao atualizar arquivo de agendamento:`, e.message);
                }
            }
        } catch (error) {
            console.error(`[ERRO] Ao executar ação em ${grupo}:`, error.message);
        }
    };

    const tempo = calcularTempoRestante(horario);
    if (tempo > 0) {
        setTimeout(executarAcao, tempo);
    }
}

// Carrega e gerencia todos os agendamentos
async function carregarAgendamentos(tednexmart) {
    const pastaAgendamentos = './database/func';

    try {
        if (!fs.existsSync(pastaAgendamentos)) {
            fs.mkdirSync(pastaAgendamentos, { recursive: true });
            return;
        }

        const arquivos = fs.readdirSync(pastaAgendamentos)
            .filter(arquivo => arquivo.startsWith('fechar-abrir-gp-') && arquivo.endsWith('.json'));

        for (const arquivo of arquivos) {
            try {
                const caminhoCompleto = path.join(pastaAgendamentos, arquivo);
                const dados = JSON.parse(fs.readFileSync(caminhoCompleto, 'utf-8'));
                const { horaFechar, horaAbrir, grupo } = dados;

                if (!horaFechar && !horaAbrir || !grupo) {
                    console.error(`[ERRO] Arquivo de agendamento inválido: ${arquivo}`);
                    continue;
                }

                // 🔹 Verificação correta se o grupo/contato ainda existe
                try {
                    if (grupo.endsWith('@g.us')) {
                        const metadata = await tednexmart.groupMetadata(grupo).catch(() => null);
                        if (!metadata) {
                            fs.unlinkSync(caminhoCompleto);
                            continue;
                        }
                    } else {
                        const existe = await tednexmart.onWhatsApp(grupo).catch(() => null);
                        if (!existe?.[0]?.exists) {
                            fs.unlinkSync(caminhoCompleto);
                            continue;
                        }
                    }
                } catch (error) {
                    console.error(`[ERRO] Ao verificar existência de ${grupo}:`, error.message);
                    continue;
                }

                // Programa fechamento (se existir)
                if (horaFechar) {
                    programarAcao(
                        tednexmart,
                        grupo,
                        horaFechar,
                        async () => {
                            try {
                                await tednexmart.groupSettingUpdate(grupo, "announcement");
                                return true;
                            } catch (error) {
                                console.error(`[ERRO] Ao fechar grupo ${grupo}:`, error.message);
                                return false;
                            }
                        },
                        `🔒 Grupo fechado automaticamente às ${horaFechar}`,
                        'fechar',
                        caminhoCompleto
                    );
                }

                // Programa abertura (se existir)
                if (horaAbrir) {
                    programarAcao(
                        tednexmart,
                        grupo,
                        horaAbrir,
                        async () => {
                            try {
                                await tednexmart.groupSettingUpdate(grupo, "not_announcement");
                                return true;
                            } catch (error) {
                                console.error(`[ERRO] Ao abrir grupo ${grupo}:`, error.message);
                                return false;
                            }
                        },
                        `🔓 Grupo aberto automaticamente às ${horaAbrir}`,
                        'abrir',
                        caminhoCompleto
                    );
                }

            } catch (error) {
                console.error(`[ERRO CRÍTICO] Ao processar ${arquivo}:`, error.message);
            }
        }
    } catch (error) {
        console.error('[ERRO INICIAL] Ao carregar agendamentos:', error.message);
    }
}

module.exports = { carregarAgendamentos };