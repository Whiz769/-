let handler = async (m, { conn, command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]

String.fromCharCode(8206);
  let done = '🐤';
  m.react(done)
  
    if (user.chicken > 0) return m.reply('*لـــديـــك بــطــة🐥بـــالـــفـــعـــل*')
    if (user.credit < 5000) return m.reply(`*🏦 🐥لــيــس لــديــك كــمــيــة كــافــيــة مــن الــذهــب فــي مــحــفــظــتــك لــشــراء بــطــة*`)

    user.credit -= 5000
    user.chicken += 1
    m.reply(`*🎉 لــقــد اشــتــريــت بــنــجــاح بــطــة🐥للــقــتــال! اســتــخــدم الأمــر ${usedPrefix} مــصــارعــة <الــكــمــيــة>*`)
}

handler.help = ['buy-chicken','بطة','بطه','شراء-بطة','شراء-بطه','شراء-دجاجه','شراء-دجاجة']
handler.tags = ['economy']
handler.command = ['buy-chicken','بطة','بطه','شراء-بطة','شراء-بطه','شراء-دجاجه','شراء-دجاجة'] 

handler.group = true

export default handler