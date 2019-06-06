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
			listar(res[i]);
		}
	});

	var cargarRes = function () {
		var res = window.localStorage.getItem("reserva");
		var fec = window.localStorage.getItem("fecha");
		var reservas = res.split(",");
		var fecha = fec.split(",");
		var aux = [];
		for (var i = 0; i < reservas.length; i++) {
			aux.push(new reserva("0", reservas[i],fecha[i], "Reserva"));
		}
		return aux;
	}

	var listar = function (reserva) {
		var fecEnt = "0" + reserva.fecha_entrega.getDate() + "/0" + reserva.fecha_entrega.getMonth() + "/" + reserva.fecha_entrega.getFullYear()
			+ " - " + (reserva.fecha_entrega.getHours()+3) + ":" + reserva.fecha_entrega.getMinutes();

		document.getElementById("titulo").innerHTML = reserva.titulo;
		document.getElementById("fecha_res").innerHTML = reserva.fecha_reserva;
		document.getElementById("fecha_ent").innerHTML = fecEnt;
		document.getElementById("estado").innerHTML = reserva.estado;

		//if(pos!=0){
		var elmnt = document.getElementById("reserva");
		var cln = elmnt.cloneNode(true);
		document.getElementById("t01").appendChild(cln);
		//}
		//document.body.appendChild(cln);
	}

	function reserva(ide, titulo, fecha_reserva, estado) {
		this.ide = ide;
		this.titulo = titulo;
		this.fecha_reserva = fecha_reserva;
		this.fecha_entrega = new Date();
		this.estado = estado;
	};

	var nav = $('nav');
	var navHeight = nav.outerHeight();
})(jQuery);
