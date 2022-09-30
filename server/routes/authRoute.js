const express = require("express");
const route = express.Router();

route.get("/signin", (req, res) => {
    res.send("signin")
})

route.get("/signup", (req, res) => {
    res.send("signup")
})

module.exports = route;