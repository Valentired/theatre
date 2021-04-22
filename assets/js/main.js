// SLICK SLIDER INICIALIZATION

$(document).ready(function () {
	$(".home__slider").slick({
		arrows: true,
		draggable: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		prevArrow: '<button type="button" class="slick-prev">Пред</button>',
		nextArrow: '<button type="button" class="slick-next">След</button>',
	});
});
