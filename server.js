const express = require('express');
const app = express()
var mysql  = require('mysql');
var bodyParser = require('body-parser')
var cors = require('cors')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'toto',
  password : 'toto',
  database : 'pokemon'
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())


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
    console.log('post: ', req.body);
    sql = `INSERT INTO pokemon (id, name, type, image) VALUES (NULL, '${req.body.name}' , '${req.body.type}', '${req.body.image}')`
    connection.query(sql), function(err, rows, fields) {
        if (err) throw err;
    }
    res.sendStatus(200)
})

app.delete('/pokemon/:id', function (req, res) {
    console.log('delete:', req.params.id);
    sql = `DELETE FROM pokemon WHERE pokemon.id = '${req.params.id}'`
    connection.query(sql), function(err, rows, fields) {
        if (err) throw err;
    }
    res.sendStatus(200)
})

app.listen(4000, function () {
  console.log('nodemon server is running on port 4000')
})

