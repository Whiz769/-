import db from '../lib/database.js'

// قم بتعريف خريطة لتخزين الطوابير الزمنية عندما يقوم المستخدمون بتعيين حالة AFK
const afkCooldowns = new Map();

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender];

    // تحقق مما إذا كان المستخدم قد قام بتعيين حالة AFK داخل فترة الانتظار
    if (afkCooldowns.has(m.sender)) {
        let cooldownEnd = afkCooldowns.get(m.sender) + 1 * 60 * 1000; // 1 دقائق فترة انتظار
        let remainingTime = cooldownEnd - Date.now();
        if (remainingTime > 0) {
            m.reply(`*لا يـمـكـنـك تـعـيـيـن حـالـة اخـتـفـاء مـرة أخـرى حـتـى بـعـد ${Math.ceil(remainingTime / 1000 / 60)} دقـيـقـة.*`);
            return;
        }
    }

    String.fromCharCode(8206);
    let done = '💤';
    m.react(done)
    user.afk = +new Date();
    user.afkReason = text;

    // قم بتخزين الطابور الزمني الحالي كوقت آخر تعيين AFK للمستخدم
    afkCooldowns.set(m.sender, Date.now());

    m.reply(`
> *˼😴˹ اخــــــتــــــفــــــاء╿↶*
*╮──────────────────⟢ـ*
*┇‣ أنت الآن متوقف حتى ترسل رسالة*  
*┇👤‣ مــســتــخــدم╿↶*
*┇${conn.getName(m.sender)}*
*╯──────────────────⟢ـ*
> *˼❓˹ ‣ الــســبــب╿↶*\n> ˼❓˹ ‣ ${text ? text : '*بــلا ســبــب أو لــم يذكــر ســبــب*'}`)
}
handler.help = ['afk <السبب>']
handler.tags = ['fun']
handler.command = ['اختفاء','مأفك','تأفيك','afk']
handler.group = true

export default handler
