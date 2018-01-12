const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "=";
client.on("message", (message) => {
	
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("I am here!");
  } else
	  
  
  if (message.content.startsWith(prefix + "pong")) {
    message.channel.send("I am here!");
  } else
  
  
  if (message.content.startsWith(prefix + "called")) {
    message.channel.send("Here i am!");
  } else
	  
  
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Hye! I am DiscBot.Your dictionary bot.! Please use [ = ] at infront of every word you key in!");
  } else
	

  if (message.content.startsWith(prefix + "pikachu")) {
    message.channel.send("Here your Pikachu.. https://s-media-cache-ak0.pinimg.com/736x/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.jpg");
  }
});

client.login('Mzk5OTYxMjEyMjk0NjYwMDk3.DTkAnA.mvN3cS7aLDRfSRTIWWt36nUHB6c');