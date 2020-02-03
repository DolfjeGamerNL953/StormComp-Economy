const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    // {prefix}report speler reden

    var prefix = '!'

    if (!args[0]) return message.channel.send(`"Gebruik: ${prefix}report <gebruikersnaam> <redenen>.`)

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Speler is niet te vinden / geef een speler op.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Gelieve een reden op te geven.")

    var reportEmbed = new discord.RichEmbed()
        .setDescription("Reports")
        .setColor("ff0000")
        .addField("Reported gebruiker", `${user} met ID ${user.id}`)
        .addField("Report door", `${message.author} met het id ${message.author.id}`)
        .addField("Reden", reason)
        .setFooter(message.createdAt)
        .addField("**© 2019 StormCompany**");

        var userreportEmbed = new discord.RichEmbed()
        .setTitle("Report")
        .setDescription("U heeft succesvol deze gebruiker gerapporteerd bij het Storm Comp Staff")
        .setColor("ff0000")
        .addField("De door u gerapporteerde gebruiker:", `${user} met ID ${user.id}`)
        .addField("De door u opgegeven reden", reason)
        .setFooter("**© 2019 StormCompany**");
        message.author.send(userreportEmbed)
        
    var channelReport = message.guild.channels.find("name", "report-logs");
    if (channelReport) return message.channel.send("U heeft de gebruiker succesvol gerapporteerd");
    
    // ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
    message.delete();

    var reportEmbed = new discord.RichEmbed()
        .setDescription("Reports")
        .setColor("ff0000")
        .addField("Reported gebruiker", `${user} met ID ${user.id}`)
        .addField("Report door", `${message.author} met het id ${message.author.id}`)
        .addField("Reden", reason)
        .setFooter(message.createdAt);
        
        var reportlogChannel = message.guild.channels.find("name", "report-logs");
        if (!reportlogChannel) return message.guild.send("Het kanaal is niet gevonden");
        reportlogChannel.send(reportEmbed);

}


module.exports.help = {
    name: "report"
}