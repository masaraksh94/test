'use strict'

var num = 33721;
var str = String(num);
var arr = str.split('');
var result = 1;

for (var i = 0; i < arr.length; i++) {
	result *= arr[i];
}

var degree = Math.pow(result, 3);
degree = String(degree);

console.log(`Произведение:  ${result}`);
console.log(`126 в степени 3 = ${degree}`);
console.log(`${degree.charAt(0)}${degree.charAt(1)}`);
