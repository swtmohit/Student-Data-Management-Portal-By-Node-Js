const express = require('express');
const apiPath = require('easy-api-path');
const app = express();
const fileupload = require('express-fileupload');
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


// login start




app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('login', { title: 'Login Page', backgroundImage: 'img/12345.jpg' });
  });
  
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.cookie('username', username, { maxAge: 900000, httpOnly: true });
            res.redirect('index');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
    });
});

app.get('/index', (req, res) => {
    if (req.cookies.username) {
        res.render('index', { username: req.cookies.username });
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});





// login end

require('dotenv').config();
const { db_host, db_user, db_database, db_password } = process.env;

const db = mysql.createConnection({
    host: db_host,
    user: db_user,
    database: db_database,
    password: db_password
})


app.set("view engine", "ejs")
app.set('views', './src/views')
app.use(express.static('assets'));
app.use(express.json());

app.use(fileupload({
    userTempFile: true,
    preserveExtension: true,
    parseNested: true
}))

module.exports = { app, apiPath, db }

