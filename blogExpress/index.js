const express = require('express');
const exphbs  = require('express-handlebars');
const path    = require('path');

const app = express();
const port = 3000;

// Set up Handlebars view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, "static")));

// Mount routes
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

// Start the server
app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
