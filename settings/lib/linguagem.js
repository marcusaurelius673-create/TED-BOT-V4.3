const alteradores = (prefix, sender) => {
  return `
╭═══════════════════ 🎬
╰╮🎬 *𝐌𝐄𝐍𝐔-𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒* 🎬
╭┤〘🎯〙➢ *Usuário:* @${sender.split("@")[0]}
┃╰══ 🎬
╰╦══════════════════ 🎧
╭┤🎧 *𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎* 🎧
┃│〘⏸️〙➢ ${prefix}Videolento - *Marca* - *Vídeo em câmera lenta*
┃│〘⏩〙➢ ${prefix}Videorapido - *Marca* - *Vídeo em câmera rápida*
┃│〘🔁〙➢ ${prefix}Videocontrario - *Marca* - *Vídeo ao contrário*
┃╰══ ⪨
╰╦══════════════════ 🎵
╭┤🎵 *𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎* 🎵
┃│〘🔊〙➢ ${prefix}Audiolento - *Marca* - *Áudio em velocidade lenta*
┃│〘🔉〙➢ ${prefix}Audiorapido - *Marca* - *Áudio em velocidade rápida*
┃│〘👻〙➢ ${prefix}Grave - *Marca* - *Áudio grave*
┃│〘👹〙➢ ${prefix}Grave2 - *Marca* - *Áudio super grave*
┃│〘🐿️〙➢ ${prefix}Esquilo - *Marca* - *Áudio agudo*
┃│〘💥〙➢ ${prefix}Estourar - *Marca* - *Áudio estourado*
┃│〘🎶〙➢ ${prefix}Bass - *Marca* - *Aumenta o bass*
┃│〘🎸〙➢ ${prefix}Bass2 - *Marca* - *Super bass*
┃│〘👦〙➢ ${prefix}Vozmenino - *Marca* - *Áudio de menino*
┃╰══ 🎶
╰═══════════════════ 🎧
`;
};

// Exportar no mesmo arquivo
module.exports = {
  alteradores,
  // outras funções de menu...
};