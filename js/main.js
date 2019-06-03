(function ($) {
  "use strict";
	
	var lib=2;
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
		}
		var libros =llenarBib();
		detalles(libros[lib]);
	});

	function libroDetalle(numLibro){
		alert(numLibro);
		console.log(numLibro);
	}
	
	var llenarBib=function(){
		
		var libro1 = new libro("It","Stephen King","Terror","1","3","0",
		"./img/it.jpg","La historia se desarrolla alternada en dos épocas: el pasado (1957-58) y el presente (1985). Los hechos acontecen en la comunidad de Derry, en el estado de Maine, Estados Unidos. Bajo la ciudad, a un nivel inconsciente para todos los pobladores, habita un monstruo despiadado de apetito insaciable; esta malévola criatura atormenta a la comunidad desde tiempos remotos. El monstruo es un ser ajeno a este mundo, y se manifiesta como sus miedos, por lo cual constituye su alimento (preferiblemente los de los niños y adolescentes, cuyos temores son muy sencillos de elaborar). Su disfraz más común es el de un payaso, Pennywise, con el que atrae a sus víctimas.");

		var libro2 = new libro("El libro egipcio de los muertos","Albert Champdor","Historia",
		"2","3","1","img/EL LIBRO EGIPCIO DE LOS MUERTOS, por ALBERT CHAMPDOR.jpg","El texto consistía en una serie de sortilegios mágicos destinados a ayudar a los difuntos a superar el juicio de Osiris, asistirlos en su viaje a través de la Duat, el inframundo, y viajar al Aaru, en la otra vida");

		var libro3 = new libro("El club de los mejores","Arthur Gunn","Ficcion","1","3","2",
		"./img/el-club-de-los-mejores_arthur-gunn.JPG","Todo secreto tiene su precio. Y toda promesa rota, su castigo. UN SECRETO DE LA INFANCIA. Los cuatro niños pedaleaban con todas sus fuerzas sin darse cuenta de que huían de sí mismos. Era un día agradable y soleado. El recuerdo del aire puro se convertiría, años después, en la constatación de sus pesadillas");

		var libro4 = new libro("El juego de Ender","Orson Card","Ficcion","1","3","2",
		"./img/juego-de-ender.jpg","La Tierra se ve amenazada por una especie extraterrestre de insectos, seres que se comunican telepáticamente y que se consideran totalmente distintos de los humanos, a los que quieren destruir");
		
		var libro5 = new libro("Un misterio en Toledo","Anne Perry","Misterio","1","3","2",
		"./img/Un misterio en Toledo.JPG","La apasionante nueva novela de Perry protagonizada por Charlotte y Thomas Pitt nos invita a regresar al Londres victoriano, donde la codicia y la ambición nunca duermen y las pasiones a veces se desbocan");
		
		var libro6 = new libro("El castillo","Luis Zueco","Ficcion","1","3","2",
		"./img/el-castillo.jpg","Entre la Tierra Llana y el Pirineo aragonés se encuentra el monumento militar románico más importante de Europa: el castillo-abadía de Loarre, una fortaleza impresionante, construida cuando esa zona era una peligrosa tierra de frontera");
		
		var libro7 = new libro("Nosotros","Evgueni Zamiatin","Ficcion","1","3","2",
		"./img/nosotros.jpg","Nosotros de Zamiatin inaugura de forma brillante el género de la novela antiutópica moderna. Sin embargo es, de las grandes creaciones distópicas de la primera mitad del siglo XX  (junto a Un mundo feliz y 1984), la menos leída y difundida, y ello por dos razones principales: por la realidad sociopolítica que la tocó vivir en su país de origen, hecho que provocó su difícil acceso en Europa (la primera traducción española data de 1970, por ejemplo); y también por el estilo que emplea Zamiatin, muy influido por las vanguardias literarias del momento y que provoca que su lectura sea más exigente que una novela de estructura convencional");
		
		var libro8 = new libro("Matadero cinco","Kurt Vonnegut","Ficcion","1","3","2",
		"./img/mataredo5.jpg","Matadero Cinco catapultó a Kurt Vonnegut como uno de los grandes ídolos de la juventud norteamericana y se convirtió de inmediato en un clásico de la literatura contemporánea. Una historia amarga, conmovedora y a la vez divertidísima, de la inocencia confrontada con el apocalipsis, «una novela con ribetes esquizofrénico-telegráficos» en palabras de su autor");
		
		var libros = [libro1,libro2,libro3, libro4, libro5, libro6, libro7, libro8];
		return libros;
	}

	function libro(titilo,autor,genero,edicion,uni_existente,uni_disponible,imagen,descipcion){
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
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
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
	$('.intro-carousel').on('translate.owl.carousel', function () {
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
	$('#property-carousel').owlCarousel({
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
	$('#property-single-carousel').owlCarousel({
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
	$('#new-carousel').owlCarousel({
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
	$('#testimonial-carousel').owlCarousel({
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
	});

})(jQuery);
