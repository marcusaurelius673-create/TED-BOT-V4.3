const axios = require("axios");
const FormData = require("form-data");

async function upscaleImage({ from, info, reply, reagir, tednexmart, context, getFileBuffer }) {
  reagir(from, "🔍");
  try {
    const { isQuotedSticker, isQuotedImage, isImage, sasah } = context;
    let media, type, mimetype;

    if (isQuotedSticker || (info.message.stickerMessage && info.message.stickerMessage.mimetype === "image/webp")) {
      media = isQuotedSticker
        ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
        : info.message.stickerMessage;
      mimetype = "image/webp";
      type = "sticker";
    } else if (isQuotedImage || isImage) {
      media = isQuotedImage
        ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
        : info.message.imageMessage;
      mimetype = media.mimetype;
      type = "image";
    } else {
      return reply("❌ Marque uma *imagem* para ampliar com este comando.");
    }

    const fileBuffer = await getFileBuffer(media, type);
    const serverurl = "https://image-upscaling.net";
    // Gerar um client_id aleatório para evitar colisões
    const client_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const uploadUrl = `${serverurl}/upscaling_upload`;
    const formData = new FormData();
    formData.append("image", fileBuffer, { filename: `image.${mimetype.split("/")[1]}` });
    formData.append("scale", 4); // Upscale em 4x
    formData.append("fx", ""); // Não usar face enhance por padrão

    const uploadResponse = await axios.post(uploadUrl, formData, {
      headers: {
        ...formData.getHeaders(),
        "Cookie": `client_id=${client_id}`,
      },
    });

    if (uploadResponse.data !== "image uploaded") {
      return reply("❌ Falha ao fazer upload da imagem para o serviço de upscale.");
    }

    let processedImageUrl = null;
    let attempts = 0;
    const maxAttempts = 20; // Tentar por até 20 segundos (1 segundo por tentativa)

    while (!processedImageUrl && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
      const statusUrl = `${serverurl}/upscaling_get_status`;
      const statusResponse = await axios.get(statusUrl, {
        headers: {
          "Cookie": `client_id=${client_id}`,
        },
      });

      if (statusResponse.data && statusResponse.data.processed && statusResponse.data.processed.length > 0) {
        processedImageUrl = statusResponse.data.processed[0];
      }
      attempts++;
    }

    if (!processedImageUrl) {
      return reply("❌ A imagem não foi processada a tempo. Tente novamente mais tarde.");
    }

    await tednexmart.sendMessage(from, {
      image: { url: processedImageUrl },
      caption: "✅ Imagem ampliada com sucesso!",
    }, { quoted: sasah });

  } catch (e) {
    console.error("❌ ERRO upscale:", e);
    reply("❌ Ocorreu um erro ao processar a imagem.");
  }
}

module.exports = { upscaleImage };


