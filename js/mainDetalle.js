(function ($) {
	"use strict";

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
		var pos = obtenerValorUrl();
		var libros = llenarBib();
		detalles(libros[pos]);
		var nombre=document.getElementById("titulo").textContent;
		window.localStorage.setItem("nombre",nombre);
		window.localStorage.setItem("id",pos);
	});


	function obtenerValorUrl(numLibro) {
		var variables = window.location.search.substring(1);
		var varNombre = variables.split("=");

		var libro=parseInt(varNombre[1]);
		return libro;
	}

	var llenarBib = function () {

		var aux=localStorage.getItem("Disponibles");
		var disp=aux.split(",");

		var libro1 = new libro("0", "It", "Stephen King", "Terror", "1", "3", disp[0],
			"./img/it.jpg", "La historia se desarrolla alternada en dos épocas: el pasado (1957-58) y el presente (1985). Los hechos acontecen en la comunidad de Derry, en el estado de Maine, Estados Unidos. Bajo la ciudad, a un nivel inconsciente para todos los pobladores, habita un monstruo despiadado de apetito insaciable; esta malévola criatura atormenta a la comunidad desde tiempos remotos. El monstruo es un ser ajeno a este mundo, y se manifiesta como sus miedos, por lo cual constituye su alimento (preferiblemente los de los niños y adolescentes, cuyos temores son muy sencillos de elaborar). Su disfraz más común es el de un payaso, Pennywise, con el que atrae a sus víctimas.");

		var libro2 = new libro("1", "El libro egipcio de los muertos", "Albert Champdor", "Historia",
			"2", "3", disp[1], "img/EL LIBRO EGIPCIO DE LOS MUERTOS, por ALBERT CHAMPDOR.jpg", "El texto consistía en una serie de sortilegios mágicos destinados a ayudar a los difuntos a superar el juicio de Osiris, asistirlos en su viaje a través de la Duat, el inframundo, y viajar al Aaru, en la otra vida");

		var libro3 = new libro("2", "El club de los mejores", "Arthur Gunn", "Ficcion", "1", "3", disp[2],
			"./img/el-club-de-los-mejores_arthur-gunn.JPG", "Todo secreto tiene su precio. Y toda promesa rota, su castigo. UN SECRETO DE LA INFANCIA. Los cuatro niños pedaleaban con todas sus fuerzas sin darse cuenta de que huían de sí mismos. Era un día agradable y soleado. El recuerdo del aire puro se convertiría, años después, en la constatación de sus pesadillas");

		var libro4 = new libro("3", "El juego de Ender", "Orson Card", "Ficcion", "1", "3", disp[3],
			"./img/juego-de-ender.jpg", "La Tierra se ve amenazada por una especie extraterrestre de insectos, seres que se comunican telepáticamente y que se consideran totalmente distintos de los humanos, a los que quieren destruir");

		var libro5 = new libro("4", "Un misterio en Toledo", "Anne Perry", "Misterio", "1", "3", disp[4],
			"./img/Un misterio en Toledo.JPG", "La apasionante nueva novela de Perry protagonizada por Charlotte y Thomas Pitt nos invita a regresar al Londres victoriano, donde la codicia y la ambición nunca duermen y las pasiones a veces se desbocan");

		var libro6 = new libro("5", "El castillo", "Luis Zueco", "Ficcion", "1", "3", disp[5],
			"./img/el-castillo.jpg", "Entre la Tierra Llana y el Pirineo aragonés se encuentra el monumento militar románico más importante de Europa: el castillo-abadía de Loarre, una fortaleza impresionante, construida cuando esa zona era una peligrosa tierra de frontera");

		var libro7 = new libro("6", "Nosotros", "Evgueni Zamiatin", "Ficcion", "1", "3", disp[6],
			"./img/nosotros.jpg", "Nosotros de Zamiatin inaugura de forma brillante el género de la novela antiutópica moderna. Sin embargo es, de las grandes creaciones distópicas de la primera mitad del siglo XX  (junto a Un mundo feliz y 1984), la menos leída y difundida, y ello por dos razones principales: por la realidad sociopolítica que la tocó vivir en su país de origen, hecho que provocó su difícil acceso en Europa (la primera traducción española data de 1970, por ejemplo); y también por el estilo que emplea Zamiatin, muy influido por las vanguardias literarias del momento y que provoca que su lectura sea más exigente que una novela de estructura convencional");

		var libro8 = new libro("7", "Matadero cinco", "Kurt Vonnegut", "Ficcion", "1", "3",disp[7],
			"./img/mataredo5.jpg", "Matadero Cinco catapultó a Kurt Vonnegut como uno de los grandes ídolos de la juventud norteamericana y se convirtió de inmediato en un clásico de la literatura contemporánea. Una historia amarga, conmovedora y a la vez divertidísima, de la inocencia confrontada con el apocalipsis, «una novela con ribetes esquizofrénico-telegráficos» en palabras de su autor");

			var libro9 = new libro("8", "Matemáticas y ajedrez", "Razvan Lagar", "Matemáticas", "5", "1", disp[8],
			"./img/mate.jpg", "El juego del ajedrez ha fascinado durante siglos: su complejidad, su profundidad e incluso su belleza nos sigue atrayendo como el mejor de los retos. La inserción de las matemáticas en el estudio del juego ha supuesto, desde hace ya más de un siglo, una simbiosis perfecta que alimenta, por un lado, el avance hacia la partida de ajedrez perfecta y, por otro, el desarrollo de nuevas mejoras en campos como el de la programación informática o la inteligencia artificial");

		var libro10 = new libro("9", "Estadística", "Stephen Stigler", "Matemáticas", "2", "2", disp[9],
			"./img/estadistica.jpg", "La estadística está en todas partes, pero -qué tiene de singular esta disciplina? Stephen M. Stigler propone que la sabiduría estadística se apoya en siete grandes pilares conceptuales que han ido madurando con el paso de los siglos y han contribuido a que hoy sea una ciencia versátil y rigurosa");

		var libro11 = new libro("10", "El secreto de Champollion", "Jean Michel Riou", "Terror", "10", "3", disp[10],
			"./img/el-secreto-de-champollion-jean-michel-riou.jpg", "Maximilien Courcelles, heredero de la editorial Courcelles, tiene en su poder un manuscrito que no debe ser abierto antes del 1 de enero de 2004, ciento cincuenta años des- pués de su redacción. El manuscrito reúne la historia de tres orientalistas franceses que, a las órdenes de Napoleón, viajan a Egipto a fin de desvelar el secreto de los jeroglíficos egipcios, un lenguaje que les permitiría ponerse en contacto con la divinidad. Descodificar los jeroglíficos será una tarea ardua y llena de obstáculos: batallas, robos, secretos, espías… Champollion, el más joven de los investigadores, consigue al fin descubrir el misterio del extraño lenguaje");

		var libro12 = new libro("11", "La última habitación", "Carlos Navas", "Terror", "5", "4", disp[11],
			"./img/la-ultima-habitacion.jpg", "Todo edificio guarda secretos. El célebre y enigmático edificio Secret Garden, situado a las afueras de Madrid, no es una excepción. Su fachada de piedra natural y color negro azabache, esconde, tras sus paredes, la versión más siniestra e inquietante de la naturaleza humana");

		var libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12];
		return libros;
	}

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

	var detalles = function (libro) {
		var img = document.getElementById("imagen");
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
	var nav = $('nav');
	var navHeight = nav.outerHeight();

})(jQuery);
