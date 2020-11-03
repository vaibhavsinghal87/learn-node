const fs = require('fs');

// rename file
fs.renameSync('./assets/colors.json', './assets/colorsData.json');

// move files
fs.rename('./assets/employees.json', './data/employeesData.json', err => {
    if(err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync('./assets/notes.md');
}, 2000);