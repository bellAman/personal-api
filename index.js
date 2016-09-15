var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var app = express();



app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name',mainCtrl.getname);
app.get('/location',mainCtrl.getlocation);
app.get('/occupations', mainCtrl.getJob);
app.get('/occupations/latest', mainCtrl.getLastJob);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getTypeHobbie);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.addHobbie);
app.post('/occupations', mainCtrl.addOccupation)

app.post('/skills', middleware.generateId, mainCtrl.addSkills);
app.get('/skills', mainCtrl.getSkills);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.listen(9775, function(){
  console.log("listening on 9775");
});
