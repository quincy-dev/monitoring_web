const axios = require('axios');
const https = require('https');
const { TARGET_NUMBER, LINKS_TO_MONITOR, INTERVAL, BOT_NAME } = require('./setting');

// Konfigurasi axios untuk mengabaikan SSL
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

// Fungsi untuk format pesan status
function formatStatusMessage(url, status, responseTime) {
    return `
╭━━━❮ 🟢 STATUS MONITOR ❯━━━╮
┃
┃ 📡 *URL*: ${url}
┃ ⚡ *Response*: ${responseTime}ms
┃ 📊 *Status*: ${status}
┃ 🕒 *Time*: ${new Date().toLocaleString('id-ID', { 
    timeZone: 'Asia/Jakarta',
    hour12: false 
})}
┃
╰━━━❮ ${BOT_NAME} ❯━━━╯`;
}

// Fungsi untuk format pesan error
function formatErrorMessage(url, error) {
    return `
╭━━━❮ 🔴 ALERT MONITOR ❯━━━╮
┃
┃ 🚨 *PERINGATAN!*
┃ 
┃ 📡 *URL*: ${url}
┃ ❌ *Status*: DOWN
┃ ⚠️ *Error*: ${error}
┃ 🕒 *Time*: ${new Date().toLocaleString('id-ID', { 
    timeZone: 'Asia/Jakarta',
    hour12: false 
})}
┃
╰━━━❮ ${BOT_NAME} ❯━━━╯`;
}

// Fungsi untuk cek status website
async function checkWebsite(url) {
    const startTime = Date.now();
    try {
        const response = await axiosInstance.get(url, { timeout: 10000 });
        const responseTime = Date.now() - startTime;
        return { isUp: true, status: response.status, responseTime, error: null };
    } catch (err) {
        return {
            isUp: false,
            status: null,
            responseTime: null,
            error: err.code === 'ECONNREFUSED' ? 'Koneksi ditolak' :
                   err.code === 'ETIMEDOUT' ? 'Timeout (>10s)' :
                   'Server tidak merespons'
        };
    }
}

// Fungsi untuk monitoring link
function monitorLinks(socket) {
    console.log('Bot sedang memonitor link:', LINKS_TO_MONITOR.join(', '));
    setInterval(async () => {
        for (const link of LINKS_TO_MONITOR) {
            const result = await checkWebsite(link);

            const message = result.isUp 
                ? formatStatusMessage(link, `${result.status} (OK)`, result.responseTime)
                : formatErrorMessage(link, result.error);

            console.log(message);
            try {
                await socket.sendMessage(TARGET_NUMBER, { text: message });
                console.log('Pesan berhasil dikirim ke WhatsApp');
            } catch (error) {
                console.error('Gagal mengirim pesan ke WhatsApp:', error);
            }
        }
    }, INTERVAL);
}

module.exports = { monitorLinks };
