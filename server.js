// let http = require("http");

// console.log('init server');

// let server = http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('request ok');
// });


// console.log('server is running');
// server.listen(8000);
const express = require('express');
const app = express()
var mysql  = require('mysql');
var bodyParser = require('body-parser')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'toto',
  password : 'toto',
  database : 'pokemon'
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('coucoudezdf')
})

app.get('/pokemon', function (req, res) {
    connection.query('SELECT * FROM pokemon', function(err, rows, fields) {
    if (err) throw err;
        res.json(rows);
    });
  })

app.post('/pokemon', function (req, res) {
    console.log(req.body);

    sql = `INSERT INTO pokemon (id, name, type, image) VALUES (NULL, '${req.body.name}' , '${req.body.type}', '${req.body.image}')`
    connection.query(sql), function(err, rows, fields) {
    if (err) throw err;
    }

    res.sendStatus(200)
})

app.delete('/pokemon', function (req, res) {
    console.log(req.body);

    sql = ` DELETE FROM pokemon WHERE pokemon.id = ${req.body.id}`
    connection.query(sql), function(err, rows, fields) {
        if (err) throw err;
    }

    res.sendStatus(200)
})

app.listen(3000, function () {
  console.log('node server is running on port 3000')
})

