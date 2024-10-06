const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "AuNAAbbb#Lt8ks-p1FKa3TMYnMg3KJq-_dFusLEnd7lOlTwgQgRg",
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
