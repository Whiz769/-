let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a = './views/img/Diablo1.jpg'
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let more = String.fromCharCode(8206);
let done = '🎖';
      m.react(done);
 let teks = ` 
 ${pickRandom([`*╮──────────────────⟢ـ*
*⧉┆↜أنـا اسـمـــي ❮ ˹دیــابـلــو˼ ❯*
*⧉┆↜انــا خــادم الـسـیــد ريــمـورو*
*⧉┆↜ قـبــل کــل امــر ضــع ❮ . ❯*
*⧉┆↵ اهـــلا بــك/ي╿↶*\n*⧉┆↵@${who.replace(/@.+/, '')}*
*╯──────────────────⟢ـ*
> *˼🎖˹ قــســم اوامـر الـمـكـافــئـات╿↶*
*╮──────────────────⟢ـ*
*✦╎🥉↜〘 ˼.يــومــي˹ 〙*
*✦╎🥈↜〘 ˼.اســبــوعــي˹ 〙*
*✦╎🥇↜〘 ˼.شــهــري˹ 〙*
╯──────────────────⟢ـ
> *↵ قـائـمـة المملكة ⬳ ⌝👥⌞╿↶*
> *╻↜〘 ˼.فــــروع˹ 〙╹*
> *˼⚠️˹ مــلاحـــظـــة╿↶*
*╮──────────────────⟢ـ*
*┆╻⓵يـمـنـع مـنـعـاً بـتـاً سـب الـبـوت╹*
*┆╻⓶اسـتـخـدام مـتـوازن لـلـبـوت╹*
*┆╻⓷ [.مـطـور] لأدخـال الـبـوت!╹*
*╯──────────────────⟢ـ*
> *˼📜˹ الــدعــم╿↶*
_~*https://chat.whatsapp.com/F5S2DKWqOiq0o6SQ8SvZg2*~_
> *رابــــط مــــوثـــوق ⇧✅⇧*
> *.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*
`])} 
 `.trim() 
 conn.sendFile(m.chat, a, null, teks, m, null, { mentions: [who] })}

handler.command = ['م4']

 export default handler 

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
   }