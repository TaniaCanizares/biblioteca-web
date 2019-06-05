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
		var inputLibro = document.getElementById("nomLibro");
		var nomLib = window.localStorage.getItem("nombre");
		var id = window.localStorage.getItem("id");
		var aux = localStorage.getItem("Disponibles");
		var disp = aux.split(",");
		//alert(disp[id] + " != 0");
		inputLibro.setAttribute("value", nomLib);
		var reserva = document.getElementById("res_reserva");
		var reservar = function () {
			var id = parseInt(window.localStorage.getItem("id"));
			var aux = localStorage.getItem("Disponibles");
			var disp = aux.split(",");
			if (disp[id] != "0") {
				var opcion = confirm("Confirme la reserva del libro");
				if (opcion == true) {
					var libro = window.localStorage.getItem("reserva");
					console.log(libro);
					if (libro == "") {
						libro = nomLib;
					}
					else {
						libro = libro + "," + nomLib;
					}
					window.localStorage.setItem("reserva", libro);
					//alert(window.localStorage.getItem("reserva"));
					var aux = localStorage.getItem("Disponibles");
					var disp = aux.split(",");
					disp[parseInt(id)] = parseInt(disp[parseInt(id)]) - 1;
					localStorage.setItem("Disponibles", disp);
					window.location.href = 'index.html';
				}
			}
			else {
				alert("No hay unidades disponibles");
			}
		}
		reserva.addEventListener('click', reservar, false);
	});

	function libro(ide, titulo, autor, genero, edicion, uni_existente, uni_disponible, imagen, descipcion) {
		this.ide = ide;
		this.titulo = titulo;
		this.autor = autor;
		this.genero = genero;
		this.edicion = edicion;
		this.uni_existente = uni_existente;
		this.uni_disponible = uni_disponible;
		this.imagen = imagen;
		this.descipcion = descipcion;
	};

})(jQuery);
