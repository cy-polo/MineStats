// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr


let down = new Set();

module.exports = (client, message) => {
    if (message.author.bot ||
        message.channel.type === "dm" ||
        !message.channel.permissionsFor(client.user).has("SEND_MESSAGES") ||
        !message.content.startsWith(client.config.setting.prefix))
        return;

    let args = message.content.slice(client.config.setting.prefix.length).trim().split(/ +/g);
    let commande = args.shift();
    let cmd = client.commands.get(commande);

    if (!cmd)
        return;

    if (down.has(message.author.id)) {
        message.delete();
        return message.reply(":warning: You have to wait 1 second between each command.")
    } else {
        cmd.run(client, message, args);
    }

    down.add(message.author.id);
    setTimeout(() => {
        down.delete(message.author.id);
    }, 1000);
};
