const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_43_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzVUo0cnN6dWxob3hRRHNocjZDcTBiMGdjb08wbnlxZFFka3lzekpYRmlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVV3dUMjBTaFRSU3FQb0RfTW5MUkRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhYTU4Mzk0LTZjNDItNDNkNC04ZDc2LTg1ZmYyNDA5ZTExNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDEzOSxcbiAgICAgIDg0LFxuICAgICAgMjIxLFxuICAgICAgMjAwLFxuICAgICAgMTg0LFxuICAgICAgNzQsXG4gICAgICAxMzEsXG4gICAgICAxNzcsXG4gICAgICA5MCxcbiAgICAgIDIyLFxuICAgICAgMTIzLFxuICAgICAgOTMsXG4gICAgICAyMSxcbiAgICAgIDg2LFxuICAgICAgMTkwLFxuICAgICAgMTQ4LFxuICAgICAgMTMxLFxuICAgICAgMjgsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgNjYsXG4gICAgICAyMTAsXG4gICAgICA2NSxcbiAgICAgIDE1NixcbiAgICAgIDkwLFxuICAgICAgMjE5LFxuICAgICAgMjIxLFxuICAgICAgMjUzLFxuICAgICAgMTgsXG4gICAgICAxNzAsXG4gICAgICA3NCxcbiAgICAgIDI0OCxcbiAgICAgIDAsXG4gICAgICA5NCxcbiAgICAgIDU3LFxuICAgICAgMTE0LFxuICAgICAgMTIsXG4gICAgICAxMDgsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA5VE1TTDhWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU3OTY2NjI3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWW91bmcgQmxhcVwiLFxuICAgIFwibGlkXCI6IFwiMzQ0NTA0MTkyNDUyNzY6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJReXFZREVNQ2tqN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKYThxSXVPb21scnJaZnN3OFhZSkZQNWkwUTY2VFh4dkpDWVBIdE5pdGwwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZRcys1K3BHb0V3VTlsUDZ5MVI2bmRXMGsra0FkeFVUelZwdjVZVWZkRENtZmx3dk5FT1NUNWIrWWVQOEhrcFJ0UnBSNFhKeDBDbVV5OTYxRERCY0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVNMXo1M3JWZkU0NnJTckVRanBhd3hkcEEyeVlodDdkQjhZMUV1L2ozSDY2bGhDQytaN2ZiRTE3QkZQNnJjdmtBVGNHdmIweE1PTDZjZDhNSHBFWEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTc5NjY2Mjc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDEyMjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDdtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMN20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5dkdtcnhJSnpWc1g3R0c4dFNUSWFOVUhVTGRyS1g2ZHkrd0JncDJtMU5NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4NjIyMDg4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAxMDk4ODQyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "YOUNG BLAQ🖤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
