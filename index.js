const express = require('express'),
      app = express(),
      port = 3000;
var   path = require('path'),
      bodyParser = require('body-parser'); //bruh you suck
let modulesload = ("../requireallmodules")

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { client: client });
});

app.get('/statslol', function(req, res) {
  res.render('statslol', { client: client });
});

app.get('/commands', function(req, res) {
  res.render('commands', { client: client });
});

var listeners = app.listen(port, function() {
  console.log(`app: http://localhost:${port}`);
});

const fs = require('fs');
const discord = require('discord.js');
const { Collection } = require('discord.js');
const prefix = 'zc';
const client = new discord.Client({
  partials: ['MESSAGE', 'CHANNEL'],
  fetchAllMembers: true,
  disableEveryone: true
});
client.queue = new Map();
client.vote = new Map();
client.search = new Map();
client.optINOUT = new Map();
const db = require('quick.db');
const { readdirSync } = require('fs');
const { sep } = require('path');
const { success, error, warning } = require('log-symbols');
const yaml = require('js-yaml');
const cooldown = new Set();
const fetch = require('node-fetch');
const myID = '704697854207459419';
const fontmaker = '459306892355698688';
const cdtime = 3;
const config = require('./config.json');
client.config = config;
var lockedList = ['userID1', 'userID2'];

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
  storage: './database.json',
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
    embedColor: 'YELLOW',
    reaction: '🎉'
  }
}); //hax

['commands', 'aliases'].forEach(x => (client[x] = new Collection()));//not really

const load = (dir = './commands/') => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files =>
      files.endsWith('.js')
    );
    for (const file of commands) {
      const pull = require(`${dir}/${dirs}/${file}`);
      if (
        pull.help &&
        typeof pull.help.name === 'string' &&
        typeof pull.help.category === 'string'
      ) {
        if (client.commands.get(pull.help.name))
          return console.warn(
            `${warning} Two or more commands have the same name ${
            pull.help.name
            }.`
          );

        client.commands.set(pull.help.name, pull);

        console.log(`${success} Loaded command ${pull.help.name}.`);
      } else {
        console.log(
          `${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`
        );

        continue;
      }

      if (pull.help.aliases && typeof pull.help.aliases === 'object') {
        pull.help.aliases.forEach(alias => {
          if (client.aliases.get(alias))
            return console.warn(
              `${warning} Two commands or more commands have the same aliases ${alias}`
            );
          client.aliases.set(alias, pull.help.name);
        });
      }
    }
  });
};

load();//loads some cmds

