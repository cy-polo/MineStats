// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const fetch = require("node-fetch");
const Discord = require("discord.js");
const { settingsEmbed, settingsServer, settingsMC } = require("../config");

module.exports.run = async (client, message, args) => {
  
  const server = await fetch(`https://mcapi.xdefcon.com/server/${settingsMC.serveurmc}:${settingsMC.port}/full/json`)
    .then(r => r.json())
    .then(json => json.serverStatus)
  
  if(server === "offline") {
    
    message.channel.send(":x: Erreur : Le serveur n'est pas en ligne !")

    let serveur = client.guilds.cache.get(settingsServer.idserveur);
    let vocal = serveur.channels.cache.get(settingsServer.idvocal);

vocal.setName("Status MC : off", "Mise à jour du status du serveur");


} else if(server === "online") {


    const { serverip, version, players, maxplayers, motd }  = await fetch(`https://mcapi.xdefcon.com/server/${settingsMC.serveurmc}:${settingsMC.port}/full/json`)
    .then(r => r.json())

    const description = motd.text;
  
    const apiEmbed = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
      .setColor(settingsEmbed.couleur)
      .addFields(
        { name: `IP :`, value: serverip, inline: true },
        { name: `Version :`, value: version, inline: true },
        { name: `Joueurs :`, value: `${players}/${maxplayers}`, inline: true },
        { name: `__Description :__`, value: `\`\`\`fix\n${description}\`\`\``, inline: false }
        )
      .setTimestamp()
      .setFooter(settingsEmbed.footer, client.user.displayAvatarURL())
    message.channel.send(apiEmbed);

      let serveur = client.guilds.cache.get(settingsServer.idserveur);
      let vocal = serveur.channels.cache.get(settingsServer.idvocal);
  
      vocal.setName(`${players}/${maxplayers} en ligne`, "Mise à jours des joueurs en ligne")

}}

module.exports.help = {
  name: "mcserv"
};
