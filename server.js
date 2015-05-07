var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var SightingCtrl = require('./controllers/sightingctrl');

app.use(bodyParser.json());
app.use(cors());

app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);



var port = 9000;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log('connected to mongoDb at: ', mongoUri);
})

app.listen(port, function() {
    console.log('listening on port: ', port);
});
