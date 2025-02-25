<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Xiao" src="https://i.imgur.com/R0D0f39.png">  

# Xiao
[![Build Status](https://travis-ci.org/dragonfire535/xiao.svg?branch=master)](https://travis-ci.org/dragonfire535/xiao)
[![Discord Server](https://discordapp.com/api/guilds/252317073814978561/embed.png)](https://discord.gg/sbMe32W)
[![Donate on Patreon](https://img.shields.io/badge/patreon-donate-orange.svg)](https://www.patreon.com/dragonfire535)
[![Donate on PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/dragonfire535)

> This bot is not available for invite.

Xiao is a Discord bot coded in JavaScript with
[discord.js](https://discord.js.org/) using the
[Commando](https://github.com/discordjs/Commando) command framework. With over
300 commands, she is one of the most feature-rich bots out there.

## Fun Information
- 340+ Commands
- 15,000+ lines of JavaScript
- 58,000+ lines of JSON data
- 2 years of development
- 3,000+ commits

## Installing

### Before You Begin

1. Make sure you have installed [Node.js](https://nodejs.org/en/) >=10 and [Git](https://git-scm.com/).
2. Clone this repository with `git clone https://github.com/dragonfire535/xiao.git`.
3. Run `cd xiao` to move into the folder that you just created.
4. Create a file named `.env` and fill it out as shown in `.env.example`.

### Windows

1. Open an **ADMIN POWERSHELL** window and run `npm i -g --production windows-build-tools`.
2. [Follow these instructions to install the dependencies for `node-canvas`](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows).
3. Run `npm i --production` in the folder you cloned the bot.
4. Run `npm i -g pm2` to install PM2.
5. Run `pm2 start Xiao.js --name xiao` to run the bot.

### Mac

1. Use a real (cheaper!) OS to host your bot.
2. ???
3. Profit.

### Ubuntu and other Debian-based systems

1. Run `apt update`.
2. Run `apt upgrade` to install the latest dependencies of your distro.
3. Run `apt install python` to install python.
4. [Follow these instructions to install the dependencies for `node-canvas`](https://github.com/Automattic/node-canvas/wiki/Installation%3A-Ubuntu-and-other-Debian-based-systems).
5. Run `npm i --production` in the folder you cloned the bot.
6. Run `npm i -g pm2` to install PM2.
7. Run `pm2 start Xiao.js --name xiao` to run the bot.

## Commands (341)
### Utility:

* **eval:** Executes JavaScript code.
* **changelog:** Responds with the bot's latest 10 commits.
* **credit:** Responds with a command's credits list.
* **donate:** Responds with the bot's donation links.
* **help:** Displays a list of available commands, or detailed information for a specific command.
* **info:** Responds with detailed bot information.
* **invite:** Responds with the bot's invite links.
* **ping:** Checks the bot's ping to the Discord server.

### Discord Information:

* **avatar:** Responds with a user's avatar.
* **channel:** Responds with detailed information on a channel.
* **discriminator:** Searches for other users with a certain discriminator.
* **emoji-image:** Responds with an emoji's full-scale image.
* **emoji-list:** Responds with a list of the server's custom emoji.
* **emoji:** Responds with detailed information on an emoji.
* **first-message:** Responds with the first message ever sent to a channel.
* **id:** Responds with a user's ID.
* **message-source:** Responds with a codeblock containing a message's contents.
* **message:** Responds with detailed information on a message.
* **role:** Responds with detailed information on a role.
* **server:** Responds with detailed information on the server.
* **user:** Responds with detailed information on a user.

### Random Response:

* **8-ball:** Asks your question to the Magic 8 Ball.
* **advice:** Responds with a random bit of advice.
* **bird:** Responds with a random image of a bird.
* **cat-fact:** Responds with a random cat fact.
* **cat:** Responds with a random cat image.
* **charlie-charlie:** Asks your question to Charlie.
* **choose:** Chooses between options you provide.
* **chuck-norris:** Responds with a random Chuck Norris joke.
* **coin:** Flips a coin.
* **compliment:** Compliments a user.
* **dog-fact:** Responds with a random dog fact.
* **dog:** Responds with a random dog image.
* **draw-cards:** Draws a random hand of playing cards.
* **duck:** Responds with a random duck image.
* **fact-core:** Responds with a random Fact Core quote.
* **fact:** Responds with a random fact.
* **fidget:** Responds with a random image of Fidget.
* **fortune:** Responds with a random fortune.
* **fox:** Responds with a random fox image.
* **github-zen:** Responds with a random GitHub design philosophy.
* **joke:** Responds with a random joke.
* **karen:** Responds with a random image of Karen.
* **kiss-marry-kill:** Determines who to kiss, who to marry, and who to kill.
* **magic-conch:** Asks your question to the Magic Conch.
* **meme:** Responds with a random meme.
* **name:** Responds with a random name, with the gender of your choice.
* **number-fact:** Responds with a random fact about a specific number.
* **offspring:** Determines if your new child will be a boy or a girl.
* **opinion:** Determines the opinion on something.
* **oracle-turret:** Responds with a random Oracle Turret quote.
* **pun:** Responds with a random pun.
* **quantum-coin:** Flips a coin that lands on some form of nothing.
* **quote:** Responds with a random quote.
* **random-user:** Randomly chooses a member of the server.
* **rate:** Rates something.
* **roast:** Roasts a user.
* **roll:** Rolls a dice with a maximum value of your choice.
* **security-key:** Responds with a random security key.
* **shiba:** Responds with a random image of a Shiba Inu.
* **shower-thought:** Responds with a random shower thought, directly from r/Showerthoughts.
* **smw-level:** Responds with a random Super Mario World level name.
* **subreddit:** Responds with a random post from a subreddit.
* **suggest-command:** Suggests a random command for you to try.
* **superpower:** Responds with a random superpower.
* **this-for-that:** So, basically, it's like a bot command for this dumb meme.
* **waifu:** Responds with a randomly generated waifu and backstory.
* **would-you-rather:** Responds with a random "Would you rather ...?" question.
* **xiao:** Responds with a random image of Xiao Pai.

### Single Response:

* **can-you-not:** Can YOU not?
* **dark-light:** Determines whether you use dark or light theme.
* **eat-pant:** Eat pant.
* **eggs-get-laid:** Sends the ultimate roast.
* **fly:** Sends a fake fly that looks surprisngly real.
* **give-flower:** Gives Xiao Pai a flower.
* **hi:** Hello.
* **isnt-joke:** Isn't joke...
* **its-joke:** It's joke!
* **just-do-it:** Sends a link to the "Just Do It!" motivational speech.
* **kazuma-kazuma:** Hai, Kazuma desu.
* **lenny:** Responds with the lenny face.
* **no-u:** no u
* **spam:** Responds with a picture of Spam.
* **tableflip:** Flips a table... With animation!
* **wynaut:** Why not? Wynaut?
* **yoff:** Posts a picture that truly defines modern art.

### Events:

* **apod:** Responds with today's Astronomy Picture of the Day.
* **calendar:** Responds with today's holidays.
* **days-until:** Responds with how many days there are until a certain date.
* **doomsday-clock:** Responds with the current time of the Doomsday Clock.
* **google-doodle:** Responds with a Google Doodle, either the latest one or a random one from the past.
* **horoscope:** Responds with today's horoscope for a specific Zodiac sign.
* **humble-bundle:** Responds with the current Humble Bundle.
* **is-tuesday:** Determines if today is Tuesday.
* **neko-atsume-password:** Responds with today's Neko Atsume password.
* **time:** Responds with the current time in a particular location.
* **today-in-history:** Responds with an event that occurred today in history.

### Search:

* **anime:** Searches AniList for your query, getting anime results.
* **azur-lane:** Responds with information on an Azur Lane ship.
* **book:** Searches Google Books for a book.
* **bulbapedia:** Searches Bulbapedia for your query.
* **character:** Searches AniList for your query, getting character results.
* **danbooru:** Responds with an image from Danbooru, with optional query.
* **define:** Defines a word.
* **derpibooru:** Responds with an image from Derpibooru.
* **deviantart:** Responds with an image from a DeviantArt section, with optional query.
* **docs:** Searches the Discord.js docs for your query.
* **esrb:** Searches ESRB for your query.
* **flickr:** Searches Flickr for your query.
* **giphy:** Searches Giphy for your query.
* **github:** Responds with information on a GitHub repository.
* **google-autofill:** Responds with a list of the Google Autofill results for a particular query.
* **google:** Searches Google for your query.
* **gravatar:** Responds with the Gravatar for an email.
* **http-cat:** Responds with a cat for an HTTP status code.
* **http-dog:** Responds with a dog for an HTTP status code.
* **imgur:** Searches Imgur for your query.
* **itunes:** Searches iTunes for your query.
* **jisho:** Defines a word, but with Japanese.
* **kickstarter:** Searches Kickstarter for your query.
* **know-your-meme:** Searches Know Your Meme for your query.
* **konachan:** Responds with an image from Konachan, with optional query.
* **league-of-legends:** Responds with information on a League of Legends champion.
* **manga:** Searches AniList for your query, getting manga results.
* **map:** Responds with a map of a specific location.
* **mayo-clinic:** Searches Mayo Clinic for your query.
* **mdn:** Searches MDN for your query.
* **movie:** Searches TMDB for your query, getting movie results.
* **nasa:** Searches NASA's image archive for your query.
* **neopet:** Responds with the image of a specific Neopet.
* **neopets-item:** Responds with information on a specific Neopets item.
* **npm:** Responds with information on an NPM package.
* **osu:** Responds with information on an osu! user.
* **periodic-table:** Finds an element on the periodic table.
* **pokedex:** Searches the Pokédex for a Pokémon.
* **recipe:** Searches for recipes based on your query.
* **reddit:** Responds with information on a Reddit user.
* **rotten-tomatoes:** Searches Rotten Tomatoes for your query.
* **rule:** Responds with a rule of the internet.
* **safebooru:** Responds with an image from Safebooru, with optional query.
* **soundcloud:** Searches SoundCloud for your query.
* **stack-overflow:** Searches Stack Overflow for your query.
* **steam:** Searches Steam for your query.
* **stocks:** Responds with the current stocks for a specific symbol.
* **tenor:** Searches Tenor for your query.
* **tumblr:** Responds with information on a Tumblr blog.
* **tv-show:** Searches TMDB for your query, getting TV show results.
* **twitter:** Responds with information on a Twitter user.
* **urban:** Defines a word, but with Urban Dictionary.
* **visual-novel:** Responds with information on a Visual Novel.
* **vocadb:** Searches VocaDB for your query.
* **wattpad:** Searches Wattpad for your query.
* **weather:** Responds with weather information for a specific location.
* **wikia:** Searches a specific Wikia wiki for your query.
* **wikihow:** Searches Wikihow for your query.
* **wikipedia:** Searches Wikipedia for your query.
* **xkcd:** Responds with an XKCD comic, either today's, a random one, or a specific one.
* **youtube:** Searches YouTube for your query.
* **yu-gi-oh:** Responds with info on a Yu-Gi-Oh! card.

### Analyzers:

* **age:** Responds with how old someone born in a certain year is.
* **butt:** Determines a user's butt quality.
* **character-count:** Responds with the character count of text.
* **chinese-zodiac:** Responds with the Chinese Zodiac Sign for the given year.
* **coolness:** Determines a user's coolness.
* **dick:** Determines your dick size.
* **face:** Determines the race, gender, and age of a face.
* **gender:** Determines the gender of a name.
* **guess-looks:** Guesses what a user looks like.
* **iq:** Determines a user's IQ.
* **psycho-pass:** Determines your Crime Coefficient.
* **read-qr-code:** Reads a QR Code.
* **scrabble-score:** Responds with the scrabble score of a word.
* **severe-toxicity:** Determines the toxicity of text, but less sensitive to milder language.
* **ship:** Ships two users together.
* **toxicity:** Determines the toxicity of text.
* **what-anime:** Determines what anime a screenshot is from.
* **zodiac-sign:** Responds with the Zodiac Sign for the given month/day.

### Games:

* **balloon-pop:** Don't let yourself be the last one to pump the balloon before it pops!
* **battle:** Engage in a turn-based battle against another user or the AI.
* **blackjack:** Play a game of blackjack.
* **box-choosing:** Do you believe that there are choices in life? Taken from Higurashi Chapter 4.
* **captcha:** Try to guess what the captcha says.
* **chance:** Attempt to win with a 1 in 1000 (or your choice) chance of winning.
* **doors:** Open the right door, and you win the money! Make the wrong choice, and you get the fire!
* **emoji-emoji-revolution:** Can you type arrow emoji faster than anyone else has ever typed them before?
* **fishy:** Go fishing.
* **google-feud:** Attempt to determine the top suggestions for a Google search.
* **gunfight:** Engage in a western gunfight against another user. High noon.
* **hangman:** Prevent a man from being hanged by guessing a word as fast as you can.
* **hunger-games:** Simulate a Hunger Games match with up to 24 tributes.
* **lottery:** Attempt to win the lottery with 6 numbers.
* **math-quiz:** See how fast you can answer a math problem in a given time limit.
* **quiz-duel:** Answer a series of quiz questions against an opponent.
* **quiz:** Answer a quiz question.
* **rock-paper-scissors:** Play Rock-Paper-Scissors.
* **roulette:** Play a game of roulette.
* **slots:** Play a game of slots.
* **sorting-hat:** Take a quiz to determine your Hogwarts house.
* **tic-tac-toe:** Play a game of tic-tac-toe with another user.
* **typing-test:** See how fast you can type a sentence in a given time limit.
* **whos-that-pokemon:** Guess who that Pokémon is.
* **word-chain:** Try to come up with words that start with the last letter of your opponent's word.

### Image Manipulation:

* **achievement:** Sends a Minecraft achievement with the text of your choice.
* **approved:** Draws an "approved" stamp over an image or a user's avatar.
* **be-like-bill:** Sends a "Be Like Bill" meme with the name of your choice.
* **brazzers:** Draws an image with the Brazzers logo in the corner.
* **circle:** Draws an image or a user's avatar as a circle.
* **color:** Sends an image of the color you choose.
* **contrast:** Draws an image or a user's avatar but with contrast.
* **create-qr-code:** Converts text to a QR Code.
* **demotivational:** Draws an image or a user's avatar and the text you specify as a demotivational poster.
* **distort:** Draws an image or a user's avatar but distorted.
* **fire:** Draws a fiery border over an image or a user's avatar.
* **frame:** Draws a frame around an image or a user's avatar.
* **glitch:** Draws an image or a user's avatar but glitched.
* **greyscale:** Draws an image or a user's avatar in greyscale.
* **gru-plan:** Sends a Gru's Plan meme with steps of your choice.
* **ifunny:** Draws an image with the iFunny logo.
* **illegal:** Makes President Trump make your text illegal.
* **invert:** Draws an image or a user's avatar but inverted.
* **kyon-gun:** Draws an image or a user's avatar behind Kyon shooting a gun.
* **lisa-presentation:** Sends a "Lisa Presentation" meme with the presentation of your choice.
* **meme-gen:** Sends a meme with the text and background of your choice.
* **minecraft-skin:** Sends the Minecraft skin for a user.
* **needs-more-jpeg:** Draws an image or a user's avatar as a low quality JPEG.
* **new-password:** Sends a "Weak Password/Strong Password" meme with the passwords of your choice.
* **nike-ad:** Sends a "Believe in Something" Nike Ad meme with the text of your choice.
* **osu-signature:** Creates a card based on an osu! user's stats.
* **pixelize:** Draws an image or a user's avatar pixelized.
* **pokemon-fusion:** Fuses two Generation I Pokémon together.
* **rainbow:** Draws a rainbow over an image or a user's avatar.
* **rejected:** Draws a "rejected" stamp over an image or a user's avatar.
* **robohash:** Creates a robot based on the text you provide.
* **sepia:** Draws an image or a user's avatar in sepia.
* **shields-io-badge:** Creates a badge from shields.io.
* **silhouette:** Draws a silhouette of an image or a user's avatar.
* **sora-selfie:** Draws an image or a user's avatar behind Sora taking a selfie.
* **square:** Draws an image or a user's avatar as a square.
* **thug-life:** Draws "Thug Life" over an image or a user's avatar.
* **tint:** Draws an image or a user's avatar but tinted a specific color.
* **to-be-continued:** Draws an image with the "To Be Continued..." arrow.
* **vietnam-flashbacks:** Edits Vietnam flashbacks behind an image or a user's avatar.

### Avatar Manipulation:

* **3000-years:** Draws a user's avatar over Pokémon's "It's been 3000 years" meme.
* **avatar-fusion:** Draws a a user's avatar over a user's avatar.
* **beautiful:** Draws a user's avatar over Gravity Falls' "Oh, this? This is beautiful." meme.
* **bob-ross:** Draws a user's avatar over Bob Ross' canvas.
* **challenger:** Draws a user's avatar over Super Smash Bros.'s "Challenger Approaching" screen.
* **dexter:** Draws a user's avatar over the screen of Dexter from Pokémon.
* **distracted-boyfriend:** Draws three user's avatars over the "Distracted Boyfriend" meme.
* **drakeposting:** Draws two user's avatars over the "Drakeposting" meme.
* **food-broke:** Draws a user's avatar over the "Food Broke" meme.
* **girl-worth-fighting-for:** Draws a user's avatar as the object of Ling's affection.
* **hat:** Draws a hat over a user's avatar.
* **he-lives-in-you:** Draws a user's avatar over Simba from The Lion King's reflection.
* **hearts:** Draws hearts around a user's avatar.
* **i-have-the-power:** Draws a user's avatar over He-Man's face.
* **look-at-this-photograph:** Draws a user's avatar over Nickelback's photograph.
* **look-what-karen-have:** Draws a user's avatar over Karen's piece of paper.
* **rip:** Draws a user's avatar over a gravestone.
* **sip:** Draws a user's avatar sipping tea.
* **steam-card:** Draws a user's avatar on a Steam Trading Card.
* **steam-now-playing-classic:** Draws a user's avatar over a Steam "now playing" notification (old skin).
* **steam-now-playing:** Draws a user's avatar over a Steam "now playing" notification.
* **triggered:** Draws a user's avatar over the "Triggered" meme.
* **ultimate-tattoo:** Draws a user's avatar as "The Ultimate Tattoo".
* **wanted:** Draws a user's avatar over a wanted poster.
* **worthless:** Draws a user's avatar over Gravity Falls' "Oh, this? This is worthless." meme.
* **yu-gi-oh-token:** Draws a user's avatar over a blank Yu-Gi-Oh! Token card.

### Text Manipulation:

* **base64:** Converts text to/from Base64.
* **binary:** Converts text to binary.
* **braille:** Converts text to braille.
* **brony-speak:** Converts text to brony speak.
* **clap:** Sends 👏 text 👏 like 👏 this.
* **cow-say:** Makes a cow say your text.
* **cursive:** Converts text to cursive.
* **dvorak:** Converts text to Dvorak encoding.
* **embed:** Sends text in an embed.
* **emojify:** Converts text to emoji form.
* **fancy:** Converts text to fancy letters.
* **hex:** Converts text to hex.
* **latlmes:** Creates a Latlmes fake link that redirects to a rickroll.
* **lmgtfy:** Creates a LMGTFY link with the query you provide.
* **lowercase:** Converts text to lowercase.
* **md5:** Creates a hash of text with the MD5 algorithm.
* **mocking:** SenDs TexT lIkE ThiS.
* **morse:** Converts text to morse code.
* **nobody-name:** Converts a name into the Organization XIII style.
* **owo:** OwO.
* **pig-latin:** Converts text to pig latin.
* **pirate:** Converts text to pirate.
* **portal-send:** Send a message to a portal channel.
* **repeat:** Repeat text over and over and over and over (etc).
* **reverse:** Reverses text.
* **say:** Make me say what you want, master.
* **sha-1:** Creates a hash of text with the SHA-1 algorithm.
* **sha-256:** Creates a hash of text with the SHA-256 algorithm.
* **ship-name:** Creates a ship name from two names.
* **shuffle:** Shuffles text.
* **snake-speak:** Convertsssss text to sssssnake ssssspeak.
* **spoiler-letter:** Sends text with each and every character as an individual spoiler.
* **superscript:** Converts text to tiny text.
* **tebahpla:** Reverses the alphabet of text.
* **temmie:** Converts text to Temmie speak.
* **translate:** Translates text to a specific language.
* **unspoiler:** Removes all spoilers from text.
* **uppercase:** Converts text to uppercase.
* **upside-down:** Flips text upside-down.
* **url-encode:** Encodes text to URL-friendly characters.
* **webhook:** Posts a message to the webhook defined in the bot owner's `process.env`.
* **yoda:** Converts text to Yoda speak.
* **zalgo:** Converts text to zalgo.

### Number Manipulation:

* **currency:** Converts currency from one currency to another.
* **final-grade:** Determines the grade you need to make on your final to get your desired course grade.
* **grade:** Determines your grade on an assignment on an 100-point scale.
* **gravity:** Determines weight on another planet.
* **math:** Evaluates a math expression.
* **prime:** Determines if a number is a prime number.
* **roman:** Converts a number to roman numerals.
* **scientific-notation:** Converts a number to scientific notation.
* **units:** Converts units to/from other units.

### Other:

* **cleverbot:** Talk to Cleverbot.
* **prune:** Deletes up to 99 messages from the current channel.
* **rename-all:** Renames every member of the server.
* **strawpoll:** Generates a Strawpoll with the options you provide.

### Roleplay:

* **blush:** Blushes at a user.
* **bro-hoof:** Gives a user a bro hoof.
* **eat:** Feeds a user.
* **fist-bump:** Fist-bumps a user.
* **high-five:** High Fives a user.
* **hold-hands:** Holds hands with a user.
* **hug:** Hugs a user.
* **kill:** Kills a user.
* **kiss:** Kisses a user.
* **pat:** Pats a user.
* **poke:** Pokes a user.
* **punch:** Punches a user.
* **slap:** Slaps a user.
* **sleep:** Puts a user to sleep.
* **wake-up:** Wakes up a user.
* **wave:** Waves at a user.
* **wink:** Winks at a user.

## Licensing

The bot is licensed under the GPL 3.0 license. See the file `LICENSE` for more
information. If you plan to use any part of this source code in your own bot, I
would be grateful if you would include some form of credit somewhere.
