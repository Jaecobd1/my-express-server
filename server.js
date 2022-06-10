//jshint esversion:6

const express = require('express');
const app = express();
const Port = 3000;

app.get("/", function (req, res) {
    res.send("Hello");
})

app.listen(Port, function () {
    console.log(`Server started on port ${Port}`);
});


