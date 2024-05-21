let express = require('express');
let app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    const response = {
        "message": "Hello json"
    };
    const messageStyle = process.env.MESSAGE_STYLE;
    if (messageStyle === 'uppercase') response.message = response.message.toLocaleUpperCase();
    res.json(response);
});






















 module.exports = app;
