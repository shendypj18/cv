const express = require('express');
const app = express();
const port = 3000 ;
const mysql = require('mysql');

app.use(express.static('public'));
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sekolah'
});

app.get('/', (req,res) => {
    res.render('main.ejs');
});

app.get('/blog', (req,res) => {
    res.send('buat blog');
});

app.get('/about', (req,res) => {
    res.send('buat about');
});

app.listen(port, ()=> console.log(`coba ketik di browser localhost:${port}`));