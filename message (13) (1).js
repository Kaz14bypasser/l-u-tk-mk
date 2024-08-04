const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios');
console.log('đang chạy code');

const token = 'MTIyNDczMDQ0NjQyMDc3NDkzMg.GsFQTv.C-IrGztjlEX7TCBkUcDsgvTsSxlSH0mKOvObsg';
const clientId = '1224730446420774932';
const apikey  = 'kazapikeyreal';
LinkDiscord = 'https://discord.gg/UQjPG97yYV';
By = 'Made by kaz_2205.';
console.log('MTIyNDczMDQ0NjQyMDc3NDkzMg.GsFQTv.C-IrGztjlEX7TCBkUcDsgvTsSxlSH0mKOvObsg');
console.log('1224730446420774932');
avtOwner = 'https://cdn.discordapp.com/attachments/1243504829280817202/1243518737852797019/grayx1.png?ex=6651c492&is=66507312&hm=16b38009a806cd9329406f3a518ba9e653696bd28d855d9040909c276f1766ae&'
const supportedCommand = {
    name: 'supported',
    description: 'Get information about supported features.',
    options: [] 
};

const commands = [
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'linkvertise',
        description: 'Gets linkvertise',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The linkvertise',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Gets codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The codex',
                required: true,
            },
        ],
    },
    {
        name: 'relzhub',
        description: 'Gets relzhub',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The relzhub',
                required: true,
            },
        ],
    },
    {
        name: 'hydrogen',
        description: 'Gets hydrogen',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The hydrogen',
                required: true,
            },
        ],
    },
    {
        name: 'vegax',
        description: 'Gets vegax',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The vegax',
                required: true,
            },
        ],
    },
    {
        name: 'pastepin',
        description: 'Gets pastepin',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The pastepin',
                required: true,
            },
        ],
    },
    {
        name: 'banana',
        description: 'Gets banana',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The banana',
                required: true,
            },
        ],
    },
    {
        name: 'fluxus',
        description: 'Gets Fluxus Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Fluxus link',
                required: true,
            },
        ],
    },
];

