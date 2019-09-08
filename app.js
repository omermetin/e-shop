/* var counter = require('./stuff');

console.log(counter(['Omer','Kadir','Kenan'])); */


const http = require('http');

const server = http.createServer((req, res) => {
    
        res.write();
        res.end('mesaj bitti');
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
