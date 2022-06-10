//jshint esversion:6

const express = require('express');
const app = express();
const Port = 3000;

app.get("/", function (req, res) {
    res.send("Hello");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: jake@doblermedia.com");
});

app.get("/about", function (req, res) {
    res.send("Hi I'm Jake");
});

app.get("/hobbies", function (req, res) {
    res.send("coding");
});

app.listen(Port, function () {
    console.log(`Server started on port ${Port}`);
});


