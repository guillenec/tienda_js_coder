// console.log(JSON.parse(localStorage.getItem('carritoStorage')));
// carritoCompra=JSON.parse(localStorage.getItem('carritoStorage'));
// console.log(carritoCompra)
let contador = 0;

async function pedirProds(){
    const resp = await fetch('../js/db_stockJSON.js')
    // console.log("------ aweit ----- ")
    const data = await resp.json();
    let objUrlParams = new URLSearchParams(window.location.search);
    // console.log(objUrlParams.get('elementBusqueda')); 
    let elementGet = JSON.parse(objUrlParams.get('elementBusqueda') || 7575);

    // console.log(elementGet)
    arregloJuguetes = data;
    // console.log(arregloJuguetes)
    let titulo = document.querySelector('#tituloPageBusqueda');

    if (elementGet == 7575) {
        titulo.innerText = "todos nuestros funkos";
        arregloJuguetes.forEach(element => {
            generaElemenBusqueda(element,contador)
            contador++
        });
    }else {
        titulo.innerText = `funkos: ${elementGet}`;
        const productosBuscados = fitraProductosPorBusqueda(arregloJuguetes, elementGet)
        productosBuscados.forEach(element => {
            generaElemenBusqueda(element,contador)
            contador++
        });
    }

    // const filtrados = data.find(elem => elem.clave1 == busqueda || elem.clave2 == busqueda || elem.clave3 == busqueda || elem.nombre == busqueda ||elem.genero == busqueda) || "error al buscar"; 
    // console.log(`filtrados por ${busqueda}:`)
    // console.log(filtrados)
    if (document.querySelector('.activoLoad')) {
        setTimeout(() => {
            let loader = document.querySelector('#loader');
            loader.classList.remove('activoLoad');
        },2000);
    }
}

const fitraProductosPorBusqueda = (array, filtro) =>{
    return array.filter((el) => el.nombre == filtro || el.genero == filtro || el.tipo == filtro || el.clave1 == filtro || el.clave2 == filtro || el.clave3 == filtro);
}

const generaElemenBusqueda = (element,contador) =>{
    const contentElementGeneral = document.querySelector('#contenedorGeneral')

    if (contentElementGeneral) {
        // console.log(contentElementGeneral)

    //Destructuracio
    const seccion = document.createElement('section');
        seccion.className = `tarjeta tarjeta${contador} ${claseLeftRight(contador)}`;
        seccion.id= `general${element.id}`;
        
    const div = document.createElement('div');
        div.className = "producto_imagen";

    const seccionimg1 = document.createElement('section');
        seccionimg1.className = "cont_img";    

    const containImg1 = document.createElement('div')
    containImg1.className = 'img1Contain';
    containImg1.id = `img1General${element.id}`;

    const containImg2 = document.createElement('div')
    containImg2.className = `img2Contain`;
    containImg2.id = `img2General${element.id}`

    const containImg3 = document.createElement('div')
    containImg3.className = `img3Contain`;
    containImg3.id = `img3General${element.id}`


        if (!element.imagenA == '') {
            const img1 = document.createElement('img')
            img1.className = "img1";
            img1.src = `${element.imagenA}`;
            img1.alt = `${element.descripcion}`;
            img1.id = `imgA${element.id}`
            containImg1.append(img1)
        }
        if (!element.imagenB == '') {
            const img2 = document.createElement('img')
            img2.className = "img2";
            img2.src = `${element.imagenB}`;
            img2.alt = `${element.descripcion}`;
            img2.id = `imgB${element.id}`
            containImg2.append(img2)
        }
        if (!element.imagenC == '') {
            const img3 = document.createElement('img')
            img3.className = "img3";
            img3.src = `${element.imagenC}`;
            img3.alt = `${element.descripcion}`;
            img3.id = `imgC${element.id}`
            containImg3.append(img3)
        }
    
    seccionimg1.append(containImg1)
    seccionimg1.append(containImg2)
    seccionimg1.append(containImg3)
    // seccionimg1.append(divMini);
    div.append(seccionimg1)

        seccion.innerHTML =`\n
            <div class="textos_tarjeta">
                <h2><a href="#">#${element.id} ${element.nombre}</a></h2>
                <h3>$${precioTotalMasIVA(element).toFixed(2)}&nbsp;$</h3>
                <span class"identificador"></span>
            </div> \n`;
    
    const constarrayRet = generaElementModal(element, contentElementGeneral);
    // console.log(constarrayRet);
    contenedorBotones(element, div, seccion, constarrayRet);
    seccion.append(div);

    contentElementGeneral.append(seccion);

    } else{
        console.log("No existe el elemento TODOS LOS ELEMENTOS")
    }
    
}

pedirProds()

