// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

const fetch = require("node-fetch");

exports.run = async (client, message) => {
    const guild = client.guilds.cache.get(client.config.guild.guild_id);
    if (!guild)
        return console.error(`${client.config.guild.guild_id} isn't valid guild id.`);
    const channel = guild.channels.cache.get(client.config.guild.channel_id);
    if (!channel)
        return console.error(`${client.config.guild.guild_id} isn't valid channel id.`);

    await updateChannelName(client.config.minecraft.ip, client.config.minecraft.port, channel, message.channel);
};

async function updateChannelName(ip, port = 0, channel, origin, client) {
    let req;
    let res;
    let base = "https://mcapi.xdefcon.com/server/";

    req = port !== 0 ? await fetch(base + ip + "/full/json") : await fetch(base + ip + ":" + port + "/full/json");
    res = await req.json();
    const {serverStatus} = res;

    if (serverStatus === "offline")
        return await channel.setName("Status MC : OFF", "update");

    if (serverStatus === "online") {
        const {players, maxplayers, motd, serverip, version} = res;
        await channel.setName(`${players}/${maxplayers} online`, "update");
        return origin.send({
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
                        name: "IP :",
                        value: serverip,
                        inline: true
                    },
                    {
                        name: "Version :",
                        value: version,
                        inline: true
                    },
                    {
                        name: "Players :",
                        value: version,
                        inline: true
                    },
                    {
                        name: "__Description :__",
                        value: fixMOTD(motd.text),
                        inline: false
                    }
                ]
            }
        });
    }
}

function fixMOTD(motd) {
    if (typeof motd !== "string")
        return "NULL";
    motd.replace("§\\d", "");
}

exports.help = {
  name: "mcserv"
};

