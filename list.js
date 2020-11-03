const fs = require('fs');

// Synchronous file read
const files = fs.readdirSync('./');
console.log('Sync - ', files);

// Asynchronous file read
fs.readdir('./', (err, files) => {
    if (err) {
        throw err;
    }

    console.log('Async - ', files);
});