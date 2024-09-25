const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_13_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9NZEZabGtoN0pWbVVwWkhmRXd3RlNnT2VOMzh3bmZOZGQ0NjNmS24waGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlXTmJoWW9kUWphdEFHVU5BTkVCYkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTNiMWU0Y2ItM2VkNi00M2Q3LTgwYTMtNGNiOTQ3Nzg0ZjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAzOCxcbiAgICAgIDI2LFxuICAgICAgMjE3LFxuICAgICAgMTIxLFxuICAgICAgNjYsXG4gICAgICAxMDcsXG4gICAgICAwLFxuICAgICAgMjI1LFxuICAgICAgNCxcbiAgICAgIDE4NyxcbiAgICAgIDk1LFxuICAgICAgMTk1LFxuICAgICAgMTE5LFxuICAgICAgMjMzLFxuICAgICAgMTYyLFxuICAgICAgOTEsXG4gICAgICAyNDYsXG4gICAgICAyMyxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyNTQsXG4gICAgICAxNSxcbiAgICAgIDE2MSxcbiAgICAgIDE3MixcbiAgICAgIDk5LFxuICAgICAgMjI3LFxuICAgICAgMjI0LFxuICAgICAgMTIsXG4gICAgICAyMzIsXG4gICAgICAxMTMsXG4gICAgICA3OCxcbiAgICAgIDEyNyxcbiAgICAgIDkwLFxuICAgICAgNTksXG4gICAgICAxNDUsXG4gICAgICA4NCxcbiAgICAgIDE3NCxcbiAgICAgIDE4OCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xISHhzUUdFTWZIemJjR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGdZbHVaZDk1WkhEWkQvSDdEQ2ZtMVRobG4xQlpGV1dBZVEvWG9Xa2lrTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5RnhSVjJqTjkrdDl5M0FtTlNEREVnTTRQbk95RytzZWNud2NZVkszeDZUMDFRQWt1aU1WSTQyYzB6cFdpU3R0NWUwMmZOdzluNlgyMHJQL1E5VDZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpZ3pTLzAyNUptcENSWlBBZWszSlZ3SCt1bys3ZXF2eWdydnpTdlo5OFp5WE1ld1NjZ253MkZWYkNEOTdra0pxaFAxcWxoMU9uMmZKY01BUmFscURBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5MzEzMjc5NToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImpva2VyXCIsXG4gICAgXCJsaWRcIjogXCI5NTU3NjM5MzgwNjA3MToyOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5MzEzMjc5NToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MjI2ODI4XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Joker",
  packname: process.env.PACK_NAME || "joker",
  botname : process.env.BOT_NAME  || "JOKER-MD",
  ownername:process.env.OWNER_NAME|| "JOKER 🃏",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
