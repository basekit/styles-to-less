// Data attribute switch
var toggleState	= function (elem, one, two) {
	var elem	= document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
	// Mobile navigation toggle selector
	var navtoggle = document.querySelector('.toggle-button');

	// Aside navigation toggle
	if (typeof(navtoggle) != 'undefined' && navtoggle != null) {
		navtoggle.onclick = function (e) {
			toggleState('.navigation__list', 'closed', 'open');
			e.preventDefault();
		};
	};


// Fixed position and fade out when scrolling
var scrollEffect = function (elem) {

	// How high the window is
	var window_height = window.innerHeight;

	// Apply styles as user scrolls
	elem.setAttribute(
		"style", "opacity:" + Math.max(0, parseFloat(1-(1.8/window_height*window.pageYOffset)).toFixed(2)) + "; -webkit-transform: translateY(" + window.pageYOffset + "px)"
	);

};

	var elem = document.querySelector('.block--fixed .panel');

	window.onscroll = function(e) {
		scrollEffect(elem);
	};

