'use strict';

let openBtn = document.getElementById('open-btn'),
	
	nameValue = document.querySelector('.name-value'),
	budgetValue = document.querySelector('.budget-value'),
	goodsValue = document.querySelector('.goods-value'),
	itemsValue = document.querySelector('.items-value'),
	employersValue = document.querySelector('.employers-value'),
	discounValue = document.querySelector('.discount-value'),
	isopenValue = document.querySelector('.isopen-value'),

	goodsItems = document.getElementsByClassName('goods-item'),
	
	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],

	chooseItems = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployers = document.querySelectorAll('.hire-employers-item');

let budgeMonth,
	price;

openBtn.addEventListener('click', () => {
	budgeMonth = prompt("Ваш бюджет на месяц?", "");


	if (isNaN(budgeMonth) || budgeMonth == "" || budgeMonth == null || budgeMonth == 0) {
		budgeMonth = prompt("Ваш бюджет на месяц?", "");			
	};

	budgetValue.textContent = budgeMonth;

	nameValue.textContent = prompt("Название вашего магазина?", "").toUpperCase();

});

goodsBtn.addEventListener('click', () => {

	for (let i = 0; i < goodsItems.length; i++) {
		let a = goodsItems[i].value

			if ((typeof(a)) === 'string' && a != null && a.length < 50) {
				console.log('Верно!');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods; 
			} else {
				i--;
			}
	}
});

chooseItems.addEventListener('change', () => {
	let items = chooseItems.value;

		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(",");
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log('Невозможно!');
		mainList.open = false;
		btnOn(true);
	} else if (time >= 8 && time <= 20) {
		console.log('Пора работать!');
		mainList.open = true;
		btnOn(false);
	} else if (time <= 24 || time >= 0) {
		console.log('Приходи завтра!');
		mainList.open = false;
		btnOn(true);
	} else {
		console.log('Всутках только 24 часа!');
		mainList.open = false;
		btnOn(true);
	}

	if (mainList.open === true) {
		isopenValue.style.backgroundColor = 'green';  
	} else {
		isopenValue.style.backgroundColor = 'red'; 
	}
});

budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = budgeMonth / 30;
});

employersBtn.addEventListener('click', () => {

	for (let i = 0; i < hireEmployers.length; i++) {

		let name = hireEmployers[i].value;
		mainList.employers[i] = name;

		employersValue.textContent += mainList.employers[i] + ', ';
		};	
});

timeValue.addEventListener('change', () => {
	let discount = discounValue.value;

	if(mainList.open === true) {
		mainList.discount = true;
	}else{
		mainList.discount = false;
	}


	if (mainList.discount === true) {
		discounValue.style.backgroundColor = 'green';
		discounValue.textContent = 'Время 80% скидок !!!';
	}else {
		discounValue.style.backgroundColor = 'red';
		discounValue.textContent = 'Скидок не';
	}
});

function btnOn(boll) {
	goodsBtn.disabled = boll;
	budgetBtn.disabled = boll; 
	employersBtn.disabled = boll;
};

countBudgetValue.disabled = true;

//Начало работы

let mainList = {
	budge: budgeMonth,
	priceProduct: price,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
};

console.log(mainList);


