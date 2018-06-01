const prefix = "/"
const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('message', (message) => {
   
    if(message.content == prefix + 'Pickle Rick') {
        message.channel.sendMessage('REEEE');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'What is Milk?') {
        message.channel.sendMessage('A bad youtube channel!');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'ShaunD.') {
        message.channel.sendMessage('https://www.youtube.com/channel/UClQ7Jbtv49MHLoKlOGGVdTQ/videos');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'Cmds') {
        message.channel.sendMessage('```Pickle Rick``` ```What is Milk?``` ```ShaunD.```');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'Prefix') {
        message.channel.sendMessage('The current prefix is: /');
    }
});



bot.login(process.env.BOT_TOKEN);
// save it b