client.on('ready', () => {
  const activs = [`on ${client.guilds.cache.size} Servers! | zchelp`, `zchelp`];
  setInterval(function() {
    client.user.setActivity(
      activs[Math.round(Math.random() * (activs.length - 1))],
      { type: 'PLAYING' }
    );
  }, 20000);
  console.log(client.user.tag + process.env.REQUIREMODULES)//status; If one module is missing it will backup or kinda just like it will be assistant;
  throw err(e)
  console.log(client.config.owners)
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;//this

  let messageFetch = db.fetch(`guildMessages_${message.guild.id}`);
  if (messageFetch === null) return;

  db.add(`messages2o_${message.guild.id}_${message.author.id}`, 1);
  let messagefetch = db.fetch(
    `messages2o_${message.guild.id}_${message.author.id}`
  );

  let messages;
  if (messagefetch == 0) messages = 0;
  //Level 0
  else if (messagefetch == 100) messages = 100;
  // Level 1
  else if (messagefetch == 200) messages = 200;
  // Level 2
  else if (messagefetch == 300) messages = 300;
  // Level 3
  else if (messagefetch == 400) messages = 400;
  // Level 4
  else if (messagefetch == 500) messages = 500;
  // Level 5
  else if (messagefetch == 600) messages = 600;
  // Level 6
  else if (messagefetch == 700) messages = 700;
  // Level 7
  else if (messagefetch == 800) messages = 800;
  // Level 8
  else if (messagefetch == 900) messages = 900;
  // Level 9
  else if (messagefetch == 1000) messages = 1000;
  // Level 10
  else if (messagefetch == 1100) messages = 1100;
  // Level 11
  else if (messagefetch == 1200) messages = 1200;
  // Level 12
  else if (messagefetch == 1300) messages = 1300;
  // Level 13
  else if (messagefetch == 1400) messages = 1400;
  // Level 14
  else if (messagefetch == 1500) messages = 1500;
  // Level 15
  else if (messagefetch == 1600) messages = 1600;
  // Level 16
  else if (messagefetch == 1700) messages = 1700;
  // Level 17
  else if (messagefetch == 1800) messages = 1800;
  // Level 18
  else if (messagefetch == 1900) messages = 1900;
  // Level 19
  else if (messagefetch == 2000) messages = 2000;
  // Level 20
  else if (messagefetch == 2100) messages = 2100;
  // Level 21
  else if (messagefetch == 2200) messages = 2200;
  // Level 22
  else if (messagefetch == 2300) messages = 2300;
  // Level 23
  else if (messagefetch == 2400) messages = 2400;
  // Level 24
  else if (messagefetch == 2500) messages = 2500;
  // Level 25
  else if (messagefetch == 2600) messages = 2600;
  // Level 26
  else if (messagefetch == 2700) messages = 2700;
  // Level 27
  else if (messagefetch == 2800) messages = 2800;
  // Level 28
  else if (messagefetch == 2900) messages = 2900;
  // Level 29
  else if (messagefetch == 3000) messages = 3000;
  // Level 30
  else if (messagefetch == 3100) messages = 3100;
  // Level 31
  else if (messagefetch == 3200) messages = 3200;
  // Level 32
  else if (messagefetch == 3300) messages = 3300;
  // Level 33
  else if (messagefetch == 3400) messages = 3400;
  // Level 34
  else if (messagefetch == 3500) messages = 3500;
  // Level 35
  else if (messagefetch == 3600) messages = 3600;
  // Level 36
  else if (messagefetch == 3700) messages = 3700;
  // Level 37
  else if (messagefetch == 3800) messages = 3800;
  // Level 38
  else if (messagefetch == 3900) messages = 3900;
  // Level 39
  else if (messagefetch == 4000) messages = 4000;
  // Level 40
  else if (messagefetch == 4100) messages = 4100;
  // Level 41
  else if (messagefetch == 4200) messages = 4200;
  // Level 42
  else if (messagefetch == 4300) messages = 4300;
  // Level 43
  else if (messagefetch == 4400) messages = 4400;
  // Level 44
  else if (messagefetch == 4500) messages = 4500;
  // Level 45
  else if (messagefetch == 4600) messages = 4600;
  // Level 46
  else if (messagefetch == 4700) messages = 4700;
  // Level 47
  else if (messagefetch == 4800) messages = 4800;
  // Level 48
  else if (messagefetch == 4900) messages = 4900;
  // Level 49
  else if (messagefetch == 5000) messages = 5000;
  // level 50
  else if (messagefetch == 5100) messages = 5100;
  // level 51
  else if (messagefetch == 5200) messages = 5200;
  // level 52
  else if (messagefetch == 5300) messages = 5300;
  // level 53
  else if (messagefetch == 5400) messages = 5400;
  // level 54
  else if (messagefetch == 5500) messages = 5500;
  // level 55
  else if (messagefetch == 5600) messages = 5600;
  // level 56
  else if (messagefetch == 5700) messages = 5700;
  // level 57
  else if (messagefetch == 5800) messages = 5800;
  // level 58
  else if (messagefetch == 5900) messages = 5900;
  // level 59
  else if (messagefetch == 6000) messages = 6000;
  // level 60
  else if (messagefetch == 6100) messages = 6100;
  // level 61
  else if (messagefetch == 6200) messages = 6200;
  // level 62
  else if (messagefetch == 6300) messages = 6300;
  // level 63
  else if (messagefetch == 6400) messages = 6400;
  // level 64
  else if (messagefetch == 6500) messages = 6500;
  // level 65
  else if (messagefetch == 6600) messages = 6600;
  // level 66
  else if (messagefetch == 6700) messages = 6700;
  // level 67
  else if (messagefetch == 6800) messages = 6800;
  // level 68
  else if (messagefetch == 6900) messages = 6900;
  // level 69
  else if (messagefetch == 7000) messages = 7000;
  // level 70
  else if (messagefetch == 7100) messages = 7100;
  // level 71
  else if (messagefetch == 7200) messages = 7200;
  // level 72
  else if (messagefetch == 7300) messages = 7300;
  // level 73
  else if (messagefetch == 7400) messages = 7400;
  // level 74
  else if (messagefetch == 7500) messages = 7500;
  // level 75
  else if (messagefetch == 7600) messages = 7600;
  // level 76
  else if (messagefetch == 7700) messages = 7700;
  // level 77
  else if (messagefetch == 7800) messages = 7800;
  // level 78
  else if (messagefetch == 7900) messages = 7900;
  // level 79
  else if (messagefetch == 8000) messages = 8000;
  // level 80
  else if (messagefetch == 8100) messages = 8100;
  // level 81
  else if (messagefetch == 8200) messages = 8200;
  // level 82
  else if (messagefetch == 8300) messages = 8300;
  // level 83
  else if (messagefetch == 8400) messages = 8400;
  // level 84
  else if (messagefetch == 8500) messages = 8500;
  // level 85
  else if (messagefetch == 8600) messages = 8600;
  // level 86
  else if (messagefetch == 8700) messages = 8700;
  // level 87
  else if (messagefetch == 8800) messages = 8800;
  // level 88
  else if (messagefetch == 8900) messages = 8900;
  // level 89
  else if (messagefetch == 9000) messages = 9000;
  // level 90
  else if (messagefetch == 9100) messages = 9100;
  // level 91
  else if (messagefetch == 9200) messages = 9200;
  // level 92
  else if (messagefetch == 9300) messages = 9300;
  // level 93
  else if (messagefetch == 9400) messages = 9400;
  // level 94
  else if (messagefetch == 9500) messages = 9500;
  // level 95
  else if (messagefetch == 9600) messages = 9600;
  // level 96
  else if (messagefetch == 9700) messages = 9700;
  // level 97
  else if (messagefetch == 9800) messages = 9800;
  // level 98
  else if (messagefetch == 9900) messages = 9900;
  // level 99
  else if (messagefetch == 10000) messages = 10000; // level 100

  if (!isNaN(messages)) {
    db.add(`levelo_${message.guild.id}_${message.author.id}`, 1);
    let levelfetch = db.fetch(
      `levelo_${message.guild.id}_${message.author.id}`
    );
    let lvlmessage = db.get(`lvlmessage_${message.guild.id}`);
    if (!lvlmessage) {
      lvlmessage = 'Congrats you leveled up to';
    }
    let levelembed = new discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setDescription(`${message.author}, ${lvlmessage} ${levelfetch}!`)
      .setFooter(`zcdisablexp To Disable Level Up Messages! zcsetleve
            message to set level up msg!`);
    message.channel.send(levelembed);
  }
});

