const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    '/bootstrap',
    express.static(__dirname + '/../node_modules/bootstrap/dist'),
);
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP LOGER
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
