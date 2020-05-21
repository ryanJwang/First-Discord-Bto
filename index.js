const dotenv = require('dotenv');
const alastor = require('alastor');
dotenv.config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('ready', () => {
    console.log('I am alive!');
});
bot.on('message', async (message) => {
    if (message.author.id === '713140571568341005') return;
    if (message.author.bot === true) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong');
    }
    if (command === 'add') {
        // const number1 = parseInt(args[0]);
        // const number2 = parseInt(args[1]);
        // const sum = number1 + number2;
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum = sum + parseInt(args[i]);
        }
        message.channel.send(sum);
    }
    if (command === 'mult'){
        let product = 1;
        for (let i = 0; i < args.length; i++) {
            product = product * parseInt(args[i]);
        }
        message.channel.send(product);

    }
    if (command === 'cat'){
        // http://aws.random.cat/meow
        const data = await alastor({
            url: 'http://aws.random.cat/meow',
            format: 'json'
        })
        console.log(data.body.file);
        message.channel.send(data.body.file);
    }
    if (command === 'dog'){
        // https://dog.ceo/api/breeds/image/random
        const data = await alastor({
            url: 'https://dog.ceo/api/breeds/image/random',
            format: 'json'
        })
        message.channel.send(data.body.message);
    }
});
bot.login(process.env.TOKEN);