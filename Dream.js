const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Script");

client.on("ready", () => {
let channel =     client.channels.get("505726598213926925")
setInterval(function() {
channel.send(`spam1`);
}, 25)
})

client.login(process.env.BOT_TOKEN);
