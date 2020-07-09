const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/success', (req, res) => {
    res.send(`
    <b> Mail sent successfully</b> <br> 
    <a href="/">Home</a>
    `);
});

app.post('/send-email', (req, res) => {
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    mailer(email, subject, message);
    res.redirect('/success');

});

// local server port
app.listen(4000, ()=> {
    console.log('Server up on port 4000');
});