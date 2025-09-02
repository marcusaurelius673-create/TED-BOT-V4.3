const menudono = (prefix, sender) => {
    return `
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ 💎  
╰╮🌟 *𝐌𝐄𝐍𝐔 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎* 🌟  
╭┤ 〘🎯〙➢ Usuário: @${sender.split("@")[0]}  
┃╰══ 💎  
╰╦══════════════════ ⚙️  
╭┤⚙️ *Configurações e Gerenciamento* ⚙️  
┃│〘🛠️〙➢ ${prefix}botoes (1/0)
┃│〘🛠️〙➢ ${prefix}Bangp  
┃│〘🛠️〙➢ ${prefix}Unbangp  
┃│〘🖼️〙➢ ${prefix}Fotomenu (Marcar-img)  
┃│〘📜〙➢ ${prefix}Cmdpremlist 
┃│〘📝〙➢ ${prefix}verificarkey
┃│〘📝〙➢ ${prefix}alterarkey (nome)
┃│〘📝〙➢ ${prefix}Addcmdprem (cmd)  
┃│〘📝〙➢ ${prefix}Delcmdprem (cmd)  
┃│〘🌄〙➢ ${prefix}Fundobemvindo (marcar-img)  
┃│〘🌅〙➢ ${prefix}Fundosaiu (marcar-img)    
┃│〘📝〙➢ ${prefix}Listagp  
┃│〘🛡️〙➢ ${prefix}Antipalavrão (1/0)  
┃│〘🔕〙➢ ${prefix}Antiligar (1/0)    
┃│〘💬〙➢ ${prefix}Fazertm (Texto)  
┃│〘💬〙➢ ${prefix}Rgtm  
┃│〘❌〙➢ ${prefix}Tirardatm  
┃│〘📋〙➢ ${prefix}Listatm
┃│〘🚪〙➢ ${prefix}sairgp - *Bot sai do grupo*
┃│〘⭐〙➢ ${prefix}seradm - *Promove a administrador*
┃│〘👤〙➢ ${prefix}sermembro - *Rebaixa para membro*  
┃│〘💡〙➢ ${prefix}Infocmd_add (cmd/texto)  
┃│〘🗑️〙➢ ${prefix}Infocmd_del (cmd)  
┃│〘👀〙➢ ${prefix}Visualizarmsg  
┃│〘🔕〙➢ ${prefix}Botoff (Funcionalidade do bot)  
┃│〘🔔〙➢ ${prefix}Boton (Funcionalidade do bot)  
┃│〘✔️〙➢ ${prefix}Verificado-global (Selos)  
╰╦══════════════════ ⚙️  
╭┤🛠️ *Gerenciamento de Palavras e Comandos* 🛠️  
┃│〘📜〙➢ ${prefix}Listbcmdglobal  
┃│〘🚫〙➢ ${prefix}Blockcmdg (comando)  
┃│〘✅〙➢ ${prefix}Unblockcmdg (comando)  
╰╦══════════════════ ⚙️  
╭┤💵 *Financeiro e Rentabilidade* 💵  
┃│〘💳〙➢ ${prefix}Addpix (numero/valor)  
┃│〘💳〙➢ ${prefix}Setpix (numero/valor)  
┃│〘❌〙➢ ${prefix}Delpix (numero/valor)  
┃│〘💸〙➢ ${prefix}Zerarsc (numero)  
┃│〘🧾〙➢ ${prefix}Gerargf (code)  
┃│〘🧾〙➢ ${prefix}Delgf (code)            
╰╦══════════════════ ⚙️  
╭┤⚙️ *Administração de Usuários* ⚙️  
┃│〘🔒〙➢ ${prefix}Ausente (fale-oq-faz)  
┃│〘🛠️〙➢ ${prefix}Delpremium (@marcar/dias)  
┃│〘🛠️〙➢ ${prefix}Addpremium (@marcar/dias)  
┃│〘📸〙➢ ${prefix}Privphotobot (all/cntt/ngm)  
┃│〘📱〙➢ ${prefix}Privaddgroup (all/cntt/ngm)  
┃│〘💬〙➢ ${prefix}Descriçãogp (digite-algo)  
┃│〘🚫〙➢ ${prefix}Block [@]  
┃│〘✅〙➢ ${prefix}Unblock [@]  
┃│〘🚫〙➢ ${prefix}antipv
┃│〘🚫〙➢ ${prefix}antipv2
┃│〘🚫〙➢ ${prefix}antipv3
╰═══════════════════ 💎
`;

};

module.exports = { menudono };


