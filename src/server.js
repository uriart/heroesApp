const http = require('http');

let port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando`);
});

app.listen(port, () => console.log(`listening port ${port}`));