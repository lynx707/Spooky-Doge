const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction, Client } = require('discord.js');
const db = require("../../schema/autoReconnect");
const db1 = require('../../schema/station');
module.exports = {
    name: 'station',
    description: 'Changes the radio station/theme.',
    userPrams: [],
    botPrams: ['EMBED_LINKS'],
    player: false,
    dj: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {
       await interaction.deferReply({
        ephemeral: false,
       });
  let station = "Spooky Radio (Default)"
const ress = await db1.findOne({ Guild: interaction.guildId });
 if(ress) station = ress.Radio;
      
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`<:radio:1119915830344437790> Current Station: **${station}**`)


 const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('station')
          .setMinValues(1)
          .setMaxValues(1)
          .setPlaceholder('Spooky Radio Stations')
          .addOptions([
            {
              label: 'Bhoot.com',
              value: 'anime',
              emoji: '🌸',
            },
            {
              label: 'Bhoutiggota',
              value: 'sleep',
              emoji: '😴',
            },
            {
              label: 'Bhoot Kotha',
              value: 'study',
              emoji: '📖',
            }
          ])
      )


       const row2 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('dstation')
        .setDisabled(true)
          .setMinValues(1)
          .setMaxValues(1)
          .setPlaceholder('Lofi Radio Stations')
          .addOptions([
            {
              label: 'Bhoot.com',
              value: 'anime',
              emoji: '🌸',
            },
            {
              label: 'Bhoutiggota',
              value: 'sleep',
              emoji: '😴',
            },
            {
              label: 'Bhoot Kotha',
              value: 'study',
              emoji: '📖',
            }
          ])
      )
      
        const m =  await  interaction.followUp({ embeds: [thing], components: [row] })

    const collector = m.createMessageComponentCollector({
      filter: (i) => {
        if (i.user.id === interaction.user.id) return true;
        else {
          i.followUp({
            ephemeral: true,
            content: `Only **${interaction.user.tag}** can use this button, if you want then you've to run the command again.`,
          });
          return false;
        }
      },
      componentType: "SELECT_MENU",
      time: 20000,
      idle: 20000 / 2,
    });



collector.on('end', async () => {
      if (!m) return;
      return m.edit({ components: [row2] }).catch(() => { });
    });

      
      collector.on("collect", async i => {
      if (!i.deferred) i.deferUpdate();
      const options = i.values[0];
if (options === 'anime') {
    
         let ani = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`<:radio:1119915830344437790> Current Station: **Anime lo-fi** `)
  

 if (ress) {
      ress.oldradio = station;
      ress.Radio = "Bhoot.com";
      await ress.save()
              if (!m) return; 
  m.edit({
          embeds: [ani]
        });
    } else {
      const newData = new db1({
        Guild: interaction.guildId,
        Radio: "Bhoot.com",
        oldradio: station
      });
           if (!m) return; 
  m.edit({
          embeds: [ani]
        });
      await newData.save()
      
    }
  
      // const newData = new db1({
      //   Guild: interaction.guildId,
      //   Radio: "Anime lo-fi",
      //   oldradio: "Lofi Radio (Default)"
      // });
      // await newData.save()
  

      }

        if (options === 'sleep') {
    
         let slp = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`<:radio:1119915830344437790> Current Station: **Sleep lo-fi** `)
  
               if (ress) {
      ress.oldradio = station;
      ress.Radio = "Bhoutiggota";
      await ress.save()
              if (!m) return; 
  m.edit({
          embeds: [slp]
        });
    } else {
      const newData = new db1({
        Guild: interaction.guildId,
        Radio: "Bhoutiggota",
        oldradio: station
      });
           if (!m) return; 
  m.edit({
          embeds: [slp]
        });
      await newData.save()
      
    }
        }

         if (options === 'study') {
    
         let sty = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`<:radio:1119915830344437790> Current Station: **Study lo-fi** `)
  
               if (ress) {
      ress.oldradio = station;
      ress.Radio = "Bhoot Kotha";
      await ress.save()
              if (!m) return; 
  m.edit({
          embeds: [sty]
        });
    } else {
      const newData = new db1({
        Guild: interaction.guildId,
        Radio: "Bhoot Kotha",
        oldradio: station
      });
           if (!m) return; 
  m.edit({
          embeds: [sty]
        });
      await newData.save()
      
    }
      }


        

      })



      
        }

    }
