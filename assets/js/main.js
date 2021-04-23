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


/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	// Validate that variables exist
	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			// We add the show-menu class to the div tag with the nav__menu class
			nav.classList.toggle("show-menu");
		});
	}
};
showMenu("nav-toggle", "header-nav");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".header__nav-link");

function linkAction() {
	const navMenu = document.getElementById("header-nav");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
