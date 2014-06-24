'use strict';

var mean = require('meanio');
var mongoose = require('mongoose');

exports.render = function(req, res) {

    var modules = [];

    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }

    function isAdmin() {
        return req.user && req.user.roles.indexOf('admin') !== -1;
    }

    function doNothing(){

        console.log('helo')
}


   function loadSchema(){
    try {
    if (mongoose.model('collectionName')) return mongoose.model('collectionName');
  } catch(e) {
    if (e.name === 'MissingSchemaError') {
       var schema = new mongoose.Schema({ name: 'abc' });
       return mongoose.model('collectionName', schema);
    }
  }
   }

  
var t;

    function runCat(){
  //mongoose.connect('mongodb://localhost/test');


    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      // yay!
    });
    
// to avoid the “OverwriteModelError: Cannot overwrite `Kitten` model once compiled.”
try {
    if (mongoose.model('Kitten')){
        var Kitten = mongoose.model('Kitten', kittySchema)


    } 
  }
  catch(e){
    console.log('err');
      var kittySchema = mongoose.Schema({
        name: String
    })


    kittySchema.methods.speak = function () {
      var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name"
      console.log(greeting);
      return greeting;
    }



   
    var Kitten = mongoose.model('Kitten', kittySchema)




  }
  

 
    
     
    //mongo db example code is below for tutorial use
      
        var silence = new Kitten({ name: 'Silence' })
        console.log(silence.name) // 'Silence'



var fluffy = new Kitten({ name: 'fluffy' });
t= fluffy.speak() // "Meow name is fluffy"
return t;
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
  //t=kittens;
})


  Kitten.find({ name: /^Fluff/ }, doNothing);


//console.log(tResp);
//return tResp;


}



    // runCat();
    // Send some basic starting info to the view

    var x= runCat();
    res.render('cats', {"name":{ "kittenSays":x},  modules: modules, /*"catFunc":runCat(), */"adminEnabled":false});

   
    
};
