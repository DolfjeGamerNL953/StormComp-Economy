const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw Idee")
        .setColor("RANDOM")
        .addField("Discordidee: ", idee)
        .addField("Ingezonden door: ", message.author);
 
        var userideeEmbed = new discord.RichEmbed()
        .setTitle("Idee")
        .setDescription("Idee:", idee)
        .setColor("RANDOM")
        .addField(":white_check_mark: = Goedgekeurd \n :x: = Afgekeurd \n :question: = er word over nagedacht \n :soon: = Het word binnenkort uitgevoerd");
        message.author.send("U heeft succesvol een idee geschreven, u idee:", userideeEmbed)
        
        // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "ideeën-discord");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');

        
    var ilogEmbed = new discord.RichEmbed()
    .setTitle("Nieuw Idee")
    .setColor("#00FF00")
    .addField("Idee: ", idee)
    .addField("Ingezonden door: ", message.author)
    .addField("**© 2019 StormCompany**");

    var ilogChannel = message.guild.channels.find("name", "ideeën-logs");
    if (!ilogChannel) return message.guild.send("Het kanaal is niet gevonden");
    ilogChannel.send(ilogEmbed);

    });
 
    // Einde.
 
}
 
module.exports.help = {
    name: "idee-discord",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}