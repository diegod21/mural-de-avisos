const express = require('express');
const posts = require("../model/posts");
const app = express();

app.use(express.json());

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("post enviado com sucesso");
});

module.exports = app;
