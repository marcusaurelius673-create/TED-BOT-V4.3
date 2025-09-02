const adms = (prefix, sender) => { 
    // NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} 
    // ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono.
    // Só pode alterar a base de tudo, menos as definições,
    // só se quiser apagar a definição completa. 

    return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⚙️
╰╮💻 𝐌𝐄𝐍𝐔 - 𝐀𝐃𝐌𝐈𝐍𝐒 🛠️
╭┤⋟ Usuário: @${sender.split("@")[0]}
┃╰══ 🔧
╰╦═════════════════ 🛠️
╭┤ 〘🤖〙➢ ${prefix}maud (1/0)
╭┤ 〘🤖〙➢ ${prefix}antibot (on off)
┃│ 〘👾〙➢ ${prefix}audios (1/0)
┃│ 〘📜〙➢ ${prefix}ativatexto (1/0)
┃│ 〘⏱️〙➢ ${prefix}tmpgp 5m/1h
┃│ 〘🖼️〙➢ ${prefix}Antiimg (1/0)
┃│ 〘🖼️〙➢ ${prefix}antivideo (1/0)
┃│ 〘🔒〙➢ ${prefix}antispam (1/0)
┃│ 〘📄〙➢ ${prefix}Antidoc (1/0)
┃│ 〘🔗〙➢ ${prefix}Antilinkgp (1/0)
┃│ 〘🔗〙➢ ${prefix}Antilinkhard (1/0)
┃│ 〘🚫〙➢ ${prefix}Antifake (1/0)
┃│ 〘🔒〙➢ ${prefix}Antinotas (1/0)
┃│ 〘📚〙➢ ${prefix}Anticatalogo (1/0)
┃│ 〘🔠〙➢ ${prefix}Antipalavra (1/0)
┃│ 〘🎉〙➢ ${prefix}Bemvindo (1/0)
┃│ 〘🎉〙➢ ${prefix}Bemvindo2 (1/0)
┃│ 〘🤖〙➢ ${prefix}Simih (1/0)
┃│ 〘🖼️〙➢ ${prefix}Autosticker (1/0)
┃│ 〘🔁〙➢ ${prefix}antisticker (1/0)
┃│ 〘🔁〙➢ ${prefix}Autorepo (1/0)
┃│ 〘🗑️〙➢ ${prefix}Odelete (1/0)
┃│ 〘⚙️〙➢ ${prefix}x9 (1/0)
┃│ 〘⏳〙➢ ${prefix}Tempocmd (segundos)
┃│ 〘🖋️〙➢ ${prefix}Legenda_imagem (Texto)
┃│ 〘🎥〙➢ ${prefix}Legenda_video (Texto)
┃│ 〘🌍〙➢ ${prefix}Legenda_estrangeiro (Texto)
┃│ 〘📝〙➢ ${prefix}Legendabv (Texto)
┃│ 〘🔤〙➢ ${prefix}Legendasaiu (Texto)
┃│ 〘📝〙➢ ${prefix}Legendabv2 (Texto)
┃│ 〘📱〙➢ ${prefix}Legendasaiu2 (Texto)
┃│ 〘👑〙➢ ${prefix}So_adm
┃│ 〘🎯〙➢ ${prefix}Hidetag (txt) (marcação)
┃│ 〘🔒〙➢ ${prefix}Fechar-gp
┃│ 〘🔲〙➢ ${prefix}Listanegra (Número)
┃│ 〘🚫〙➢ ${prefix}Tirardalista (Número)
┃│ 〘⚠️〙➢ ${prefix}ListanegraG (Número)
┃│ 〘🔓〙➢ ${prefix}TirardalistaG (Número)
┃│ 〘📛〙➢ ${prefix}Multiprefixo (1/0)
┃│ 〘✏️〙➢ ${prefix}Add_prefixo
┃│ 〘✏️〙➢ ${prefix}Tirar_prefixo
┃│ 〘🎯〙➢ ${prefix}Banghost
┃│ 〘🔊〙➢ ${prefix}Mute (@mencionar)
┃│ 〘🔊〙➢ ${prefix}Desmute (@mencionar)
┃│ 〘📱〙➢ ${prefix}Add 5511.. (Para-adicionar)
┃│ 〘🔄〙➢ ${prefix}Reviver (Responder-mensagem)
┃│ 〘🚷〙➢ ${prefix}Kick [@] (Para-remover)
┃│ 〘🚫〙➢ ${prefix}Ban (Responder-mensagem)
┃│ 〘👑〙➢ ${prefix}Promover [@] (Ser-admin)
┃│ 〘👑〙➢ ${prefix}Rebaixar [@] (Rebaixar-adm)
┃│ 〘⚙️〙➢ ${prefix}Changegroup (all/adms)
┃│ 〘⏳〙➢ ${prefix}Ephemeral (Desativar ou ativar as mensagens temporárias)
┃│ 〘📝〙➢ ${prefix}Descgp (Texto)
┃│ 〘🔖〙➢ ${prefix}Nomegp (Nome)
┃│ 〘📣〙➢ ${prefix}Totag (Mencionar algo)
┃│ 〘🔒〙➢ ${prefix}Grupo (f/a)
┃│ 〘🔄〙➢ ${prefix}Status
┃│ 〘🧹〙➢ ${prefix}Limpar (texto-invisível-gp)
┃│ 〘📊〙➢ ${prefix}Atividade (DO-GRUPO)
┃│ 〘🔗〙➢ ${prefix}Linkgp 
┃│ 〘ℹ️〙➢ ${prefix}Grupoinfo
┃│ 〘🚫〙➢ ${prefix}Blockcmdgp (cmd)
┃│ 〘🔓〙➢ ${prefix}Unblockcmdgp (cmd)
┃│ 〘📋〙➢ ${prefix}Listbcmdgp
┃│ 〘🎯〙➢ ${prefix}Marcar (marca tds do gp)
┃│ 〘📱〙➢ ${prefix}Marcar2 (Marca-tds-wa.me)
┃│ 〘👾〙➢ ${prefix}adverter
┃│ 〘🔍〙➢ ${prefix}listadvs
┃│ 〘🫵〙➢ ${prefix}rmadv
┃│〘💬〙➢ ${prefix}Addpalavra (palavrão)  
┃│〘💬〙➢ ${prefix}Delpalavra (remover) 
┃│〘💬〙➢ ${prefix}listpalavra (palavrão) 
┃│〘🗑️〙➢ ${prefix}delremover
┃│〘📋〙➢ ${prefix}listauto
┃│〘➕〙➢ ${prefix}addauto
┃│〘🤖〙➢ ${prefix}autorepo (1/0)
┃│〘🛡〙➢ ${prefix}antistatus (on/off)

╰══ 🛠️
╰══════════════════ ⚙️​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`;
};

// Exportando de forma segura
module.exports = { 
    adms
};

// MENU RPG DA SABCITY

const animes = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━━❰ 🎌 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄𝐒 🎌 ❱━━━╮  
┃ 🎮 *Usuário:* @${sender.split("@")[0]}  
╰━━━━━━━━━━━━━━━━━━╯  
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`;

};

exports.animes = animes;




