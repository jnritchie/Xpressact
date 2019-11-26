var express = require("express");
var unirest = require('unirest');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly, or is that");
    console.log("I'm here");
    unirest.get("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi")
		.header("X-RapidAPI-Host", "unogs-unogs-v1.p.rapidapi.com")
		.header("X-RapidAPI-Key", "53c81e2184msh71570dcb4d8c5c2p12fe93jsn5ec9393baeb5")
		.end(function (result) {
  		res.send(console.log(result.status, result.headers, result.body));
	});
});

module.exports = router;
