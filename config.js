module.exports = {
        px: '!',
        playing: '🤙🏾 NİLOYA ',

    opt: {
        DJ: {
            enabled: false, //EĞER SADECE DJLER KULLANA BİLSİN İSTİYOR İSENİZ false yazanı true yapın.
            roleName: 'DJ', //DJ ROLÜNÜN İSMİ NE OLACAK İSE YAZIN SUNUCUNUZDA O ROLDEKİLER KULLANA BİLİR
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //DOKUNMA
        },
        maxVol: 250, //maximum ses seviyesi kaç olacak belirte bilirsiniz.
        loopMessage: false, //elleme
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //elleme
                highWaterMark: 1 << 25 //elleme
            }
        }
    }
};
