// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

exports.run = (client, message) => {
  return message.channel.send({
    embed: {
      color: client.config.embed.color,
      timestamp: Date.now(),
      description: `Welcome on ${client.user.username}. Currently, you can use my fabulous commands with ${client.config.setting.prefix}`,
      author: {
        name: client.user.username,
        icon_url: client.user.displayAvatarURL
      },
      footer: {
        icon_url: client.config.embed.footer.image,
        text: client.config.embed.footer.text
      },
      fields: [
        {
          name: "__Main commands :__",
          value: "`help`, `ping`, `uptime`"
        },
        {
          name: "__Minecraft :__",
          value: "`mcserv`"
        },
        {
          name: "__Admin commands:__",
          value: "logout"
        }
      ]
    }
  })
}

exports.help = {
  name: "help"
}
