'use strict';
window.addEventListener('DOMContentLoaded', () => { 
	let tab = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent'),
		infoHeader = document.querySelector('.info-header');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	infoHeader.addEventListener('click', () => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let deadLine = new Date ('2018-08-27');

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60).toString(),
			minutes = Math.floor((t/1000/60) % 60).toString(),
			hours = Math.floor((t/(1000*60*60))).toString();

			if (hours.length < 2) {
				hours = `0${hours}`;
			}

			if (minutes.length < 2) {
				minutes = `0${minutes}`;
			}

			if (seconds.length < 2) {
				seconds = `0${seconds}`;
			}

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};



	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime),
					timeInterval  = setInterval(updateClock, 1000);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					clearInterval(timeInterval);
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
				}
			};

			updateClock();
	};

	setClock('timer', deadLine);

	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn');

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});

		for (var i = 0; i < descriptionBtn.length; i++) {
				descriptionBtn[i].addEventListener('click', function() {
					this.classList.add('more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});
		}

	// Form
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Свами свяжутся";
		message.failure = "Что-то пошло не так... ";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
	statusMessage.style.cssText = 'color: white;';

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			//AJAX

			let request = new XMLHttpRequest();
				request.open("POST", "server.php")

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form);

				request.send(formData);

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
						} else {
							statusMessage.innerHTML = message.failure;
						}
					}
				} 
				for (var i = 0; i < input.length; i++) {
					input[i].value = '';
				}
		});

	// 	//communication

		let communication = document.getElementById('form'),
			inputCom = communication.getElementsByTagName('input');

			communication.addEventListener('submit', function(event) {
				event.preventDefault();
				communication.appendChild(statusMessage);

				//AJAX
				let request = new XMLHttpRequest();
					request.open("POST", "server.php")

					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form);

					request.send(formData);

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							statusMessage.innerHTML = message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
							} else {
								statusMessage.innerHTML = message.failure;
							}
						}
					} 
					for (var i = 0; i < input.length; i++) {
						input[i].value = '';
					}

			});

	//Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			};
			if (n < 1) {
				slideIndex = slides.length;
			};

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			};

			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		};

		function plusSlides(n) {
			showSlides(slideIndex += n);
		};

		function currentSlide(n) {
			showSlides(slideIndex = n);
		};

		prev.addEventListener('click', () => {
			plusSlides(-1);
		});

		next.addEventListener('click', () => {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});

	//Calc

	let person = document.getElementsByClassName('counter-block-input')[0],
		restDay = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	function checkValue(){
		return (restDay.value == '' ||
				person.value == ''  ||
				restDay.value == null ||
				person.value == null  ||
				restDay.value <= 0 ||
				person.value <= 0 ||
				restDay == '' ||
				person == '' ||
				restDay <= 0 ||
				person <= 0);
	};

	person.addEventListener('change',  function(){
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(checkValue()) {
			totalValue.innerHTML = 0;
		}else {
			totalValue.innerHTML = total;
		}
	});

	restDay.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(checkValue()) {
			totalValue.innerHTML = 0;
		}else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function(){
		if(checkValue()) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;

				totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
		}
	});

	// proviso
	person.onkeypress = function(event) {
		let except = getNum(event);

		if (except < '0' || except > '9') {
			return false;
		}
	};

	restDay.onkeypress = function(event) {
		let except = getNum(event);

		if (except < '0' || except > '9') {
			return false;
		}
	};

	function getNum(event) {

	    if (event.which != 0 && event.charCode != 0) {
		    if (event.which < 32);
		    return String.fromCharCode(event.which) 
	    } 
    };
});	