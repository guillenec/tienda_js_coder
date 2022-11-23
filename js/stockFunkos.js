//ARREGLO BASE DE JUGUETES FUNKOS
const arregloJuguetes = [];

// id | nombre | stock | descripcion | precio | descuento | genero | tipo | imagenA | imagenB | imagenC |imgagenD | clave1 | clave2 | clave3

//#region //constructor
function funko(id, name, descripcion, stock, price, discount, genero, tipo, linkImg1, linkImg2, linkImg3,linkImg4, clave1, clave2, clave3 ){
    //variables o propiedades publicas del objeto, se ven o acceden fuera del documento 
    this.id = id;
    this.nombre = name;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precio = price;
    this.descuento = discount;
    this.genero = genero;
    this.tipo = tipo;
    this.imagenA = linkImg1;
    this.imagenB = linkImg2;
    this.imagenC = linkImg3;
    this.imagenD = linkImg4;
    this.clave1 = clave1;
    this.clave2 = clave2;
    this.clave3 = clave3;

    //#region modlos
    // // variable privada, solo se visualiza dentro del documento.
    // let iva = 0.04;    
    
    // //metodos, son funciones que seaplican a un objeto, las acciones que puede hacer el objeto
    // let descuentoReal = this.descuento * 0.01;
    // this.precioConDescuento = function(){
    //     return (this.precio - this.precio * descuentoReal); 
    // }
    
    // this.precioTotalMasIVA = function(){
    //     return (this.precioConDescuento() + this.precioConDescuento()  * iva);
    // }
    // this.describe_tipos = function(){
    //     if ( this.genero == "movies" ) {
    //         return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
    //     }else if ( this.genero == "tv y series" ){
    //         return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
    //     }else if(this.genero == "anime"){
    //         return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
    //     }
    // }
    //#endregion modulos
}
//#endregion

