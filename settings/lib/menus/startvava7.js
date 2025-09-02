const startvava = (prefix, NomeDoBot, NickDono, pushname, date, hora, sender) => {
    return `
╭━━ ⪩🔥 *𝐈𝐍𝐅𝐎𝐑𝐌AÇÕ𝐄𝐒* 🔥⪨ ━━╮
┃ 🏪 Loja: *𝙇𝙤𝙟𝙖𝙨 𝙙𝙚 𝙠𝙚𝙮𝙨* 
┃
┃ 👤 Usuário: @${sender.split("@")[0]}    
┃ 📅 Data: ${date}  
┃ ⏰ Hora: ${hora}  
┃    
╰━━━━━━━━━━━━━━━━━━━━╯  

🛒 *Comandos da Loja:*
┣ 💠 ${prefix}recarregar
┣ 📝 ${prefix}relatoriokey  
┣ 🛍️ ${prefix}comprar  
┣ 🔑 ${prefix}checkkey  
┣ 💰 ${prefix}saldoo  
┣ 📜 ${prefix}historico 
┣ 🧾 ${prefix}valores 
╰━━━━━━━━━━━━━━━━━━━━╯`;
};

module.exports = { startvava };