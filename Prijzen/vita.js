const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var prijzenEmbed = new discord.RichEmbed()
        .setTitle("Prijzen")
        .setDescription("Prijs Aantallen: \n Vita: Per 16 of per stuk")
        .setColor("RANDOM")
        .setThumbnail(icon)
        .addField("Prijzen Vitamines:", "Vita A: \n Per 16x: €511,80 \n Per 1x: €32,00 \n\n Vita B: \n Per 16x: €612,80 \n Per 1x: €38,40 \n\n Vita C: \n Per 16x: €713,80 \n Per 1x: €44,70 \n\n Vita D: \n Per 16x: €915,80 \n Per 1x: €57,30")
        .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "vita"
}