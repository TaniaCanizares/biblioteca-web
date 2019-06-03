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
		var nombre = obtenerValorUrl();
		var libros = llenarBib();
		var pos = buscarLibro(libros,nombre);
		alert(pos);
		detalles(libros[pos]);
	});

	function buscarLibro(libros,nomLibro){
		for(var i=0;i<libros.length;i++){
			if(libros[i].titilo==nomLibro){
				console.log("entro");
				return i;
			}
		}
		return -1;
	}

	function obtenerValorUrl(numLibro) {
		//alert(window.location.search.substring(1));
		var variables = window.location.search.substring(1);
		var varNombre = variables.split("=");
		var libro=varNombre[1];
		//alert("El nombre de la variable que llega es: "+libro);
		return libro;
	}

	var llenarBib = function () {
		var libro1 = new libro("Calculo Diferencia e Integral", "Paulo Boulos y Zara Issa Abud", "Matematicas",
			"2", "3", "1", "./img/calculo.jpg", "El cálculo diferencial es una parte del análisis matemático que consiste en el estudio de cómo cambian las funciones cuando sus variables cambian. El principal objeto de estudio en el cálculo diferencial es la derivada. Una noción estrechamente relacionada es la de diferencial de una función.");

		var libro2 = new libro("La Rebelion de las ratas", "Fernando Soto Aparicio", "Ficcion", "1", "3", "2",
			"./img/la_rebelion_de_las_ratas.jpg", "La Rebelión de las Ratas es una obra del escritor colombiano Fernando Soto Aparicio. Cuenta la historia de Timbalí, un pueblo ficticio que el escritor ubica en el departamento de Boyacá y que se encuentra bajo el dominio de las multinacionales estadounidenses");

		var libro3 = new libro("It", "Stephen King", "Terror", "1", "3", "0",
			"./img/it.jpg", "La historia se desarrolla alternada en dos épocas: el pasado (1957-58) y el presente (1985). Los hechos acontecen en la comunidad de Derry, en el estado de Maine, Estados Unidos. Bajo la ciudad, a un nivel inconsciente para todos los pobladores, habita un monstruo despiadado de apetito insaciable; esta malévola criatura atormenta a la comunidad desde tiempos remotos. El monstruo es un ser ajeno a este mundo, y se manifiesta como sus miedos, por lo cual constituye su alimento (preferiblemente los de los niños y adolescentes, cuyos temores son muy sencillos de elaborar). Su disfraz más común es el de un payaso, Pennywise, con el que atrae a sus víctimas.");

		var libros = [libro1, libro2, libro3];
		return libros;
	}

	function libro(titilo, autor, genero, edicion, uni_existente, uni_disponible, imagen, descipcion) {
		this.titulo = titilo,
		this.autor = autor,
		this.genero = genero,
		this.edicion = edicion,
		this.uni_existente = uni_existente,
		this.uni_disponible = uni_disponible,
		this.imagen = imagen,
		this.descipcion = descipcion
	};

	var detalles = function (libro) {
		var img = document.images.imagen;
		img.setAttribute('src', libro.imagen);

		var titulo = document.getElementById("titulo");
		titulo.innerHTML = libro.titulo;

		var autor = document.getElementById("autor");
		autor.innerHTML = libro.autor;

		var genero = document.getElementById("genero");
		genero.innerHTML = libro.genero;

		var edicion = document.getElementById("edicion");
		edicion.innerHTML = libro.edicion;

		var uni_existente = document.getElementById("uni_existente");
		uni_existente.innerHTML = libro.uni_existente;

		var uni_disponible = document.getElementById("uni_disponible");
		uni_disponible.innerHTML = libro.uni_disponible;

		var descipcion = document.getElementById("descripcion");
		descipcion.innerHTML = libro.descipcion;
	}



	// Back to top button
	/* $(window).scroll(function() {
	   if ($(this).scrollTop() > 100) {
		 $('.back-to-top').fadeIn('slow');
	   } else {
		 $('.back-to-top').fadeOut('slow');
	   }
	 });
	 $('.back-to-top').click(function(){
	   $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
	   return false;
	 });
	 */
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	/*window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	/*$('#carousel').owlCarousel({
		loop: true,
		margin: -1,
		items: 1,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	/*--/ Animate Carousel /--*/
	/*$('.intro-carousel').on('translate.owl.carousel', function () {
		$('.intro-content .intro-title').removeClass('zoomIn animated').hide();
		$('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
		$('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
	});

	$('.intro-carousel').on('translated.owl.carousel', function () {
		$('.intro-content .intro-title').addClass('zoomIn animated').show();
		$('.intro-content .intro-price').addClass('fadeInUp animated').show();
		$('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
	});

	/*--/ Navbar Collapse /--*/
	$('.navbar-toggle-box-collapse').on('click', function () {
		$('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
	});
	$('.close-box-collapse, .click-closed').on('click', function () {
		$('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
		$('.menu-list ul').slideUp(700);
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).bind('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-default').addClass('navbar-reduce');
			$('.navbar-default').removeClass('navbar-trans');
		} else {
			$('.navbar-default').addClass('navbar-trans');
			$('.navbar-default').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Property owl /--*/
	/*$('#property-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Property owl owl /--*/
	/*$('#property-single-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ News owl /--*/
	/*$('#new-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	/*$('#testimonial-carousel').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});*/

})(jQuery);
