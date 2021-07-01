// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

exports.run = (client, message) => {
    message.channel.send({content: "Pinging..."}).then(async (m) => {
        await m.edit({content: `${m.createdTimestamp - message.createdTimestamp} ms.`})
    });
};

exports.help = {
    name: "ping"
};
