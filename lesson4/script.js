'use strict';

let budgeMonth, 
	nameShop, 
	time, 
	price;

//Начало работы
function start() {

	while (isNaN(budgeMonth) || budgeMonth == "" || budgeMonth == null || budgeMonth == 0) {
		budgeMonth = prompt("Ваш бюджет на месяц?", "");			
	};

	while (isNaN(price) || price == "" || price == null || price == 0) {
		price = prompt("Введите цену товара", "")
	};

	nameShop = prompt("Название вашего магазина?", "").toUpperCase();

	while (isNaN(time) || time == "" || time == null ) {
		time = prompt("Сколько сейчас времяни?", "");			
	};
}
//start();

let mainList = {
	budge: budgeMonth,
	shopName: nameShop,
	priceProduct: price,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	//Выбор товара для покупки
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++) {

			let a = prompt("Какой тип товаров будем продавать?");

			if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
				console.log('Верно!');
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},

	//Время работы магазина
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Невозможно!');
		} else if (time >= 8 && time <= 20) {
			console.log('Пора работать!');
			mainList.open = true;
		} else if (time <= 24 || time >= 0) {
			console.log('Приходи завтра!');
		} else {
			console.log('Всутках только 24 часа!');
		}
	},

	//Рассчет цены по скидке
	discountPricing: function  discountPricing() {
		if (mainList.discount) {
			console.log (price = price * 0.8);
		} else {
			console.log(price);
		};
	},

	//Найм сотрудников 
	employersStaff: function employersStaff() {
		for (let i = 1; i <= 4; i++) {

			let a = prompt("Представьтесь!", "");

			if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 40) {
				console.log('Очень приятно!');
				mainList.employers[i] = a;
			
			} else {
				i--;
			};
		};
	},

	//Расчет дневного бюджета
	dailyBudget: function dailyBudget (budge) {
		alert(`Бюджет на один день: ${(budge/30)}`);
	},

	chooseShopItems: function chooseShopItems() {

		for (let i = 1; i < 2; i++) {
			let items = prompt("Перечислите через заятую товары", "");

			if ((typeof(items)) === 'string' && items != null && items != '') {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Предложите, еще ", ""));
				mainList.shopItems.sort();
			}else{
				i--;
			}
		}

		mainList.shopItems.forEach(function(items, i) {
			i++;
			console.log(`У нас вы можете купить: ${i} ${items}`);
		});

		for ( let key in mainList.shopItems) {
			console.log(`Наш магазин включает в себя: ${mainList.shopItems[key]}`);
		}
	}
};

console.log(mainList);