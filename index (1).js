const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios')
const puppeteer = require('puppeteer');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});
// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('message_create', message => {
	if (message.body === '.ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
});

client.on('message', async message => {
    const content = message.body

        if(content === ".meme") {
            const meme = await axios("https://meme-api.com/gimme")
            .then(res => res.data)

            client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
        } else if(content === ".joke") {
            const joke = await axios("https://v2.jokeapi.dev/joke/Any?safe-mode")
            .then(res => res.data)

            const jokeMsg = await client.sendMessage(message.from, joke.setup || joke.joke)
            if(joke.delivery) setTimeout(function() { jokeMsg.reply(joke.delivery) }, 5000)
        }
        })


client.on('message_create', message => {
            if (message.body === '.aldi') {
                // send back "pong" to the chat the message was sent in
                client.sendMessage(message.from, 'USED TO SHOP AT ALDIS');
            }
        });


client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.coolcheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% cool`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .coolcheck command.');
                }
            }
        });
       
client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.cocksize')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomNumber = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `The cock of @${contact.number} is ${randomNumber} inches long`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .cocksize command.');
                }
            }
        });
       
client.on('message_create', async message => {
    const content = message.body.toLowerCase();
    if(content.startsWith('.definition')) {
        const word = content.split(' ')[1]; // Get the word after .definition
        if (word) {
            try {
                const response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${word}`);
                const definition = response.data.list[0].definition;
                const example = response.data.list[0].example;
                const responseMessage = `**Definition of ${word}:**\n${definition}\n\n**Example:**\n${example}`;
                message.reply(responseMessage);
            } catch (error) {
                message.reply('No definition found for that word.');
            }
        } else {
            message.reply('Please provide a word to define.');
        }
    }
});

client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.pedocheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% a pedo`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .pedocheck command.');
                }
            }
        });

client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.gaycheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% gay`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .gaycheck command.');
                }
            }
        });


client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.hornycheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% horny`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .hornycheck command.');
                }
            }
        });

client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.cutecheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% cute`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .cutecheck command.');
                }
            }
        });

client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.brainrotcheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage}% brainrotted`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .brainrotcheck command.');
                }
            }
        });


client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.height')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 11); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage} feet tall`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .height command.');
                }
            }
        });
       
client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.heightincm')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 251); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} is ${randomPercentage} cm tall`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .height command.');
                }
            }
        });
    
client.on('message', async message => {
    if(message.body.toLowerCase().startsWith('.gpt')) {
        const prompt = message.body.replace('.gpt', '').trim();
        if (prompt) {
            try {
                const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                    prompt: prompt,
                    max_tokens: 150
                }, {
                    headers: {
                        'Authorization': `Bearer ${INSERT_OPENAI_KEY_HERE}`
                    }
                });

                const reply = response.data.choices[0].text.trim();
                message.reply(reply);
            } catch (error) {
                console.error('Error with OpenAI API:', error);
                message.reply('Sorry, there was an error processing your request.');
            }
        } else {
            message.reply('Please provide a prompt for ChatGPT.');
        
// Start your client
client.initialize();
