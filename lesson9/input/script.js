'use strict';

let age = document.getElementById('age');

age.addEventListener('change', () => {
	let ageValue =  document.getElementById('age').value;
	
	function showUser(surname, name) {
		this.value = ageValue;

	    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}
	let result = new showUser('Mr.', 'Brus'); 
});
 
