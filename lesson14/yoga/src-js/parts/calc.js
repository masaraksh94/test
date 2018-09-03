function calc() {
		//Calc

	let person = document.getElementsByClassName('counter-block-input')[0],
		restDay = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	function checkValue(){
		return (restDay.value == '' ||
				person.value == ''  ||
				restDay.value == null ||
				person.value == null  ||
				restDay.value <= 0 ||
				person.value <= 0 ||
				restDay == '' ||
				person == '' ||
				restDay <= 0 ||
				person <= 0);
	};

	person.addEventListener('change',  function(){
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(checkValue()) {
			totalValue.innerHTML = 0;
		}else {
			randomVariable();
		}
	});

	restDay.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(checkValue()) {
			totalValue.innerHTML = 0;
		}else {
			randomVariable();
		}
	});

	place.addEventListener('change', function(){
		if(checkValue()) {
			totalValue.innerHTML = 0;
		} else {
			
			randomVariable();
		}
	});

	function randomVariable(){
		let a = total;
		totalValue.textContent = a * place.options[place.selectedIndex].value;
	};

	// proviso
	person.onkeypress = function(event) {
		let except = getNum(event);

		if (except < '0' || except > '9') {
			return false;
		}
	};

	restDay.onkeypress = function(event) {
		let except = getNum(event);

		if (except < '0' || except > '9') {
			return false;
		}
	};

	function getNum(event) {

	    if (event.which != 0 && event.charCode != 0) {
		    if (event.which < 32);
		    return String.fromCharCode(event.which) 
	    } 
    };
};

export default calc;