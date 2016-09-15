var person = require('../data/person');
module.exports = {
  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },
   generateId: function(req, res, next){
    var x = person.skills.length + 1;
    req.body.id = x.toString();

     next();
   },
   verifyUser: function(req, res, next){
     if(req.params.username === person.username && req.params.pin === person.pin){
       next();
     }
     else{
       res.status(200).json({"Message": "incorrect username or pin"})
     }
   },
}
