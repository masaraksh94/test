'use strict';

let str = "урок-3-был слишком легким";

function strUpper() {
    console.log(str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' '));
    document.write(str.replace('легким', 'легкоо').substr(-6));
};
strUpper();

let arr = [20, 33, 1, "Человек", 2, 3];
	arr.splice(3, 1);

let result = 0;

for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	};
let radical = Math.pow(result, 3);
console.log(Math.sqrt(radical));


