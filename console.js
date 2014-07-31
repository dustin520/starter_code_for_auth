var repl = require('repl');
var db = require('./models/index.js');
var pkge = require("./package")
var newREPL = repl.start(pkge.name + " > ");

// // this file is for testing stuff, know these requires for that

// // db.user.create - general syntax for using models in sqlize 
// db.user.findAll().success(function(user) {
// 	console.log(user);
// });

// db.post.create({title: 'blah', body: 'stuf'});

// to find user by id
db.user.find({id:1}).success(function(user) {
	console.log(user); 
})

// // methods for finding
// .find 
// .find({id: 4})
// .findAll
// .create //save right after
// .build && .save 
// .findOrCreate

// .addPost
// .addNAMEOFYOURMODEL

newREPL.context.db = db;