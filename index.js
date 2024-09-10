require('./config')
const {default: makeWASocket, downloadContentFromMessage,jidDecode,DisconnectReason,PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore } = require("@whiskeysockets/baileys");
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const NodeCache = require("node-cache");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/sticker.js');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const moment = require('moment-timezone')
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const os = require('os')
const cfonts = require('cfonts');
const colors = require('colors')
const browser = global.browser
const travaSend = global.travaSend

const readline = require("readline");
let phoneNumber = "5512997675520";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
question = (cpxex) => new Promise((promisses) => rl.question(cpxex, promisses))
let store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
let msgRetryCounterCache;

function deleteFolderRecursive(folderPath) {
if (fs.existsSync(folderPath)) {
fs.readdirSync(folderPath).forEach(file => {
const curPath = path.join(folderPath, file);
fs.lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : fs.unlinkSync(curPath);
});
fs.rmdirSync(folderPath);
}
}

const corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const banner = cfonts.render(('CANAL: HTTPS://YOUTUBE.COM/@SRBRUXOMP5'), {font: 'console',align: 'center',gradrient: [`${cor4}`,`${cor2}`], colors: [`${cor3}`,`${cor1}`,`${cor5}`],lineHeight: 1});
 
const banner2 = cfonts.render((`BX`), {font: 'slick', align: 'center', colors: [`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],background: 'transparent',letterSpacing: 1, lineHeight: 1,space: true, maxLength: '0',gradrient: [`${cor4}`,`${cor2}`], independentGradient: false,transitionGradient: false, env: 'node'});

async function startbruxo() {
store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) });
const { version } = await fetchLatestBaileysVersion();
msgRetryCounterCache = new NodeCache();
const { state, saveCreds } = await useMultiFileAuthState('./lib/qrcode')
const bruxo = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: !pairingCode,
    mobile: useMobile,
    browser: ['Chrome (Linux)', '', ''],
    auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" }))
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
        let jid = jidDecode(key.remoteJid);
        let msg = await store.loadMessage(jid, key.id);
        return msg?.message || "";
    },
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined,
});


const conn = bruxo

conn.ev.on('messages.upsert', async chatUpdate => {
mek = chatUpdate.messages[0];
});

store.bind(conn.ev);

if (pairingCode && !state.creds.registered) {
    if (useMobile) {
        throw new Error('Cannot use pairing code with mobile API');
    }
    younumber = await question(colors.white(colors.blue('\n\nDIGITE O NÚMERO QUE VOCÊ QUE ATIVAR O BOT\nEXEMPLO: +55 12 99767-5520\nDIGITE O NÚMERO AQUI : ')))
    younumber = younumber.replace(/[^\d]/g, '');
    let phoneNumber = younumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
        process.exit(0);
    }

    setTimeout(async () => {
        let code = await conn.requestPairingCode(phoneNumber);
        code = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log(`Seu Código - ${code}`);
    }, 1703);
}

store.bind(conn.ev)
conn.ev.on('creds.update', saveCreds)

conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}


conn.ev.on('messages.upsert', async chatUpdate => {
try {
bruxojid = chatUpdate.messages[0]
if (!bruxojid.message) return
bruxojid.message = (Object.keys(bruxojid.message)[0] === 'ephemeralMessage') ? bruxojid.message.ephemeralMessage.message : bruxojid.message
if (bruxojid.key && bruxojid.key.remoteJid === 'status@broadcast') return
if (!conn.public && !bruxojid.key.fromMe && chatUpdate.type === 'notify') return
if (bruxojid.key.id.startsWith('BAE5') && bruxojid.key.id.length === 16) return
if (bruxojid.key.id.startsWith('FatihArridho_')) return
mek = smsg(bruxo, bruxojid, store)
require("./bruxin.js")(bruxo, mek, chatUpdate, store)
} catch (err) {
console.log(err)}})

conn.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession) {
deleteFolderRecursive('./lib/qrcode/');
process.exit();
} else if (reason === DisconnectReason.connectionClosed) {
console.log("Conexão fechada, reconectando....");
process.exit();
} else if (reason === DisconnectReason.connectionLost) {
console.log("Conexão Perdida do Servidor, reconectando...");
process.exit();
} else if (reason === DisconnectReason.connectionReplaced) {
deleteFolderRecursive('./lib/qrcode/');
process.exit();
} else if (reason === DisconnectReason.loggedOut) {
deleteFolderRecursive('./lib/qrcode/');
process.exit();
} else if (reason === DisconnectReason.restartRequired) {
console.log("Reinicialização Necessária, Reiniciando...");
process.exit();
} else if (reason === DisconnectReason.timedOut) {
console.log("Conexão Expirada, Reconectando...");
process.exit();
} else {
console.log(`DisconnectReason Desconhecida: ${reason}|${connection}`);
deleteFolderRecursive('./lib/qrcode/');
process.exit();
}
} else if (connection === "open") {

console.log(banner.string)
console.log(banner2.string)

const speed = require('performance-now')
let timestamp = speed()
let latensi = speed() - timestamp
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤBOT CONECTADO COM SUCESSO`));
await sleep(200)
console.log(chalk.white('ㅤㅤㅤ[ > ]ㅤSTATUS: ') + chalk.green('Online'));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤDATA:ㅤ${data}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤHORA:ㅤ${hora}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤTOTAL d TRAVA:ㅤ${travaSend}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤBROWSER:ㅤ${browser}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤVELOCIDADE:ㅤ${latensi.toFixed(4)}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤPLATAFORMA:ㅤ${os.platform}`));
await sleep(200)
console.log(chalk.white(`ㅤㅤㅤ[ > ]ㅤHOST NAME:ㅤ${os.hostname}`));
await sleep(200)
console.log('\n========================== L O G s ==========================')
await sleep(200)
fs.readdir('./lib/pairing/', { withFileTypes: true }, async (err, dirents) => {
try{
for (let i = 0; i < dirents.length; i++) {
const dirent = dirents[i];
if (dirent.isDirectory()) {
console.log(dirent.name);
const startpairing = require('./bot.js');
await startpairing(dirent.name);
await sleep(200)
}
}
} catch(e){}
});




}
}); 

conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
conn.getName = (jid, withoutContact= false) => {
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === conn.decodeJid(conn.user.id) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await conn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:denyp857@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://https://www.instagram.com/hikal_857/?hl=id\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
conn.sendMessage(jid, { contacts: { displayName: `${list.length}`, contacts: list }, ...opts }, { quoted })}
conn.public = true
conn.serializeM = (mek) => smsg(bruxo, mek, store)

conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
return conn.sendMessage(jid, { poll: { name, values, selectableCount } });
};

async function appenTextMessage(text, m, conn){
let messages = await generateWAMessage(m[0].key.remoteJid, { text: text, mentions: [] }, {
userJid: m[0].key.participant,
quoted: m.quotedMessage, 
});
messages.key.fromMe = true;
messages.key.id = generateMessageID();
messages.pushName = conn.user.name;
let msg = { 
...m,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append' 
};

conn.ev.emit('messages.upsert', msg);
};

conn.ev.on('messages.update', async m => {for (const { key, update } of m) {if (update.pollUpdates && key.fromMe) {const pollCreation = await getMessage(key, store);if (pollCreation) {const pollUpdate = await getAggregateVotesInPollMessage({message: pollCreation,pollUpdates: update.pollUpdates,});const toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name;if (toCmd == undefined) return;appenTextMessage(prefix + isCmd, m, conn);}}}});

conn.ev.on('group-participants.update', async (num) => {
console.log(num);
participanteId = num.participants[0];
participantesProcessados = new Set();
if (participantesProcessados.has(participanteId)) {
return;
}
participantesProcessados.add(participanteId);
if (num.action === 'add') {
console.log(`${participanteId}`);
} else if (num.action === 'remove') {
console.log(`${participanteId}`);
}
});

}

startbruxo()