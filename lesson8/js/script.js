'use strict';
window.addEventListener('DOMContentLoaded', () => {
	let tab = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent'),
		infoHeader = document.querySelector('.info-header');

	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
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
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let deadLine = new Date (2018, 7, 23, 0, 37, 0, 0);

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60).toString(),
			minutes = Math.floor((t/1000/60) % 60).toString(),
			hours = Math.floor((t/(1000*60*60))).toString();

			if (hours.length < 2) {
				hours = '0' + hours;
			}

			if (minutes.length < 2) {
				minutes = '0' + minutes;
			}

			if (seconds.length < 2) {
				seconds = '0' + seconds;
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
});