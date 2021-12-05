const { Client, Intents } = require('discord.js');
const config =require("./config.json")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = config.prefix

client.login(config.token);