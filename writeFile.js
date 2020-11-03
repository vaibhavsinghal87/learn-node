const fs = require('fs');

const content = 'This is my first node app';

fs.writeFile('./assets/notes.md', content.trim(), err => {
    if (err) {
        throw err;
    }
    console.log('file saved');
});