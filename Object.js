var myObject = {
	iAm : 'Mayank',
	Profession : 'Engg',
	full : function(){
		return "Hello I Am " + this.iAm + " and my Profession is " + this.Profession
	}
}
document.getElementById('demo').innerHTML = myObject.full();


var x = {}; // new Object
var x = ""; // new primitive string
var x = 0; //  new primitive number
var x = true; // new primitive boolean
var x = []; // new array object

var person = {
	iAm : "Vinay",
	Profession : "Doctor",
	Age : 50
}

var x = person;
console.log(person.Age);
console.log(x.Age);
x.Age = 20;
console.log(person.Age);

myObject.nationality = "Indian";
document.getElementById("demo").innerHTML = myObject.iAm + " is " + myObject.nationality + ".";

//document.getElementById('demo').innerHTML = myObject.full.call(person);
document.getElementById('demo').innerHTML = myObject.full.apply(person);