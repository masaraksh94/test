var num = 33721;
var str = String(num);
var arr = str.split('');
var result = 1;

for (var i = 0; i < arr.length; i++) {
	result *= arr[i];
}

var degree = Math.pow(result, 3);

alert("Произведение: " + result);
alert("126 в степени 3 = " + (degree));
