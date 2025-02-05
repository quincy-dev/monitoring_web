module.exports = {
    AUTH_FOLDER: './auth',
    TARGET_NUMBER: 'Your-Number@s.whatsapp.net', //contoh 6281929918298@s.whatsapp.net
    BOT_NAME: 'Your-Name-Bot',
    INTERVAL: 5000,
    // Interval waktu untuk monitoring dalam milidetik (ms)
// Contoh pengaturan:
// 1000 ms = 1 detik
// 5000 ms = 5 detik
// 10000 ms = 10 detik
// 60000 ms = 1 menit
// 300000 ms = 5 menit
// Pastikan untuk tidak menggunakan interval terlalu pendek (< 5000 ms) untuk menghindari beban server yang berat.
    LINKS_TO_MONITOR: [
        'https://youtube.com',
        'https://facebook.com'
    ]
    // Daftar URL yang akan dimonitoring
// Format: Array dari string, setiap string adalah link website
// Contoh pengaturan:
// - Tambahkan link website yang valid (https:// harus disertakan)
// - Anda bisa menambahkan lebih dari satu link untuk dipantau
// - Contoh:
//   const LINKS = [
//       "https://example1.com",
//       "https://example2.com",
//       "https://example3.com"
//   ];
// 
// Pastikan semua link aktif dan dapat diakses untuk menghindari kesalahan saat monitoring.
};
