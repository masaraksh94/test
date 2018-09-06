window.addEventListener('DOMContentLoaded', () => {
	let headerBtn = document.querySelector('.popup_engineer_btn'),
		modal = document.querySelector('.popup_engineer'),
		closeBtn = document.querySelectorAll('.popup_close')



	headerBtn.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	for (var i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', () => {
			modal.style.display = 'none';
		});
	};

	window.addEventListener('click', (e) => {
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	})
});
