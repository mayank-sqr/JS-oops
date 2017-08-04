function User (name, email){
this.name = name;
this.email = email;
this.quizeScore = [];
this.currentscore = 0;
}

User.prototype = {
	constructor : User,

	saveScore : function(ScoreToAdd){
		this.quizeScore.push(ScoreToAdd)
	},

	showNameAndScore : function(){
		var score = this.quizeScore.length > 0 ? this.quizeScore.join(", ") : "No Score yet";
		return this.name + " Scores "+ score;
	},

	changeEmail : function(newEmail){
		this.email = newEmail;
		return "New Email Saved "+ this.email;
	}

}

firstUser = new User("mayank","mayank@opencentral.com");
firstUser.saveScore(20);
firstUser.saveScore(50);
firstUser.showNameAndScore();