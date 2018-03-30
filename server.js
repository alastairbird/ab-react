const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, error => (
    error
        ? console.error(error)
        : console.info(`Listening on port ${PORT}.`)
));