const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path');
const router = require('./routes/router.js');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use('/', router);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

async function start() {
    try {
        app.listen(PORT, function () {
            console.log('Server has been started');
        });
    } catch (e) {
        console.log(e);
    }
};

start();