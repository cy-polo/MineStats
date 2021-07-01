// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr

const { Client, Collection } = require("discord.js");
const { readdir } = require("fs");

const client = new Client({ disableMentions: "everyone" });
client.commands = new Collection();
client.config = require('./config.json');

readdir("./commands/", (error, files) => {

  if (error)
    return console.error(error);

  let commands = files.filter(f => f.split(".").pop() === "js");
  if (commands.length <= 0)
    return console.log("No commands has been found.");

  commands.forEach(f => {
    let cmd = require(`./commands/${f}`);
    console.log(`[COMMAND] ${f} has been load.`);
    client.commands.set(cmd.help.name, cmd);
  });
});

readdir("./events/", (error, files) => {

  if (error)
    return console.error(error);

  files.forEach(f => {
    let eventFile = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    client.on(eventName, eventFile.bind(null, client));
  });
});

client.login(client.config.setting.token).then(id => id);
