const fs = require('fs');

// Synchronous file read
const content = fs.readFileSync('./list.js', 'UTF-8');
console.log(content);

console.log('-------------------------------------------------------------')

// Asynchronous file read
fs.readFile('./list.js', 'UTF-8', (err, content) => {
    console.log(content);
});
