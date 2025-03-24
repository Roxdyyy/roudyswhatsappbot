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
                    const randomPercentage = Math.floor(Math.random() * 10); // Generate random percentage
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
        
            if(content.startsWith('.centimeterheight')) {
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
 
client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.iqcheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 200); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number} has ${randomPercentage} IQ`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .iqcheck command.');
                }
            }
        });
            
client.on('message_create', async message => {
            const content = message.body.toLowerCase();
        
            if(content.startsWith('.bigtittycheck')) {
                const mentionedContacts = await message.getMentions(); // Get mentioned contacts
        
                if (mentionedContacts.length > 0) {
                    const randomPercentage = Math.floor(Math.random() * 251); // Generate random percentage
                    const contact = mentionedContacts[0]; // Get the first mentioned contact
        
                    const chat = await message.getChat(); // Get the chat
                    const response = `@${contact.number}'s titties are ${randomPercentage}% big`;
                    chat.sendMessage(response, {
                        mentions: [contact]
                    });
                } else {
                    message.reply('Please tag someone with the .bigtittycheck command.');
                }
            }
        });
    

client.on('message_create', async message => {
    const content = message.body.toLowerCase();

    if(content.startsWith('.compatibility')) {
        const mentionedContacts = await message.getMentions(); // Get mentioned contacts

        if (mentionedContacts.length === 2) {
            const randomPercentage = Math.floor(Math.random() * 101); // Generate random percentage
            const contact1 = mentionedContacts[0];
            const contact2 = mentionedContacts[1];

            const chat = await message.getChat();
            const response = `💕 @${contact1.number} and @${contact2.number} are ${randomPercentage}% compatible! ${getShipMessage(randomPercentage)}`;
            
            chat.sendMessage(response, {
                mentions: [contact1, contact2]
            });
        } else {
            message.reply('Please tag exactly two people to ship them together! Usage: .ship @person1 @person2');
        }
    }
});

function getShipMessage(percentage) {
    if (percentage >= 90) return "A perfect match made in heaven! 👰🤵";
    if (percentage >= 70) return "They would make a great couple! 💑";
    if (percentage >= 50) return "There might be something there! 💫";
    if (percentage >= 30) return "Well... maybe in another lifetime 😅";
    return "Yikes... better stay as friends 😬";
}

