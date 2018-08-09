'use strict';

let budgeMonth = prompt("Ваш бюджет на месяц?");
let nameShop = prompt("Название вашего магазина?");

let mainList = {
	budge: budgeMonth,
	shopName: nameShop,
	shopGoods: [],
	employers: {},
	open: true
}

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' & a.length < 50) {
		console.log('Верно!');
		mainList.shopGoods[i] = a;
	} 
}


/*let i = 0;
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' & a.length < 50) {
		console.log('Верно!');
		mainList.shopGoods[i] = a;
	} 
	i++;
}*/

/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' & a.length < 50) {
		console.log('Верно!');
		mainList.shopGoods[i] = a;
	} 
	i++;
} while (i <5);*/

alert(`Бюджет на один день: ${(mainList.budge/30)}`);

console.log(mainList);