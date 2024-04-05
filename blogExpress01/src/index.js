const express = require('express');
const path = require('path');

const port = 8000;
const staticPath = path.join(__dirname, "../public")

const app = express();
app.set('view engine', 'hbs');
// app.get('/',(req,res) =>{
//     res.render('index');
// })

app.use('/', require('../routes/blog'));

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});