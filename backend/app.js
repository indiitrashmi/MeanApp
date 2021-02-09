const express = require("express"); // to get express features

const bodyParser = require("body-parser"); //for parsing incoming json data

const Post = require("./models/post"); //model created using mongoose schema() method

const mongoose = require("mongoose"); //DB connect driver

const app = express(); //creating express instance to use its methods and properties


//Database connection using mongoose connect() function
mongoose.connect('mongodb+srv://Rashmi:OqQI9xucq88JdsHA@cluster0.bd5ev.mongodb.net/nodeangular?retryWrites=true&w=majority')
.then(() => {
   console.log("Connected to database");
})
.catch(() => {
   console.log("Connection failed");
});


// Will parse the incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Adding content allowed permissions as of now our client and backend running on different servers 4200 &3000
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
  next();
});

//for posting new post to db using post http verb
app.post('/api/posts',(req,res,next) => {
  const post = new Post({
    title:req.body.title,
    content:req.body.content
  });
  console.log(post);
  res.status(201).json({
    message:"Post added"
  });
});

//for getting list of posts to show on frontend
app.get('/api/posts',(req,res,next) => {
  const posts = [];
  // const posts = [
  //   {
  //     id: "vdskbkbk",
  //     title: "First post",
  //     content: "This is coming from server"
  //   },
  //   {
  //     id: "vdskbkbk",
  //     title: "Second post",
  //     content: "This is coming from server"
  //   }
  // ];
 res.status(200).json({
   message: "Posts fetched!!",
   posts: posts
 });
});

//exporting this to use in outside files
module.exports = app;
