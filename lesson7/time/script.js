'use strict';
window.addEventListener('DOMContentLoaded', () => {
	window.setInterval(() => {
		let time = new Date(),
			clock = document.getElementById("clock");

		clock.innerHTML = time.toLocaleTimeString();
	}, 1000);
});