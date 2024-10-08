import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ما الصورة التي تريدني أن أبحث عنها؟\n\n📌 مثال  : ${usedPrefix + command} ريمورو تيمبست`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  بينتريست:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بينتريست','بينترست','بنترست','pinterest', 'بينترست'] 

export default handler