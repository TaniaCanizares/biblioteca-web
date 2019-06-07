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
		var can = function () {
			var path = window.location.origin + (window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1));
			window.location.href = path + "index.html";
		}
		var reservar = function () {
			var id = parseInt(window.localStorage.getItem("id"));
			var aux = localStorage.getItem("Disponibles");
			var disp = aux.split(",");

			var fechaActual = new Date();
			var anio = fechaActual.getFullYear();
			var mes = fechaActual.getMonth() + 1;
			var dia = fechaActual.getDate();

			var fecha = (document.getElementById("date").value).split("-");
			if (fecha[0] < anio | fecha[1] < mes | fecha[2] < dia) {
				alert("La fecha de entrega no es válida");
			}
			else {
				if (disp[id] != "0") {
					var opcion = confirm("Confirme la reserva del libro");
					if (opcion == true) {
						var libro = window.localStorage.getItem("reserva");
						var fecha = window.localStorage.getItem("fecha");
						var fechaEn = window.localStorage.getItem("fechaEn");
						if (libro == "") {
							libro = nomLib;
							var ax = new Date()
							fecha = ax.getFullYear() + "-0" + ax.getMonth() + "-0" + ax.getDate()
								+ "    " + ax.getHours() + ":" + ax.getMinutes();
							var fec = document.getElementById("date").value;
							fechaEn = fec + "    " + ax.getHours() + ":" + ax.getMinutes();
						}
						else {
							libro = libro + "," + nomLib;
							var ax = new Date()
							fecha = fecha + "," + ax.getFullYear() + "-0" + ax.getMonth() + "-0" + ax.getDate()
								+ "    " + ax.getHours() + ":" + ax.getMinutes();
							var fec = "," + document.getElementById("date").value;
							fechaEn = fechaEn + fec + "    " + ax.getHours() + ":" + ax.getMinutes();
						}

						window.localStorage.setItem("reserva", libro);
						window.localStorage.setItem("fecha", fecha);
						window.localStorage.setItem("fechaEn", fechaEn);
						var aux = localStorage.getItem("Disponibles");
						var disp = aux.split(",");
						disp[parseInt(id)] = parseInt(disp[parseInt(id)]) - 1;
						localStorage.setItem("Disponibles", disp);
						window.location.replace('./index.html');
						alert("Su Libro ha sido reservado exitosamente");
					}
				}
				else {
					alert("No hay unidades disponibles");
				}
			}
		}
		cancelar.addEventListener('click', can, false);
		reserva.addEventListener('click', reservar, false);
	});

})(jQuery);
