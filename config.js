const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09vQ1FQOE1WVEdBTExEM05zMm1aZm9JbU00dFRDak5nQkZGZlVUVU1VZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NGN2VGdkpRT1QvL0JpZllBUmcraFNycUJneDkzM2NIRDg2dmI2bjhFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT1kvT3dxUHNJYldHVXF3UjNEM29vemhtL0ViWlMrZzlucVdzT0wrUDJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4V0ZJc3hidmhsRklQR0VuUU8yamErczJWekQ4VllCR1Z1aTF5dUtHTlVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEMDdJRjdHZnBvdnB1aGFIQkwvaXNBY2dBc25adVB6aWUzRXl2SGhmVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9obEM4aVh3alZSOEduODBqcGIrUTRzaGkwZ3NHcGxmN24wT0I0V2xmQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQxbnNXa0hUVk85UWhTRk8vQTZtVS90TklyTHZUTCtodFNUcktJS25Fcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JlZ0s1eWsvZkRhZm9EREMyMWJ6ZXF4MCtUbDJZU1YrQ3NHZ3Jnc2x5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkswZ2hsRUpEY2dNekRFWkVieGZDTU5nRjNhTHQ2dkF2emZCNzBwS2xqZ0Rzb3dKQ09zUms2NlFZdUJZaXhZYlBDNlYzNDREczNDczJoWUpPRTJVNmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJOZ3FYaDgveC81TzhPTEd4MWZZVEFEVXQ5QldrTFA0MUU3Q2xVRGdIUVBFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6M25VaVdxX1FDcXBTRmNibWdaN25nIiwicGhvbmVJZCI6ImZhZmQyOTEwLTQ5NmUtNGUzZi1iMGIxLTdhMDEzMjQ2M2QzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmdDRTN3hOSkZ6dXhIT2VOeElKb2NmVE9rS2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia21GWVhEQ0syRWhob05BcFNURlVWK3FWTXJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpUWVRGTE5EIiwibWUiOnsiaWQiOiI5MjM0MDIwMjAzMjM6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01UUjBPUUdFSzNFK3JjR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI3T1ZRR3JYQUxYZjArMnhKUkcycGFtQkRSOUVPbzUrcEJKeTVOYUR1Vk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNDZGY4eHhrNzlHNm12NmttZWlRRW9KREY2TnZpanNaWmVoRFYxTkV1b0ZEOUVpOVZUMndHaWk0NXVZaEkveTRMNkpIRnAxY2cxWG5lOVFyQ0pFTUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4SHo4R05nU3V1ZGxLRS9RNnNCUDVvOGZGVUl5NUVldHk0RzlFdVlsWUQxWVVGdHBjV1pNWEtTRXp3di8vUkhZN2lEcytGb3lCU2UvdUYwMkRSamdpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQwMjAyMDMyMzozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXK3psVUJxMXdDMTM5UHRzU1VSdHFXcGdRMGZSRHFPZnFRU2N1VFdnN2xUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTYzNzA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQ0FBQUJFbiJ9",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923402020323",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "false",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "false",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "🪄BHASHI",
  author: process.env.author || "BHASHI x VISHWA",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",























 //================ OWNERS ONLY DONT GO =================























  START_MSG: process.env.START_MSG || `
        ★ *ＢＨＡＳＨＩ-ＭＤ* ★
    ╴ *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡᴀ ʙᴏᴛ 🇱🇰* ╴

    \`A fast and responsive multi-device WhatsApp bot built using Baileys and various APIs. It offers seamless functionality without buttons, delivering quick and efficient performance for automated tasks and commands.\`

> 🚨 *ꜰᴏʟʟᴏᴡ ᴜꜱ* : https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k

> 🪄 *ꜱᴜᴘᴘᴏʀᴛᴇʀ ɢʀᴏᴜᴘ* :

> 👾 *ʀᴇᴘᴏ ʟɪɴᴋ* : https://github.com/BhashiMD/BhashiMD/

` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d8279f4ca5da23bda7da4.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/hRw1XK4/image.png",
  MENU_MSG: process.env.MENU_MSG || `*乂  ＬＩＳＴ  ＭＥＮＵ*

Please Reply The Number You Want To Select.

*❯❯   .01*   Main Commands.
*❯❯   .02*   Download Commands.
*❯❯   .03*   Convert Commands.
*❯❯   .04*   Ai Commands.
*❯❯   .05*   Search Commands.
*❯❯   .06*   Fun Commands.
*❯❯   .07*   18+ Commands.
*❯❯   .08*   Useful Commands.
*❯❯   .09*   Logo Commands.
*❯❯   .10*   Movie Commands.
*❯❯   .11*   Anime Commands.
*❯❯   .12*   News Commands.
*❯❯   .13*   Group Commands.
*❯❯   .14*   Premium Commands.
*❯❯   .15*   Owner Commands. `,
    MENU_MS: process.env.MENU_MS || `*乂  ＬＩＳＴ  ＭＥＮＵ*
    
> This Is Not Updated Get Updated Command List Type .list 

  Please Reply The Number You Want To Select.

  *❯❯   01*   Main Commands.
  *❯❯   02*   Download Commands.
  *❯❯   03*   Convert Commands.
  *❯❯   04*   Ai Commands.
  *❯❯   05*   Search Commands.
  *❯❯   06*   Fun Commands.
  *❯❯   07*   18+ Commands.
  *❯❯   08*   Useful Commands.
  *❯❯   09*   Logo Commands.
  *❯❯   10*   Movie Commands.
  *❯❯   11*   Anime Commands.
  *❯❯   12*   News Commands.
  *❯❯   13*   Group Commands.
  *❯❯   14*   Premium Commands.
  *❯❯   15*   Owner Commands. `,

};
