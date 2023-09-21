import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} link`
    await m.reply(`Ｌｏａｄｉｎｇ．．．`)
    let tes = await fetch(`https://inrl-web.onrender.com/api/insta?url=${args[0]}`);
            const json = await tes.json();
            const videoig = json.result;
            await conn.sendFile(m.chat, videoig, 'error.mp4', '❤️ done here', m);
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?|insta|instagram(dl)?)$/i

export default handler
