// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const fs = require("fs");
const { settingsBot } = require('./config');

fs.readdir("./Commandes/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  let commandes = f.filter(f => f.split(".").pop() === "js");
  if (commandes.length <= 0) {
    return console.log("Aucune commande trouvée !");
  }

  commandes.forEach(f => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./Events/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  console.log(`${f.length} events chargés`);

  f.forEach(f => {
    let events = require(`./Events/${f}`);
    let event = f.split(".")[0];
    client.on(event, events.bind(null, client));
  });
});

client.login(settingsBot.token);
