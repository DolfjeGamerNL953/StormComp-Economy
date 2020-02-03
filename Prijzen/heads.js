const discord = require("discord.js");
const fs = require('fs')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    //Variables
  let sender = message.author; // The person who sent the message
  let msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase


  
  //Events
  let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8')); // We want to refresh userData every time someone sends a message

  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {} // This creates a json file for their user + guild if one is not made already.
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000; // This creates a money object for then if they don't have one already. 1000 is the money they start out with you can change this to whatever you want.
  if (!userData[sender.id + message.guild.id].username) userData[sender.id + message.guild.id].username = message.author.username; // This creates an object, with the name of the username

        message.channel.send({
            embed: { // This tells them that thety got their money in chat.
                title: "Dagelijkse Beloning",
                description: "You got €500 added to your account!",
                setThumbnail: "https://cdn.discordapp.com/emojis/669552722781143040.png?v=1",
                color: 0xF1C40F // This is the color of the side bar, you can change this with the link in the description. Make sure to add 0x to the frost of it.
            }
        })
   
    }





module.exports.help = {
    name: "daily"
}