// LIQUIDPAPER
// Creación del objeto "listaPeliculas", se guarda en el "localStorage".


 if (!localStorage.getItem("misPelis")) {

  const listaPeliculas = {

    pelis: [
      {
        // id0
        titulo: "Handia",
        genero: "Drama",
        duracion: "86 minutos",
        sinopsis: "Tras haber luchado en la Primera Guerra Carlista, Martín vuelve a su caserío familiar en Guipúzcoa y allí descubre con sorpresa que su hermano menor, Joaquín, es mucho más alto de lo normal. Convencido de que todo el mundo querrá pagar por ver al hombre más grande sobre la Tierra, ambos hermanos se embarcan en un largo viaje por Europa en el que la ambición, el dinero y la fama cambiarán para siempre el destino de la familia. Una historia inspirada en hechos reales",
        trailer: "https://www.youtube.com/embed/sXQ9FobIP9g?si=CBmEIHy9SgCaCz9w&amp;start=4",
        fondo: "../IMG/Peliculas/Drama/handia1.jpg",
      },
      {
        // id1
        titulo: "La lista de Schindler",
        genero: "Drama",
        duracion: "197 minutos",
        sinopsis: "Oskar Schindler, un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes, consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente, también judío, es el verdadero director en la sombra, pues Schindler no tiene el menor conocimiento industrial",
        trailer: "https://www.youtube.com/embed/gG22XNhtnoY?si=8_KgSdGWZ75PFnI6",
        fondo: "../IMG/Peliculas/Drama/lalista1.jpg",
      },
      // id2
      {
        titulo: "Cadena Perpetua",
        genero: "Drama",
        duracion: "142 minutos",
        sinopsis: "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.",
        trailer: "https://www.youtube.com/embed/FyP4rXUmQ2U?si=dUHs6wy5VRSFGGFf",
        fondo: "../IMG/Peliculas/Drama/cadenaperpetua1.jpg",
      },
      // id3
      {
        titulo: "Million Dollar Baby",
        genero: "Drama",
        duracion: "133 minutos",
        sinopsis: "Frankie Dunn, después de haber entrenado y representado a los mejores púgiles, regenta un gimnasio con la ayuda de Scrap, un ex-boxeador que, además, es su único amigo. Frankie es un hombre solitario y adusto que se refugia desde hace años en la religión buscando una redención que no llega. Un día, entra en su gimnasio Maggie Fitzgerald, una voluntariosa chica que quiere boxear y que está dispuesta a luchar denodadamente para conseguirlo. Pero lo que más desea y necesita es que alguien crea en ella. Frankie la rechaza alegando que es demasiado mayor y que, además, él no entrena a chicas. Pero Maggie no se rinde y se machaca cada día en el gimnasio, con el único apoyo de Scrap. Finalmente, convencido de la inquebrantable determinación de Maggie, Frankie decide entrenarla.",
        trailer: "https://www.youtube.com/embed/_iH47yRY9UM?si=QvMNaQS0s_gjHCUM&amp;start=6",
        fondo: "../IMG/Peliculas/Drama/milliondollarbaby1.jpg",
      },
      // id4
      {
        titulo: "2001 Odisea en el espacio",
        genero: "Ciencia-Ficción",
        duracion: "142 minutos",
        sinopsis: "Hace millones de años, en los albores del nacimiento del homo sapiens, unos simios descubren un monolito que les lleva a un estadio de inteligencia superior. Otro monolito vuelve a aparecer, millones de años después, enterrado en una luna, lo que provoca el interés de los científicos humanos. Por último, HAL 9000, una máquina de inteligencia artificial, es la encargada de todos los sistemas de una nave espacial tripulada durante una misión de la NASA.",
        trailer: "https://www.youtube.com/embed/oR_e9y-bka0?si=-vzqt-XM5LESjAkT&amp;start=6",
        fondo: "../IMG/Peliculas/Ciencia_Ficcion/odisea1.jpg",
      },
      {
        // id5
        titulo: "La novia de Frankenstein",
        genero: "Ciencia-Ficción",
        duracion: "75 minutos",
        sinopsis: "Después de la huida del monstruo creado por el doctor Frankenstein, el siniestro Dr. Praetorius propone al científico la creación de una compañera para el monstruo, sin imaginar el resultado de ese nuevo experimento.",
        trailer: "https://www.youtube.com/embed/E3Xou8pS56E?si=rzSKl_CAfevxzdFi&amp;start=6",
        fondo: "../IMG/Peliculas/Ciencia_Ficcion/lanovia1.jpg",
      },
      // id6
      {
        titulo: "El planeta de los simios",
        genero: "Ciencia-Ficción",
        duracion: "115 minutos",
        sinopsis: "Un grupo de simios con grandes cualidades para la supervivencia toma las calles, liderado por César, un simio dotado de una inteligencia y unos instintos superiores para cualquier primate. Ante la necesidad de libertad, esta raza animal decide no doblegarse ante los humanos. Tendrá que luchar contra un grupo de humanos que han sobrevivido a una fuerte epidemia, desatada en la década anterior. Ambas partes han establecido una tregua, pero se verá interrumpida.",
        trailer: "https://www.youtube.com/embed/R4csizZgJzs?si=JOPlEIAzgAStMYmk&amp;start=6",
        fondo: "../IMG/Peliculas/Ciencia_Ficcion/simios1.jpg",
      },
      // id7
      {
        titulo: "Alien, el octavo pasajero",
        genero: "Ciencia-Ficción",
        duracion: "117 minutos",
        sinopsis: "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación.",
        trailer: "https://www.youtube.com/embed/Eu9ZFTXXEiw?si=wVlHLUkuut1sshvA&amp;start=6",
        fondo: "../IMG/Peliculas/Ciencia_Ficcion/alien1.jpg",
      },
      // id8
      {
        titulo: "Scary Movie",
        genero: "Comedia",
        duracion: "90 minutos",
        sinopsis: "Tras el asesinato de una bella estudiante, un grupo de adolescentes descubren que hay un asesino entre ellas. La heroína, Cindy, y su grupo de desconcertantes amigos, serán aterrorizados por un singular psicópata enmascarado que pretende vengarse de ellos por haberlo atropellado el pasado Halloween.",
        trailer: "https://www.youtube.com/embed/HTLPULt0eJ4?si=ih0Kb4D8ybRGlgHy&amp;start=6",
        fondo: "../IMG/Peliculas/Comedia/scary1.jpg",
      },
      // id9
      {
        titulo: "El gran Lebowsky",
        genero: "Comedia",
        duracion: "119 minutos",
        sinopsis: "El Nota es un hombre fracasado y en paro que un día es confundido con otra persona con su mismo nombre. Dos matones irrumpen en su apartamento y destrozan su alfombra creyendo que están ante Jeff Lebowski un millonario de Pasadena. El primer error de El Nota es visitar a su opulento tocayo con la esperanza de que le reponga su vieja alfombra.Sin embargo, nuestro reticente héroe y su compinche Water se ven atrapados en un thriller con toques humorísticos muy al estilo de los hermanos Coen donde se mezclan la extorsión, la traición, la decepción, el chantaje, el sexo y las drogas.",
        trailer: "https://www.youtube.com/embed/AkA69XT7Lq0?si=-vLAHAlRLlDMSzz7",
        fondo: "../IMG/Peliculas/Comedia/lebowski1.jpg",
      },
      // id10
      {
        titulo: "La vida Brian",
        genero: "Comedia",
        duracion: "94 minutos",
        sinopsis: "Delirante y divertidísima comedia que relata, a golpe de carcajada, la vida de un desastre de hombre, contemporáneo de Jesucristo, que es confundido por el pueblo con un mesías. Que nadie se confunda: \"Life of Brian\" no es una amalgama de escenas absurdas que hacen reír, es una brillante sátira que desborda con un humor maravillosamente inteligente. Obra capital de los geniales Monty Python, su gozosa visión está llena de memorables gags que la encumbran como una de las mejores parodias de la historia del cine.",
        trailer: "https://www.youtube.com/embed/0-E6bKzb1lw?si=3cT_OoFDrMVXF9nG&amp;start=6",
        fondo: "../IMG/Peliculas/Comedia/brian1.jpg",
      },
      // id11
      {
        titulo: "Aterriza como puedas",
        genero: "Comedia",
        duracion: "88 minutos",
        sinopsis: "El vuelo 209 de la Trans American sale de Los Ángeles con destino a Chicago. Entre el pasaje se encuentran una serie de curiosos personajes. Entre ellos, un ex-piloto de combate que, en pleno vuelo, se verá obligado a hacerse con el mando del avión comercial, tras quedar los pilotos indispuestos por una comida en mal estado.",
        trailer: "https://www.youtube.com/embed/epNuhFkPy3s?si=PvkALw8pJEtcZdwo&amp;start=6",
        fondo: "../IMG/Peliculas/Comedia/aterriza1.jpg",
      },
      // id12
      {
        titulo: "Psicosis",
        genero: "Terror",
        duracion: "88 minutos",
        sinopsis: "Una joven secretaria, tras cometer un robo, se marcha de la ciudad y conduce durante horas, parando para descansar en un pequeño motel de carretera regentado por un joven llamado Norman. Todo parece normal y tranquilo en el apartado motel y en la casa de al lado en la que viven Norman y su madre pero, mientras está en la ducha, la joven es asesinada salvajemente a cuchilladas.",
        trailer: "https://www.youtube.com/embed/mC2gOyWuSEY?si=LpSEdgxETtSTxKT1&amp;start=6",
        fondo: "../IMG/Peliculas/Terror/psicosis1.jpg",
      },
      // id13
      {
        titulo: "El Resplandor",
        genero: "Terror",
        duracion: "146 minutos",
        sinopsis: "Jack Torrance se traslada, junto a su mujer y a su hijo, al impresionante hotel Overlook, en Colorado, para encargarse del mantenimiento del mismo durante la temporada invernal, en la que permanece cerrado y aislado por la nieve. Su idea es escribir su novela al tiempo que cuida de las instalaciones durante esos largos y solitarios meses de invierno, pero desde su llegada al hotel, Jack comienza a padecer inquietantes transtornos de personalidad, al mismo tiempo que en el lugar comienzan a suceder diversos fenómenos paranormales.",
        trailer: "https://www.youtube.com/embed/A3q03BBwMp4?si=sOd0TU501rzvI2Ph&amp;start=4",
        fondo: "../IMG/Peliculas/Terror/resplandor1.jpg",
      },
      // id14
      {
        titulo: "Drácula",
        genero: "Terror",
        duracion: "155 minutos",
        sinopsis: "Antes de convertirse en vampiro, el conde Drácula era el príncipe Vlad, quien tras conocer la muerte de su prometida, vendió su alma al diablo. Cuatro siglos después, en Londres, encuentra a Mina, reencarnación de su amor perdido.",
        trailer: "https://www.youtube.com/embed/k1pLzUEZmOA?si=IYbGGMX9YwT-8Jle&amp;start=4",
        fondo: "../IMG/Peliculas/Terror/dracula1.jpg",
      },
      // id15
      {
        titulo: "El cisne negro",
        genero: "Terror",
        duracion: "155 minutos",
        sinopsis: "Nina, una brillante bailarina que forma parte de una compañía de ballet de Nueva York, vive completamente absorbida por la danza. La presión de su controladora madre, la rivalidad con su compañera Lily y las exigencias del severo director se irán incrementando a medida que se acerca el día del estreno. Esta tensión provoca en Nina un agotamiento nervioso y una confusión mental que la incapacitan para distinguir entre realidad y ficción.",
        trailer: "https://www.youtube.com/embed/5jaI1XOB-bs?si=w29eC3FBuMs39h_A&amp;start=4",
        fondo: "../IMG/Peliculas/Terror/cisne1.jpg",
      },
    ]
  }

  localStorage.setItem("misPelis", JSON.stringify(listaPeliculas));

 }