const bibleVerses = [
    { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { verse: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." },
    { verse: "Psalm 23:1-3", text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
    { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
    { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
    { verse: "Proverbs 3:5-6", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
    { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
    { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
    { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
    { verse: "1 Corinthians 16:14", text: "Do everything in love." },
    { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
    { verse: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control." },
    { verse: "Joshua 1:9", text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
    { verse: "2 Timothy 1:7", text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind." },
    { verse: "1 John 4:19", text: "We love because he first loved us." },
    { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
    { verse: "Matthew 5:16", text: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
    { verse: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
    { verse: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
    { verse: "James 1:2-3", text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance." },
    { verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
    { verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
    { verse: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
    { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
    { verse: "Psalm 37:4", text: "Take delight in the Lord, and he will give you the desires of your heart." },
    { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
    { verse: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
    { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
    { verse: "1 Thessalonians 5:16-18", text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus." },
    { verse: "Psalm 34:8", text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him." },
    { verse: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
    { verse: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast." },
    { verse: "Deuteronomy 31:6", text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you." },
    { verse: "Psalm 27:1", text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?" },
    { verse: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
    { verse: "Romans 10:9", text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." },
    { verse: "Proverbs 16:9", text: "In their hearts humans plan their course, but the Lord establishes their steps." },
    { verse: "Psalm 103:13", text: "As a father has compassion on his children, so the Lord has compassion on those who fear him." },
    { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
    { verse: "Zephaniah 3:17", text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." },
    { verse: "Matthew 28:19-20", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you." },
    { verse: "Psalm 19:14", text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer." },
    { verse: "James 4:7", text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you." },
    { verse: "Hebrews 12:1-2", text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith." },
    { verse: "Psalm 133:1", text: "How good and pleasant it is when God's people live together in unity!" },
    { verse: "1 Corinthians 13:13", text: "And now these three remain: faith, hope and love. But the greatest of these is love." },
    { verse: "Isaiah 53:5", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
    { verse: "Philippians 1:6", text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus." },
    { verse: "2 Chronicles 7:14", text: "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land." },
    { verse: "Lamentations 3:23", text: "They are new every morning: great is thy faithfulness." },
    { verse: "John 15:13", text: "Greater love has no one than this: to lay down one's life for one's friends." },
    { verse: "Genesis 1:1", text: "In the beginning God created the heavens and the earth." },
    { verse: "Exodus 14:14", text: "The Lord will fight for you; you need only to be still." },
    { verse: "Psalm 91:1-2", text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'" },
    { verse: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." },
    { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
    { verse: "Matthew 5:44", text: "But I tell you, love your enemies and pray for those who persecute you." },
    { verse: "John 8:32", text: "Then you will know the truth, and the truth will set you free." },
    { verse: "Acts 1:8", text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses." },
    { verse: "Romans 1:16", text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes." },
    { verse: "1 Corinthians 10:13", text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear." },
    { verse: "2 Corinthians 4:18", text: "So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal." },
    { verse: "Galatians 2:20", text: "I have been crucified with Christ and I no longer live, but Christ lives in me." },
    { verse: "Ephesians 3:20", text: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us." },
    { verse: "Philippians 2:3-4", text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves." },
    { verse: "Colossians 3:2", text: "Set your minds on things above, not on earthly things." },
    { verse: "1 Timothy 4:12", text: "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity." },
    { verse: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." },
    { verse: "Hebrews 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword." },
    { verse: "James 1:22", text: "Do not merely listen to the word, and so deceive yourselves. Do what it says." },
    { verse: "1 Peter 3:15", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have." },
    { verse: "1 John 3:18", text: "Dear children, let us not love with words or speech but with actions and in truth." },
    { verse: "Revelation 3:20", text: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person." },
    { verse: "Genesis 28:15", text: "I am with you and will watch over you wherever you go, and I will bring you back to this land." },
    { verse: "Exodus 33:14", text: "The Lord replied, 'My Presence will go with you, and I will give you rest.'" },
    { verse: "Numbers 6:24-26", text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace." },
    { verse: "Deuteronomy 7:9", text: "Know therefore that the Lord your God is God; he is the faithful God, keeping his covenant of love to a thousand generations." },
    { verse: "Joshua 24:15", text: "But as for me and my household, we will serve the Lord." },
    { verse: "Ruth 1:16", text: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." },
    { verse: "1 Samuel 16:7", text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart." },
    { verse: "2 Samuel 22:31", text: "As for God, his way is perfect: The Lord's word is flawless; he shields all who take refuge in him." },
    { verse: "1 Kings 8:56", text: "Not one word has failed of all the good promises he gave through his servant Moses." },
    { verse: "1 Chronicles 16:11", text: "Look to the Lord and his strength; seek his face always." },
    { verse: "2 Chronicles 16:9", text: "For the eyes of the Lord range throughout the earth to strengthen those whose hearts are fully committed to him." },
    { verse: "Ezra 10:4", text: "Rise up; this matter is in your hands. We will support you, so take courage and do it." },
    { verse: "Nehemiah 8:10", text: "Do not grieve, for the joy of the Lord is your strength." },
    { verse: "Job 19:25", text: "I know that my redeemer lives, and that in the end he will stand on the earth." },
    { verse: "Psalm 16:11", text: "You make known to me the path of life; you will fill me with joy in your presence." },
    { verse: "Proverbs 18:10", text: "The name of the Lord is a fortified tower; the righteous run to it and are safe." },
    { verse: "Ecclesiastes 3:11", text: "He has made everything beautiful in its time. He has also set eternity in the human heart." },
    { verse: "Song of Songs 4:7", text: "You are altogether beautiful, my darling; there is no flaw in you." },
    { verse: "Isaiah 12:2", text: "Surely God is my salvation; I will trust and not be afraid." },
    { verse: "Jeremiah 33:3", text: "Call to me and I will answer you and tell you great and unsearchable things you do not know." },
    { verse: "Ezekiel 36:26", text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone." },
    { verse: "Daniel 3:17", text: "If we are thrown into the blazing furnace, the God we serve is able to deliver us from it." },
    { verse: "Hosea 6:3", text: "Let us acknowledge the Lord; let us press on to acknowledge him." },
    { verse: "Joel 2:13", text: "Return to the Lord your God, for he is gracious and compassionate." },
    { verse: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
    { verse: "Obadiah 1:17", text: "But on Mount Zion will be deliverance; it will be holy." },
    { verse: "Jonah 2:9", text: "But I, with shouts of grateful praise, will sacrifice to you." },
    { verse: "Micah 6:8", text: "And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
    { verse: "Nahum 1:7", text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him." },
    { verse: "Habakkuk 3:19", text: "The Sovereign Lord is my strength; he makes my feet like the feet of a deer." },
    { verse: "Zephaniah 3:20", text: "At that time I will gather you; at that time I will bring you home." },
    { verse: "Haggai 2:9", text: "The glory of this present house will be greater than the glory of the former house." },
    { verse: "Zechariah 4:6", text: "Not by might nor by power, but by my Spirit, says the Lord Almighty." },
    { verse: "Malachi 3:10", text: "Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven." },
    { verse: "Mark 10:27", text: "Jesus looked at them and said, 'With man this is impossible, but not with God; all things are possible with God.'" },
    { verse: "Luke 6:31", text: "Do to others as you would have them do to you." },
    { verse: "John 10:10", text: "I have come that they may have life, and have it to the full." },
    { verse: "Acts 4:12", text: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved." },
    { verse: "Romans 6:23", text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." },
    { verse: "1 Corinthians 15:58", text: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you." },
    { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
    { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
    { verse: "Ephesians 6:10", text: "Finally, be strong in the Lord and in his mighty power." },
    { verse: "Philippians 3:14", text: "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus." },
    { verse: "Colossians 1:13-14", text: "For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves." },
    { verse: "1 Thessalonians 5:11", text: "Therefore encourage one another and build each other up, just as in fact you are doing." },
    { verse: "2 Thessalonians 3:3", text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one." },
    { verse: "Titus 2:11", text: "For the grace of God has appeared that offers salvation to all people." },
    { verse: "Philemon 1:6", text: "I pray that your partnership with us in the faith may be effective in deepening your understanding." },
    { verse: "Hebrews 13:8", text: "Jesus Christ is the same yesterday and today and forever." },
    { verse: "James 5:16", text: "The prayer of a righteous person is powerful and effective." },
    { verse: "2 Peter 1:4", text: "Through these he has given us his very great and precious promises." },
    { verse: "1 John 5:4", text: "For everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith." },
    { verse: "Jude 1:24-25", text: "To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy." },
    { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain." }
];



client.on('message_create', async message => {
    const content = message.body.toLowerCase();

    if (content === '.bibleverse') {
        try {
            const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
            const formattedVerse = `📖 *${randomVerse.verse}*\n\n"${randomVerse.text}"\n\n- NIV`;
            message.reply(formattedVerse);
        } catch (error) {
            console.error(error);
            message.reply('Sorry, I could not fetch a Bible verse at this time.');
        }
    }
});

// ... existing code ...

const quranVerses = [
    { verse: "Al-Fatiha 1:1-7", text: "In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray." },
    { verse: "Al-Baqarah 2:255", text: "Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth." },
    { verse: "Al-Baqarah 2:286", text: "Allah does not charge a soul except with that within its capacity. It will have the consequence of what good it has gained, and it will bear the consequence of what evil it has earned." },
    { verse: "Al-Imran 3:8", text: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower." },
    { verse: "Al-Imran 3:19", text: "Indeed, the religion in the sight of Allah is Islam." },
    { verse: "Al-Imran 3:103", text: "And hold firmly to the rope of Allah all together and do not become divided." },
    { verse: "An-Nisa 4:103", text: "Indeed, prayer has been decreed upon the believers a decree of specified times." },
    { verse: "An-Nisa 4:126", text: "And to Allah belongs whatever is in the heavens and whatever is on the earth. And ever is Allah, of all things, encompassing." },
    { verse: "An-Nisa 4:147", text: "What would Allah do with your punishment if you are grateful and believe? And ever is Allah Appreciative and Knowing." },
    { verse: "Al-Ma'idah 5:8", text: "O you who believe, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness." },
    { verse: "Al-Ma'idah 5:48", text: "For each of you We have prescribed a law and a method. Had Allah willed, He would have made you one nation, but [He intended] to test you in what He has given you." },
    { verse: "Al-An'am 6:162", text: "Say, 'Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.'" },
    { verse: "Al-A'raf 7:23", text: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers." },
    { verse: "Al-A'raf 7:56", text: "And do not cause corruption upon the earth after its reformation. And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good." },
    { verse: "Al-Anfal 8:2", text: "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith." },
    { verse: "At-Tawbah 9:51", text: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely." },
    { verse: "Yunus 10:57", text: "O mankind, there has come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers." },
    { verse: "Yunus 10:107", text: "And if Allah should touch you with adversity, there is no remover of it except Him; and if He intends for you good, then there is no repeller of His bounty." },
    { verse: "Hud 11:88", text: "And my success is not but through Allah. Upon Him I have relied, and to Him I return." },
    { verse: "Yusuf 12:87", text: "Indeed, no one despairs of relief from Allah except the disbelieving people." },
    { verse: "Ar-Ra'd 13:28", text: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured." },
    { verse: "Ibrahim 14:7", text: "If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe." },
    { verse: "Al-Hijr 15:49", text: "Inform My servants that it is I who am the Forgiving, the Merciful." },
    { verse: "An-Nahl 16:128", text: "Indeed, Allah is with those who fear Him and those who are doers of good." },
    { verse: "Al-Isra 17:80", text: "My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority." },
    { verse: "Al-Kahf 18:10", text: "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance." },
    { verse: "Maryam 19:76", text: "And Allah increases those who were guided, in guidance, and the enduring good deeds are better to your Lord for reward and better for recourse." },
    { verse: "Ta-Ha 20:114", text: "And say, 'My Lord, increase me in knowledge.'" },
    { verse: "Al-Anbya 21:35", text: "Every soul will taste death. And We test you with evil and with good as trial; and to Us you will be returned." },
    { verse: "Al-Hajj 22:78", text: "And strive for Allah with the striving due to Him. He has chosen you and has not placed upon you in the religion any difficulty." },
    { verse: "Al-Mu'minun 23:51", text: "O messengers, eat from the good foods and work righteousness. Indeed, I am Knowing of what you do." },
    { verse: "An-Nur 24:35", text: "Allah is the Light of the heavens and the earth." },
    { verse: "Al-Furqan 25:63", text: "And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace." },
    { verse: "Ash-Shu'ara 26:80", text: "And when I am ill, it is He who cures me." },
    { verse: "An-Naml 27:19", text: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents." },
    { verse: "Al-Qasas 28:24", text: "My Lord, indeed I am, for whatever good You would send down to me, in need." },
    { verse: "Al-Ankabut 29:45", text: "Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater." },
    { verse: "Ar-Rum 30:21", text: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them." },
    { verse: "Luqman 31:18-19", text: "And do not turn your cheek [in contempt] toward people and do not walk through the earth exultantly. Indeed, Allah does not like everyone self-deluded and boastful. And be moderate in your pace and lower your voice." },
    { verse: "As-Sajdah 32:24", text: "And We made from among them leaders guiding by Our command when they were patient and [when] they were certain of Our signs." },
    { verse: "Al-Ahzab 33:70", text: "O you who have believed, fear Allah and speak words of appropriate justice." },
    { verse: "Saba 34:3", text: "Not absent from Him is an atom's weight within the heavens or within the earth or [what is] smaller than that or greater, except that it is in a clear register." },
    { verse: "Fatir 35:3", text: "O mankind, remember the favor of Allah upon you. Is there any creator other than Allah who provides for you from the heaven and earth? There is no deity except Him." },
    { verse: "Ya-Sin 36:82", text: "His command is only when He intends a thing that He says to it, 'Be,' and it is." },
    { verse: "As-Saffat 37:96", text: "While Allah created you and that which you do." },
    { verse: "Sad 38:72", text: "So when I have proportioned him and breathed into him of My [created] soul, then fall down to him in prostration." },
    { verse: "Az-Zumar 39:53", text: "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins.'" },
    { verse: "Ghafir 40:60", text: "And your Lord says, 'Call upon Me; I will respond to you.'" },
    { verse: "Fussilat 41:30", text: "Indeed, those who have said, 'Our Lord is Allah' and then remained on a right course - the angels will descend upon them, [saying], 'Do not fear and do not grieve.'" },
    { verse: "Ash-Shura 42:19", text: "Allah is Subtle with His servants; He gives provisions to whom He wills. And He is the Powerful, the Exalted in Might." },
    { verse: "Az-Zukhruf 43:32", text: "But is it they who distribute the mercy of your Lord? It is We who have apportioned among them their livelihood in the life of this world." },
    { verse: "Ad-Dukhan 44:42", text: "Except those [to whom] Allah has given mercy. Indeed, He is the Exalted in Might, the Merciful." },
    { verse: "Al-Jathiyah 45:23", text: "Have you seen he who has taken as his god his [own] desire, and Allah has sent him astray due to knowledge?" },
    { verse: "Al-Ahqaf 46:15", text: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents." },
    { verse: "Muhammad 47:7", text: "O you who have believed, if you support Allah, He will support you and plant firmly your feet." },
    { verse: "Al-Fath 48:4", text: "It is He who sent down tranquility into the hearts of the believers that they would increase in faith along with their [present] faith." },
    { verse: "Al-Hujurat 49:13", text: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another." },
    { verse: "Qaf 50:16", text: "And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein." },
    { verse: "Adh-Dhariyat 51:56", text: "And I did not create the jinn and mankind except to worship Me." },
    { verse: "At-Tur 52:21", text: "And those who believed and whose descendants followed them in faith - We will join with them their descendants." },
    { verse: "An-Najm 53:39", text: "And that there is not for man except that [good] for which he strives." },
    { verse: "Al-Qamar 54:17", text: "And We have certainly made the Quran easy for remembrance, so is there any who will remember?" },
    { verse: "Ar-Rahman 55:60", text: "Is the reward for good [anything] but good?" },
    { verse: "Al-Waqi'ah 56:96", text: "So exalt with praise the name of your Lord, the Most Great." },
    { verse: "Al-Hadid 57:3", text: "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing." },
    { verse: "Al-Mujadila 58:11", text: "Allah will raise those who have believed among you and those who were given knowledge, by degrees." },
    { verse: "Al-Hashr 59:18", text: "O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow." },
    { verse: "Al-Mumtahanah 60:7", text: "Perhaps Allah will put, between you and those to whom you have been enemies among them, affection." },
    { verse: "As-Saff 61:2-3", text: "O you who have believed, why do you say what you do not do? Great is hatred in the sight of Allah that you say what you do not do." },
    { verse: "Al-Jumu'ah 62:10", text: "And when the prayer has been concluded, disperse within the land and seek from the bounty of Allah." },
    { verse: "Al-Munafiqun 63:9", text: "O you who have believed, let not your wealth and your children divert you from remembrance of Allah." },
    { verse: "At-Taghabun 64:11", text: "No disaster strikes except by permission of Allah. And whoever believes in Allah - He will guide his heart." },
    { verse: "At-Talaq 65:3", text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose." },
    { verse: "At-Tahrim 66:8", text: "O you who have believed, repent to Allah with sincere repentance." },
    { verse: "Al-Mulk 67:2", text: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving." },
    { verse: "Al-Qalam 68:4", text: "And indeed, you are of a great moral character." },
    { verse: "Al-Haqqah 69:24", text: "[And it will be said], 'Eat and drink in satisfaction for what you put forth in the days past.'" },
    { verse: "Al-Ma'arij 70:19-23", text: "Indeed, mankind was created anxious: When evil touches him, impatient, And when good touches him, withholding [of it], Except the observers of prayer." },
    { verse: "Nuh 71:7", text: "And indeed, every time I invited them that You may forgive them, they put their fingers in their ears." },
    { verse: "Al-Jinn 72:13", text: "And when we heard the guidance, we believed in it. And whoever believes in his Lord will not fear deprivation or burden." },
    { verse: "Al-Muzzammil 73:20", text: "Indeed, your Lord knows that you stand [in prayer] almost two thirds of the night or half of it or a third of it." },
    { verse: "Al-Muddaththir 74:38", text: "Every soul, for what it has earned, will be retained." },
    { verse: "Al-Qiyamah 75:22-23", text: "[Some] faces, that Day, will be radiant, Looking at their Lord." },
    { verse: "Al-Insan 76:8", text: "And they give food in spite of love for it to the needy, the orphan, and the captive." },
    { verse: "Al-Mursalat 77:43", text: "[It will be said], 'Eat and drink in satisfaction for what you used to do.'" },
    { verse: "An-Naba 78:31", text: "Indeed, for the righteous is attainment." },
    { verse: "An-Nazi'at 79:40-41", text: "But as for he who feared the position of his Lord and prevented the soul from [unlawful] inclination, Then indeed, Paradise will be [his] refuge." },
    { verse: "Abasa 80:24", text: "Then let mankind look at his food." },
    { verse: "At-Takwir 81:27", text: "It is not except a reminder to the worlds." },
    { verse: "Al-Infitar 82:6", text: "O mankind, what has deceived you concerning your Lord, the Generous." },
    { verse: "Al-Mutaffifin 83:26", text: "Its seal will be musk. And for this let the competitors compete." },
    { verse: "Al-Inshiqaq 84:6", text: "O mankind, indeed you are laboring toward your Lord with [great] exertion and will meet it." },
    { verse: "Al-Buruj 85:14", text: "And He is the Forgiving, the Affectionate." },
    { verse: "At-Tariq 86:9", text: "The Day when secrets will be put on trial." },
    { verse: "Al-A'la 87:14", text: "He has certainly succeeded who purifies himself." },
    { verse: "Al-Ghashiyah 88:21-22", text: "So remind, [O Muhammad]; you are only a reminder. You are not over them a controller." },
    { verse: "Al-Fajr 89:27-28", text: "O reassured soul, Return to your Lord, well-pleased and pleasing [to Him]." },
    { verse: "Al-Balad 90:4", text: "We have certainly created man into hardship." },
    { verse: "Ash-Shams 91:9-10", text: "He has succeeded who purifies it, And he has failed who instills it [with corruption]." },
    { verse: "Al-Layl 92:5-7", text: "As for he who gives and fears Allah And believes in the best [reward], We will ease him toward ease." },
    { verse: "Ad-Duhaa 93:5", text: "And your Lord is going to give you, and you will be satisfied." },
    { verse: "Ash-Sharh 94:5-6", text: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease." },
    { verse: "At-Tin 95:4", text: "We have certainly created man in the best of stature." },
    { verse: "Al-Alaq 96:1-2", text: "Recite in the name of your Lord who created - Created man from a clinging substance." },
    { verse: "Al-Qadr 97:3", text: "The Night of Decree is better than a thousand months." },
    { verse: "Al-Bayyinah 98:7", text: "Indeed, they who have believed and done righteous deeds - those are the best of creatures." },
    { verse: "Az-Zalzalah 99:7-8", text: "So whoever does an atom's weight of good will see it, And whoever does an atom's weight of evil will see it." },
    { verse: "Al-Aadiyat 100:11", text: "Indeed, their Lord with them, that Day, is [fully] Acquainted." }
];

// ... rest of the existing code ...

client.on('message_create', async message => {
    const content = message.body.toLowerCase();

    if (content === '.quranverse') {
        try {
            const randomVerse = quranVerses[Math.floor(Math.random() * quranVerses.length)];
            const formattedVerse = `📖 *${randomVerse.verse}*\n\n"${randomVerse.text}"\n\n- Holy Quran`;
            message.reply(formattedVerse);
        } catch (error) {
            console.error(error);
            message.reply('Sorry, I could not fetch a Quran verse at this time.');
        }
    }
});


client.initialize();
