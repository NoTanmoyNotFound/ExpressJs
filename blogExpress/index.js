const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', require('./routes/blog'));

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
