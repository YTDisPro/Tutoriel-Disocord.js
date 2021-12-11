const { Client, Intents } = require('discord.js');
const config =require("./config.json")
const token =require("./token.json")
const { SlashCommandBuilder } = require('@discordjs/builders');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  
  ] });

client.on('ready', async () => {
  const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Repond Pong')

  await client.guilds.cache.get("912055021288427610").commands.create(data)
  console.log(`Logged in as ${client.user.tag}!`);
});


const prefix = config.prefix
//commande basique
client.on("messageCreate", message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")){
    message.reply('Pong !')
  }
})

//commande / 
client.on('interactionCreate', async interation => {
  if(!interation.isCommand()) return;

  if(interation.commandName === 'ping'){
    interation.reply('!ping')
  }
  

})
client.login(token.token);