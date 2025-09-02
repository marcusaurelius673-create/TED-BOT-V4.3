// ./database/menus/pegafig.js
const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');

// Função utilitária para gerar nomes aleatórios de arquivos
function getRandom(ext = '') {
    return `./tmp_${Math.floor(Math.random() * 100000)}${ext}`;
}

async function buscaFigurinhas(tednexmart, from, info, body, command, NomeDoBot, NickDono) {
    try {
        const searchTerm = body.replace(command, '').trim();

        if (!searchTerm) {
            await tednexmart.sendMessage(from, {
                text: "⚠️ *Como usar:*\n• `buscafig naruto`\n• `pegafig one piece`\n\nSempre retorna 3 figurinhas."
            }, { quoted: info });
            return;
        }

        await tednexmart.sendMessage(from, {
            text: `🔍 Pesquisando figurinhas para: *${searchTerm}*...`
        }, { quoted: info });

        const tenorUrl = `https://g.tenor.com/v1/search?q=${encodeURIComponent(searchTerm)}&key=LIVDSRZULELA&limit=20&media_filter=minimal`;
        const tenorResponse = await axios.get(tenorUrl, { timeout: 10000 });
        let gifResults = tenorResponse.data.results;

        if (!gifResults || gifResults.length === 0) {
            await tednexmart.sendMessage(from, { text: `❌ Nenhuma figurinha encontrada para: ${searchTerm}` }, { quoted: info });
            return;
        }

        gifResults = gifResults.sort(() => Math.random() - 0.5);
        let enviados = 0;

        for (const result of gifResults.slice(0, 3)) {
            try {
                const gifUrl = result.media[0].mp4.url;
                const response = await axios.get(gifUrl, { responseType: 'arraybuffer', timeout: 15000 });

                const tempInput = getRandom('.mp4');
                const tempOutput = getRandom('.webp');
                fs.writeFileSync(tempInput, response.data);

                const legenda = `Figurinhas - ${searchTerm}`;
                const autor = `${NomeDoBot} | ${NickDono}`;

                await new Promise((resolveConv) => {
                    exec(`ffmpeg -i ${tempInput} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${tempOutput}`, (err) => {
                        fs.unlinkSync(tempInput);
                        if (err) {
                            console.log("Erro ffmpeg:", err);
                            return resolveConv();
                        }

                        const json = {
                            "sticker-pack-name": legenda,
                            "sticker-pack-publisher": autor
                        };
                        const exifAttr = Buffer.from([0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,0x00,0x00,0x16,0x00,0x00,0x00]);
                        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                        const exif = Buffer.concat([exifAttr, jsonBuff]);
                        exif.writeUIntLE(jsonBuff.length, 14, 4);
                        const nomemeta = `${Math.floor(Math.random() * 99999)}.temp.exif`;
                        fs.writeFileSync(`./${nomemeta}`, exif);

                        exec(`webpmux -set exif ${nomemeta} ${tempOutput} -o ${tempOutput}`, () => {
                            tednexmart.sendMessage(from, { sticker: fs.readFileSync(tempOutput) }, { quoted: info });
                            fs.unlinkSync(nomemeta);
                            fs.unlinkSync(tempOutput);
                            enviados++;
                            resolveConv();
                        });
                    });
                });

                await new Promise(r => setTimeout(r, 1500));
            } catch (e) {
                console.log("Erro ao converter sticker:", e.message);
            }
        }

        if (enviados > 0) {
            await tednexmart.sendMessage(from, {
                react: { text: "✅", key: info.key }
            });
        } else {
            await tednexmart.sendMessage(from, { text: `❌ Não consegui converter as figurinhas.` }, { quoted: info });
        }

    } catch (e) {
        console.log("Erro no comando buscafig:", e);
        await tednexmart.sendMessage(from, { text: "❌ Erro ao processar sua solicitação." }, { quoted: info });
    }
}

module.exports = { buscaFigurinhas };