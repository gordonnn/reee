const discord = require ('discord.js');

var client = new discord.Client


client.on ("ready", () => {
    console.log ("ready");

    client.user.setGame ("with some chicks");
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
    
    
});

client.login(NDk5NjUwODU4NDg1Njc4MTIw.DqILuw.Do1X6dZXGSeCbxGru-ll-1MuFng);
