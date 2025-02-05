---

# **WhatsApp Monitoring Tool**

## **Overview**  
A powerful WhatsApp bot that monitors the status of multiple websites and sends real-time status updates to WhatsApp. Built with Node.js, Baileys, and Axios, this tool ensures seamless monitoring and reporting with customizable settings.

---

## **Fitur**  
- 🌐 **Monitor Status Website**  
  Memeriksa status HTTP dari berbagai URL dan memberikan laporan berkala.  

- 📲 **Notifikasi WhatsApp**  
  Mengirim pesan status langsung ke WhatsApp melalui bot.  

- 🔄 **Customizable**  
  Atur link website, interval waktu, nama bot, dan lainnya melalui file konfigurasi.  

---

## **Features**  
- 🌐 **Monitor Website Status**  
  Checks the HTTP status of multiple URLs and provides periodic reports.  

- 📲 **WhatsApp Notifications**  
  Sends real-time status messages directly to WhatsApp via the bot.  

- 🔄 **Customizable**  
  Configure website links, intervals, bot name, and more via the settings file.  

---

## **Requirements**  
### **Node.js**  
Ensure you have Node.js installed. Use version `>=16` for compatibility.  

### **Dependencies**  
- `@whiskeysockets/baileys`  
- `axios`  
- `qrcode-terminal`  
- `nodemon` *(optional for development)*  

Install all dependencies by running:  
```bash
npm install
```

---

## **How to Use (English)**  
1. Clone this repository.  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Edit `settings.js` to configure links, bot name, and interval.  
4. Run the bot:  
   ```bash
   node monitor.js
   ```
5. Scan the QR code with WhatsApp and let the bot handle the monitoring.

---

## **Cara Penggunaan (Indonesia)**  
1. Clone repositori ini.  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Edit `settings.js` untuk mengatur link, nama bot, dan interval waktu.  
4. Jalankan bot:  
   ```bash
   node monitor.js
   ```
5. Pindai QR code dengan WhatsApp dan biarkan bot memonitor website Anda.

---

## **Folder Structure**  
```
├── auth/                # WhatsApp credentials  
├── settings.js          # Configuration for URLs, bot name, and interval  
├── connection.js        # WhatsApp connection handling  
├── functions.js         # Core functions for monitoring and message sending  
├── monitor.js           # Main script to start the bot  
├── CREDIT.md            # Developer credit file  
└── package.json         # Project dependencies and scripts  
```

---

## **Author**  
**QUINCY DEV**  
- Instagram: [quincy_fortress](https://www.instagram.com/quincy_fortress/)  
- Founder of QUINCY • STORE  
- Always creating innovative tech solutions.  

---

## **License**  
This project is open-source and free to use under the MIT License.  

**Happy Monitoring! 🚀**

---
