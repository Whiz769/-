let pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

let handler = async (m, { conn, usedPrefix }) => {
  let a = './views/img/Bank.jpg';
  let done = '💳';
  m.react(done);

  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let user = global.db.data.users[who];
  let username = conn.getName(who);

  if (user.atm == 0) return m.reply('*╮──────────────────⟢ـ*\n*┇‣ ❏ لأستخـدام البنك تحـتاج إلى بطاقة*\n*┇‣ ❏〘  ˼💳˹  〙*\n*╯──────────────────⟢ـ*\n*﹝📜نــصــائــح📜﹞*\n*▢ ~اكــتــب~ " .صــنــاعــة "*\n *⏎* *عـــشــان تــعــرف كــيــف تــصــنــع الــبــطــاقــة*\n*└──────────────⊷*');

  if (!(who in global.db.data.users)) throw `✳️ لـم يـتـم العـثـور عـلـى الـمـسـتـخـدم فـي قـاعـدة الـبـيـانـات الـخـاصـة بـي`;

  let wealth = 'مــفــلــس😭';
  if (user.bank <= 3000) {
      wealth = 'مــفــلــس😭';
  } else if (user.bank <= 6000) {
      wealth = 'فــقــيــر😢';
  } else if (user.bank <= 100000) {
      wealth = 'عــادي💸';
  } else if (user.bank <= 1000000) {
      wealth = 'ثــري💸💰';
  } else if (user.bank <= 10000000) {
      wealth = 'مــلــيــونــيــر🤑';
  } else if (user.bank <= 1000000000) {
      wealth = 'مــطــنــووخ🤑';
  } else if (user.bank <= 10000000000) {
      wealth = 'الــمــليــارديــر🤑🤑';
  }

  let teks = ` 
 ${pickRandom([`> *˼🏦˹ الـــبـــــنـــــك╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🔖‣ ${username}*
*┇▢〉🪙‣ ذهـــب: _${user.bank}_*
*┇▢〉💰‣ ثـــروة: _${wealth}_*
*╯──────────────────⟢ـ*
> *˼📜˹ نــــصــــائــــح╿↶*
> *~اكــتــب~ " .مـحـفـظـة "*
> *⏎* *عـشـان تـشـوف كـم مـعـك ذهـب*
> *~اكــتــب~ " .ايــداع "* 
> *⏎* *لإداع الـذهـب الــى الـبنـك*
> *~اكــتــب~ " .ســحــب "* 
> *⏎* *لـسـحـب الـذهـب مـن الـبـنـك*`])}`.trim();

  conn.sendFile(m.chat, a, null, teks, m, null, { mentions: [who] });
}

handler.help = ['bank', 'البنك'];
handler.tags = ['اقتصاد'];
handler.command = ['بنك', 'البنك', 'bank', 'vault'];

export default handler;
