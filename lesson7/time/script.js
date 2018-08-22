'use strict';
window.addEventListener('DOMContentLoaded', () => {
	let clock = document.getElementById('clock');

	function timeFun() {
		let time = new Date(),
			h = time.getHours().toString(),
			m = time.getMinutes().toString(),
			s = time.getSeconds().toString();

			console.log(typeof(s));

			if (h.length < 2) {
				h = '0' + h;
			}

			if (m.length < 2) {
				m = '0' + m;
			}

			if (s.length < 2) {
				s = '0' + s;
			}

		let timeString = (`${h}:${m}:${s}`);

			clock.textContent = timeString;
	}

	setInterval(timeFun, 1000);
});