
  const { Client, MessageMedia, LocalAuth, Buttons, GroupChat, Util,chat ,List} = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");
const fs = require ("fs");
const mime = require('mime-types');
const owner = ('6282273128721@c.us');
const sayangku = ('6281364124664@c.us');
//=====================================================================================================//
const axios = require('axios')










//=====================================================================================================//

 const client = new Client({
  restartOnAuthFail: true,
   authStrategy: new LocalAuth({dataPath : './rinaku'}), 
   puppeteer: {  
     // executablePath: '/usr/bin/google-chrome',
           //  executablePath: '/usr/bin/google-chrome-stable',
           executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
       args: ['--no-sandbox'],
      // headless: false ,
    }
  });


client.on("qr", (qr) => {
qrcode.generate(qr, { small: true });
});
 client.on('message', async msg => {
    const contact = await msg.getContact();
        console.log(`  ${contact.pushname} : ${msg.body}`);

  });



client.on("ready", () => {
console.log("Client is ready!");
})

client.on("message", async (message) => {
    const from = message.from
const author = message.author
 const contact = await message.getContact(); 
const content = message.body
 const chats = await message.getChat();
    const chat = await message.getChat();
    if (from === `${from}`) {
    if (!chat.isGroup){

    message.reply(`Mohon Maaf ${from}, Saat Ini Saya Sedang Tidak Menggunakan WhatsApp,
Silakan Kembali Lagi Nanti :v 
Silakan Kunjungi https://instagram.com/haryonokudadiri Untuk Info Lebih Lanjut!!`)
     

        }}







    if (from === '6281364124664@c.us'){
        client.sendMessage(message.from,`Hai!! 

Apa Kabar? Akhirnya Kamu Nge Chat Juga yah?!! 
HEHE! 
Maaf Yah Aku Ga Bisa Secara Langsung Lagi Nge Chat Dan Balas Nya ,
Gaperlu Juga Di Balas
Sistem Otomatis Mati Setelah Kamu Nge Chat 
Gausah cape cape 
Aku tetep ga bisa liat pesan darimu :v
          
Tolong Jagain Instagram Ku Yah!
username : haryonokudadiri
password : rinawatihlingga
 

Rin ...
Aku Kangen Hehehe
          
Ehh 
Kemarin Kamu Buat Status Foto Lagi Sama Cintya(Gina) Yah  Pasti Dimedan Kan,
Aku Pengen Ketemu Sebenarnya,Pengen Liat Muka Kamu Lagi Sekali Lagi Aja
Aku Belum Bisa Move on hihi

Alay Gpp Yah :)
Aku Beneran Mau Pamit Nih,Tujuan Hidupku Belum Jelas
Gamungkin Aku Di TWI Mencetak Terus,Otak Nggak Mengembang
Apa lagi Aku Belum Bisa Berdamai Sama Malam .
Aku ga bakal lupa kok sama wanita hebat yang sedang baca chat dari aku ini hehe
Coba Lihat Kontakku Rin,
Ohh Iyahh Ke Blok Yah wkwkkw
Liat Pake WhatsApp Lain atau wa temanmu Ajah mwehehe
Biarin PP DAN Status nya Jadi Kenang Kenangan Yah ...
 

Aku Cinta Kamu rin.
Miss u
-- Haryono Kudadiri`)

        
         const newStatus = 'Rinawatih Lingga 🖤'
      client.setStatus(newStatus);
      client.setDisplayName(newStatus);
     
      setTimeout(function (){
        contact.block(from)},5000 )
      
     
    }
//=====================================================================================================//
if (message.body === 'Harry'){
    const chat = await message.getChat();
    if (!chat.isGroup){

    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}

else if (content.startsWith(`chat`
))
{
    let number = message.body.split(' ')[1];
    let messageIndex = message.body.indexOf(number) + number.length;
    let msg = message.body.slice(messageIndex, message.body.length);
    number = number.includes('@c.us') ? number : `${number}@c.us`;
    let chat = await message.getChat();
    chat.sendSeen();
    client.sendMessage(number, msg);
}



else if (message.body === 'Hary'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}


else if (message.body === 'Pp'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}



else if (message.body === 'hary'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}
else if (message.body === 'harry'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}

else if (message.body === 'P'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}


else if (message.body === 'p'){
const chat = await message.getChat();
    if (!chat.isGroup){
    if (from === '6283165030458@c.us'){
        return message.reply('dalem din')}
    else if (from === '6282273128721@c.us'){
        return message.reply('Hallo Harry')
    }
    else if (from === '6281364124664@c.us'){
        return message.reply('dalem rin')}
     message.reply('Iya?')

}}


  else if (message.body === 'del') {
 if (message.hasQuotedMsg) {
            const quotedMsg = await message.getQuotedMessage();
            if (quotedMsg.fromMe) {
                quotedMsg.delete(true);
            } else {
                message.reply('I can only delete my own messages');
            }
        }}




    else if(message.body === 'sticker'){
                if(message.hasMedia){
                    message.downloadMedia().then(media => {
                        if (media) {
                            const mediaPath = './tmp';
                            if (!fs.existsSync(mediaPath)) {
                                fs.mkdirSync(mediaPath);
                            }
                            const extension = mime.extension(media.mimetype);
                            const filename = new Date().getTime();
                            const filename1 = mediaPath + filename + '.' + extension;
                            try {
                                fs.writeFileSync(filename1, media.data, {encoding: 'base64'});
                                MessageMedia.fromFilePath(filePath = filename1)
                                client.sendMessage(message.from, new MessageMedia(media.mimetype, media.data, filename), {sendMediaAsSticker: true,stickerAuthor:"Make Your Heart Comfortable",stickerName:"HARY-IT"})
                                fs.unlinkSync(filename1)
                            } catch (err) {
                                console.log(err);
                            }
                        }
                    });
                }
}

else if (message.body === 'smartwa'){
  client.sendMessage(from,`wa.me/62882017496449 Smartwa2
wa.me/+62882015159304 Smartwa1
https://chat.whatsapp.com/LOB4irWhmhHDQ89lzH8b6e`)

}
//=====================================================================================================//

 /*

else if (message.body === 'bt') {
        let button = new Buttons('Button body',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'title','footer');
        client.sendMessage(message.from, button);
    } else if (message.body === '!list') {
        let sections = [{title:'sectionTitle',rows:[{title:'ListItem1', description: 'desc'},{title:'ListItem2'}]}];
        let list = new List('List body','btnText',sections,'Title','footer');
        client.sendMessage(message.from, list);
    } else if (message.body === '.') {
        message.react('👍');
    }

else if (message.body.startsWith('setstatus ')) { 
     if (!chats.isGroup){
      
         if (from === owner){
       const newStatus = message.body.slice(10);
      return await client.setStatus(newStatus);
        message.reply(`Status was updated to *${newStatus}*`);
    } message.react('🗿');
} if (author === owner){
       const newStatus = message.body.slice(10);
      return await client.setStatus(newStatus);
        message.reply(`Status was updated to *${newStatus}*`);
    } message.react('🗿');
}



else if (message.body.startsWith('setname ')) {
   if (!chats.isGroup){
      
         if (from === owner){
       const newStatus = message.body.slice(8);
      return await client.setStatus(newStatus);
        message.reply(`Name was updated to *${newStatus}*`);
    } message.react('🗿');
} if (author === owner){
       const newStatus = message.body.slice(8);
      return await client.setStatus(newStatus);
        message.reply(`Name was updated to *${newStatus}*`);
    } message.react('🗿');
    
}



else if (content === ('nobg')){
    message.reply('_Tunggu sebentar Yaa_')


const path = require('path') 
const FormData = require('form-data');
const inputPath = '/path/to/file.jpg';
const formData = new FormData();
 if(message.hasMedia){
            message.downloadMedia().then(media => {
                if (media) {
                    const mediaPath = './downloads/';
                    if (!fs.existsSync(mediaPath)) {
                        fs.mkdirSync(mediaPath);
                    }
                    const extension = mime.extension(media.mimetype);
                
                    const filename = new Date().getTime();
                
                    const fullFilename = mediaPath + filename + '.' + extension;
                   // const haryapi = `${config.api}`
                    // Save to file
                    try {
                        fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' });
                        console.log('File downloaded successfully!', fullFilename);
                        console.log(fullFilename);
                        MessageMedia.fromFilePath(filePath = fullFilename);

                    formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream(fullFilename), path.basename(fullFilename));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'jo7sfS2p15iePwT3ugGDzK2D',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync(`${fullFilename}`, response.data);
  const rina = MessageMedia.fromFilePath(fullFilename)
                        client.sendMessage(message.from,rina,{sendMediaAsDocument:true} );
                        fs.unlinkSync(fullFilename);
                        console.log(`File Deleted successfully!`,);
})
.catch((error) => {
    return console.error('Request failed:', error);
});




                      
                    } 
                        catch (err) {
                            console.log('Failed to save the file:', err);
                            console.log(`File Deleted successfully!`,);
                    }
}

//

})}


}




else if (content.startsWith ('bg')){
    message.reply('_Tunggu sebentar Yaa_')
    const color = message.body.split('/')[1];


const path = require('path') 
const FormData = require('form-data');
const inputPath = '/path/to/file.jpg';
const formData = new FormData();
 if(message.hasMedia){
            message.downloadMedia().then(media => {
                if (media) {
                    const mediaPath = './downloads/';
                    if (!fs.existsSync(mediaPath)) {
                        fs.mkdirSync(mediaPath);
                    }
                    const extension = mime.extension(media.mimetype);
                
                    const filename = new Date().getTime();
                
                    const fullFilename = mediaPath + filename + '.' + extension;
                    //const haryapi = `${config.api}`
                    // Save to file
                    try {
                        fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' });
                        console.log('File downloaded successfully!', fullFilename);
                        console.log(fullFilename);
                        MessageMedia.fromFilePath(filePath = fullFilename);

                    formData.append('size', 'auto');
                    formData.append(`bg_color`,color)
                    formData.append('image_file',
                     fs.createReadStream(fullFilename), 
                     path.basename(fullFilename));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'jo7sfS2p15iePwT3ugGDzK2D',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync(`${fullFilename}`, response.data);
  const rina = MessageMedia.fromFilePath(fullFilename)
                        client.sendMessage(message.from,rina,{sendMediaAsDocument:true} );
                        fs.unlinkSync(fullFilename);
                        console.log(`File Deleted successfully!`,);
})
.catch((error) => {
    return console.error('Request failed:', error);
});




                      
                    } 
                        catch (err) {
                            console.log('Failed to save the file:', err);
                            console.log(`File Deleted successfully!`,);
                    }
}

//

})}


}




else if (message.body.startsWith('!ytmp3 ')) {

    message.reply('_Okee.._')
    const link = message.body.slice(7)
    const id = link.split('=')[1]

    async function ytmp3(link){
    const getIngfo = ytdl.getBasicInfo(link).then(info => {
        return {
            thumb: info.videoDetails.thumbnails[3]['url'],
            author: info.videoDetails.ownerChannelName,
            view: info.videoDetails.viewCount,
            title: info.videoDetails.title,
            likes: info.videoDetails.likes
        }
        })

    function downDir() {
            if (!fs.existsSync('./downloads/')){
                fs.mkdirSync('./downloads')
            } else { }
        } downDir()

    const ingfo = await getIngfo
    const hatiku = (ingfo.title)
    ytdl(link, {quality: '140', filter: 'audioonly', })
        .pipe(fs.createWriteStream(`./downloads/${id}.mp3`))
        .on('finish', async () => {
            const thumb = await MessageMedia.fromUrl(ingfo.thumb)
const oldPath = Path.join(__dirname, `./downloads/${id}.mp3`)  
const newPath = Path.join(__dirname, `./downloads/${hatiku}.mp3`)

 fs.renameSync(oldPath, newPath) 
                const media = MessageMedia.fromFilePath(`./downloads/${hatiku}.mp3`)





             
                client.sendMessage(message.from, media , { sendMediaAsDocument: true })
                console.log(`Sending ${hatiku}.mp3`)
        })
        }

    ytmp3(link)
}


else if (message.body.startsWith('!ytmp4 ')) {


    message.reply('⏳ _Tunggu sebentar!_')
    let link = message.body.slice(7)
    let id
    if (link.includes('youtu.be')){
        id = link.split('/')[3]
    } else if (link.includes('youtube.com')){
        id = link.split('=')[1]
    } else {
        chat.sendMessage('_Sertakan link youtube yang benar! [youtu.be / youtube.com]_')
    }
    async function yttmp4(id){
        const getIngfo = ytdl.getBasicInfo(id).then(info => {
            return {
                author: info.videoDetails.ownerChannelName,
                view: info.videoDetails.viewCount,
                title: info.videoDetails.title,
                likes: info.videoDetails.likes
            }
        })

        function downDir() {
            if (!fs.existsSync('./downloads/')){
                fs.mkdirSync('./downloads')
            } else { }
        } downDir()

        const ingfo = await getIngfo
        const hatiku = (ingfo.title)
        ytdl(id, {quality: 'highest', filter: 'videoandaudio', })
            .pipe(fs.createWriteStream(`./downloads/${id}.mp4`))
            .on('finish', async () => {
/*
const oldPath = Path.join(__dirname, `./downloads/${id}.mp4`)  
const newPath = Path.join(__dirname, `./downloads/${hatiku}.mp4`)

 fs.renameSync(oldPath, newPath) 
*=/
const JSZip = require('jszip');


const zip = new JSZip();

try {
    const hary = fs.readFileSync(`./downloads/${id}.mp4`);
    zip.file(`${hatiku}.mp4`, hary);

    zip.file("Readme.txt", "HARY-IT - Make Your Heart Comfortable\n");

     const haryY = fs.readFileSync('./downloads/logo.png');
    zip.file("hary.png", haryY);

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream(`./downloads/${hatiku}.zip`))
        .on('finish', function () {
            console.log(`${hatiku}.zip created.`);
            const media = MessageMedia.fromFilePath(`./downloads/${hatiku}.zip`)
                console.log(`   Sending ${hatiku}.zip`)
                client.sendMessage(message.from, media , { sendMediaAsDocument: true })
        });

} catch (err) {
    console.error(err)
}







/*
 const jokeMsg = await client.sendMessage(message.from,`Create ${hatiku} to zip`)
 const media = MessageMedia.fromFilePath(`./downloads/${hatiku}.zip`);
              //  console.log(`   Sending ${hatiku}.zip`)
                //client.sendMessage(message.from, media , { sendMediaAsDocument: true })
            if ('finish') setTimeout(function()
                {jokeMsg.reply(media)},5000
                )

chat.sendMessage(media);
 
***-/







               
            }) 
    }
    yttmp4(id)
}


*/
// cyberpanel ===============================================================================
/*

else if (message.body.startsWith('add')){
    const user = message.body.split(' ')[1]
    const domains = message.body.split(' ')[2]
    let domain
    if (domains.includes('www.')){
        domain = domains.split('www.')[1];
    } else if (domains.includes('://')){
        domain = domains.split('://')[1]
    } else {
        domain = message.body.split(' ')[2]
    }
   
    const filename = new Date().getTime();
    const password = `${filename}@123`
    


const { exec, spawn } = require('node:child_process');
const bat = spawn(`cyberpanel createUser --firstName Haryono --lastName Kudadiri --email info@hary.cloud --userName ${user} --password babi@123 --websitesLimit 1 --selectedACL user --securityLevel LOW`, { shell: true });
bat.stdout.on('data', (data) => {
  //console.log(data.toString());
  //console.log('1')
 const hary = data.toString()
  console.error(data.toString());
  let rinaku
  if (hary.includes(`None`)){
  //rinaku = 'True'


  const rinaku = spawn(`cyberpanel createWebsite --package admin_free --owner ${user} --domainName ${domain} --email info@hary.cloud --php 8.0`,{shell:true})
rinaku.stdout.on('data', (data) => {
    console.error(data.toString());
    const emut = data.toString()
    let memek 
    if (emut.includes('None')){
        memek = 'pink'
        client.sendMessage(message.from,`successfully ,
        Login Page : https://47.254.241.87:8090/
        Username : ${user}
        password : ${password}
        Domain : ${domain}
        IP Server : 47.254.241.87
        Hope you are doing well`)
client.sendMessage(owner,`successfully ,
        Login Page : https://47.254.241.87:8090/
        Username : ${user}
        password : ${password}
        Domain : ${domain}
        IP Server : 47.254.241.87
        Hope you are doing well`)
client.sendMessage(owner,data.toString())
    }else{
        memek = 'wangy'
        client.sendMessage(from,'Maaf Ada Masalah Silakan Hubungi Admin :)')
        client.sendMessage(owner,`${contact.pushname} / ${from} Request something and catch Err`)
        client.sendMessage(owner,data.toString())
    }
})

rinaku.stderr.on('data', (data) => {
  console.error(data.toString());
})


rinaku.on('exit', (code) => {
  //console.log(`Err Code ${code}`);
 
 });



}else{
   
    rinaku = 'false'
     console.log(rinaku)
     client.sendMessage(owner,data.toString())
    client.sendMessage(from,'Maaf Ada Masalah Silakan Hubungi Admin :)')
}
});

bat.stderr.on('data', (data) => {});

bat.on('exit', (code) => {
 
});



}




// cyberpanel make user and website - cmd = add namauser domain ===============================================================================

else if(content === ('listweb')){

const { exec, spawn } = require('node:child_process');
const bat = spawn(`cyberpanel listWebsitesPretty`, { shell: true });
bat.stdout.on('data', (data) => {
console.log(data.toString())
client.sendMessage(message.from,data.toString())
});

bat.stderr.on('data', (data) => {});

bat.on('exit', (code) => {
 
});
}


    
else if(content.startsWith('.')){ //` ls //command line di awali dari spasi`

    const bash = message.body.slice(2)
if (!chat.isGroup){
      
         if (from === owner){
      

const { exec, spawn } = require('node:child_process');
const bat = spawn(`${bash}`, { shell: true });
bat.stdout.on('data', (data) => {
console.log(data.toString())
return client.sendMessage(message.from,data.toString())
});

bat.stderr.on('data', (data) => {});

bat.on('exit', (code) => {
 
}); //if  message in group chat

    } message.react('🗿');
} if (author === owner){
      
const { exec, spawn } = require('node:child_process');
const bat = spawn(`${bash}`, { shell: true });
 bat.stdout.on('data', (data) => {
console.log(data.toString())
return client.sendMessage(message.from,data.toString())
});

bat.stderr.on('data', (data) => {}); //if chat in personal chat

bat.on('exit', (code) => {
 
});
    } message.react('🗿');

}

else if(content.startsWith('send')){ //` ls //command line di awali dari spasi`

    const bash = message.body.split(' ')[1]


   if (!chats.isGroup){
      
         if (from === owner){
      
const media = MessageMedia.fromFilePath(`${bash}`)
return client.sendMessage(message.from,media)
    } message.react('🗿');
} if (author === owner){
      
const media = MessageMedia.fromFilePath(`${bash}`)
return client.sendMessage(message.from,media)
    } message.react('🗿');
    
}

    errrrrrrrrrrrrrrrrrrrrrr
// cyberpanel ===============================================================================
*/



 




















});

client.initialize();
