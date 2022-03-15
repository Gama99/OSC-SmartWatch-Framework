const ewelink = require('ewelink-api');

const connection = new ewelink({
email: 'leo.apollaro@gmail.com',
password: '_T4w@PUapouw',
region: 'us',
});

/* toggle device */
async function toggleFan() {
    await connection.toggleDevice('1000997eff');
}

// toggleFan();