const box = "```"; 
const client = new Client({ intents: 0 });
const beo = "`";
client.once('ready', () => {
    console.log(`[${client.user.name}] kaz_2205.`);
    const pingmsStatus = `Ping: ${client.ws.ping}ms`;

    const rest = new REST({ version: '9' }).setToken(token);

    (async () => {
        try {
            console.log('Started refreshing global application (/) commands.');
    
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: [...commands, supportedCommand] },
            );
    
            console.log('Successfully reloaded global application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
    

});
const { MessageEmbed } = require('discord.js');
// Sự kiện xử lý khi người dùng tương tác với bot
client.on('interactionCreate', async interaction => {
    const { Client, MessageEmbed } = require('discord.js');

    if (interaction.commandName === 'delta') {
        await delta(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'fluxus') {
        await fluxus(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'linkvertise') {
        await linkvertise(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'supported') {
        await supported(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'pastepin') {
        await pastepin(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'vegax') {
        await vegax(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'hydrogen') {
        await hydrogen(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'banana') {
        await banana(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'relzhub') {
        await relzhub(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    }
});
  

async function GetKey(link) {
    try {
        const getResponse = await axios.get(``);
        return getResponse.data.key;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}

async function supported(interaction) {
    const color = parseInt('#808080'.replace('#', ''), 16);

    await interaction.reply({
        embeds: [{
            title: 'Supported',
            description: 'https://discord.gg/UQjPG97yYV',
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            image: { 
                url: 'https://cdn.discordapp.com/attachments/1264865454799982776/1264980405811941508/2f92b5d59ee55f61770d8fadce1bc924.gif?ex=66afaa4e&is=66ae58ce&hm=c93177a7d0bfdb3413b0bceebc3a4a1da4d1e7ffc1e1420448c96f3db110163b&' // Replace 'https://example.com/animated_image.gif' with the actual URL of your animated image
            },
            fields: [
                { name: '1. Delta Key: 🔑', value:'Working <a:verify:1212346413535465502>' },          
                { name: '2. Fluxus Key: 🔑', value:'Working <a:verify:1212346413535465502>' },
                { name: '3. Linkvertise: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '4. Pastepin: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '5. Codex Key: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '5. Vegax Key: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '6. Hydrogen Key: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '7. Banana Hub Key: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '8. Relz Hub Key: 🔑', value: 'Working <a:verify:1212346413535465502>' },
                { name: '🧸Developer: 🔧', value: beo + 'kaz_2205.' + beo },
            ],
            color: color,
            footer: {
                text: `Requested By ${interaction.user.username} | ${By}`,
                iconURL: avtOwner,
            }
        }],
        components: [],
        content: "**KAZ COMMUNITY**"
    });
}
// Hàm để ghi log
async function logEvent(embed) {
    const logChannel = client.channels.cache.get('1263500301445496905'); // Replace with your log channel ID
    if (logChannel) {
        await logChannel.send({ embeds: [embed] });
    } else {
        console.error('Log channel not found.');
    }
}

// Hàm xử lý lệnh
async function handleCommand(interaction) {
    const commandName = interaction.commandName;
    const userId = interaction.user.id;
    const vietnamTime = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');

    if (interaction.guildId === '1262777117540618252') {
        const commandExecEmbed = new MessageEmbed()
            .setTitle(`Command ${commandName} has executed in Main Server`)
            .setDescription(`**__User Info__**:\n` +
                `🕘At: ${vietnamTime}\n` +
                `💢User: <@${userId}> (${interaction.user.tag})\n` +
                `🆔User ID: ${userId}\n\n` +
                `📊**__Server Info:__**\n` +
                `🤝Server: **${interaction.guild.name}**\n` +
                `📝Members: ${interaction.guild.memberCount} members\n` +
                `🆔Server ID: ${interaction.guild.id}`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setColor("#000000"); // Red color for main server log

        await logEvent(commandExecEmbed);

        return;
    }

    const invite = await interaction.channel.createInvite({ maxAge: 86400, maxUses: 1 }).catch(err => {
        console.error('Error creating invite:', err);
        return null;
    });

    if (['bypass', 'supported' ].includes(commandName)) {
        const commandExecEmbed = new MessageEmbed()
            .setTitle(`Command ${commandName} has executed`)
            .setDescription(`**__User Info__**:\n` +
                `🕘At: ${vietnamTime}\n` +
                `💢User: <@${userId}> (${interaction.user.tag})\n` +
                `🆔User ID: ${userId}\n\n` +
                `📊**__Server Info:__**\n` +
                `🔗Invite Link: ${invite ? invite.url : 'N/A'}\n` +
                `🤝Server: **${interaction.guild.name}**\n` +
                `📝Members: ${interaction.guild.memberCount} members\n` +
                `🆔Server ID: ${interaction.guild.id}`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setColor("#000000");

        await logEvent(commandExecEmbed);
    }
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    await handleCommand(interaction);
});


async function fluxus(interaction) {
    const link = interaction.options.getString('link');

    await interaction.deferReply();

    if (link.startsWith('')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`
        try {
            const key = await GetKey(link);
            if (key) {
                const currentTime = new Date();
                const elapsedTime = (currentTime - interaction.createdAt) / 1000; // Time elapsed in seconds
                const requestTime = new Date().toLocaleString();
                const pingms = client.ws.ping;
                await interaction.editReply({
                    embeds: [{
                        title: "Fluxus Key Bypass | KAZ",
                        author: {
                            name: "KAZ COMMUTITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Success Key:  <a:verify:1212346413535465502>', value: `${box}${key}${box}` },
                            { name: 'Time Bypass: 🕠', value: `${box}${elapsedTime.toFixed(2)} seconds${box}` },
                            { name: 'Ping Bot: 🤖', value: `${box}${pingms}ms${box}` },
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        },
                    
                         
                    }]
                });    
            }
            else {
                console.error(' Key not found in response');
                await interaction.editReply({
                    embeds: [{
                        title: "Fluxus Key Bypass | KAZ",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:', value: box + 'Key not found in response RETRY' + box }
                        ]
                    }]
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                content: "**KAZ COMMUNITY**\nFailed To Bypass | KAZ\n\nStatus: :x:\nAn error has occurred!\n\nPlease report errors to admin at channel: <#1213285135529807922>"
            });
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Fluxus Link",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}


async function delta(interaction) {
    const link = interaction.options.getString('link');

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: { 
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            console.log(response)
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Delta Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:   <a:verify:1212346413535465502>', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Bypass:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: { 
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}
async function linkvertise(interaction) {
    const link = interaction.options.getString("link");
    const box = "https://shouko-api.neyoshiiuem.workers.dev/bypass?link=";

    await interaction.reply({
        embeds: [{
            title: "Getting Linkvertise Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment```' },
                { name: 'Status', value: '```Please wait 15-60s```' },
            ]
        }],
    });

    const supportedLinks = [
        'https://pandadevelopment.net/getkey?service=vegax&hwid=',
        'https://valyse.best/verification?device_id=',
        'https://linkvertise.com/',
        'https://direct-link.net/',
        'https://gateway.platoboost.com/a/8?id',
        'https://spdmteam.com/key-system-1?hwid=',
        'https://keyrblx.com/getkey/ZenHub?hwid=',
        'https://keyrblx.com/getkey/ToraScripts?hwid=',
        'https://pandadevelopment.net/getkey?service=evon&hwid=',
        'https://mobile.codex.lol?token=',
        'https://mobile.codex.lol/?token=',
        'https://keyrblx.com/getkey/',
        'https://pandadevelopment.net/getkey?service=trigon-evo&hwid=',
        'https://pandadevelopment.net/getkey?service=buanghub&hwid=',
        'https://keyrblx.com/getkey/FFJHub?hwid=',
     'https://link-center.net/' ,
    ];

    const foundLink = supportedLinks.find(supportedLink => link.startsWith(supportedLink));

    if (foundLink) {
        const apiUrl = ``;

        try {
            const start = Date.now();
            const response = await axios.get(apiUrl);
            console.log(response);
            const end = Date.now();
            const time = (end - start) / 1000;

            if (response.data.bypassed) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Linkvertise",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Text:', value: `${box}${response.data.bypassed}${box}` },
                            { name: 'Time Bypass:', value: `${box}${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Linkvertise",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```Error or Not Supported!.Pls Try Again!!```' }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Linkvertise",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: {
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Error or Not Supported!.Pls Try Again!!```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Linkvertise Link",

                author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                    
                ]
            }]
        });
    }
}
// CODEX
async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "https://shouko-api.neyoshiiuem.workers.dev/bypass?link=";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Codex",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: { 
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```May take a while...```' },
                { name: 'Status', value: '```Please wait 0-15s```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol?token=' ) || link.startsWith('https://mobile.codex.lol?token=')) {
        const url = link.split('=')[1].split('&')[0];
        const apiUrl = ``;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 
        
            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "You Have Been Authenticated! Please Launch Your Codex",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "hhttps://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Text:', value: `${box}${response.data.key}${box}` },
                            { name: 'Status:', value: '```CodeX completed!!```'},
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }
        
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Codex",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields:[
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```Get New Link and Try again!```' },
                        ] ,  
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (completed) {
            const start = Date.now(); 
            console.error(completed);
            const end = Date.now();
            const time = (end - start) / 1000;
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Codex",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: { 
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Please try again!```' },
                        { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Codex Link",
                color: 0xFA0707,
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                ],
                footer: {
                    text: `Requested By ${interaction.user.username} | ${By}`,
                    iconURL: avtOwner,
                }
            }]
        });
    }
}
async function pastepin(interaction) {
    const link = interaction.options.getString("link");
    const box = "https://shouko-api.neyoshiiuem.workers.dev/bypass?link=";

    await interaction.reply({
        embeds: [{
            title: "Getting Pastebin Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment```' },
                { name: 'Status', value: '```Please wait 15-60s```' },
            ],
            footer: {
                text: `Requested By ${interaction.user.username} | ${By}`,
                iconURL: avtOwner,
            }
        }],
    });

    const supportedLinks = [
        'https://pastebin.com/',
    ];

    const foundLink = supportedLinks.find(supportedLink => link.startsWith(supportedLink));

    if (foundLink) {
        const apiUrl = ``;

        try {
            const start = Date.now();
            const response = await axios.get(apiUrl);
            console.log(response);
            const end = Date.now();
            const time = (end - start) / 1000;

            if (response.data.bypassed) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Pastebin",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Text:', value: `${box}${response.data.bypassed}${box}` },
                            { name: 'Time Bypass:', value: `${box}${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Pastebin",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```The link does not exist.please check again!!```' }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Pastebin",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: {
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Error or Not Supported!.Pls Try Again!!```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Pastebin Link",

                author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                    
                ],
                footer: {
                    text: `Requested By ${interaction.user.username} | ${By}`,
                    iconURL: avtOwner,
                }
            }]
        });
    }
}
async function vegax(interaction) {
    const link = interaction.options.getString('link');
    const box = "https://shouko-api.neyoshiiuem.workers.dev/bypass?link=";

    await interaction.reply({
        embeds: [{
            title: "Getting Vegax",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment```' },
                { name: 'Status', value: '```Please wait 30-60s```' },
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=vegax&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            console.log(response)
            const end = Date.now();
            const time = (end - start) / 1000; 
            const requestTime = new Date().toLocaleString();

            if (response.data.bypassed) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Vegax",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Key:', value: `${box}${response.data.bypassed}${box}` },
                            { name: 'Time Bypass: 🕠', value: `${box}${time} Seconds${box}` },
                            { name: 'Request Time: ⏰', value: `${box}${requestTime}${box}` },


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Vegax",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:', value: '```Error.Pls Try again```' },
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                title: "Failed To Get Vegax",
                embeds: [{
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: {
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status:', value: '```Please try again in 3-7 minute```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Vegax link",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: {
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ],
                footer: {
                    text: `Requested By ${interaction.user.username} | ${By}`,
                    iconURL: avtOwner,
                }
            }]
        });
    }
}
// hydrogen
async function hydrogen(interaction) {
    const link = interaction.options.getString('link');
    const box = "https://shouko-api.neyoshiiuem.workers.dev/bypass?link=";

    await interaction.reply({
        embeds: [{
            title: "Getting Hydrogen Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```May take a while...```' },
                { name: 'Status', value: '```Please wait 60-90s```' },
            ],
            footer: {
                text: `Requested By ${interaction.user.username} | ${By}`,
                iconURL: avtOwner,
            }
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/2569?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            console.log(response)
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.bypassed) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Hydrogen Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Key:', value: `${box}${response.data.bypassed}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Hydrogen Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:', value: '```Error.Pls Try again```' },
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Hydrogen key",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: {
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status:', value: '```Pls Try Again!!```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Hydrogen Links",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: {
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ],
                footer: {
                    text: `Requested By ${interaction.user.username} | ${By}`,
                    iconURL: avtOwner,
                }
            }]
        });
    }
}
async function banana(interaction) {
    const link = interaction.options.getString('link');

    await interaction.reply({
        embeds: [{
            title: "Getting Banana Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: { 
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment...```' }
            ]
        }],
    });

    if (link.startsWith('https://banana-hub.xyz/getkey')) {
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully  Banana Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:  <a:verify:1212346413535465502>', value: `${box}${response.data.key}${box}`  },
                            { 
                                name: 'Script: <:banunu:1251010693118038118>', 
                                value: '```lua\n' +
                                    `repeat task.wait() until game:IsLoaded()\n` +
                                    `getgenv().Key = "${response.data.key}"\n` +
                                    'getgenv().NewBanana = true\n' +
                                    'repeat task.wait() until game:IsLoaded()\n' +
                                    'loadstring(game:HttpGet("https://raw.githubusercontent.com/obiiyeuem/vthangsitink/main/BananaHub.lua"))()\n' +
                                    '```'
                            }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username}`,
                            iconURL: interaction.user.avatarURL(),
                        }
                    }],
                });
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Banana Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Banana key",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: { 
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Banana Link",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}
async function relzhub(interaction) {
    const link = interaction.options.getString('link');

    await interaction.reply({
        embeds: [{
            title: "Getting RelzHub Key",
            author: {
                name: "KAZ COMMUNITY",
                url: "https://discord.gg/UQjPG97yYV",
                icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
            },
            thumbnail: { 
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment...```' }
            ]
        }],
    });

    if (link.startsWith('https://getkey.relzscript.xyz/redirect.php?hwid=')) {
        const apiUrl = `https://shouko-api.neyoshiiuem.workers.dev/bypass?link=`;
        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully  RelzHub Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:  <a:verify:1212346413535465502>', value: `${box}${response.data.key}${box}`  },
                            { 
                                name: 'Script:', 
                                value: '```lua\n' +
                                    'loadstring(game:HttpGet("https://raw.githubusercontent.com/farghii/relzhub/main/execute.hack", true))()\n' +
                                    '```'
                            }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username}`,
                            iconURL: interaction.user.avatarURL(),
                        }
                    }],
                });
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get RelzHub Key",
                        author: {
                            name: "KAZ COMMUNITY",
                            url: "https://discord.gg/UQjPG97yYV",
                            icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`,
                            iconURL: avtOwner,
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get RelzHub key",
                    author: {
                        name: "KAZ COMMUNITY",
                        url: "https://discord.gg/UQjPG97yYV",
                        icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                    },
                    thumbnail: { 
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status: <a:sech:1242152307248861325>', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`,
                        iconURL: avtOwner,
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid RelzHub Link",
                author: {
                    name: "KAZ COMMUNITY",
                    url: "https://discord.gg/UQjPG97yYV",
                    icon_url: "https://cdn.discordapp.com/avatars/1193019510119215135/a_9d04aa1b668ef40b564d97d2f2e8c3ac.gif?size=4096"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link: <a:sech:1242152307248861325>', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}



client.login(token);