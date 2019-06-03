(function ($) {
	"use strict";

	var lib = 0;
	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
		var inputLibro=document.getElementById("nomLibro");
		var nomLib=window.localStorage.getItem("nombre");
		inputLibro.setAttribute("value",nomLib);
	});


})(jQuery);
