// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const Discord = require("discord.js");
const { settingsEmbed, settingsBot } = require("../config");

module.exports.run = (client, message) => {

  const helpEmbed = new Discord.MessageEmbed()

  .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
  .setDescription(`Bienvenue sur ${client.user.username}, mon prefix est \`${settingsBot.prefix}\`.`)
  .addFields(
    { name: '__Commandes principales :__', value: '`help`, `ping`, `uptime`' },
    { name: '__Minecraft :__', value: '`mcserv`' },
    { name: '__Commande admin :__', value: '`logout`' }
  )
  .setColor(settingsEmbed.couleur)
  .setTimestamp()
  .setFooter(settingsEmbed.footer, settingsEmbed.image)
  
  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: 'help'
}
