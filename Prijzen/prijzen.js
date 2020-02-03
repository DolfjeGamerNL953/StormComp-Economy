const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var prijzenEmbed = new discord.RichEmbed()
    .setTitle("Prijzen")
    .setDescription("Prijs Aantallen: \n Eten: Per 64, 32 of per stuk \n Vita: Per 16 of per stuk \n Kleding: Per 8 of per stuk \n Toys: Per 16 of per stuk \n Heads: Per 16 of per stuk \n\n Voor meer info over de pakketten doe !pakketten")
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField("Prijzen Pakketen:", "Storm kleding kerst: \n €14.518,30 \n\n Storm kleding enchant: \n €14.017,50 \n\n Storm kleding non enchant: \n €11.013,80 \n\n Storm toys: \n €7.057,60 \n\n Storm pro: \n €4.710,50 \n\n Storm vita: €2.740,50 \n\n Storm fruit: €1.005,20 \n\n Storm snoep: €944,90 \n\n Storm Head Pakket: €748,80 \n\n Storm overig: €730,50")
    .addField("Prijzen Eten:", "Golden appels: \n Per 64x: €1.016,80 \n Per 32x: €508,50 \n Per 1x: €15,90 \n\n Zalm: \n Per 64x: €754,20 \n Per 32x: €377,20 \n Per 1x: €11,80 \n\n Pizza: \n Per 64x: €754,20 \n Per 32x: €377,20 \n Per 1x: €11,80 \n\n Bacon: \n Per 64x: €653,20 \n Per 32x: €326,70 \n Per 1x: €10,20 \n\n Sushi: \n Per 64x: €653,20 \n Per 32x: €326,70 \n Per 1x: €10,20 \n\n Ananas: \n Per 64x: €552,20 \n Per 32x: €276,20 \n Per 1x: €8,70 \n\n Hamburger: \n Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Zuurstok: \n Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Friet: \n Per 64x: €451,20 \n Per 32x: €225,70 \n Per 1x: €7,10 \n\n Boekjes: \n Per 64x: €316,60 \n Per 32x: €158,40 \n Per 1x: €5,00 \n\n Lolly rood: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Jellybeans: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Appel: \n Per 64x: €249,20 \n Per 32x: €124,70 \n Per 1x: €4,00 \n\n Water: \n Per 64x: €208,80 \n Per 32x: €104,50 \n Per 1x: €3,40 \n\n Flesjes: \n  Per 64x: €208,80 \n Per 32x: €104,50 \n Per 1x: €3,40")
    .addField("Prijzen Vitamines:", "Vita A: \n Per 16x: €511,80 \n Per 1x: €32,00 \n\n Vita B: \n Per 16x: €612,80 \n Per 1x: €38,40 \n\n Vita C: \n Per 16x: €713,80 \n Per 1x: €44,70 \n\n Vita D: \n Per 16x: €915,80 \n Per 1x: €57,30")
    .addField("Prijzen kleding", "Lange kersttrui kerstman: \n Per 8x: €3.508,80 \n Per 1x: €438,60 \n\n Lange kersttrui rendier: \n Per 8x: €3.508,80 \n Per 1x: €438,60 \n\n Kersttrui rendier: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kersttrui kerstman: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kersttrui kerstboom: \n Per 8x: €2.506,30 \n Per 1x: €313,30 \n\n Kerstgroen non enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Kerstgroen enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Zuurstok rood non enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Zuurstok rood enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Vlinderstrikje roze non enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70 \n\n Vlinderstrikje roze enchant: \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Piek geel non enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70 \n\n Piek geel enchant \n Per 8x: €3.007,50 \n Per 1x: €376,00 \n\n Blauw ijs non enchant: \n Per 8x: €1.002,50 \n Per 1x: €125,40 \n\n Blauw ijs enchant: \n Per 8x: €2.005,00 \n Per 1x: €250,70")
    .addField("Prijzen toys", "Videocamera: \n Per 16x: €4.020,00 \n Per 1x: €251,30 \n\n Papegaai: \n Per 16x €804,,00 \n Per 1x: €50,30 \n\n Panda: \n Per 16x €804,,00 \n Per 1x: €50,30 \n\n Hulk: \n Per 16x €804,,00 \n Per 1x: €50,30 \n\n Rotjochie figuur \n Per 16x: €643,20 \n Per 1x: €40,20")
    .addField("Prijzen Heads", "Panda head: \n Per 16x: €227,30 \n Per 1x: €14,30 \n\n Blaze head: \n Per 16x €202,00 \n Per 1x: €12,70 \n\n Romeo30 Head: \n Per 16x: €161,60 \n Per 1x €10,10 \n\n Jordystorm Head:  Per 16x: €161,60 \n Per 1x €10,10")
    .setFooter("© 2019 StormCompany");

    message.channel.send(prijzenEmbed)
}

module.exports.help = {
    name: "prijzen"
}