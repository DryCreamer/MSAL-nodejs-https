const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 3000;

// initialize express.
const app = express();

// initialize https and fs node 
const https = require('node:https');
const fs = require('node:fs');

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('app'));

// Set up a route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// comment out the app application and use https instead below
// app.listen(port);

// create the server
// Use PFX and passphrase, or comment them out, and use key and cert, one or the other
const server = https.createServer({
    pfx: fs.readFileSync('./testdemo.pfx'),
    //key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    passphrase: 'testdemo',
    //cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
}, app)

// initialize the server on the specified port
server.listen(port);

console.log(`Listening on port ${port}...`);