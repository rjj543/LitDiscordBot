
const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('message', (message) => {
   
    if(message.content == 'Pickle Rick') {
        message.channel.sendMessage('REEEE');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'What is Milk?') {
        message.channel.sendMessage('A bad youtube channel!');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'ShaunD.') {
        message.channel.sendMessage('https://www.youtube.com/channel/UClQ7Jbtv49MHLoKlOGGVdTQ/videos');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'Cmds') {
        message.channel.sendMessage('Pickle Rick, What is Milk?, ShaunD.');
    }
});

bot.login(process.env.BOT_TOKEN);
// save it b
