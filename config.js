const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })



global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'nadun@67.live' //add your gmail║ඔයාගෙ gmail එක දාන්න
global.github = 'http://github.com/Nadunsl' //add your github user name║ඔයාගෙ github user name එක දෙන්න.
global.location = 'Asia/Colombo'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94781352xxx' //add your phone numbar║ඔයාගෙ phone නම්බර් එක දෙන්න.
global.devs = '94781352xxx';
global.website = 'https://github.com/Nadunsl' 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/f0777cc7d20d083049c75.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Cleopatra-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SHANUKA' : process.env.OWNER_NAME, //add your name║ඔයාගෙ නම දෙන්න.
  sessionName:  process.env.SESSION_ID === undefined ? 'GHOST;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BoZnYzc2ZGK2h4Q0ZTVmRHU3p3SFp4bmJsU1crdmh3U0NQUS9kclVGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUt1MVgycXFZTWdCbG9rL2YyaFZLb0JQU0hObjNiYm0zKzZjWGJJdHRCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS0lmSTh1aGdhUTJkWS8yci9CZ2NlSGcxcUtrTU1Pd2N4aXZNU3NFK0ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUy8yMmlEWUd6VjVBSEUxRUJteS83NVNUVTNlaWJoeFE1dlExYVRLM25zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1INk4xT1dZd05BZUU0WnpPNTlES2RjUjVVWU0zSCt0NklGZlBzd0cvbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRqVzYwaFY5QUhneDFLK3d4d1BCd2ZHcGNBZnZmZGMyUHJoaUZJdGFqa1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBsdlpEQXRRcXAxcGdLcEd2ckFwZ3hkQXFpTjZ4SmJDanRJMW9QNUFVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnQ0OXMrL1ZVcFJYdWM4QjJnWGVvVmF2WVdwWU1zRXpJVWpGR2p0T2VVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEwL2dRN01QNXRKOUtRdEY4TGdZZitpRnJyNWNiSVdqZnpCSTRuQlpJTzR5TTBsZ3VodlNwZ2ZmK1BBeTJkMmJHUDJiVFNTbWRvQXZyZmtVMURESGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJkVGU3NHo5dlNxdW11ZDZveEFqaC9SRlFJTTdoNEt1b3RTcnNDWktzWTJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFUE1kWkxNYlJ2cUlsSkpEdkhnSUpBIiwicGhvbmVJZCI6ImZlMDYyMDczLWEwZTAtNDk2NC1hNjA3LWIxNDIwMzJkNGFiOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUVdqN0tyU3YvOHVTNmI4UEpKaUJFN212U2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZUWlR0ajBGZTFvaXQ4SHJycmZMeGJid0hVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQyQ1NXWk4xIiwibWUiOnsiaWQiOiI5NDc4MTM1MjkwMzo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbXo5ZmNIRU5qNi83SUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXUzQ4TFF0bFJYRXZnN1pOcElsNDNWU3FsR1Z5UExSc211OHI1MlJMZUg4PSIsImFjY291bnRTaWduYXR1cmUiOiJPaGpZN1c0dElrUG4weGdmZ3FzMkY5YXQ1MDRYSkpJWCsxQkZhTm5pNTU1WlhDNklVYXVsODk2a0J6QTdmUlQwMVNiNS9FQmpMTENtaVo2UUZFYTNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaUMvd1AzUWRnWGhqZHgxYlBjN1hkVkpkOUJBaUwzYWFVT0VGSHQ4cjcvVDdSTkFOcVNOdlJzakdMWS9wcUlpbFc2QUMzN1FKZ0VpbVN2MnVhNkc1aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTM1MjkwMzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZrdVBDMExaVVZ4TDRPMlRhU0plTjFVcXBSbGNqeTBiSnJ2Sytka1MzaC8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc1NjY4MjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDlYIn0=' : process.env.SESSION_ID, // add your sessons ID║සිසන් අයිඩී එක දාන්න
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'Shanuka' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS, // ස්ටේටස් බලන්න ඕනි නම් true දාන්න
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Cleopatra-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION , // හැමදේටම රියැක්ට් කරන්න ඕනි නම් true දාන්න
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? ' ' : process.env.ANTI_BAD_WORD, //පැහැදිලිව නරක වචන ටිකක් දාන්න.
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE, // හැමවෙලේම ඔන්ලයින් ඉන්න ඕනි නම් true දාන්න
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE, // msg බලන්න ඕනි නම් true දාන්න
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER, // ස්ටේටස් සේව් කරන්න ඕනි නම් true දාන්න
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU || true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '3b2f7680-ce96-401a-b525-bd386344c9f4' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'cleo-gx4' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'cleopatra',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