//#region //Banner
const funko1 = new funko (1,"michael myers","funko pop de la serie de peliculas Halloween, del género slasher. Aparece por primera vez en Halloween (1978). ",5 ,200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png","","","halloween","terror","cine");
const funko2 = new funko (2,"chucky","funko de la pelicula chuky el muñeco malvado. Es un muñeco Good Guy que fue poseído por medio de magia vudú por el asesino en serie Charles Lee Ray",6,1550, 10, "movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png","","","el muñeco maldito","terror","cine");
const funko3 = new funko (3,"sam","funko de la pelicula Trick 'r Treat criatura demoniaca parecida a una calabaza que actua como ejecutor de las reglas y tradiciones de Hallowen.",3 , 1200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png","","Trick 'r Treat","cine","terror");
//#endregion //Banner

//#region //Categoria
const funko4 = new funko (4,"yamcha y puar","funko dragon ball z yamcha y puar coleccion.",6 ,1530, 10, "anime","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102425/imgs/haloween/funkos/dbz/yamcha_asu5lu.png","","dragon ball","animacion","serie tv");
const funko5 = new funko (5,"homer muumuu","funko de la coleccion simpsons, homero gordo esa mancha no se quita",9 ,1021, 0, "tv y series","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668210035/imgs/haloween/funkos/futurama/homero_gordo1_fgykwd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107300/imgs/haloween/funkos/futurama/homero_gordo3_yen6jt.png","","los simpsons","animacion","serie tv")
const funko6 = new funko (6,"john wick","funko coleccionable, john wick + perro.",10 ,1010, 0, "movies","categoria","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102398/imgs/haloween/funkos/pelis/jon_week2_fdi085.png","","John Wick","accion","cine")
//#endregion //Categoria

//ARREGLO DE OBJETOS
arregloJuguetes.push(funko1,funko2,funko3,funko4,funko5,funko6);

//#region //Destacados
arregloJuguetes.push(new funko(7,"pennywise","funko pop de lapelicula it funko generico",3 ,1220, 0, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102340/imgs/haloween/funkos/halloween/it3_xdclx3.png","","","it","cine","terror"));
arregloJuguetes.push(new funko(8,"t-8000","funko de la pelicula terminator, terminator abuelo t-8000",6,1150, 20, "movies","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png","","","terminator","accion","cine"));
arregloJuguetes.push(new funko(9,"charizard","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/charizard2_mxjcgr.png","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(10,"daemon targaryen","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112419/imgs/haloween/funkos/houseOfDragons/daemon_targaryen3_lmzalo.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(11,"otto","funko de la coleccion simpsons, otto escuchandomusica",8 ,1300, 5,  "tv y series","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto2_ii1k0u.png","","los simpsons","animacion","serie tv"));
arregloJuguetes.push(new funko(12,"duffman","funko de la coleccion simpsons, hombre duff, barry.",9 ,1300, 0, "tv y serie","destacados","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110730/imgs/haloween/funkos/futurama/duffman_j4rand.png","","los simpsons","animacion","serie tv"));
//#endregion //Destacados

//#region //figura
arregloJuguetes.push(new funko(13,"thresh","figura de accion articulada de la coleccion league of legends, campeones league of legends",5 ,1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102414/imgs/haloween/funkos/league/tresh3_v4etom.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102356/imgs/haloween/funkos/league/tresh4_w9oh33.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(14,"yasuo","figura de accion articulada de la coleccion league of legends, campeones league of legends",2 ,1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102296/imgs/haloween/funkos/league/yasuo4_u3vcht.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102281/imgs/haloween/funkos/league/yasuo3_vrgved.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(15,"zed","figura de accion articulada de la coleccion league of legends, campeones league of legends",0 ,1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102395/imgs/haloween/funkos/league/zed3_zitil9.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102421/imgs/haloween/funkos/league/zed4_zjdptl.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(16,"ashe","figura de accion articulada de la coleccion league of legends, campeones league of legends",0 ,1550, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102421/imgs/haloween/funkos/league/ashe3_brqc2n.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/league/ashe4_lyejo3.png","league of legends","riot games","video juego"));

arregloJuguetes.push(new funko(17,"wukong","figura de accion articulada de la coleccion league of legends, campeones league of legends",4 ,1400, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/league/wukong3_uyeiac.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102319/imgs/haloween/funkos/league/wukong4_j7ikic.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(18,"darius","figura de accion articulada de la coleccion league of legends, campeones league of legends",4 ,1500 ,5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102389/imgs/haloween/funkos/league/darius3_ljlyte.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102292/imgs/haloween/funkos/league/darius4_vnyazz.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(19,"jinx","figura de accion articulada de la coleccion league of legends, campeones league of legends",4 ,1500, 5, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102418/imgs/haloween/funkos/league/jinx1_yqmuzg.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102331/imgs/haloween/funkos/league/jinx2_xddwvd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102380/imgs/haloween/funkos/league/jinx3_pkgifj.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/league/jinx4_xvlzmr.png","league of legends","riot games","video juego"));
arregloJuguetes.push(new funko(20,"piltober coleccion","figura de accion articulada de la coleccion league of legends, campeones league of legends",7 ,7000, 25, "games","figura","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/pack_league_sdy03e.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102372/imgs/haloween/funkos/league/pack_league1_zr380s.png","","","league of legends","riot games","video juego"));
//#endregion //figura

/*---- AÑADIMOS MAS OBJETOS ----*/
// id | nombre | descripcion | stock | precio | descuento | genero | tipo | imagenA | imagenB | imagenC | clave1 | clave2 | clave3

//#region //Dragon ball
arregloJuguetes.push(new funko (21,"vegeta ss2","funko dragon ball z vegueta supe sayan 2 coleccion.",6, 1700, 10, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102372/imgs/haloween/funkos/dbz/vegueta_ssj2_1_fmjez9.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/dbz/vegueta_ssj2_3_ai8w73.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102384/imgs/haloween/funkos/dbz/vegueta_ssj2_2_mc6xsn.png","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (22,"principe vegueta","funko dragon ball z vegueta principe coleccion.",10, 1750, 10, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/principe_vegueta2_u1teuy.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/dbz/principe_vegueta3_xruv8f.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102325/imgs/haloween/funkos/dbz/principe_vegueta_xypxkc.png","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (23,"magin vegueta","funko dragon ball z vegueta maginbo coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/dbz/vegueta_maginbu_fxxtsl.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/vegueta_maginbu3_q6dcj7.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102296/imgs/haloween/funkos/dbz/vegueta_maginbu2_u8upds.png","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (24,"maestro roshi","funko dragon ball z master roshi coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/dbz/roshi2_xs7nzl.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669161447/imgs/haloween/funkos/dbz/roshi3_rt7ekg.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/dbz/roshi_kannff.png","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (25,"whis","funko dragon ball z wish coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/dbz/wiss_gipo2o.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/wiss3_mm5ob9.png","","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (26,"kami","funko dragon ball z kami coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102391/imgs/haloween/funkos/dbz/kamisama_esryrm.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102321/imgs/haloween/funkos/dbz/kamisama2_qkqa7n.png","","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (27,"goku ssj","funko dragon ball goku super sayan coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102395/imgs/haloween/funkos/dbz/goku_ssj1_1_b0a9qp.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102313/imgs/haloween/funkos/dbz/goku_ssj1_4_dkk9sx.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102325/imgs/haloween/funkos/dbz/goku_ssj1_3_mj7rjw.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102294/imgs/haloween/funkos/dbz/goku_ssj1_2_v7tqnq.png","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (28,"goku angel","funko dragon ball z goku angel ramen coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102391/imgs/haloween/funkos/dbz/goku_angel_arw4o9.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102306/imgs/haloween/funkos/dbz/goku_angel3_fgoxkj.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102309/imgs/haloween/funkos/dbz/goku_angel2_sf6eo6.png","","dragon ball","animacion","serie tv"));
arregloJuguetes.push(new funko (29,"goku black","funko dragon ball z goku black ramen coleccion.",5, 1750, 5, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102281/imgs/haloween/funkos/dbz/black_goku_splp8u.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102310/imgs/haloween/funkos/dbz/black_goku3_ajhhst.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102312/imgs/haloween/funkos/dbz/black_goku2_stwrwr.png","","dragon ball","animacion","serie tv"));
//#endregion //Dragon ball

//#region fututama y simpsons
arregloJuguetes.push(new funko(30,"zoidberg","funko de la coleccion futurama, doctor zoidberg.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/soisber1_odpaet.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102353/imgs/haloween/funkos/futurama/soisber2_orizg4.png","","","futurama","animacion","serie tv"));

arregloJuguetes.push(new funko(31,"roberto devil","funko de la coleccion futurama, roberto robot devil.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/futurama/roberto1_osc7ei.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102279/imgs/haloween/funkos/futurama/roberto2_mf93ow.png","","","futurama","animacion","serie tv"));

arregloJuguetes.push(new funko(32,"profesor farnsworth","funko de la coleccion futurama, profesor farnsworth sobrinito.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/profesor2_ybznx1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/profesor1_i3sx82.png","","","futurama","animacion","serie tv"));

arregloJuguetes.push(new funko(33,"mr.burns feliz","funko de la coleccion los simpsons glowing mr.burns.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107303/imgs/haloween/funkos/futurama/mr_berns_feliz_yszwkk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz5_y0yafx.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz4_bmzcq7.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz3_bqzxpj.png","los simpsons","animacion","serie tv"));

arregloJuguetes.push(new funko(34,"homer in edges","funko de la coleccion los simpsons, homer in edges.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107302/imgs/haloween/funkos/futurama/homero_escondido_ojhn98.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107306/imgs/haloween/funkos/futurama/homero_escondido2_ic4gqs.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/homero_escondido3_x6lbfl.png","","los simpsons","animacion","serie tv"));

arregloJuguetes.push(new funko(35,"fry","funko de la coleccion futurama, fry.",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102359/imgs/haloween/funkos/futurama/frai1_ngdkhj.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102365/imgs/haloween/funkos/futurama/frai2_jwabzn.png","","","futurama","animacion","serie tv"));

arregloJuguetes.push(new funko(36,"bender","funko de la coleccion futurama, Bender rofriguez oro..",9 ,1300, 0, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102371/imgs/haloween/funkos/futurama/bender2_wkdcc6.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/futurama/bender1_kkcpni.png","","","futurama","animacion","serie tv"));

//#endregion futurama y simpsons

//#region series de tv
arregloJuguetes.push(new funko(37,"pacemaker","funko coleccion serie pacemaker, pacemarker en boxers.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer_sbdcrc.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer2_csejem.png","","","pacemaker","accion","dc comics"));
arregloJuguetes.push(new funko(38,"pacemaker","funko coleccion serie pacemaker, pacemarker.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_qgcb6n.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker2_i5qphc.png","","","pacemaker","accion","dc comics"));
arregloJuguetes.push(new funko(39,"vigilante","funko coleccion serie pacemaker.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/vigilante_hehwr4.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/vigilante2_drcip7.png","","","pacemaker","accion","dc comics"));
arregloJuguetes.push(new funko(40,"mando","funko coleccion serie mandalorian, mando, jetpack.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667104983/imgs/haloween/funkos/pelis/mandalorian_loxs0n.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667104982/imgs/haloween/funkos/pelis/mandalorian_smlwmc.jpg","","","mandalorian","accion","star wars"));
arregloJuguetes.push(new funko(40,"rhaenyra targaryen","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112420/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen2_nyp6k5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen3_ofl7jk.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen_azckwi.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(41,"alicent hightower","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/alicent_Hightower3_goqhsa.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/alicent_Hightower_vqpknd.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/alicent_Hightower2_bg0uvq.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(42,"viserys targaryen","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen2_bnruhf.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen_w8pe7z.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112420/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen3_ffdcnl.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(43,"corlys velaryon","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/serpiente_marina2_y5lfhu.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/serpiente_marina_fozw6t.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112422/imgs/haloween/funkos/houseOfDragons/serpiente_marina3_ixoqav.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(44,"syrax","funko coleccion house of dragons, game of throne.",7 ,1500 ,10, "tv y serie","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667111487/imgs/haloween/funkos/houseOfDragons/ViserionFigure2_h4xxjb.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102394/imgs/haloween/funkos/houseOfDragons/ViserionFigure_b6okoe.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112422/imgs/haloween/funkos/houseOfDragons/ViserionFigure3_a8lvs6.png","","house of the dragon","fantasia","serie tv"));
arregloJuguetes.push(new funko(45,"squirtle","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102368/imgs/haloween/funkos/pokemon/squartle_tzsyp7.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102402/imgs/haloween/funkos/pokemon/squartle2_rbi8kn.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(46,"psyduck","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102356/imgs/haloween/funkos/pokemon/saidok_zabh0u.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102388/imgs/haloween/funkos/pokemon/saidok2_gsmqxh.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(47,"mewtwo","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/pokemon/mew_two2_r0gjql.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/pokemon/mew_two_x0fzzq.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/pokemon/mew_two3_o3n1mh.png","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(48,"mew","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/pokemon/mew_grdc5l.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102401/imgs/haloween/funkos/pokemon/mew2_rmuuux.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(49,"jolteon","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102364/imgs/haloween/funkos/pokemon/jolteon_ivma8x.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102417/imgs/haloween/funkos/pokemon/jolteon2_des5nl.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(50,"flareon","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/pokemon/flareon_xly9ir.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102407/imgs/haloween/funkos/pokemon/flareon2_sc0c5r.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(51,"eevee","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102359/imgs/haloween/funkos/pokemon/eve_toymxi.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/eve3_i6gcm4.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/pokemon/eve2_t0i9bc.png","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(52,"charmander","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102360/imgs/haloween/funkos/pokemon/charmander3_qggiax.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102286/imgs/haloween/funkos/pokemon/charmander2_wcfjnp.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102402/imgs/haloween/funkos/pokemon/charmander_li1qs7.png","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko(53,"bulbasaur","funko coleccion pokemon, pokemon inicial. serie rojo.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102371/imgs/haloween/funkos/pokemon/bolbazor_xo0yja.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102370/imgs/haloween/funkos/pokemon/bolbasor2_jqfcud.png","","","pokemon","animacion","serie tv"));
arregloJuguetes.push(new funko (54,"jason","funko pop de la serie de peliculas Halloween, jason voornees",0 ,200, 10,"movies","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102371/imgs/haloween/funkos/halloween/jason1_gbtbfh.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/jason123_tzrrar.png","","","halloween","terror","cine"));
arregloJuguetes.push(new funko(55,"tornado","funko coleccion one punch man, tornado del infierno.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190215/imgs/haloween/funkos/anime/tornado_sgvolg.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190218/imgs/haloween/funkos/anime/tornado2_vj3dh9.png","","","one punch man","anime","serie tv"));
arregloJuguetes.push(new funko(56,"saitama","funko coleccion one punch man, saitama con traje de super heroe.",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190213/imgs/haloween/funkos/anime/saitama_super_eoluul.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190219/imgs/haloween/funkos/anime/saitama_super3_dqnmua.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190217/imgs/haloween/funkos/anime/saitama_super2_cy8dwh.png","","one punch man","anime","serie tv"));
arregloJuguetes.push(new funko(57,"saitama","funko coleccion one punch man, saitama casual.",5 ,1200, 15, "anime","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190210/imgs/haloween/funkos/anime/saitama1_axklzx.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190214/imgs/haloween/funkos/anime/saitama4_mgp8ej.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190216/imgs/haloween/funkos/anime/saitama2_shyez1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190211/imgs/haloween/funkos/anime/saitama3_xwkuf6.png","one punch man","anime","serie tv"));
arregloJuguetes.push(new funko(59,"pickle rick 2","funko coleccion rick and morty pickle rick (wite laser).",5 ,1200, 15, "anime","general","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190209/imgs/haloween/funkos/anime/rick_radio1_mzvt80.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190214/imgs/haloween/funkos/anime/rick_radio3_fkh3x1.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190210/imgs/haloween/funkos/anime/rick_radio2_rsiham.png","","rick and morty","anime","serie tv"));
arregloJuguetes.push(new funko(60,"tornado","funko coleccion one punch man, .",5 ,1200, 15, "anime","banner","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190208/imgs/haloween/funkos/anime/rick1_dyobtl.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190207/imgs/haloween/funkos/anime/rick2_jdsgc5.png","https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190207/imgs/haloween/funkos/anime/rick3_enljhm.png","","rick and morty","anime","serie tv"));

//#endregion series de tv

// console.log(arregloJuguetes);



//#region arreglo de objetos pero en formato JSON

/* +--- OTRA FORMA DE HACER LO MISMO ---+ */
// id | nombre | descripcion | precio | descuento | genero | tipo | imagenA | imagenB | imagenC

// let StockFunkos = [
//     {id:1, nombre:"michael myers", descripcion:"funko pop de la serie de peliculas Halloween, del género slasher. Aparece por primera vez en Halloween (1978).", precio:200, descuento:10, genero:"movies", tipo:"banner", imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/halloween/hallowen_xsqe9a.png", imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102400/imgs/haloween/funkos/halloween/hallowen2_xhsuts.png", imagenC:""},
//     {id:2,nombre:"chucky",descripcion:"funko de la pelicula chuky el muñeco malvado. Es un muñeco Good Guy que fue poseído por medio de magia vudú por el asesino en serie Charles Lee Ray",precio:1550, descuento:10, genero:"movies",tipo:"banner",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102422/imgs/haloween/funkos/halloween/chuki123_mh4o3b.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/halloween/chuki1111_kiwwds.png",imagenC:""},

//     {id:3,nombre:"sam",descripcion:"funko de la pelicula Trick 'r Treat criatura demoniaca parecida a una calabaza que actua como ejecutor de las reglas y tradiciones de Hallowen.", precio:1200, descuento:10,genero:"movies",tipo:"banner",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102426/imgs/haloween/funkos/halloween/trick_r_treat_uv2gny.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102303/imgs/haloween/funkos/halloween/trick_r_treat2_pg1j8x.png",imagenC:""},
//     {id:4,nombre:"yamcha y puar",descripcion:"funko dragon ball z yamcha y puar coleccion.", precio:1530, descuento:10, genero:"anime",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png",imagenC:""},
//     {id:5,nombre:"homer muumuu",descripcion:"funko de la coleccion simpsons, homero gordo esa mancha no se quita",precio:1021, descuento:0, genero:"tv y series",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668210035/imgs/haloween/funkos/futurama/homero_gordo1_fgykwd.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107301/imgs/haloween/funkos/futurama/homero_gordo2_nuixxt.png",imagenC:""},
    
    
//     {id:6,nombre:"john wick",descripcion:"funko coleccionable, john wick + perro.", precio:1010, descuento:0, genero:"movies",tipo:"categoria",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png",imagenC:""},
//     {id:7,nombre:"pennywise",descripcion:"funko pop de lapelicula it funko generico",precio:1220, descuento:11, genero:"movies",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102295/imgs/haloween/funkos/halloween/it2222_mc4bmq.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102340/imgs/haloween/funkos/halloween/it3_xdclx3.png",imagenC:""},
//     {id:8,nombre:"t-8000",descripcion:"funko de la pelicula terminator, terminator abuelo t-8000",precio:1150, descuento:0, genero:"movies",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png",imagenC:""},
//     {id:9,nombre:"charizard",descripcion:"funko coleccion pokemon, pokemon inicial. serie rojo.",precio:1200, descuento:0, genero:"anime",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png",imagenC:""},

//     {id:10,nombre:"daemon targaryen",descripcion:"funko coleccion house of dragons, game of throne.",precio:1500, descuento:25, genero:"tv y serie",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png",imagenC:""},
//     {id:11,nombre:"otto",descripcion:"funko de la coleccion simpsons, otto escuchandomusica",precio:1300, descuento:15, genero:"tv y series",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png",imagenC:""},
//     {id:12,nombre:"duffman",descripcion:"funko de la coleccion simpsons, hombre duff, barry.",precio:1300, descuento:8, genero:"tv y serie",tipo:"destacados",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png",imagenC:""},
    
//     {id:13,nombre:"thresh",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png",imagenC:""},
//     {id:14,nombre:"yasuo",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png",imagenC:"" },
//     {id:15,nombre:"zed",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1500, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png",imagenC:""},
//     {id:16,nombre:"ashe",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1550, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png",imagenC:""},
//     {id:17,nombre:"wukong",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1400, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png",imagenC:""},
//     {id:18,nombre:"darius",descripcion:"figura de accion articulada de la coleccion league of legends, campeones league of legends",precio:1500, descuento:5, genero:"games",tipo:"figura",imagenA:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png",imagenB:"https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png",imagenC:""},
//     ]

//#endregion  arreglo de objetos pero en formato JSON

//#region /* ---- Funciones para calcular Precio real ---- */
let iva = 0.04;

const descuentoReal = (array, i) => {
    return Number(Number(array[i].descuento) * 0.01);
}

 //Para recorrido con for
const precioConDescuento = (array, p) => {
    return (Number(array[p].precio) - Number(array[p].precio) * descuentoReal(array, p));
}

const precioTotalMasIVA = (array2, j) => {
    return Number(precioConDescuento(array2, j) + precioConDescuento(array2, j) * iva);
}

const describe_tipos = (array3, i) => {
    if (array3[i].genero == "movies") {
        return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
    } else if (array3[i].genero == "tv y series") {
        return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
    } else if (array3[i].genero == "anime") {
        return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
    }
}

//Para recorrido con foreach
const descuentoReal2 = (element) => {
    return Number(element.descuento) * 0.01;
}
const precioConDescuento2 = (element) => {
    return (Number(element.precio) - Number(element.precio) * descuentoReal2(element));
}

const precioTotalMasIVA2 = (element) => {
    return Number(precioConDescuento2(element) + precioConDescuento2(element) * iva);
}

const describe_tipos2 = (element) => {
    if (element.genero == "movies") {
        return "En esta seccion enconraras funkos relacionados con peliculas, ya sean de terror, siencia ficcion, y demas."
    } else if (element.genero == "tv y series") {
        return "Funkos relacionados con animaciones y series de tv... Los simpsons, futurama, series como mandalorian o game of throne."
    } else if (element.genero == "anime") {
        return "Anime , y cultura japonesa , asia y oriente... mangas y manwhas. Como pokemon, Dragon Ball, Naruto, shinigamis, Pakas, etc."
    }
}
/* ---- fin calculo precio real ---- */
//#endregion /* ---- Calculo Precio real ---- */

//#region /* Funcion Depurador*/
const depura = (texto) =>{
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}

const calculaPrecioFinal = (element) =>{
    let precio;
    let descuento;
    //Nose si es lo mejor pero creamos un modal por cada elemento
    (precioConDescuento(element) > 0) ? (precio = precioTotalMasIVA(element).toFixed(2), descuento=`${element.descuento}`) : (precio = precioTotalMasIVA(element).toFixed(2), descuento=`${element.descuento}`);
}

//Genera un nombre de clase HTML: rigt = par, left = inpar
const claseLeftRight = (valor) => {
    ((valor % 2) == 0) ? posicion == "left" : posicion = "right"; 
}

const generaElementModal = (element) =>{
    if (verificaSrock(element) != 0){

        calculaPrecioFinal(element);
        
        return modal = `\n
        <section class="modalContainer" data-id="${element.id}">
            <section class="modal close ${element.id}">
                <div class="superior">
                    <div class="izq">
                        <img src="${element.imagenB}" alt="${element.descripcion}">
                    </div>
                    <div class="der">
                        <h1>${element.nombre}</h1>
                        <h2>$${precio}</h2>
                        <p>descuento de %${descuento} + iva de %4.</p>
                        <p>3 cuotas sin interes de $${(precioTotalMasIVA(element) / 3).toFixed(2)} con: </p>
                        <img class="pagos" src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/468X60.jpg" title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"/>
                        <p><strong>${element.descripcion}</strong></p>
                        <form action="" id="compra_fun">
                            <div class="form_top">
                                <label for="cantidad"> cantidad</label>
                                <input class="cantidad" type="number" name="cantidad" id="cantidad">
                            </div>
                            <div class="form_mid">
                                <input class="aniadeCarrito" type="submit" value="añadir carrito">
                                <a href="#compra_fun" class="gustar"><ion-icon name="heart-outline"></ion-icon></a>
                                <a href="#compra_fun" class="rotar"><ion-icon name="sync-outline"></ion-icon></a>
                            </div>
                            <span id="hay_producto">
                                <ion-icon name="checkmark-outline"></ion-icon>&nbsp;En Stock
                            </span>
                        </form>
                    </div>
                </div>
                <div class="inferior">
                    <div class="redes" id="redes">
                        <a href="#redes"><ion-icon name="logo-whatsapp"></ion-icon></a>
                        <a href="#redes"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#redes"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#redes"><ion-icon name="mail-outline"></ion-icon></a>
                    </div>
                    <div class="palabras_clave" id="palClav">
                        <a href="palClav">${element.nombre}</a>
                        <a href="palClav">${element.genero}</a>
                        <a href="palClav">${element.tipo}</a>
                        <a href="palClav">${element.clave1}</a>
                        <a href="palClav">${element.clave2}</a>
                        <a href="palClav">${element.clave3}</a>
                    </div>
                </div>
                <a class="cerrar"><ion-icon name="close-outline"></ion-icon></a>
            </section>  
        </section> \n`;
    }   
}

const generaElementBanner = (element) =>{
    if (verificaSrock(element) != 0){
        return banner = `\n
        <section class="art_princial swiper-slide">
            <div class="caja left">
                <img src="${element.imagenA}" alt="${element.descripcion}">
            </div>
            <div class="caja right">
                <h2 class="titulo">#${element.id} ${element.nombre}</h2>
                <h3 class="precio">$${element.precio}</h3>
                <p class="textos">${element.descripcion}</p>
                <a href="">reservalo</a>
                <span class="descuento">${element.descuento}%</span>
            </div>
        </section>
        \n`;
    }
}

const generaElementCategoria = (element,clasePosicion) =>{
    if (verificaSrock(element) != 0){
    return elementCategoria = `\n
        <section class="targeta_simple ${clasePosicion} ">
            <img src="${element.imagenA}" alt="${element.descripcion}">
            <div class="textos_target"> 
                <a class="title_targ">${element.genero}</a>
                <p>${describe_tipos2(element)}</p>
            </div>                  
        </section>
        \n`;
    }
} 

const generaElementDestacado = (element,contador,clasePosicion) =>{
    if (verificaSrock(element) != 0){
        return elementDestacado = `\n
        <section class="tarjeta tarjeta${contador} ${clasePosicion}" data-id="${element.id}">
            <div class="producto_imagen">
                <section class="cont_img">
                    <img class="imgPrimaria" src="${element.imagenB}" alt="${element.descripcion}">
                    <img class="imgSecundaria" src="${element.imagenA}" alt="${element.descripcion}">
                    <div class="botones_func" data-id="${element.id}">
                        <a href="#" title="rotar" class="rotar" data-id="${element.id}"> 
                            <ion-icon name="sync-outline"></ion-icon> 
                        </a>
                        <a href="#" class="zoom" title="agrandar" data-id="${element.id}"> 
                            <ion-icon name="search-outline"></ion-icon> 
                        </a>
                    </div>
                </section>
            </div>
            <div class="textos_tarjeta">
                <h2><a href="#">#${element.id} ${element.nombre}</a></h2>
                <h3>$${precioTotalMasIVA(element).toFixed(2)}&nbsp;$</h3>
                <span class"identificador"></span>
            </div>
        </section>
        ${generaElementModal(element)}
        \n`;  
    }
}

const generaElementFigura = (element, contador) =>{
    if (verificaSrock(element) != 0){
        return elementFigura = `\n
        <section class="tarjeta_fig fig${contador} ">
            <div class="textos_fig">
                <h2>${element.nombre}</h2>
                <h3>$${precioTotalMasIVA(element)}</h3>
            </div>
            <div class="contImg">
                <img src="${element.imagenA}" alt="${element.descripcion}">
            </div>
            <div class="botones" data-id="${element.id}">
                <a href="#" class="carrito">
                    <ion-icon name="cart-outline"></ion-icon>
                </a>
                <a href="#" class="zoom" title="agrandar" data-id="${element.id}"> 
                    <ion-icon name="search-outline"></ion-icon> 
                </a>
            </div>
        </section>
        ${generaElementModal(element)}
        \n`;
    }
}



//recoremos el array y buscamos que exista el elemento con stock y me lo guarde en un nuevo arreglo.
let productosEnStock = [];
let productosAgotados = [];
const verificaSrock = (array) =>{
    array.forEach(element => {
        if (element.stock != 0) {
            productosEnStock.push(element); 
        }else{
            productosAgotados.push(element); 
        }
    });
}

//Filtramos los productos por secciones (banners, categoria, destacados, figura o general).  
//podemos filtrar aca el stock  de momento
const productosBanner = arregloJuguetes.filter((el) => el.tipo.includes("banner") && el.stock > 0);

depura("---- PROD BANNERS ---------")
console.log(productosBanner)