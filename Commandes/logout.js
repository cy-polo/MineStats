// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const { settingsOwner } = require("../config");

module.exports.run = async (client, message) => {
if (settingsOwner.idowner !== message.author.id) {
  message.channel.send("❌ Vous n'avez pas les droits nécessaire pour faire cette commande.")
} else {
  message.channel.send("⚙ Arrêt en cours...").then(async() => {
    console.log('Hors-ligne');
    await client.destroy();
    await process.exit();
  })
}
}
module.exports.help = {
    name: 'logout'
};
