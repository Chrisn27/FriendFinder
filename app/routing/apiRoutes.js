var friends = require('../data/friends.js');
var path = require('path');
var express = require('express');
var router = express.Router();


router.get('/api/friends', function (req, res) {
	var data = friends.get();
	console.log(data);
	return res.json(data);
});

// router.get('/api/friends', function (req, res) {
// 	var data = friends.get();
// 	console.log(data);
// 	return res.json(data);
// });

router.post("/api/new/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    return res.json(newFriend);
});

router.post("/api/friends", function (req, res) {

var data = friends.get();

var bestMatch = data[0];

		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		for(var i = 0; i < friends.length-1; i++){
			totalDifference = 0;
			for(var j = 0; j < 10; j++){
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				if (totalDifference <= bestMatch.friendDifference){
					console.log("non blank bff");
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		} 
		console.log(bestMatch)
		return res.json(bestMatch);
});

module.exports = router;