require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || 'l!', 
  ownerID: process.env.OWNERID?.split(',') || ['761475079611613195','761475079611613195'], 
  SpotifyID: process.env.SPOTIFYID || '40c5ee08678d4e60aef46bedc6761fd4', 
  SpotifySecret: process.env.SPOTIFYSECRET || '2e8ef57a93454b31b035569f64fea7c8', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/aromax-development-708565122188312579',
    invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1007195786800541816&permissions=3214916709696&scope=bot',
    vote: process.env.VOTE || 'https://discord.gg/aromax-development-708565122188312579',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lava.alfari.id:443',
      name: process.env.NODE_NAME || 'Plugins Lava 4.0.0 ',
      auth: process.env.NODE_AUTH || 'youshallnotpass',
      secure: parseBoolean(process.env.NODE_SECURE || 'true'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
