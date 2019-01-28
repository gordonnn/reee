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
        message.member.send ("מה קורה אני בוט של **כוסיות** ואני אגיד לך את הפקודות יא חרמן מניאק");
        message.member.send (" 1. אני חרמן על הילה = תמונות של ילדה כוסית בשם הילה");
        message.member.send (" 2. אני חרמן על גאיה = תמונות של ילדה כוסית בשם גאיה");
        message.member.send (" 3. אני חרמן על אלי = תמונות של ילדה כוסית בשם אלי");
        message.member.send (" 4. אני חרמן על שירה = תמונות של ילדה כוסית בשם שירה");
        message.member.send (" 5. כוסית תביאי לי ציצי");
        message.member.send ("כוסית תשלחי לי תחת 6");
    }

    if (message.content.startsWith ("אני חרמן על אלי")) {

        if (message.channel.nsfw) {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./ELI/" + imageNumber + ".png"]} )
        }
        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }

    if (message.content.startsWith ("אני חרמן על גאיה")) {

        if (message.channel.nsfw) {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./gaya/" + imageNumber + ".png"]} )
        }
        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }

    if (message.content.startsWith ("אני חרמן על הילה")) {

        if (message.channel.nsfw) {
        number = 7;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./hila/" + imageNumber + ".png"]} )
        }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }

    if (message.content.startsWith ("אני חרמן על שירה")) {
        
        if (message.channel.nsfw) {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./shira/" + imageNumber + ".png"]} )
        }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }
    
    if (message.content.startsWith ("כוסית תביאי לי ציצי")) {
        
        if (message.channel.nsfw) {
            number = 59;
            imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            message.channel.send ( {files: ["./tits/" + imageNumber + ".gif"]})
            }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }

    
    if (message.content.startsWith("כוסית תביאי לי תחת")) {

        if (message.channel.nsfw) {
        number = 40;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./ass/" + imageNumber + ".gif"]})
        }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }


    if (message.content.startsWith("אני חרמן על שלי")) {

        if (message.channel.nsfw) {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./shelly/" + imageNumber + ".png"]})
        }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }

    if (message.content.startsWith("אני חרמן על רביד")) {

        if (message.channel.nsfw) {
        number = 8;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./ravid/" + imageNumber + ".png"]})
        }

        else {
            message.reply("**NSFW הפקודה הזאת עובדת רק בחדר**");
        }
    }
    
});

client.login("NDk5NjUwODU4NDg1Njc4MTIw.DqILuw.Do1X6dZXGSeCbxGru-ll-1MuFng");
