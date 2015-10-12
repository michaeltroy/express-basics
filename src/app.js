'use strict';

var express = require('express'),
       hbs  = require('hbs'),
      posts = require('./posts.json');

var app = express();

/* View configuration */
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

/* Index */
app.get('/', function(req, res){
  var blog = posts;
  res.render('index', {blog: blog});
});

/* Post */
app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.send('This page is under construction');
  } else {
    var post = posts[title] || {};
    res.render('post', {post: post});
  }
});

app.listen(4000, function(){
 console.log('The server is running on port 4000')
});
