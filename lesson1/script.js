'use strict';

var budgeMonth = prompt("Ваш бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

var mainList = {
	budge: 30000,
	shopName: "ДляВас",
	shopGoods: [],
	employers: {},
	open: true
}

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));

alert("Бюджет на один день : " + (mainList.budge/30));