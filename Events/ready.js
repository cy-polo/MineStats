// Coded by Polo
// GitHub : https://github.com/cy-polo/MineStats
// Website : https://polodeveloppement.tk/

const fetch = require("node-fetch");
const {settingsBot, settingsServer, settingsMC} = require("../config");

module.exports = (client) => {
    client.user.setPresence({
        activity: {
            name: `${settingsBot.prefix}help`
        }
    });

    setInterval(async() => {
    
        const serverStatus = await fetch(`https://mcapi.xdefcon.com/server/${settingsMC.serveurmc}:${settingsMC.port}/full/json`)
        .then(r => r.json())
        .then(json => json.serverStatus)
        
        if(serverStatus === "offline") {
                    
          let serveur = client.guilds.cache.get(settingsServer.idserveur);
          let vocal = serveur.channels.cache.get(settingsServer.idvocal);
          
          vocal.setName("Status MC : off", "Mise à jour du status du serveur");
          
    } else if (serverStatus === "online") {
        
         const {players, maxplayers, online} = await fetch(`https://mcapi.xdefcon.com/server/${settingsMC.serveurmc}:${settingsMC.port}/full/json`)
         .then(r => r.json())
              
          let serveur = client.guilds.cache.get(settingsServer.idserveur);
          let vocal = serveur.channels.cache.get(settingsServer.idvocal);
          vocal.setName(`${players}/${maxplayers} en ligne`, "Mise à jours des joueurs en ligne")
    }}, 3000
    )};
