const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saidusadiq71@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347057966627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF6Qk40WDRZOHk5aFExb0VKZy91RlFxQ3ZHRGd5dm9Zd0wxVmQxVXc1Y1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA1Nzk2NjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTAzODVFQkNERTYwMzg4Q0NCMzJENURBQjZDQzFGNkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDE0ODU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNZT2VHV19GUXR5R3ZHUGlZMlFPa1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTUyYTc3ODAtNGQ3MS00MDJhLWE2ODAtY2FhMzNjNzFmNzUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE5OCxcbiAgICAgIDg0LFxuICAgICAgMjIsXG4gICAgICAzNCxcbiAgICAgIDQwLFxuICAgICAgMzUsXG4gICAgICAyNDEsXG4gICAgICAxNTgsXG4gICAgICAyNDQsXG4gICAgICAyNTAsXG4gICAgICAzNCxcbiAgICAgIDI1MyxcbiAgICAgIDIwNixcbiAgICAgIDIzNyxcbiAgICAgIDIzMixcbiAgICAgIDI1MSxcbiAgICAgIDEzLFxuICAgICAgMTE2LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMjQyLFxuICAgICAgOTAsXG4gICAgICAyLFxuICAgICAgMjI1LFxuICAgICAgMjQ4LFxuICAgICAgMjEsXG4gICAgICAyMTAsXG4gICAgICA5LFxuICAgICAgMTMwLFxuICAgICAgNDgsXG4gICAgICAxMDEsXG4gICAgICAyNCxcbiAgICAgIDE2MCxcbiAgICAgIDMzLFxuICAgICAgMjQsXG4gICAgICA3NCxcbiAgICAgIDE5OSxcbiAgICAgIDE5OSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zS0tBTkxZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU3OTY2NjI3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWW91bmcgQmxhcVwiLFxuICAgIFwibGlkXCI6IFwiMzQ0NTA0MTkyNDUyNzY6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZReXFZREVQeTRqN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKYThxSXVPb21scnJaZnN3OFhZSkZQNWkwUTY2VFh4dkpDWVBIdE5pdGwwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlIS1h2ZUpIVjlyaGpVaElwQUZLbG45MnVyWmZBelZsNXhGMUt5QmRLR3JzbkZWcW5oTHY1Mm1sSUpFSUo2Z1RMZHpRZjhIenFqWWNDQVdvR1JaUERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlheUVzTjF2UDRDelBpMkJkUlFpOHdsbmplMUhkZUozQzFjNUxXS0JybGdwcUlPcG9hU01rTFU5ZjljRHAxa0Q3ZjdpNUtMZ1Z0c3ZSc1hDU1RGR0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTc5NjY2Mjc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDE0ODQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDdtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMN20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5dkdtcnhJSnpWc1g3R0c4dFNUSWFOVUhVTGRyS1g2ZHkrd0JncDJtMU5NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4NjIyMDg4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAxMDk4ODQyM1wifSIKfQ=="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "YOUNG BLAQ"  ).toUpperCase(),



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
