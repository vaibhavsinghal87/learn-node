const fs = require("fs");

// rename directory
// fs.renameSync('./data', './mocks');


// before removing directory empty it
fs.readdirSync('./mocks').forEach(fileName => {
    fs.unlinkSync(`./mocks/${fileName}`);
})

// remove directory
fs.rmdir('./mocks', err => {
    if(err) {
        throw err;
    }

    console.log('directory removed');
});