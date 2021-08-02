const Discord = require('discord.js');
const bot_config = require('./bot_config.json');
const client = new Discord.Client();

client.command = new Discord.Collection();
client.events = new Discord.Collection();

client.prefix = bot_config.prefix;

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(bot_config.token);
