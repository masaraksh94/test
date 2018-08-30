$(document).ready(function() {
	//Выбрать тур
	$('.main_btna').on('click', function(){
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	//консультация
	$('.main_btn').on('click', function(){
		$('.overlay').fadeIn('3000');
		$('.modal').slideDown('slow');
	});

	//Расписание туров
	$('li:nth-child(2)').on('click', function(){
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	//close
	$('.close').on('click', function(){
		$('.modal').slideUp('slow');
		$('.overlay').fadeOut('slow');
	})
});