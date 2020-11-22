const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Node');
});

server.listen(1000, () => {
    console.log('Server is listening');
})