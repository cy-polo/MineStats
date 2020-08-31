// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const {settingsBot} = require("../config");

        let cooldown = new Set();

        module.exports = (client, message) => {
            if (message.author.bot || message.channel.type === 'dm') { return; }
            if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
            if (!message.content.startsWith(settingsBot.prefix)) { return; }

            let args = message.content.slice(settingsBot.prefix.length).trim().split(/ +/g);
            let commande = args.shift();
            let cmd = client.commands.get(commande);

            if (!cmd) { return; }
            if (cooldown.has(message.author.id)) {
                message.delete();
                return message.reply(":warning: Vous devez attendre 1 seconde entre les commandes.")
            }
            else {
                cmd.run(client, message, args);
            }
            cooldown.add(message.author.id);
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 1000);
        };
