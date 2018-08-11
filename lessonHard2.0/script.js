'use strict';

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'вс'];

for (let i = 0; i < week.length; i++) {
	if (i == 5 || i == 6) {
		document.write(`<b>${week[i]}</b><br>`);
	}else if (i === 4 ) {
		document.write(`<i>${week[i]} </i><br>`)
	}else{
		document.write(`${week[i]} <br>`);
	}
}


let arr = ['31376', '79280', '609', '57', '333', '90', '73'];

for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '3' || arr[i][0] == '7') {
		console.log(arr[i]);
	}
}
