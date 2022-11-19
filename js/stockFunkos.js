//Declaracion de variables 
const arregloJuguetes = [];

// id | nombre | descripcion | precio | descuento | genero | tipo | imagenA | imagenB | imagenC

//constructor
function funko(id, name, descripcion, price, discount, genero, tipo, linkImg1, linkImg2, linkImg3){
    //variables o propiedades publicas del objeto, se ven o acceden fuera del documento 
    this.id = id;
    this.nombre = name;
    this.descripcion = descripcion;
    this.precio = price;
    this.descuento = discount;
    this.genero = genero;
    this.tipo = tipo;
    this.imagenA = linkImg1;
    this.imagenB = linkImg2;
    this.imagenC = linkImg3;

    // variable privada, solo se visualiza dentro del documento.
    let iva = 0.14;    
    
    //metodos, son funciones que seaplican a un objeto, las acciones que puede hacer el objeto
    let descuentoReal = this.descuento * 0.01;
    this.precioConDescuento = function(){
        return (this.precio - this.precio * descuentoReal); 
    }
    
    this.precioTotalMasIVA = function(){
        return (this.precioConDescuento() + this.precioConDescuento()  * iva);
    }
    this.describe_tipos = function(){
        if ( this.genero == "movies" ) {
            return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
        }else if ( this.genero == "tv y series" ){
            return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
        }else if(this.genero == "anime"){
            return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
        }
    }
}

