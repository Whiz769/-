import { createHash } from 'crypto';
let handler = async (m, { conn }) => {
 let a = './views/img/Diablo1.jpg';
 let more = String.fromCharCode(8206);
  let done = '👥';
      m.react(done);
 let teks = `
 ${pickRandom([`
> *┆〘﹝𝐓𝐞𝐦𝐩𝐞𝐬𝐭⊰🌀⊱؏فُـࢪو﹞〙*
*╮──────────────────⟢ـ*
> *┆╻↵ ﹝قــروب الــدعــم﹞╹*
> ~*https://chat.whatsapp.com/F5S2DKWqOiq0o6SQ8SvZg2*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الأســتــقــبــال﹞╹*
> ~*https://chat.whatsapp.com/Kc6YkAiEhI97sheTMD2uke*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الــطــلــبــات﹞╹*
> ~*https://chat.whatsapp.com/Et852tp0YCFDuqZve04var*~
> *┆╻رابــط  مــوثــوق ⇧✅⇧╹*
──────────────────
> *┆╻↵ ﹝قــروب الاخــبــار﹞╹*
> ~*قـــريـــبـــاً*~
*╯──────────────────⟢ـ*
> *.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*`])}
`.trim()
  conn.sendFile(m.chat, a, null, teks, m)}
  
  handler.command = ['فروع', 'فرع', 'groups', 'groupguru', 'gugp', 'ggp', 'gpguru'];

export default handler
  
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}