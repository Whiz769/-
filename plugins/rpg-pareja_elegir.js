import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let more = String.fromCharCode(8206);
  let done = '💍';
  m.react(done);
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let name = await conn.getName(m.sender)
    if (!text) {
        let ps = groupMetadata.participants.map(v => v.id)
        let a = ps.getRandom()
        let b
        do b = ps.getRandom()
        while (b === a)

        if (command == 'futurarelacion') {    
            let caption = `💗 علاقة مستقبلية 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 من خلال العناية بالعلاقة\n*_${await ktnmbk.getRandom()}_*`
            await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
        }
    }

    if (isNaN(text)) {
        var number = text.split`@`[1]
    } else if (!isNaN(text)) {
        var number = text
    }

    if (!text && !m.quoted) return await conn.reply(m.chat, `ماذا؟🤔 يرجى إرسال منشن المستخدم أو بعد الأمر`, m, fkontak)

    try {
        if (text) {
            var user = number + '@s.whatsapp.net'
        } else if (m.quoted.sender) {
            var user = conn.getName(m.quoted.sender)
        } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
        }  
    } catch (e) {
    } finally {
        let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}

        if (!users) return await conn.reply(m.chat, `لم يتم العثور على الشخص المطلوب 🙄 يرجى التحقق من صحة الاسم وإعادة المحاولة`, m, fkontak)

        if (user === m.sender) return await conn.reply(m.chat, `أمي؟😂  لا يمكنك أن تطلب تواعدي لنفسك`, m, fkontak)

        if (user === conn.user.jid) return await conn.reply(m.chat, `أنت لا تستطيع أن تطلب التواعد لأنك بوت 😹`, m, fkontak)

        if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `لم يتم العثور على المستخدم المطلوب في قاعدة البيانات`, m, fkontak)

        let pacar = global.db.data.users[user].pasangan
        let spac = global.db.data.users[m.sender].pasangan
        let yo = conn.getName(m.sender)
        let tu = conn.getName(who)

        if (global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user) {
            await conn.reply(m.chat, `لا شكوك في أنك تتسلل 😠💔 حيث أن *${await conn.getName(spac)}* مرتبط حاليًا ب *${await conn.getName(global.db.data.users[m.sender].pasangan)}*\n\nهل تفكر في إنهاء هذا العلاقة؟ 🤔\nإذا كانت إجابتك نعم، فاستخدم *${usedPrefix}طالق @tag* لإنهاء علاقتك مع *${await conn.getName(user)}*`, m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
        } else if (global.db.data.users[user].pasangan != "") {

            if (pacar) {
                if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `أنت بالفعل مع ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
                conn.reply(m.chat, `لا يمكنك أن تطلب *${await conn.getName(user)}* حيث أنه مرتبط حاليًا ب *${await conn.getName(pacar)}*`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
            } else {

                global.db.data.users[m.sender].pasangan = user
                conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nتم ارسال طلب إلى @${user.split('@')[0]}\n\n*إلى الأبد سنكون أفضل أزواج!*`, m , { contextInfo: { mentionedJid: [user]}})
            }	
        } else if (global.db.data.users[user].pasangan == m.sender) {
            global.db.data.users[m.sender].pasangan = user
            conn.reply(m.chat, `*الف مبروك* تمت الموافقة على طلب العلاقة بنجاح\n\n*سيكون يومًا سعيدًا ورائعًا إذاً!*`, m , { contextInfo: { mentionedJid: [user]}})
        } else {

            global.db.data.users[m.sender].pasangan = user
            await conn.reply(m.chat, `*${await ktnmbk.getRandom()}*\n\n*${await conn.getName(m.sender)}* قد اقترب منك! 😳\n\n*إذا كنت ترغب في الاستمرار، استخدم:*\n*➠ ${usedPrefix}قبول @${conn.getName(m.sender)}*\n\n*وإذا كنت لا ترغب في الاستمرار، استخدم:*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n`, m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
        }
    }
}

//handler.help = ['زواج']
//handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja|زوج|زواج)$/i
handler.group = true

export default handler

