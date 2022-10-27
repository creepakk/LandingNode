let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/img', express.static(__dirname + '/public/img'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/guides', function (req, res) {
    res.render('guides');
});

app.get('/flights', function (req, res) {
    res.render('flights');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.post('/success', urlEncodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('success', { data: req.body });
});

app.listen(3000);
console.log('Сервер запущен с портом 3000');