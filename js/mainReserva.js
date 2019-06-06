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
		var cancelar = document.getElementById("cancelar");
		var can=function(){
			var path = window.location.origin + (window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1));
			window.location.href=path+"index.html";	
		}
		var reservar = function () {
			var id = parseInt(window.localStorage.getItem("id"));
			var aux = localStorage.getItem("Disponibles");
			var disp = aux.split(",");
			if (disp[id] != "0") {
				var opcion = confirm("Confirme la reserva del libro");
				if (opcion == true) {
					var libro = window.localStorage.getItem("reserva");
					var fecha = window.localStorage.getItem("fecha");
					console.log(libro);
					console.log(fecha);
					if (libro == "") {
						libro = nomLib;
						var ax = new Date();
						fecha = "0" + ax.getDate() + "/0" + ax.getMonth() + "/" + ax.getFullYear()
						+ " - " + ax.getHours() + ":" + ax.getMinutes();
					}
					else {
						libro = libro + "," + nomLib;
						var ax = new Date();
						fecha = fecha+ ",0" + ax.getDate() + "/0" + ax.getMonth() + "/" + ax.getFullYear()
						+ " - " + ax.getHours() + ":" + ax.getMinutes();
					}
					window.localStorage.setItem("reserva", libro);
					window.localStorage.setItem("fecha",fecha);
					var aux = localStorage.getItem("Disponibles");
					var disp = aux.split(",");
					disp[parseInt(id)] = parseInt(disp[parseInt(id)]) - 1;
					localStorage.setItem("Disponibles", disp);
					window.location.replace('./index.html');
					alert("Su Libro ha sido reservado, por favor paselo a recoger dentro de las siguientes 3 horas");
				}
			}
			else {
				alert("No hay unidades disponibles");
			}
		}
		cancelar.addEventListener('click', can, false);
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
