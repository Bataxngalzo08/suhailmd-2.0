const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221706456751";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_47_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJNjNsZDdOUXV6TE5JS1hMMEQ2VHJ2WWxNS2xPUW5INVh4a203TXpiSTY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZWWxILVJZLVJEcWpacW1xQ1NHSDNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ZTU3MGExLTdlOTQtNDI0ZC04OGJiLTU5ZGUxZmNlYTI0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxMjEsXG4gICAgICA1MSxcbiAgICAgIDIwOSxcbiAgICAgIDQyLFxuICAgICAgMTMyLFxuICAgICAgMTA2LFxuICAgICAgMjI4LFxuICAgICAgNzEsXG4gICAgICAxNSxcbiAgICAgIDE3OSxcbiAgICAgIDEyMyxcbiAgICAgIDY0LFxuICAgICAgNzksXG4gICAgICAxNzcsXG4gICAgICAxMTMsXG4gICAgICAyMzQsXG4gICAgICA1LFxuICAgICAgMjQzLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDMwLFxuICAgICAgMTc2LFxuICAgICAgMjMyLFxuICAgICAgMTUsXG4gICAgICAyMTQsXG4gICAgICAxMTQsXG4gICAgICA3MixcbiAgICAgIDI0NSxcbiAgICAgIDkxLFxuICAgICAgMTU4LFxuICAgICAgMTgsXG4gICAgICAyNCxcbiAgICAgIDE2OCxcbiAgICAgIDgxLFxuICAgICAgMTYwLFxuICAgICAgMTMxLFxuICAgICAgNzksXG4gICAgICAxNzcsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFoxMTQxTVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTcwNjQ1Njc1MToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxNDY4MDcyNTExODU6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZUcmtvUWdMcTN1d1lZRENBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoSnIrelVlUlg5Z28yUFI0aEJEWCtjYkhXRGhkanozTWZZTkxkVDFZc21FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRUd1NINUtHSWVIeU9uc3V5d0ZhZFJVMC9mQ3Q0MHZUaWRmWDlNek92WjJ5cy8xYmx2bjBsNUN2emU0MzF6SWF0UDJ1L3JTRnFLMjdrU1VqS0dRd0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVoVHZaWm9KQnBoWTFQMkhlT2dUU2NRL1NmTjhxNEV2QW9COFh0aHhnT0V2emh4TUZFNG9FV0syZys1cFByazR0M3NWSVhteHpRd1Q1SmhaSUVJM2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTcwNjQ1Njc1MToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTI1MzI1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVDUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUNRLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
