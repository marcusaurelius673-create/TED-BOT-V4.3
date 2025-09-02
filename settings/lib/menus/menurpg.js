const rpgmenu = (prefix, sender) => {
    return `╭── 🎖️・ESTATÍSTICAS E RANKING
│ • 📝 ${prefix}registro
│ • 🏆 ${prefix}ranking
╰───────────────✦

╭── 🛡️・SEGURANÇA E ATAQUES
│ • 🔐 ${prefix}comprarprotecao
│ • 🛡 ${prefix}minhasprotecao
╰───────────────✦

╭── 🚨・AÇÃO POLICIAL & CRIMINOSOS
│ • 🥷 ${prefix}assaltar
│ • 💸 ${prefix}pagarfianca
╰───────────────✦

╭── 🎰・JOGOS E CASSINO
│ • 🎲 ${prefix}cassino
│ • 💣 ${prefix}bombas
│ • 💸 ${prefix}resgatar (bombas)
╰───────────────✦

╭── 🏦・BANCO E FINANÇAS
│ • 🗝️ ${prefix}minhachave
│ • 💳 ${prefix}transferir
│ • 💱 ${prefix}trocarbanco
│ • 🏦 ${prefix}bancosinfo
│ • 💰 ${prefix}saldo
╰───────────────✦

╭── 🧾・CONTA E PROFISSÕES
│ • ⚒️ ${prefix}Emprego
│ • 📲 ${prefix}Influencer
│ • 🗑 ${prefix}sair
╰───────────────✦`;
};

module.exports = { rpgmenu };