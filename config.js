const fs = require('fs')
const chalk = require('chalk')

global.prefixo = ['.']
global.tipoX = 'Safira'// se quiser mudar pode colocar Chrome ou Qualquer Outro
global.browser = 'OhMyBruxo-15.0'

global.travaSend = '1'




// documentos aleatório
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//=================================================//


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`'${__filename} Foii editado!!'`))
	delete require.cache[file]
	require(file)
})