let ktnmbk = [
    "هناك لحظات لا أحب أن أكون وحدي. لكنني أيضًا لا أريد أن يرافقني الجميع، أريدك فقط أنت",
    "أدركت للتو أنك كنز طوال هذا الوقت! مثل ما كنت أبحث عنه طوال الوقت. هل تريدين أن تكوني حبيبتي؟",
    "أشكر عيني لأن هذه العيون قادتني لأجلك",
    "هل يمكنني إرسال سيرتي الذاتية أم لا؟ لأنني أرغب في التقدم ليكون حبيبتك",
    "لست الأعظم، لكنني متأكد أنني يمكنني جعلك سعيدة بالحب والاهتمام، هل توافقين؟",
    "أنا فقط شخص عادي لديه الكثير من العيوب وقد لا أستحق حبك، لكن إذا كنت على استعداد لقبولي كحبيب، أعدك بأن أفعل كل شيء لأجلك. هل ستقبلين حبي؟",
    "أريد قول شيء. أعجبت بك لفترة طويلة، لكنني لا أجرؤ على القول. لذلك، قررت فقط إرسال رسالة. هل تريد أن تكوني حبيبتي؟",
    "أريد قول شيء لم أتمكن من كبته. أحبك، هل توافقين على أن تكوني حبيبتي؟",
    "أريد أن أكون شخص يمكنه جعلك تضحكين وتبتسمين كل يوم. هل توافقين على أن تكوني حبيبتي؟",
    "أريد أن أكون الشخص الذي يمكن أن يجعلك تبتسمين وتضحكين دائمًا. هل توافقين على أن تكوني حبيبتي؟",
    "أريد أن أتحدث بجدية معك. منذ وقت طويل أخفي مشاعري لك وكنت دائمًا أفكر فيك. إذا لم يكن لديك مانع، هل توافقين على أن تكوني حبيبتي؟",
    "أنا أنظر إليك وأرى بقية حياتي أمام عيني",
    "ليس العرش أو الكنز هو ما أبحث عنه، بل العودة لحبي هي ما أتمناه منك. الإجابة نعم",
    "الحب الذي أشعر به نحوك لا يُشكك فيه لأن هذا الحب صادق من القلب",
    "الحب الذي أشعر به نحوك هو الرقم من 5 إلى 10. لا يوجد ثانية. أريدك أن تكوني المرأة الوحيدة في قلبي",
    "أي رجل يتجرأ على إيذائك. هنا سأعتني بك، طالما تريدين أن تكوني حبيبتي",
    "أي شيء عنك، لم أشعر بالملل منه أبدًا. لأن أنت في جانبك، هديتي الأجمل لي. كن حبيبتي، هيا بنا",
    "مع إذن الله وبركة أمي وأبي، هل توافقين أن تكوني حبيبتي أم لا؟",
    "وإذا أصبحنا عصابة لصوص؟ سرقت قلبك وأنت سرقت قلبي",
    "السعادة هي أنك وأنا أصبحنا نحن",
    "غدًا، إذا لم ينجح، فسأقوم بالتسجيل لتكوني حبيبتي. امنحيني وظيفة لأفكر دائمًا فيك",
    "دعني أجعلك سعيدة إلى الأبد. كل ما عليك فعله هو أن تحبيني",
    "ليكن كل فرحي فرحك، ولتكن كل حزنك حزني. ليكن العالم كله لك، فقط أنت لي!",
    "ليكن ماضيك ماضي، لكن بالنسبة للحاضر، هل ستكونين مستقبلي؟",
    "هل يمكنك أن تعطيني عنوان قلبك؟ يبدو أنني تاهت في عينيك",
    "أنت بجانبي دائمًا حتى عندما أكون في أسوأ حالاتي",
    "لا أستطيع أن أبدأ هذا أولاً، لكنني سأعطيك رمزًا يدل على أنك تعجبين بي. إذا فهمت هذا الرمز، فسنكون معًا",
    "أنا أحمق جدًا أم أنت أنانية جدًا لتجعلني أحبك؟",
    "أعلم أننا أصدقاء منذ فترة طويلة. لكن هل يمكن أن تحبيني؟ مهما كان ردك، سأقبل. المهم هو الصدق من أعماق قلبي",
    "لا أستطيع أن أبدأ هذا أولاً، لكنني سأعطيك رمزًا يدل على أنك تعجبين بي. إذا فهمت هذا الرمز، فسنكون معًا",
    "أي رجل يتجرأ على إيذائك. هنا سأعتني بك، طالما تريدين أن تكوني حبيبتي",
    "أنت بجانبي دائمًا حتى عندما أكون في أسوأ حالاتي",
    "ليست الأماكن التي نذهب إليها هي التي تجعلنا سعداء، بل الأشخاص الذين يكونون معنا",
    "لقد أعجبت بك منذ أن قلبت ظهرك لي. هل يمكنك أن تكوني حبيبتي؟",
    "هل يمكنني أن أجعلك تضحكين كل يوم؟ أتمنى ذلك",
    "كل ما أريده هو أن تكوني سعيدة وراضية",
    "هل يمكنني أن أقول شيئًا؟ أنا محظوظ جدًا لأنك معي"
]

Math.getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
Array.prototype.getRandom = function () {
    return this[Math.getRandom(0, this.length)];
}
