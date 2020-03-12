const server = require('./server.js');

const PORT = process.env.PORT || 3300;

server.listen(PORT, ()=> {
    console.log(`***SERVER LISTENING ON PORT ${PORT}***`)
});