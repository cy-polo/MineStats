// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

module.exports.run = (client, message) => {

    let debut = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - debut}**ms`));
};

module.exports.help = {
    name: 'ping'
};
