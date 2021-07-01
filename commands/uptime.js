// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

exports.run = (client, message) => {
  let cMS = convertMS(client.uptime);
  let uptime =
    cMS.d +
    " day(s) : " +
    cMS.h +
    " hour(s) : " +
    cMS.m +
    " minute(s) : " +
    cMS.s +
    " second(s)";

  return message.channel.send({
    embed: {
      color: client.config.embed.color,
      timestamp: Date.now(),
      author: {
        "name": `${client.user.username}`,
        "icon_url": `${client.user.displayAvatarURL}`
      },
      footer: {
        icon_url: client.config.embed.footer.image,
        text: client.config.embed.footer.text
      },
      fields: [
        {
          name: "Uptime :",
          value: uptime
        }
      ]
    }
  });
};

function convertMS(ms) {
  let d, h, m, s;
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

exports.help = {
  name: "uptime"
};
