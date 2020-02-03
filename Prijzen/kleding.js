const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var prijzenEmbed = new discord.RichEmbed()
    .setTitle("Prijzen")
    .setDescription("Prijs Aantallen: \n Kleding: Per 8 of per stuk")
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField("Prijzen kleding", "Lange kersttrui kerstman: \n Per 8x: €3.508,80 \n Per 1x: €438,60 \n\n Lange kersttrui rendier: \n Per 8x: €3.508,80 \n Per 1x: €438,60 \n\n Kersttrui rendier: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kersttrui kerstman: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kersttrui kerstboom: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kerstgroen non enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Kerstgroen enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Zuurstok rood non enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Zuurstok rood enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Vlinderstrikje roze non enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70 \n\n Vlinderstrikje roze enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Piek geel non enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70 \n\n Piek geel enchant \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Blauw ijs non enchant: \n Per 8x: €1.002,50 \n Per 1x: €125,40 \n\n Blauw ijs enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70")
    .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "kleding"
}