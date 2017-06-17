//Harry and Friends
var friends = [
	{
		name:"Harry Potter",
		photo: "https://vignette2.wikia.nocookie.net/harrypotter/images/0/00/Harry_James_Potter34.jpg/revision/latest?cb=20150826224904",
		scores: [5, 2, 3, 4, 1, 5, 5, 5, 3, 5]
	},
    {
        name:"Hermione Granger",
        photo: "https://flavorwire.files.wordpress.com/2015/09/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.jpg",
        scores: [5, 1, 4, 5, 1, 1, 4, 5, 5, 5]
    }
];

var friendsModel = {
    push(data) {
        friends.push(data);
    },
    get() {
        return friends;
    }
}

module.exports = friendsModel;


