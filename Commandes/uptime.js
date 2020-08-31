// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const Discord = require("discord.js");
const { settingsEmbed } = require("../config");

module.exports.run = (client, message) => {
  let cMS = convertMS(client.uptime);
  let uptime =
    cMS.d +
    " jour(s) : " +
    cMS.h +
    " heure(s) : " +
    cMS.m +
    " minute(s) : " +
    cMS.s +
    " secondes";

  const uptimeEmbed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
    .setColor(settingsEmbed.couleur)
    .setTimestamp()
    .addField(`Le bot est en ligne depuis :`, `${uptime}`)
    .setFooter(settingsEmbed.footer, client.user.displayAvatarURL())
	
  message.channel.send(uptimeEmbed);
};

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return {
    d: d,
    h: h,
    m: m,
    s: s
  };
}

module.exports.help = {
  name: "uptime"
};
