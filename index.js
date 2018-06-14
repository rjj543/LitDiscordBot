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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
if (msg.content.toLowerCase().startsWith("*8ball")) { //The 8ball Message
		var msg1 = Array(5); 
		msg1[1] = "Yes";
	    msg1[2] = "No";
		msg1[3] = "Maybe :wink:";
		msg1[4] = "Without a doubt.";
		msg1[5] = "I Honestly Have No Idea :neutral_face:"
		msg1[6] = "Highly Unlikely" 
        var x = getRandomInt(0, 20);
		if (x < 5){ 
         if (x < 3){
			msg.channel.sendMessage(msg1[1]);
		}
		else {
               msg.channel.sendMessage(msg1[3]);
		}
		}
		else if (x<= 9) {
			if (x >= 7){
			msg.channel.sendMessage(msg1[2]); }
				else{
                   msg.channel.sendMessage(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			msg.channel.sendMessage(msg1[5]);
		}
		else {
			msg.channel.sendMessage(msg1[6])
		}
		}

			if (msg.content.toLowerCase().startsWith("!random")) {
				msg.channel.sendMessage("The number is "+ getRandomInt(1, 1000));
			}
      	if (msg.content.toLowerCase().startsWith("*coinflip")) { //The coinflip Message
		var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			msg.channel.sendMessage(msg2[1]);
		}
		else{
			msg.channel.sendMessage(msg2[2]);
		}
	}
		if (msg.content.toLowerCase().startsWith("!rps")) { //The rps Message
		var msg1 = Array(3);
		msg1[1] = "Rock :black_circle:";
	    msg1[2] = "Paper :page_facing_up:";
		msg1[3] = "Scissors :scissors:"
        var x = getRandomInt(0, 9);
		if (x < 6){
         if (x < 3){
			msg.channel.sendMessage(msg1[1]);
		}
		else{
               msg.channel.sendMessage(msg1[3]);
		}
		}
		else{ 
			msg.channel.sendMessage(msg1[2]);
		}

bot.login(process.env.BOT_TOKEN);
// save it b
