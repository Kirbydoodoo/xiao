const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');
const { verify } = require('../../util/Util');
const emojis = ['⬆', '↗', '➡', '↘', '⬇', '↙', '⬅', '↖'];

module.exports = class EmojiEmojiRevolutionCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emoji-emoji-revolution',
			aliases: ['eer'],
			group: 'games',
			memberName: 'emoji-emoji-revolution',
			description: 'Can you type arrow emoji faster than anyone else has ever typed them before?',
			guildOnly: true,
			args: [
				{
					key: 'opponent',
					prompt: 'What user would you like to play against?',
					type: 'user'
				}
			]
		});
	}

	async run(msg, { opponent }) {
		if (opponent.bot) return msg.reply('Bots may not be played against.');
		if (opponent.id === msg.author.id) return msg.reply('You may not play against yourself.');
		const current = this.client.games.get(msg.channel.id);
		if (current) return msg.reply(`Please wait until the current game of \`${current.name}\` is finished.`);
		this.client.games.set(msg.channel.id, { name: this.name });
		try {
			await msg.say(`${opponent}, do you accept this challenge?`);
			const verification = await verify(msg.channel, opponent);
			if (!verification) {
				this.client.games.delete(msg.channel.id);
				return msg.say('Looks like they declined...');
			}
			let turn = 0;
			let aPts = 0;
			let oPts = 0;
			while (turn < 10) {
				++turn;
				const emoji = emojis[Math.floor(Math.random() * emojis.length)];
				await msg.say(emoji);
				const filter = res => [msg.author.id, opponent.id].includes(res.author.id) && res.content === emoji;
				const win = await msg.channel.awaitMessages(filter, {
					max: 1,
					time: 30000
				});
				if (!win.size) {
					await msg.say('Hmm... No one even tried that round.');
					continue;
				}
				const winner = win.first().author;
				if (winner.id === msg.author.id) ++aPts;
				else ++oPts;
				await msg.say(stripIndents`
					${winner} won this round!
					**${msg.author.username}:** ${aPts}
					**${opponent.username}:** ${oPts}
				`);
			}
			this.client.games.delete(msg.channel.id);
			if (aPts === oPts) return msg.say('It\'s a tie!');
			const userWin = aPts > oPts;
			return msg.say(`You win ${userWin ? msg.author : opponent} with ${userWin ? aPts : oPts} points!`);
		} catch (err) {
			this.client.games.delete(msg.channel.id);
			throw err;
		}
	}
};
