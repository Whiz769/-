const xpperbank = 1
let handler = async (m, { conn, command, args }) => {
    let count = command.replace(/^(dep|deposit|إيداع|ايداع)$/i, '')
    count = count ? /depall/i.test(count) ? Math.floor(global.db.data.users[m.sender].credit / xpperbank) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
    count = Math.max(1, count)
    if (global.db.data.users[m.sender].credit >= xpperbank * count) {
      global.db.data.users[m.sender].credit -= xpperbank * count
      global.db.data.users[m.sender].bank += count
      conn.reply(m.chat, `لقد انتقلت 🪙 ${count} الذهب إلى البنك الذي تتعامل معه`, m)
    } else conn.reply(m.chat, `🏦 *ليس لديك كمية كافية من الذهب في محفظتك لإجراء هذه المعاملة*`, m)
  }
  handler.help = ['deposit','ايداع','إيداع','']
  handler.tags = ['economy']
  handler.command = ['إيداع','ايداع','deposit', 'dep', 'depall'] 
  handler.group = true
  handler.disabled = false
  
  export default handler
  