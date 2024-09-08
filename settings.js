const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "BOT BUG"
global.ownerName = "Unknown"
global.botNumber = "6283879361228"
global.devNumber = ["6281333154367"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "15" // Jangan Diganti
global.domain = "https://example.com" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "Fahzar" // Ganti Nama Store Atau nama Host Lu

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})