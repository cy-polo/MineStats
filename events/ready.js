// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

const fetch = require("node-fetch");

module.exports = async (client) => {
    await client.user.setPresence({
        activity: {
            name: `${client.config.setting.prefix}help`
        }
    });

    const guild = client.guilds.cache.get(client.config.guild.guild_id);
    if (!guild)
        return console.error(`${client.config.guild.guild_id} isn't valid guild id.`);
    const channel = guild.channels.cache.get(client.config.guild.channel_id);
    if (!channel)
        return console.error(`${client.config.guild.guild_id} isn't valid channel id.`);

    setInterval(() => {
        updateChannelName(client.config.minecraft.ip, client.config.minecraft.port, channel);
    }, 3000);
};

async function updateChannelName(ip, port = 0, channel) {
    let req;
    let res;
    let base = "https://mcapi.xdefcon.com/server/";

    req = port !== 0 ? await fetch(base + ip + "/full/json") : await fetch(base + ip + ":" + port + "/full/json");
    res = await req.json();
    const {serverStatus} = res;

    if (serverStatus === "offline")
        return await channel.setName("Status MC : OFF", "update");

    if (serverStatus === "online") {
        const {players, maxplayers} = res;
        await channel.setName(`${players}/${maxplayers} online`, "update");
    }
}