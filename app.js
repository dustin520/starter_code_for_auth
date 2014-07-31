// app.js

var express = require('express'),
  db = require('./models/index.js'),
  bodyParser = require('body-parser'),

  methodOvrride = require('method-override'),
  app = express();

app.set('view engine', 'ejs');

app.use(methodOvrride());
app.use(bodyParser.urlencoded()); // to get form data
app.use(express.static(__dirname + '/public'));

// logging - takes req and res from all req/res and logs in console
app.use(function(req, res, next){
  console.log(req.method, req.url)
  next()
});

app.get('/users', function (req,res) {
  db.user.findAll()
  .success(function(allUsers){
    res.render("users/index", {users: allUsers}); 
  })
});

app.get('/posts/new', function(req, res) {
  res.render('posts/new'); 
});

app.post('/posts', function(req, res) {
  console.log("inside post of a post");
  db.user.findOrCreate({username: req.body.username, password: req.body.password})
  // for creates, has more params such as .error and .success as callbacks for more functions
  .error(function(err){
    // error flow
    res.send(err);
  })
  .success(function(user){
    // res.send(user);
    // db.post.create({title: req.body.title, body: req.body.body, authorId: user.dataValues.id});
    // success flow
    var newPost = db.post.build({title: req.body.title, body: req.body.body});
    db.user.addPost(newPost).success(function(post){
      req.send(post);
    })
  });
  // console.log(req.body); 
  // res.send(req.body);
});

app.get('/users/:id', function (req,res) {
  //
});

app.get('/posts/:id', function (req,res) {
  var id = req.params.id;
  //

});

app.get('/users/:id/posts/new', function(req, res){
  var id = req.params.id;
  //
});

app.post('/users/:id/posts', function(req, res){
  var id = req.params.id;
  //
});




app.listen(3000, function(){
  console.log("LISTENING ON PORT 3000")
})
