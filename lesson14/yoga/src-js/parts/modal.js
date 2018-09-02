function modal() {
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
};

export default modal;