client.on('message', async message => {
  if (message.channel.type === 'dm') {
  if (message.author.bot) return;
    const response = await fetch(
      `https://some-random-api.ml/chatbot?message=${encodeURIComponent(
        message.content
      )}`
    );
    const json = await response.json();
    message.author.send(json.response);
  }
});

client.on('message', async message => {
  if (message.author.bot) return;
  let cmdlol = db.get(`cmdlol_${message.guild.id}`);

  let responds = db.get(`responds_${message.guild.id}`);

  const argslel = message.content.slice(prefix.length).split(/ +/);
  const commandlol = argslel.shift().toLowerCase();

  if (commandlol === `${cmdlol}`) {
    return message.channel.send(`${responds}`);
  }

  if (commandlol === 'reportbug') {
    const person = message.author.username;
    const userID = message.author.id;

    if (userID == lockedList) {
      message.channel.send(
        `${
        process.env.ERROR
        }You have abused this feature before and as such have been put on a blacklist`
      );
    } else {
      let bug = argslel.slice(0).join(' ');

      if (!bug) {
        message.channel.send(
          `${
          process.env.ERROR
          }You are attempting to send a bug report without listing a bug!`
        );
      } else {
        client.users.fetch(myID).then(user => {
          user.send(
            `${person} of ${message.guild.name} (Guild ID: ${
            message.guild.id
            }, User ID: ${userID}) reported the bug: ${bug}`
          );
        });
        message.channel.send(
          `${
          process.env.ZEROCHANYEAH
          }Your bug was reported. If you abuse this feature you will be put on a blacklist and will be prevented from using this command!`
        );
      }
    }
  }
  if (commandlol === 'contact') {
    const person2 = message.author.username;
    const userID2 = message.author.id;

    if (userID2 == lockedList) {
      message.channel.send(
        `${
        process.env.ERROR
        }You're abusing this feature!`
      );
    } else {
      let messagecontact = argslel.slice(0).join(' ');

      if (!messagecontact) {
        message.channel.send(
          `${
          process.env.ERROR
          }You are trying to contact the developer but no message?`
        );
      } else {
        client.users.fetch(myID).then(user => {
          user.send(
            `${person2} of ${message.guild.name} (Guild ID: ${
            message.guild.id
            }, User ID: ${userID2}) contacted you: ${messagecontact}`
          );
        });
        message.channel.send(
          `${
          process.env.ZEROCHANYEAH
          }You Contacted the developer! If you abuse this feature you will be on blacklisted!`
        );
      }
    }
  }
if (commandlol === 'eval') {
  function clean(text) {
            if (typeof text === "string")
                return text
                    .replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        let owner = ['704697854207459419']

        if (!owner.includes(message.author.id)) return;

        try {
            const code = argslel.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            message.react("✅");
            var emb = new discord.MessageEmbed()
                .setTitle('Result')
                .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setColor(process.env.COLOR)
            message.channel.send(emb);
        } catch (err) {
            message.react("⚠");
            var emb = new discord.MessageEmbed()
                .setTitle('Result')
                .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setColor(process.env.COLOR)
            message.channel.send(emb);
        }
}
if(commandlol === 'getinvite') {
 let ownerid2 = ['704697854207459419']
  if (message.author.id == ownerid2) {
    let guild = null;

        if (!argslel[0]) return message.channel.send("Enter An Name")

        if(argslel[0]){
            let fetched = client.guilds.cache.find(g => g.name === argslel.join(" "));
            let found = client.guilds.cache.get(argslel[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send("Invalid Name!");
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send("An Error Has Occured Try Again!"); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${argslel.join(' ')}\` - Bot is Not in this server`);
        }
    } else {
        return;
    }
    }
  if (message.author.bot || !message.guild) return;
  if (message.channel.id === db.get(`zerochanchannel_${message.guild.id}`)) {
    message.channel.startTyping();
    const response = await fetch(
      `https://some-random-api.ml/chatbot?message=${encodeURIComponent(
        message.content
      )}`
    );
    const json = await response.json();
    message.channel.send(json.response);
    message.channel.stopTyping(true);
  }

  if (message.author.bot) return;

  if (!message.content.toLowerCase().startsWith(prefix)) return;
  //What i will type now must be in a message event under "if(!message.content.startSwith(prefix)) return"
  if (cooldown.has(message.author.id)) {
    return message.channel.send(
      `${process.env.ERROR} <@${
      message.author.id
      }> Please wait 3 seconds between each commands!`
    );
    console.log(`${message.author.tag} Is Spamming!`)
  }
  cooldown.add(message.author.id);

  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, cdtime * 1000); //This should be in millisends (ms)

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  let command;

  if (message.author.bot || !message.guild) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message.author);

  if (!message.content.toLowerCase().startsWith(prefix)) return;

  if (cmd.length === 0) return;
  if (client.commands.has(cmd)) command = client.commands.get(cmd);
  else if (client.aliases.has(cmd))
    command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.snipes = new Map();
client.on('messageDelete', function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});
client.on('guildCreate', async guild => {
let defaultChannel = '';
guild.channels.cache.forEach(channel => {
if (channel.type == 'text' && defaultChannel == '') {
if (channel.permissionsFor(guild.me).has('SEND_MESSAGES')) {
defaultChannel = channel;
  }
}
});
const fuckingembed = new discord.MessageEmbed()
.setColor(process.env.COLOR)
.setTitle(`${process.env.ZEROCHANHI}Hello!`)
.addField(`Thanks for inviting me Senpai!`, `Type ${prefix}help For my Commands!`)
.addField(`For my info's!`, `${prefix}info`)
.addField(`To report bugs`, `Type ${prefix}reportbug!`)
.addField(`**Currently In** ${client.guilds.cache.size} Servers!`, `[Invite Me!](https://discord.com/api/oauth2/authorize?client_id=766551794255265823&permissions=2147483639&scope=bot)`)
.setFooter('にろいつ');
defaultChannel.send(fuckingembed);
});

client.login(process.env.TOKEN);
