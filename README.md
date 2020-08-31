# MineStats

MineStats est un robot Discord, qui donne les informations de ton serveur Minecraft en temps direct.

## Prérequis

Vous devez avoir sur votre ordinateur [Node.js](https://nodejs.org/en/) à partir de la version 12.  
Vous devez aussi avoir un éditeur de texte, exemple [NodePad ++](https://notepad-plus-plus.org/downloads/).  

### Téléchargement

Avant de télécharger le répertoire, merci de mettre une ⭐.  

Une fois avoir mis une ⭐, vous pouvez télécharger le répertoire.  

Dans le dossier que vous aurez téléchargé, et aussi extrait, ouvrez la console, puis installez les dépendances avec la commande :  

`npm install`  

### Configuration

Ouvrez le fichier `config.json`,  puis rentrez les informations requises.  

Dans `settingsEmbed`, ce sont les paramètres des embeds.   
Rentrez le footer que vous voulez, l'icone du footer, ainsi que la couleur des embeds.  
Pour obtenir le code couleur, [cliquez-ici](https://html-color-codes.info/Codes-couleur-HTML/).  

Dans `settingsBot`, c'est les paramètres du bot.  
Pour `token`, rentrez le token de votre bot Discord.  
Vous pouvez en générer un [ici](https://discord.com/developers/applications).  
Pour `prefix`, c'est le prefix du bot sur le serveur.

Dans `settingsServer`, ce sont les paramètres du serveur.  
Pour `idserveur`, rentrez l'ID de votre serveur Discord  
Pour `idvocal`, rentrez l'ID de votre vocal, qui donnera les statistiques sur votre serveur.  

Dans `settingsOwner`, c'est les informations de l'owner du bot.
Pour `idowner`, c'est l'ID du créateur du bot.

Dans `settingsMC`, ce sont les paramètres du serveur Minecraft.  
Pour `serveurmc`, rentrez l'IP du serveur sans le port !  
Pour `port`, rentrez le port du serveur.  

### Exemple

Voici un exemple de fichier pour le `config.json`.  
⚠️ Vous pouvez vous inspirer de ce fichier, mais vous ne devez pas le copier/coller, sinon vous aurez des erreurs.  

```
{
    "settingsEmbed": {
    "footer": "Bot créé par Polo#9999",
    "image": "https://cdn.discordapp.com/avatars/542749823372361745/a_f186e8654afb481e3e82a8bae74ccfad.gif",
    "couleur": "La couleur des embeds de ton choix"
    },
    "settingsBot": {
    "token": "NTg0NDIyMjI1MzY1NTY1NDc3.XPKrnA._O4zSCxZ3gx0Ml3v0qo3q4aDQzA",
    "prefix": "?"
    },
    "settingsServer": {
    "idserveur": "749271953780768808",
    "idvocal": "749564468245037148"
    },
    "settingsOwner":{
      "idowner": "542749823372361745"
    },
    "settingsMC": {
    "serveurmc": "51.77.188.38",
    "port": 25601
    }
  }
  ```
  
  ### Utilisation
  
  Pour voir les commandes du bot, vous pouvez faire `!help` (le prefix varie en fonction de ce que vous avez choisi)  
  
  Voici un aperçu de la commande `help` :  
  
  ![help](https://media.discordapp.net/attachments/678566839214931969/749913020460826704/unknown.png)  
  
  **Bonne utilisation !**  
  Si vous remarquez des bogues, ou si vous pouvez améliorez ce projet, n'hésitez pas !
