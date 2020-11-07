module.exports.("./requireallmodules")

   let helpcmd = db.get(`helpcmd_${message.author.id}`)
    if(!helpcmd) {..
      const embedd = new discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setTitle(`${process.env.ZEROCHANHI} Welcome!`)//
      .setDescription(`Hello ${message.author.username}! Seems it's your first time Using my commands! Please react 🌟 If you agree with the Rules!`)
      .addField(`General`, `Make sure to follow This Simple Rules!`)
      .addField(`${process.env.YELLOWARROW}__No command spam.__`, `I can view my Bot log's so if you spam you will be in black listed! 10 Prefix + Command spam every 30 seconds = a warning message then blacklisted.`)
      .addField(`${process.env.YELLOWARROW}__Don't abuse the Report bug command.__`, `It will automatically send to me. And if you abuse or troll me by swearing or anything else you will also be in blacklisted. 5 abuse reports every minute = a warning message then blacklisted.`)
      .addField(`**This rules might change just execute the zcrules command. Since this is beta.**`, `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=766551794255265823&permissions=2147483639&scope=bot)**`, true)
      message.channel.send(embedd)
      message.react('🌟')...,


message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🌟') {
			db.add(`helpcmd_${message.author.id}`, 1)
			message.channel.send(`${process.env.ZEROCHANYEAH}Cool! Now retype zchelp to view my Commands!`)../
		} 
	})
	.catch(collected => {
		message.channel.send(`${process.env.ERROR} You did not agree the terms!`)
	});
    } else {
    const embed = new discord.MessageEmbed()
		.setColor(process.env.COLOR)
		.setAuthor(`${client.user.username} Help`, client.user.displayAvatarURL())
	if (args[0]) {
		let command = args[0];
		let cmd;
		if (client.commands.has(command)) {
			cmd = client.commands.get(command);
		}
		else if (client.aliases.has(command)) {
			cmd = client.commands.get(client.aliases.get(command));
		}
		if(!cmd) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${client.config.prefix}help\` for the list of the commands.`));
		command = cmd.help;
		embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
		embed.setDescription([
		  `<> means needed and () it is optional.`,
			`${process.env.ZEROCHANHI}|__**Command:**__ ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
			`__**Description:**__ ${command.description || "No Description provided."}`,
			`__**Usage:**__ ${command.usage ? `\`${client.config.prefix}${command.name} ${command.usage}\`` : "No Usage"} `,
			`__**Aliases:**__ ${command.aliases ? command.aliases.join(", ") : "None"}`,
			`__**Category:**__ ${command.category ? command.category : "General" || "Misc"}`,
		].join("\n"));
  return message.channel.send(embed)
	}
	const categories = readdirSync("./commands/");
	embed.setDescription([
		`Available commands.`,
		`${process.env.ZEROCHANYEAH}My prefix is **${client.config.prefix}**!`,
		`${client.config.prefix}help (command name) to see more info about specific command!`,
		`Encountered a bug? type ${client.config.prefix}reportbug`,
	].join("\n"));
	categories.forEach(category => {
		const dir = client.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);

		try {
			if (dir.size === 0) return;
			if (client.config.owners.includes(message.author.id)) embed.addField(`${process.env.YELLOWARROW}__**${capitalise}**__`, dir.map(c => `\`${c.help.name}\``).join(", "));
			else if (category !== "Developer") embed.addField(`${process.env.YELLOWARROW}__**${capitalise}**__`, dir.map(c => `\`${c.help.name}\``).join(", "));
		}
		catch (e) {
			console.log(e);
		}
	});
	const load = new discord.MessageEmbed()
		.setColor(process.env.COLOR)
		.setImage("https://media1.giphy.com/media/IpbC49VP0ixJTwotKs/giphy.gif")
		.setTitle("Loading....")
	return message.channel.send(load)
  .then((msg)=> {
  setTimeout(function(){
    msg.edit(embed);
  }, 3000)
})
};
	}

module.exports.help = {
	name: "help",
	aliases: ["h"],
	description: "Help command to show the commands",
	usage: "(command)",
	category: "Misc",
};throw err(e)
