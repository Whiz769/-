let handler = m => m 
handler.all = async function (m) { 
let chat = global.db.data.chats[m.chat] 

if (/^مين عمك|مين عمك؟|من عمك/i.test(m.text) ) {
     conn.reply(m.chat, `*ريــمــورو ســـامـــا💜✨*\n*𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ*\n*wa.me/966540235070*`, m)
}

if (/^مين سيدتك|مين سيدتك|مين عمتك؟|مين عمتك|سيدتك من/i.test(m.text) ) {
     conn.reply(m.chat, `*مــيــلــيــم ســـامـــا💜✨*\n\n`, m)
}
return !0 } 

export default handler