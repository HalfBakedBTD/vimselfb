const discord = require('discord.js')
const Discord = require('discord.js')
const fs = require("fs");
const client = new discord.Client();
let chat = require("./chats.json");

client.on('ready', () => {
	console.log('CONNECTED TO ' + client.user.username)
});

client.on('message', async message => {
	let messageArray = message.content.split(" ");
	let args = messageArray.slice(1);
	if(message.author.id !== '411700300295045131') {
		if(message.author.id !== '284137818895417344') return;
	}
	console.log(`${message.author.username} said ${message.content} in #${message.channel.name}.`)
	if(message.content === ':ping') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit('Ping: **' + (msg.createdAt - message.createdAt) + 'ms**');
  }
	if(message.content === ':members') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit(`Server Members: ${message.guild.memberCount}`);
  }
	if(message.content.startsWith(':d')) {
    message.delete();
  }
	if(message.content === ':help') {
    message.delete();
		client.channels.filter(c => c.id === '440364762505805845').forEach(channel => {
    	channel.send("**My Commands:**\n`.help` - gives help...\n`.ping` - pings me.\n`.d` - deletes the message.\n`.members` - gives membercount.");
		});
  }
	if(message.content.startsWith('tu')) {
    message.delete();
		message.channel.send("👍")
  }
	if(message.content.startsWith('td')) {
    message.delete();
		message.channel.send("👎")
  }
	if(message.content.startsWith('tow')) {
    message.delete();
		message.channel.send("😜")
  } 
  if(message.content.startsWith('btc')) {
    message.delete();
		message.channel.send("<:GWmythiBlobCool:388310072264228865>")
  }
	if(message.content.startsWith('.cross')) {
    message.delete();
		const cross = args.join(" ");
		message.channel.send(`~~${cross}~~`)
  }
	if(message.content === ':owner') {
    message.delete();
    const msg = await message.channel.send('Loading...')
    msg.edit(`${message.guild.owner} owns the server.`);
  }
	if(message.content.startsWith(':ride')) {
    message.delete();
		message.channel.send("🍆💦 Someone please ride my cock!!")
  }
})
 
client.login(process.env.BOT_TOKEN);
