setTimeout(function () {
	location.href = 'rocket.html';
}, 2000);

//this function does cool stuff
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className; 

	//changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red'; 
	} else {
		document.getElementById('cool').className = 'cool'; //document is your main thing
	}
	
	
}

var sayMyName = function (name) {
	alert('My name is: ' + name);
}

var car = { //object and inside properties and values 
				make: 'VW',
				type: 'Polo',
				color: 'blue',
				isTurnedOn: false,
				numberOfWheels: 4,
				seats: [
					'seat1', 
					'seat2', 
					'seat3', 
					'seat4'
					], 
				turnOn : function () { //this is a method inside car 
					this.isTurnedOn = true; //this = the car
				},
				fly: function () { //another method
					alert('fly');
				},
				switchCar: function (isOn) {
					console.log('turn car' + isOn);
					if (isOn == true) {
						this.isTurnedOn = true;
					} else {
						this.isTurnedOn = false;
					}
				}
 			};

console.log('hello world!');



// 	//VARIABLES: a variable is sth that refers to sth else. var is asigned to a variable that can change (blue, green..). Here we can store/refer to: 1)text as a string " " or ' ' 2)array which is a list [] 3)numbers (without quotes) 4) booleans true TRUE or false FALSE 5)object that combines all of this {}.

// var favColor = 'red';
// var myFavColors = ['blue', 'red', 'green']; //list 
// var numOfFavColors = 3;
// var hasGotFavColors = true; 

// var richObject = {
// 	firstName: 'Rich',
// 	lastName: 'Armstrong',
// 	favColors: ['blue', 'red', 'green'],
// 	yearsAlive: 103,
// 	isMale: true
// };

//  //FUNCTIONS: sth that can be reused, much like a variable, can be stored in a variable or a variable can refer to a function. The () makes it a function. What happens is inside the {}, a method.

// function whatIsMyFavColor () {


// }

// var whatIsMyFavColor = function () {
// 	return false; //anything after return doesn't run so it would run false

// 	return 'blue'; 
	
// 	return true; 
// }

// var doSomething = function () {
// 	console.log("do something!!!");
// }


// var area = function (width, height) {
// 	return width * height;
// }

// var fullname = function (firstname, secondname) {
// 	return firstname + ' ' + secondname;
// }

// // THE IF STATEMENT: if sth then do sth
// // 1 = asigns a value, 2 == work as = so it is equal
// // && means &  || means or


// var name1 = 'Rich';
// var name2 = 'Bob';


// if (name1 == 'Rich' && name2 == 'Bob') { //if this is true 
// 	//do sth
// 	alert('true 1');  //perfom this
// } else if (name2 == 'Rich') {
// 	alert('true 2');
// } else {
// 	alert('false!!!!')
// }
