const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


////////////////////////////////////
// ROUTES
////////////////////////////////////

// INDEX
app.get('/', (req, res) => {
    res.render('/index.html');
});

// CATCH-ALL
app.get('*', (req, res) => {
    res.redirect('/');
});

////////////////////////////////////
// LISTENER
////////////////////////////////////

app.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
    console.log(`Hello, Seattle. I'm listening...`);
});