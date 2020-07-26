const Discord = require('discord.js');
const { userInfo } = require('os');
const { randomBytes } = require('crypto');
const client = new Discord.Client();
const config = {
    prefix : '*',
    token : 'NDQ0OTQ2NzkzNjEyOTY3OTQ2.Xv0cNA.efaUexNjHHC-CTQGs_qmdDGSDhc'
}
client.once('ready', () => {
    console.log('Ready!')

    dollarp()
    bisousRandom()
})

const textWithoutArg = (rawText) => {
    return textToSend = rawText.slice(args[0].length + 4)
}

const channelId = () => {
    return idChannel = message.mentions.channels.first().id
}

const bisousRandom = () => {
    const roleChien = '727552776166572164'
    const roleChat = '727552797507059793'
    const channelLeBro = '728037958485016708'
    const serverTest = client.guilds.cache.get('683641249642709239')
    let textToSend
    let memberListChien = serverTest.roles.cache.get(roleChien).members.array()
    let memberListChat = serverTest.roles.cache.get(roleChat).members.array()
    let memberListAll = memberListChat.concat(memberListChien)
    let memberCount = memberListAll.length - 1
    let dateNow = new Date()
    let hour = dateNow.getHours()
    let dateDp = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), hour, dateNow.getMinutes())
    
    serverTest.channels.cache.get(channelLeBro).send(`Il y a ${memberCount} qui ont le rôle \n Les personnes de la liste : \n ${memberListAll}`)
    
    let bisous = setTimeout(second = () => {
        let oPif = Math.round(Math.random() * memberCount)
        
        textToSend = `${memberListAll[oPif]} 💋`  
        serverTest.channels.cache.get(channelLeBro).send(textToSend)
        bisous = setTimeout(second, 2000)
    }, dateDp - dateNow)
}

const dollarp = () => {
    const channelBotPokemon = '683780247250010168'
    const roleDollarp = '727552776166572164'
    
    let dateNow = new Date()
    let hour = dateNow.getHours()
    const impair = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
    
    if (impair.indexOf(hour) !== -1) {
        if (hour === 23) {
            hour = 1
        }
        else hour += 2
    }
    else {
        if (hour === 22) {
            hour = 0
        }
        else hour++
    }
    
    let dateDp = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), hour, dateNow.getMinutes())
    let textDollarp 
    let aled = setTimeout(premier = () => {
        
        let hourNuit = new Date()
        if (hourNuit.getHours() > 0 && hourNuit.getHours() < 8) {
            textDollarp = `C\'est l\'heure du $p !`
        }
        else {
            textDollarp = `C\' est l\'heure du $p <@&${roleDollarp}> !!`
        }
        
        client.channels.cache.get(channelBotPokemon).send(textDollarp)
        aled = setTimeout(premier, 7200000)
    }, dateDp - dateNow)
}


client.on('message', message => {
    if (!message.content.startsWith(config.prefix)) return
    
    const withoutPrefix = message.content.slice(config.prefix.length)
    
    if (!withoutPrefix.length > 0) return
    
    const split = withoutPrefix.split(/ +/)
    const command = split[0]
    const args = split.slice(1)
    let textToSend
    let idChannel
    let roleChien = '727552776166572164'

       if (command === 'bisous') {
        const serverTest = client.guilds.cache.get('683641249642709239')
        let roleChien = '727552776166572164'
        let memberList = serverTest.roles.cache.get(roleChien).members.array()
        let memberCount = message.guild.roles.cache.get(roleChien).members.size

        let oPif = Math.round(Math.random() * memberCount)


        message.channel.send(`Il y a ${memberCount} qui ont le rôle \n Les personnes de la liste : \n ${memberList}`)
        message.channel.send(`La personne choisie est : ${memberList[oPif]}`)    
    }
    
    if (command === 'role') {
        if (message.mentions.members.first() === undefined) {
            return message.channel.send('Veuillez mentionner un utilisateur.')
        }
        message.mentions.members.first().roles.add('727552776166572164')
        message.channel.send(`Le rôle a été attribué à ${message.mentions.members.first()}.`)
    }
    else if (command === 'say') {
        if (message.mentions.channels.first() !== undefined)  {
            textWithoutArg(withoutPrefix)
        }
        else {
            return message.channel.send(`Veuillez mentionner un channel.`)
        } 

        let wantedChannel = client.channels.cache.get(channelId())
        wantedChannel.send(textToSend)
    }
    else if (command === '$p') {
        client.channels.cache.get(channelRole).send(`C\' est l\'heure du $p <@&${roleChien}> !!!`)
    }

    else if (command === 'join') {
        if (message.mentions.members.first() === undefined) {
            return message.channel.send('Veuillez mentionner un utilisateur.')
        }
        let member = message.mentions.members.first()
        let dateJoin = member.joinedAt
        message.channel.send(`${member} a rejoint le server le ${dateJoin.getDate()} ${dateJoin.getMonth()} ${dateJoin.getFullYear()}`)
        message.channel.send(dateJoin.toDateString(dateJoin.getMonth()))
    }
  });


client.login(config.token);
