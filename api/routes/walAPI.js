var express = require("express");
var unirest = require('unirest');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly, or is it");
    console.log("I'm here");
    unirest.get("https://api.walmartlabs.com/v1/search?query=ipod&format=json&apiKey=aj8rnnqz7bbz542kwnq8umnr")
		.header("apiKey", "aj8rnnqz7bbz542kwnq8umnr")
		.end(function (result) {
  		res.send(console.log(result.body));
	});
});

module.exports = router;
