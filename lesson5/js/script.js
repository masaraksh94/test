'use strict';

let menu = document.querySelector('.menu'),
	menuItems = document.querySelectorAll('.menu-item'), 
	title = document.getElementById('title'),
	adv = document.querySelector('.adv'),
	question = prompt("Как вы относитесь к технике apple?", "");



menu.insertBefore(menuItems[1], menuItems[3]);

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

title.innerHTML = 'Мы продаем только подлиную технику Apple';

adv.remove();

