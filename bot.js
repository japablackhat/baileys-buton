


const {
default: makeWASocket,
jidDecode,
DisconnectReason,
PHONENUMBER_MCC,
makeCacheableSignalKeyStore,
useMultiFileAuthState,
fetchLatestBaileysVersion,
makeInMemoryStore
} = require("@whiskeysockets/baileys");
const NodeCache = require("node-cache");
const _ = require('lodash')
const {
Boom
} = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const {
smsg
} = require('./lib/myfunc')
let phoneNumber = "5512997675520";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const readline = require("readline");
const pino = require('pino')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
let store = makeInMemoryStore({logger: pino().child({level: 'silent',stream: 'store'})});
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

async function startpairing(numero) {
const BrowserList = ['ChRoMe', 'SaFira', 'oPeRa'];
const typeBrow = BrowserList[Math.floor(Math.random() * BrowserList.length)];

const {
state,
saveCreds
} = await useMultiFileAuthState('./lib/pairing/' + numero);
const {
version
} = await fetchLatestBaileysVersion();
msgRetryCounterCache = new NodeCache();

const WaConnection = makeWASocket({
logger: pino({
level: 'silent'
}),
printQRInTerminal: !pairingCode,
mobile: useMobile,
browser: [`${typeBrow} (Linux)`, '', ''],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({
level: "fatal"
}).child({
level: "fatal"
}))
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

WaConnection.ev.on('messages.upsert', async chatUpdate => {
mek = chatUpdate.messages[0];
});

store.bind(WaConnection.ev);

if (pairingCode && !state.creds.registered) {
if (useMobile) {
throw new Error('Cannot use pairing code with mobile API');
}

let phoneNumber = numero.replace(/[^0-9]/g, '');
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
process.exit(0);
}

setTimeout(async () => {
let code = await WaConnection.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;

fs.writeFile(
  './lib/pairing/pairing.json',  // Caminho do arquivo onde será salvo
  JSON.stringify({"code": code}, null, 2),  // Transforma o objeto em uma string JSON formatada
  'utf8',
  (err) => {
      if (err) {
      } else {
      }
  }
);


}, 1703);

}
WaConnection.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return decode.user && decode.server && `${decode.user}@${decode.server}` || jid;
} else {
return jid;
}
};
WaConnection.ev.on('messages.upsert', async chatUpdate => {
try {
const bruxojid = chatUpdate.messages[0];
if (!bruxojid.message) return;
bruxojid.message = (Object.keys(bruxojid.message)[0] === 'ephemeralMessage') ? bruxojid.message.ephemeralMessage.message : bruxojid.message;
if (bruxojid.key && bruxojid.key.remoteJid === 'status@broadcast') return;
if (!WaConnection.public && !bruxojid.key.fromMe && chatUpdate.type === 'notify') return;
if (bruxojid.key.id.startsWith('BAE5') && bruxojid.key.id.length === 16) return;
if (bruxojid.key.id.startsWith('FatihArridho_')) return;
bruxo = WaConnection
mek = smsg(bruxo, bruxojid, store);
require("./bruxin")(bruxo, mek, chatUpdate, store);
} catch (err) {
console.log(err);
}
});

WaConnection.ev.on("connection.update", async (update) => {
const {
connection,
lastDisconnect
} = update;
if (connection === "close") {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
console.log(reason)
if (reason === DisconnectReason.badSession) {
console.log(`Arquivo de Sessão Inválido, Por Favor Exclua a Sessão e Escaneie Novamente`);
process.exit();
} else if (reason === DisconnectReason.connectionClosed) {
console.log("Conexão fechada, reconectando....");
process.exit();
} else if (reason === DisconnectReason.connectionLost) {
console.log("Conexão Perdida do Servidor, reconectando...");
process.exit();
} else if (reason === DisconnectReason.connectionReplaced) {
deleteFolderRecursive('./lib/pairing/' + numero);
} else if (reason === DisconnectReason.loggedOut) {
deleteFolderRecursive('./lib/pairing/' + numero);
} else if (reason === DisconnectReason.restartRequired) {
process.exit();
} else if (reason === DisconnectReason.timedOut) {
deleteFolderRecursive('./lib/pairing/' + numero);
} else if (reason === '405') {
console.log('erro 405 detectado subindo novo pairing')
await startpairing(numero)
} else {
console.log(`DisconnectReason Desconhecida: ${reason}|${connection}`);
deleteFolderRecursive('./lib/pairing/' + numero);
console.log('.')
}
} else if (connection === "open") {
}
});
WaConnection.ev.on('creds.update', saveCreds);
}

module.exports = startpairing

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Atualizado= '${__filename}'`))
delete require.cache[file]
require(file)
})