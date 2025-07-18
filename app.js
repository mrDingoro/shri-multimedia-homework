const express = require('express');
const app = express();

app.get('/', function (_, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.use('/assets', express.static('assets'));

app.get('/assets/{{a}}', (_, res) => {
    res.send(path.join(__dirname, 'assets', '{{a}}'));
});

app.use('/index.css', function (_, res) {
    res.sendFile('index.css', {root: __dirname});
});

app.listen(3000, () => {
    console.log('Приложение запущено: http://localhost:3000');
});
