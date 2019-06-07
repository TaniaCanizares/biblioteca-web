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
		var estructura;
		for (var i = 0; i < res.length; i++) {
			estructura=listar(res[i]);
			document.getElementById("t01").appendChild(estructura);
		}
	});

	var cargarRes = function () {
		var res = window.localStorage.getItem("reserva");
		var fec = window.localStorage.getItem("fecha");
		var fecEn = window.localStorage.getItem("fechaEn");
		var reservas = res.split(",");
		var fecha = fec.split(",");
		var fechaEn = fecEn.split(",");
		var aux = [];
		for (var i = 0; i < reservas.length; i++) {
			aux.push(new reserva(i, reservas[i],fecha[i],fechaEn[i], "Reserva"));
		}
		return aux;
	}

	var listar = function (reserva,id) {
		var elmnt = document.getElementById("reserva");
		var cln = elmnt.cloneNode(true);

		var newIde = document.createAttribute("id");
		newIde.value = id;
		cln.setAttributeNode(newIde);

		document.getElementById("titulo").innerHTML = reserva.titulo;
		document.getElementById("fecha_res").innerHTML = reserva.fecha_reserva;
		document.getElementById("fecha_ent").innerHTML = reserva.fecha_entrega;
		document.getElementById("estado").innerHTML = reserva.estado;

		//if(pos!=0){
		
		//document.getElementById("t01").appendChild(cln);
		return cln;
		//}
		//document.body.appendChild(cln);
	}

	function reserva(ide, titulo, fecha_reserva,fecha_entrega, estado) {
		this.ide = ide;
		this.titulo = titulo;
		this.fecha_reserva = fecha_reserva;
		this.fecha_entrega = fecha_entrega;
		this.estado = estado;
	};

	var nav = $('nav');
	var navHeight = nav.outerHeight();
})(jQuery);
