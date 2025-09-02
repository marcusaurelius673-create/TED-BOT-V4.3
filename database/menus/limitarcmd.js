const fs = require("fs");

// caminho do banco local
const DB_PATH = "./database/menus/limitarcmd.json";

// carrega banco
let Limit_CMD = [];
if (fs.existsSync(DB_PATH)) {
  try {
    Limit_CMD = JSON.parse(fs.readFileSync(DB_PATH));
  } catch (e) {
    Limit_CMD = [];
  }
}

// formata ms → "1m 20s" ou "5s"
function TimeCount(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0 && seconds > 0) {
    return `${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
}

// salva banco em JSON
function saveDB() {
  fs.writeFileSync(DB_PATH, JSON.stringify(Limit_CMD, null, 2));
}

// verifica limite antes de rodar comando
function checkLimitCmd({ from, sender, dataGp, reply, nescessario }) {
  const agora = Math.floor(Date.now() / 1000); // em segundos

  const gIdx = Limit_CMD.findIndex(g => g.idgp === from);
  if (gIdx === -1) {
    Limit_CMD.push({ idgp: from, ids: [{ id: sender, tempo: agora }] });
    saveDB();
    return false; // liberado
  }

  if (!Array.isArray(Limit_CMD[gIdx].ids)) Limit_CMD[gIdx].ids = [];

  const uIdx = Limit_CMD[gIdx].ids.findIndex(u => u.id === sender);
  if (uIdx === -1) {
    Limit_CMD[gIdx].ids.push({ id: sender, tempo: agora });
    saveDB();
    return false; // liberado
  }

  const ultimoUso = Limit_CMD[gIdx].ids[uIdx].tempo;     
  const decorrido = agora - ultimoUso;                   
  const limiteSeg = parseInt(dataGp[0]?.Limit_tempo, 10) || 60; // em segundos

  if (decorrido < limiteSeg) {
    const restante = limiteSeg - decorrido; 
    reply(
      nescessario.TEMPO_DE_CMD
        .replaceAll("#tempocmd#", TimeCount(restante * 1000))
        .replaceAll("#tempo#", `${limiteSeg} segundo${limiteSeg > 1 ? 's' : ''}`)
    );
    return true; // bloqueado
  }

  Limit_CMD[gIdx].ids[uIdx].tempo = agora;
  saveDB();
  return false; // liberado
}

// comando para definir tempo
function setLimitCmd({ q, prefix, command, isGroup, isGroupAdmins, dataGp, setGp, reply, enviar }) {
  if (!isGroup) return reply(enviar.msg.grupo);
  if (!isGroupAdmins) return reply(enviar.msg.adm);

  const s = parseInt(q, 10);
  if (isNaN(s)) {
    return reply(`Exemplo: ${prefix + command} 120\n(60 = 1 minuto)\nColoque 0 para desativar.`);
  }

  if (s === 0) {
    dataGp[0].Limitar_CMD = false;
    setGp(dataGp);
    return reply('❌ Limitador de comandos DESATIVADO neste grupo.');
  }

  dataGp[0].Limitar_CMD = true;
  dataGp[0].Limit_tempo = s;
  setGp(dataGp);

  return reply(`✅ Tempo limite definido para: ${s} segundo${s > 1 ? 's' : ''} por comando.`);
}

module.exports = {
  checkLimitCmd,
  setLimitCmd,
  TimeCount
};