//Banner
const funko1 = new funko (1,"michael myers","funko pop de la serie de peliculas Halloween, del género slasher. Aparece por primera vez en Halloween (1978). ",200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png","")
const funko2 = new funko (2,"chucky","funko de la pelicula chuky el muñeco malvado. Es un muñeco Good Guy que fue poseído por medio de magia vudú por el asesino en serie Charles Lee Ray",1550, 10, "movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png","")
const funko3 = new funko (3,"sam","funko de la pelicula Trick 'r Treat criatura demoniaca parecida a una calabaza que actua como ejecutor de las reglas y tradiciones de Hallowen.", 1200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png","")

//Categoria
const funko4 = new funko (4,"yamcha y puar","funko dragon ball z yamcha y puar coleccion.", 1530, 10, "anime","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png","")
const funko5 = new funko (5,"homer muumuu","funko de la coleccion simpsons, homero gordo esa mancha no se quita", 1021, 0, "tv y series","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668210035/imgs/haloween/funkos/futurama/homero_gordo1_fgykwd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png","")
const funko6 = new funko (6,"john wick","funko coleccionable, john wick + perro.", 1010, 0, "movies","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png","")

//ARREGLO DE OBJETOS
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6);

//Destacados
arregloJuguetes.push(new funko(7,"pennywise","funko pop de lapelicula it funko generico",1220, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102340/imgs/haloween/funkos/halloween/it3_xdclx3.png",""));
arregloJuguetes.push(new funko(8,"t-8000","funko de la pelicula terminator, terminator abuelo t-8000",1150, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png",""));
arregloJuguetes.push(new funko(9,"charizard","funko coleccion pokemon, pokemon inicial. serie rojo.",1200, 0, "anime","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png",""));
arregloJuguetes.push(new funko(10,"daemon targaryen","funko coleccion house of dragons, game of throne.",1500, 0, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png",""));
arregloJuguetes.push(new funko(11,"otto","funko de la coleccion simpsons, otto escuchandomusica",1300, 0,  "tv y series","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png",""));
arregloJuguetes.push(new funko(12,"duffman","funko de la coleccion simpsons, hombre duff, barry.",1300, 0, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png",""));

//figura
arregloJuguetes.push(new funko(13,"thresh","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png","" ));
arregloJuguetes.push(new funko(14,"yasuo","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png","" ));
arregloJuguetes.push(new funko(15,"zed","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png",""));
arregloJuguetes.push(new funko(16,"ashe","figura de accion articulada de la coleccion league of legends, campeones league of legends",1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png",""));
arregloJuguetes.push(new funko(17,"wukong","figura de accion articulada de la coleccion league of legends, campeones league of legends",1400, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png",""));
arregloJuguetes.push(new funko(18,"darius","figura de accion articulada de la coleccion league of legends, campeones league of legends",1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png",""));


console.log("\n\n______________________ ARREGLO JUGUETES ______________________");
console.log(arregloJuguetes);
console.log("______________________ ARREGLO JUGUETES ______________________ \n\n");

/* +--- OTRA FORMA DE HACER LO MISMO ---+ */
// id | nombre | descripcion | precio | descuento | genero | tipo | imagenA | imagenB | imagenC

let StockFunkos = [
    {id:1, nombre:"michael myers", descripcion:"funko pop de la serie de peliculas Halloween, del género slasher. Aparece por primera vez en Halloween (1978).", precio:200, descuento:10, genero:"movies", tipo:"banner", imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png", imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png", imagenC:""},
    {id:2,nombre:"chucky",descripcion:"funko de la pelicula chuky el muñeco malvado. Es un muñeco Good Guy que fue poseído por medio de magia vudú por el asesino en serie Charles Lee Ray",precio:1550, descuento:10, genero:"movies",tipo:"banner",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png",imagenC:""},

    {id:3,nombre:"sam",descripcion:"funko de la pelicula Trick 'r Treat criatura demoniaca parecida a una calabaza que actua como ejecutor de las reglas y tradiciones de Hallowen.", precio:1200, descuento:10,genero:"movies",tipo:"banner",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png",imagenC:""},
    {id:4,nombre:"yamcha y puar",descripcion:"funko dragon ball z yamcha y puar coleccion.", precio:1530, descuento:10, genero:"anime",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png",imagenC:""},
    {id:5,nombre:"homer muumuu",descripcion:"funko de la coleccion simpsons, homero gordo esa mancha no se quita",precio:1021, descuento:0, genero:"tv y series",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668210035/imgs/haloween/funkos/futurama/homero_gordo1_fgykwd.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png",imagenC:""},
    
    
    {id:6,nombre:"john wick",descripcion:"funko coleccionable, john wick + perro.", precio:1010, descuento:0, genero:"movies",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png",imagenC:""},
    {id:7,nombre:"pennywise",descripcion:"funko pop de lapelicula it funko generico",precio:1220, descuento:11, genero:"movies",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102340/imgs/haloween/funkos/halloween/it3_xdclx3.png",imagenC:""},
    {id:8,nombre:"t-8000",descripcion:"funko de la pelicula terminator, terminator abuelo t-8000",precio:1150, descuento:0, genero:"movies",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png",imagenC:""},
    {id:9,nombre:"charizard",descripcion:"funko coleccion pokemon, pokemon inicial. serie rojo.",precio:1200, descuento:0, genero:"anime",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png",imagenC:""},

    {id:10,nombre:"daemon targaryen",descripcion:"funko coleccion house of dragons, game of throne.",precio:1500, descuento:25, genero:"tv y serie",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png",imagenC:""},
    {id:11,nombre:"otto",descripcion:"funko de la coleccion simpsons, otto escuchandomusica",precio:1300, descuento:15, genero:"tv y series",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png",imagenC:""},
    {id:12,nombre:"duffman",descripcion:"funko de la coleccion simpsons, hombre duff, barry.",precio:1300, descuento:8, genero:"tv y serie",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png",imagenC:""},
    
    {id:13,nombre:"thresh",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png",imagenC:""},
    {id:14,nombre:"yasuo",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png",imagenC:"" },
    {id:15,nombre:"zed",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1500, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png",imagenC:""},
    {id:16,nombre:"ashe",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png",imagenC:""},
    {id:17,nombre:"wukong",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1400, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png",imagenC:""},
    {id:18,nombre:"darius",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1500, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png",imagenC:""},
    ]


    function precioConDescuento(){
        return (this.precio - this.precio * descuentoReal); 
    }

    function precioTotalMasIVA(){
        return (this.precioConDescuento() + this.precioConDescuento()  * iva);
    }

    function describe_tipos(){
        if ( this.genero == "movies" ) {
            return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
        }else if ( this.genero == "tv y series" ){
            return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
        }else if(this.genero == "anime"){
            return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
        }
    }