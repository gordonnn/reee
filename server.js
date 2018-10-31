const discord = require ('discord.js');

var client = new discord.Client


client.on ("ready", () => {
    console.log ("ready");

    client.user.setGame ("help: כוסית אני צריך עזרה");
});

const prefix = "tb!";
client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "hello")) {
        message.reply ("Hi!");

        message.channel.send ("message: " + message);
        message.channel.send ("message sender: " + message.author.username);
        message.channel.send ("message sender ID " + message.author.id);
    }

    if (message.content.startsWith ("👀")) {
        message.channel.send (":eyes:")
    }

    if (message.content.startsWith ("שלום")) {
        message.channel.send ("אני שולח תמונות של כוסיות XD");
    }
  
    if (message.content.startsWith ("כוסית אני צריך עזרה")) {
        message.channel.send ("**NSFW הבוט עובד רק בחדר**");
        message.channel.send ("אני חרמן על הילה = תמונות של ילדה כוסית בשם הילה");
        message.channel.send ("אני חרמן על הילה = תמונות של ילדה כוסית בשם הילה");
        message.channel.send ("אני חרמן על גאיה = תמונות של ילדה כוסית בשם גאיה");
        message.channel.send ("אני חרמן על אלי = תמונות של ילדה כוסית בשם אלי");
        message.channel.send ("אני חרמן על שירה = תמונות של ילדה כוסית בשם שירה");
        message.channel.send ("כוסית תביאי לי ציצי");
        message.channel.send ("כוסית תביאי לי תחת");
    }

    if (message.content.startsWith ("היי")) {
        message.channel.send ("SEND BOB AND VAGANA");
    }

    if (message.content.startsWith ("אני חרמן על אלי")) {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./ELI/" + imageNumber + ".png"]} )
    }

    if (message.content.startsWith ("אני חרמן על גאיה")) {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./gaya/" + imageNumber + ".png"]} )
    }

    if (message.content.startsWith ("אני חרמן על הילה")) {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./hila/" + imageNumber + ".png"]} )
    }

    if (message.content.startsWith ("אני חרמן על שירה")) {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./shira/" + imageNumber + ".png"]} )
    }
    
    if (message.content.startsWith ("כוסית תביאי לי ציצי")) {
        number = 40;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./tits/" + imageNumber + ".gif"]} )
    }

    if (message.content.startsWith("כוסית תביאי לי תחת")) {

        if (message.channel.nsfw) {
        number = 40;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./ass/" + imageNumber + ".gif"]})
        }

        else {
            message.channel.send("**לך לחדר NSFW**");
        }
    }
    
});

client.login("NDk5NjUwODU4NDg1Njc4MTIw.DqILuw.Do1X6dZXGSeCbxGru-ll-1MuFng");
