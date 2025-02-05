const { default: makeWASocket, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { AUTH_FOLDER } = require('./setting');

async function connectToWhatsApp(callback) {
    if (!fs.existsSync(AUTH_FOLDER)) {
        fs.mkdirSync(AUTH_FOLDER);
    }

    const { state, saveCreds } = await useMultiFileAuthState(AUTH_FOLDER);
    const { version } = await fetchLatestBaileysVersion();

    const socket = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
    });

    socket.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (connection === 'connecting') {
            console.log('Menghubungkan ke WhatsApp...');
        } else if (connection === 'open') {
            console.log('Bot berhasil terhubung!');
            callback(socket);
        } else if (connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== 403;
            console.log('Koneksi terputus karena:', lastDisconnect?.error?.output?.payload || lastDisconnect?.error);
            if (shouldReconnect) {
                console.log('Mencoba menghubungkan kembali...');
                connectToWhatsApp(callback);
            }
        }

        if (qr) {
            qrcode.generate(qr, { small: true });
        }
    });

    socket.ev.on('creds.update', saveCreds);
}

module.exports = { connectToWhatsApp };
