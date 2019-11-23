var timer = null; //for now just null so I know i have a timer
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	//countdown
	if (state == 2) {
		timer = setInterval (function() {
			countdownNumber = countdownNumber -1; //the next time it runs will be one less
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber > 1 && countdownNumber <= 6) {
				//be nervous
				document.getElementById('nervous').className = 'nervous show';

			} else {
				document.getElementById('nervous').className = 'nervous';
			}
			
			if (countdownNumber > 1 && countdownNumber <= 2) { //cant wait
				document.getElementById('cant-wait').className = 'cant-wait show';
				
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if ( countdownNumber <= 0) {
				changeState(3);
			};
		}, 500); //that is the interval in ms = 1s 

	} else if (state == 3){
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber:', randomNumber);

			//success
			if (randomNumber > 1) { //probabilidad de que salga boom
				changeState(4); 
			} else {
				changeState(5); //oh no!
			}
		}, 2000);
	};
}