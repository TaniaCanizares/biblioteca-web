(function ($) {
	"use strict";

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
		var res = cargarRes();
		for (var i = 0; i < res.length; i++) {
			listar(res[i], i);
		}
	});

	var cargarRes = function () {
		var res = window.localStorage.getItem("reserva");
		var reservas = res.split(",");
		var aux = [];
		for (var i = 0; i < reservas.length; i++) {
			aux.push(new reserva("0", reservas[i], "Reserva"));
		}
		return aux;
	}

	var listar = function (reserva, pos) {
		var fecRes = "" + reserva.fecha_reserva.getDate() + "/" + reserva.fecha_reserva.getMonth() + "/" + reserva.fecha_reserva.getFullYear()
			+ " - " + reserva.fecha_reserva.getHours() + ":" + reserva.fecha_reserva.getMinutes();

		var fecEnt = "" + reserva.fecha_reserva.getDate() + "/" + reserva.fecha_reserva.getMonth() + "/" + reserva.fecha_reserva.getFullYear()
			+ " - " + (reserva.fecha_reserva.getHours()+3) + ":" + reserva.fecha_reserva.getMinutes();

		document.getElementById("titulo").innerHTML = reserva.titulo;
		document.getElementById("fecha_res").innerHTML = fecRes;
		document.getElementById("fecha_ent").innerHTML = fecEnt;
		document.getElementById("estado").innerHTML = reserva.estado;

		//if(pos!=0){
		var elmnt = document.getElementById("reserva");
		var cln = elmnt.cloneNode(true);
		document.getElementById("t01").appendChild(cln);
		//}
		//document.body.appendChild(cln);
	}

	function reserva(ide, titulo, estado) {
		this.ide = ide;
		this.titulo = titulo;
		this.fecha_reserva = new Date();
		this.fecha_entrega = new Date();
		this.estado = estado;
	};

	var nav = $('nav');
	var navHeight = nav.outerHeight();
})(jQuery);
