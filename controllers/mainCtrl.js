var person = require('../data/person');

module.exports = {
  getname: function(req, res, next){
    res.status(200).json(person.name);
  },
  getlocation: function(req, res, next){
    res.status(200).json(person.location);
  },
  getJob: function(req, res, next){
    if(req.query.order === "desc"){
    res.status(200).json(person.occupations.sort().reverse());
    }
    if(req.query.order === "asc"){
      res.status(200).json(person.occupations.sort());
    }
      res.status(200).json(person.occupations);
  },
  getLastJob: function(req, res, next){
    res.status(200).json(person.occupations.pop())
  },
  getHobbies: function(req, res, next){
    res.status(200).json(person.hobbies);
  },
  getTypeHobbie: function(req, res, next){
    var type = req.params.type;
    var typeMatch = [];
    for (var i = 0; i < person.hobbies.length; i++) {
     if(person.hobbies[i].type === type){
       typeMatch.push(person.hobbies[i]);
     }
    }
    res.status(200).json(typeMatch);
  },
  updateName: function(req, res, next){
    person.name = req.body.name;

  },
  updateLocation: function(req, res, next){
    person.location = req.body.location;
    res.status(200).json(person);
  },
  addHobbie: function(req, res, next){
    person.hobbies.push(req.body);
    res.status(200).json(person);
  },
  addOccupation: function(req, res, next){
    person.occupations.push(req.body.job) ;
    res.status(200).json(person);
  },
  addSkills: function(req, res, next){
    console.log(req.body)
    person.skills.push(req.body)
  res.status(200).json(person.skills);
  },
  getSkills:function(req, res, next){
    var filterSkills = [];
  if(req.query.experience){
    for (var i = 0; i < person.skills.length; i++) {
    if(req.query.experience === person.skills[i].experience){
    filterSkills.push(person.skills[i]);
    }
   }
  if (filterSkills.length === 0) {
    res.status(200).json({"message":"not availale"})
  }
   res.status(200).json(filterSkills)
   }

  else {
    res.status(200).json(person.skills)
  }
},

  getSecrets: function(req, res, next){
  res.status(200).json(person.secrets);
   }
}
