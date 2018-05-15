cost Discord = require('discord.js);
cost client = new Discord.Client();

client.on('ready', {} => {
    console.log('teste');
    });
    
client.on('message', message => {
    if (message.content === 'ping') {
      message.replay('pong');
    }
});

client.login{processe.env.BOT_TOKEN};
