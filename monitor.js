const { connectToWhatsApp } = require('./connection');
const { monitorLinks } = require('./function');

connectToWhatsApp((socket) => {
    monitorLinks(socket);
});
