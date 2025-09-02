// lib/exif.js
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const { tmpdir } = require('os')
const { randomBytes } = require('crypto')

const tmp = tmpdir()

/**
 * Função auxiliar para criar nomes temporários
 */
function tmpFile(ext = '') {
  return path.join(tmp, randomBytes(6).toString('hex') + ext)
}

/**
 * Escreve EXIF em uma imagem buffer e retorna em formato WebP
 */
async function writeExifImg(imgBuffer, { packname = 'Pack', author = 'Bot' } = {}) {
  const webpTemp = tmpFile('.webp')
  const exifTemp = tmpFile('.exif')

  // Salva imagem temporária
  fs.writeFileSync(webpTemp, imgBuffer)

  // Cria metadados
  const json = {
    "sticker-pack-name": packname,
    "sticker-pack-publisher": author
  }
  const exifAttr = Buffer.from([0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,0x00,0x00,0x16,0x00,0x00,0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  fs.writeFileSync(exifTemp, exif)

  return new Promise((resolve, reject) => {
    const output = tmpFile('.webp')
    const cmd = spawn('webpmux', ['-set', 'exif', exifTemp, webpTemp, '-o', output])

    cmd.on('exit', () => {
      try {
        const finalBuffer = fs.readFileSync(output)
        // limpa arquivos temporários
        fs.unlinkSync(webpTemp)
        fs.unlinkSync(exifTemp)
        fs.unlinkSync(output)
        resolve(finalBuffer)
      } catch (e) {
        reject(e)
      }
    })

    cmd.on('error', reject)
  })
}

module.exports = { writeExifImg }