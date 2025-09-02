const playlist2 = (prefix, NomeDoBot, NickDono, pushname, date, hora, sender) => {
    return `
╭━━ ⪩🔥 *𝐈𝐍𝐅𝐎𝐑𝐌𝐀ÇÕ𝐄𝐒* 🔥⪨ ━━╮  
┃ 🛠️ Bot: ${NomeDoBot}  
┃ 🏷️ Versão: 𝐕4.3  
┃ 📅 Data: ${date}  
┃ ⏰ Hora: ${hora}  
┃ 👤 Usuário: @${sender.split("@")[0]}  
┃ 👑 Dono: ${NickDono}  
┃ 📚 Biblioteca: Kitagawa MD  
┃ ⚡ Prefixo: ${prefix}  
┃ 🎵 Músicas disponíveis: (49)  
╰━━━━━━━━━━━━━━━━━━━━╯  

🎶 *Lista de Músicas:*  
┣ 🎧 ${prefix}L7   
┣ 🎶 ${prefix}Funk   
┣ 🎤 ${prefix}Sofrência   
┣ 🎼 ${prefix}Orochi   
╰━━━━━━━━━━━━━━━━━━━━╯`;
};

module.exports = { playlist2 };