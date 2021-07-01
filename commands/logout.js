// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Discord : https://discord.gg/bwa9aCr


exports.run = async (client, message) => {

  if (client.config.owner.id !== message.author.id)
    await message.channel.send({ content: "❌ You don't have permission to perform this command."});
  else {
    await message.channel.send({ content: "⚙ Shutting down..."});
    client.destroy();
    process.exit(0);
  }
}

exports.help = {
    name: "logout"
};
