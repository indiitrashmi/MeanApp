const express = require("express");

const app = express();

app.use('/api/posts',(req,res,next) => {
  const posts = [
    {
      id: "vdskbkbk",
      title: "First post",
      content: "This is coming from server"
    },
    {
      id: "vdskbkbk",
      title: "Second post",
      content: "This is coming from server"
    }
  ];
 res.status(200).json({
   message: "Posts fetched!!",
   posts: posts
 });
});

module.exports = app;
