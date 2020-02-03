const discord = require("discord.js")
const botconfig = require("./botconfig.json");
const fs = require('fs');
const moment = require('moment'); // The moment package, lets you view the current date and time in a nice format.
const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Gebruiker/", (err, files) => {
 
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
      console.log("Kon geen files vinden");
      return;
  }

  jsFiles.forEach((f, i) => {

      var fileGet = require(`./Gebruiker/${f}`);
      console.log(`De file ${f} is toegevoegd`);
    
      bot.commands.set(fileGet.help.name, fileGet);

  })

})

// JSON Files
let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8')); // This calls the JSON file

// Listener Event: Message Received (This will run every time a message is Received)
bot.on('message', message => {

  //Variables
  let sender = message.author; // The person who sent the message
  let msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  let prefix = botconfig.prefix;

  if (bot.user.id === message.author.id) { return } // This closes the rest of the script if the bot sends a message

  //Events
  let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8')); // We want to refresh userData every time someone sends a message

  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {} // This creates a json file for their user + guild if one is not made already.
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000; // This creates a money object for then if they don't have one already. 1000 is the money they start out with you can change this to whatever you want.
  if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = 'Not Collected'; // This creates the lastDaily, or the time they last collected their daily reward
  if (!userData[sender.id + message.guild.id].username) userData[sender.id + message.guild.id].username = message.author.username; // This creates an object, with the name of the username

  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => { // This writes the changes we just made to the JSON file.
    if (err) console.log(err);
  })
  //Commands
 if (msg === prefix + 'REKENING') {
   // Money [Acces your balance] this is triggered by money or balance

    var balanceEmbed = new discord.RichEmbed()
      .setTitle("Bank")
      .setColor('0xF1C40F')
      .setThumbnail("https://cdn.discordapp.com/emojis/669552722781143040.png?v=1")
      .addField("Rekening", message.author.username)
      .addField("Aantal Geld", userData[sender.id + message.guild.id].money);

    message.channel.send(balanceEmbed)
 }

  if (msg === prefix + 'DAILY') { // This runs the daily reward command, so they can get money each day.
    if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) { // This checks if the lastDaily object, is the same as the current date
      userData[sender.id + message.guild.id].lastDaily = moment().format('L') // This switches lastDaily with the current date, so they cant get it again today.
      userData[sender.id + message.guild.id].money += 500; // This adds €500 to the users account, you can change this to whatever you want.

      message.channel.send({
        embed: { // This tells them that thety got their money in chat.
          title: "Dagelijkse Beloning",
          description: "You got €500 added to your account!",
          setThumbnail: "https://cdn.discordapp.com/emojis/669552722781143040.png?v=1",
          color: 0xF1C40F // This is the color of the side bar, you can change this with the link in the description. Make sure to add 0x to the frost of it.
        }
      })
    } else {
      message.channel.send({
        embed: { // This tells them that they already got their daily reward.
          title: "Daily Reward",
          description: "You already collected your daily reward! You can collect your next reward **" + moment().endOf('day').fromNow() + '**.', // This tells them when they can also get their reward (End of the day)
          setThumbnail: "https://cdn.discordapp.com/emojis/669552722781143040.png?v=1",
          color: 0xF1C40F // This is the color of the side bar, you can change this with the link in the description. Make sure to add 0x to the frost of it.
        }
      })
    }
  }

  //Guild Info Command
  if (msg === prefix + 'GUILD') {

    // Variables // We want to define it at the top at 0, so that is resets each time and we can edit it.
    var guildMoney = 0; // Total money in the guild
    var guildUsers = 0;
    var guildRichest = ''; // This is the richest user.
    var guildRichest$ = 0; // This is the money the richest user has.

    for (var i in userData) { // A for loop, Loops through each object in userData.
      if (i.endsWith(message.guild.id)) { // This checks if the current them the6y are looking at ends with the guild ID of the message guild id.
        guildMoney += userData[i].money; // This adds the current amount of money to the total money.
        guildUsers += 1; // This adds one user to the total amount of users in the current guild who have a bank account ( in the JSON file).
        if (userData[i].money > guildRichest$) { // This checks if the items money is greater then the current highest money.
          guildRichest$ = userData[i].money; // This sets the current highest money
          guildRichest = userData[i].username; // This sets the username of the current richest person.

        }

      }

    } // Remember to always close IF statements. Also, remember this for loop is only grabbing one object and running it through the loop.

    var guildEmbed = new discord.RichEmbed()
      .setTitle("Guild Stats")
      .setColor('0XF1C40F')
      .setThumbnail("https://cdn.discordapp.com/emojis/669552722781143040.png?v=1")
      .addField("Accounts", guildUsers)
      .addField("Total Money", guildMoney)
      .addField("Richest Account", `${guildRichest} with ${guildRichest$}`);

    message.channel.send(guildEmbed)
  }



  // Make sure you don't put embed objects in quotes


  if (msg === prefix + 'GLOBAL') {

    // Variables // We want to define it at the top at 0, so that is resets each time and we can edit it.
    var globalMoney = 0; // Total money in the global
    var globalUsers = 0;
    var globalRichest = ''; // This is the richest user.
    var globalRichest$ = 0; // This is the money the richest user has.

    for (var i in userData) { // A for loop, Loops through each object in userData // Deleting the IF statement basically made it so that all users will be run through the for loop.
      globalMoney += userData[i].money; // This adds the current amount of money to the total money.
      globalUsers += 1; // This adds one user to the total amount of users in the current global who have a bank account ( in the JSON file).
      if (userData[i].money > globalRichest$) { // This checks if the items money is greater then the current highest money.
        globalRichest$ = userData[i].money; // This sets the current highest money
        globalRichest = userData[i].username; // This sets the username of the current richest person.

      }

    } // Remember to always close IF statements. Also, remember this for loop is only grabbing one object and running it through the loop.

    var embedGlobal = new discord.RichEmbed()
      .setTitle("Global Stats")
      .setColor('0XF1C40F')
      .setThumbnail("https://cdn.discordapp.com/emojis/669552722781143040.png?v=1")
      .addField("Accounts", globalUsers)
      .addField("Total Money", globalMoney)
      .addField("Richest Account", `${globalRichest} with ${globalRichest$}`); // This displays the richest person, and how much money they have.

    message.channel.send(embedGlobal)

  }

  if (msg === prefix + 'WORK') {
    var payment = Math.floor(Math.random() * 1000) + 1 + 1000 // Creates a random number between 1 - 2000.
    var shift = Math.floor(Math.random() * 10) + 1; // Creates a random number between 1 - 10
    var jobs = ["Cashier", "Walter", "Delivery Driver", "Builder", "Plumber", "Carpenter"]; // Creating a list for the bot to choose from as your accupation when the command is run.
    var job = Math.floor(Math.random() * jobs.length);
    
    userData[sender.id + message.guild.id].money += payment;
    message.channel.send({embed: {
      name: "job",
      description: `You worked as a **${jobs[job]}** for ${shift} hours and recieved ${payment} in return for the hard work you put in.`
    }})
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.log(err);
    })
  }


  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => { // This writes the changes we just made to the JSON file.
    if (err) console.log(err);
  })

});

bot.on('ready', () => {

  console.log(`${bot.user.username} is ingelogd`)

  bot.user.setActivity("StormComp Developing", { type: "STREAMING" });
});

bot.login(process.env.token);
