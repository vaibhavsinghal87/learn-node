const fs = require('fs');

if (fs.existsSync('data')) {
    console.log('Already created');
} else {
    fs.mkdir('data', err => {
        if (err) {
            throw err;
        }
        console.log('directory created');
    });
}
