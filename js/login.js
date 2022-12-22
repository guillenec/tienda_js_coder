//appi de mentira https://jsonplaceholder.typicode.com/
//traeremos los usuarios para simularusuarios cargados en nuestra pagin
let arrayUser = []
let usuariosReducido = [];
let userlogiado = [];

const API_USER = 'https://jsonplaceholder.typicode.com';
//.JSON() realiza el parseao de string a JSON
fetch( `${API_USER}/users`)
    .then((resp) => resp.json())
    .then((usuarioAPI) =>{
        // console.log("--- api ---")
        // console.log(usuarioAPI)
        usuarioAPI.forEach(element => {
            const {id, name:nombre, email:correo, username:user } = element;
            usuariosReducido.push(new usuario(nombre,correo,"usuario123","https://res.cloudinary.com/dpiwmbsog/image/upload/v1670382861/icons/perfil_qkidvw.png"));
        });
    })
    .catch(err => console.error(err));


function usuario(nombre,correo,password,img) {
    this.id = uniqueId('user');
    this.nombre = nombre;
    this.correo = correo;
    this.password= password;
    this.foto=img;
}

const ventana_login = document.querySelector('.seccionlogin')
const botonUs = document.querySelector('.usuario_log')
const cerrarLogin = document.querySelector('.closeForm')

const irAregistro = document.querySelector('#registro_sesion')
const irLogin = document.querySelector('#login_sesion')

const formInicio = document.querySelector('.ingresarUser')
const formRegistro = document.querySelector('.registrarUser')

botonUs.addEventListener('click', e =>{
    e.preventDefault();
    ventana_login.classList.toggle('mostrar')
})

cerrarLogin.addEventListener('click', e =>{
    e.preventDefault();
    console.log('hello')
    ventana_login.classList.remove('mostrar')
})

irAregistro.addEventListener('click',e => {
    e.preventDefault();
    formInicio.classList.remove('bloq')
    formInicio.classList.add('none')

    setTimeout(() => {
        formRegistro.classList.remove('none')
        formRegistro.classList.add('bloq')
    }, 500);
})

irLogin.addEventListener('click',e => {
    e.preventDefault();
    formRegistro.classList.remove('bloq')
    formRegistro.classList.add('none')

    setTimeout(() => {
        formInicio.classList.remove('none')
        formInicio.classList.add('bloq')
    }, 500);
})

const logoUusuario = document.querySelector('#li_usuarioActivo');
const mostrarMenuUsuario = document.querySelector('#usuarioActivoMenu');
logoUusuario.addEventListener('click',e =>{
    e.preventDefault();
    mostrarMenuUsuario.classList.toggle('mostrar');
})
//si el usuario se loguea o esta activo añadirle la clase a menu_navegacion userActivo
//#endregion

const menu_navegacion = document.querySelector('#menu_navegacion')

//  Object.fromEntries() Devuelve un nuevo objeto de los pares iterables [key, value]. (Este método hace lo contrario a Object.entries).

const procesaFormRegistro = (e) => {
    e.preventDefault();
     // //constructor objeto formData
    // const datos1 = new FormData(e.target);
    // //frommEntries transforma una lista de pares con [clave-valor] en un objeto
    // const datosCompleto = Object.fromEntries(datos1.entries());

    const datos = Object.fromEntries(new FormData(e.target)); //forma resumida
    // return datos;
    
    console.log("----- datos del formulario -----")
    console.log(datos.foto)

    if(usuariosReducido.some((elem) => elem.correo == datos.email || elem.nombre == datos.nombre)){
        mjsToastify(`${datos.nombre} ya existe !!!`,'#ff6347','#e94a4a' );
        // console.log("el usuario ya existe objeto ya existe")
    }
    else{
        usuariosReducido.push(new usuario(datos.nombre, datos.email, datos.password, datos.foto));
        localStorage.setItem('usuariosPage', JSON.stringify(usuariosReducido))
        usuariosReducido = [];
        usuariosReducido = JSON.parse(localStorage.getItem('usuariosPage'))
        menu_navegacion.classList.add('userActivo')

        setTimeout(() => {
            ventana_login.classList.remove('mostrar')
            elUsuarioLoginExiste(datos);
            renderNombreUsuario(datos.nombre)
        }, 500);
        // // usuarios.push(usuarioNueevo);
        // console.log("----- sseeegg -----")
        // console.log(usuariosReducido)
        // console.log(datos)
    }
}
const formRegistraUser = document.querySelector('#registroUs');
formRegistraUser.addEventListener('submit', e =>{
    procesaFormRegistro(e)
})

const verificaUsuarioLoguiado = (objeto) =>{
    // console.log(usuariosReducido)
    // console.log(objeto)
    return usuariosReducido.some((el) => el.nombre == objeto.nombre && el.password == objeto.password )
};

const renderNombreUsuario = (nombre) => {
    const nombreUserLog = document.querySelector('#li_usuarioActivo');
    nombreUserLog.innerText = `${nombre}`
}

const formIngresoUser = document.querySelector('#ingresarUs');
const usuarioLogiado = () =>{
    formIngresoUser.addEventListener('submit', e =>{
        e.preventDefault();
        const datosLog = Object.fromEntries(new FormData(e.target)); //forma resumida
        elUsuarioLoginExiste(datosLog);
        renderNombreUsuario(datos.nombre)
    })
}
usuarioLogiado();

const elUsuarioLoginExiste = (objeto) =>{

    if (verificaUsuarioLoguiado(objeto)) {
        // console.log("---- loguiado correctamente ----");
        // console.log(objeto)
        userlogiado = (usuariosReducido.find((el) => el.nombre == objeto.nombre && el.password == objeto.password))
        localStorage.setItem('usuariosLogiados',JSON.stringify(userlogiado))

        renderMenuUsuario(userlogiado);
        // window.location.reload()

        setTimeout(() => {
            mjsToastify(`Bienvenio ${objeto.nombre} !!!`,'#00b09b','#96c93d' );
            ventana_login.classList.remove('mostrar');
            menu_navegacion.classList.add('userActivo'); 
        }, 3000);
        
    }
    else if (usuariosReducido.some((el) => el.nombre == objeto.nombre && el.password != objeto.password )) {
        mjsToastify(`Password incorrecto !!!`,'#ff6347','#e94a4a' );
    }

    else if (objeto != 0 && usuariosReducido.some((el) => el.nombre !== objeto.nombre)) {
        mjsToastify(`${objeto.nombre} no existe !!!`,'#ff6347','#e94a4a' );
    }
    else{
        console.log("error al loguiarte")
    }
}

const setUserLogin = () => {
    localStorage.setItem('usuariosLogiados', JSON.stringify(userlogiado));
}

const mjsToastify = (mensaje, colorA, colorB) => {
        Toastify({
            text: `${mensaje}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: `linear-gradient(to right, ${colorA}, ${colorB})`,
            },
            onClick: function () { } // Callback after click
        }).showToast();
}
// //salir del login
// if (document.querySelector('#salirLogin')) {
//     const salirDeLogin = document.querySelector('#salirLogin');

// }
const salirModoLogin = (elementoDom) =>{
    elementoDom.addEventListener('click',e =>{
        e.preventDefault()
        console.log("deslogiando")
        menu_navegacion.classList.remove('userActivo'); 
        userlogiado = [];
        setUserLogin();
        mostrarMenuUsuario.classList.remove('mostrar');
    
    })
}


const renderMenuUsuario = (objeto) =>{
    const cajaMenuUsuario = document.querySelector('#usuarioActivoMenu')

    const div = document.createElement('div');
    div.className = "usuarioID";
    div.id = `usuarioID${objeto.nombre}`;
    div.innerHTML = `\n
        <div class="us_log">
            <div class="logoUs"><img src="${objeto.foto}" alt=""></div>
            <div class="saludoUsuario">
                <p class="saludo">Hola <span class="us_saludo">${objeto.nombre}</span> !!!</p>
                <p class="puntosUs">Mail <span class="span_puntosUs">${objeto.correo}</span></p>
            </div>
            
        </div>
    \n`;
    const divCuerpo = document.createElement('div');
    divCuerpo.className = "us_cuerpo";
    divCuerpo.id = `usCuerpo${objeto.nombre}`;
    divCuerpo.innerHTML = `\n 
        <a class="comprasUs" href=""><ion-icon name="card-outline"></ion-icon> compras</a>
        <a class="ayudaUs" href=""><ion-icon name="help-outline"></ion-icon> preguntas</a>
        <a class="miPerfil" href=""><ion-icon name="person-outline"></ion-icon> mi perfil</a>
    \n`;

    const asalir = document.createElement('a');
    asalir.className = "salir";
    asalir.id = `salirLogin${objeto.nombre}`;
    asalir.innerHTML = `\n <ion-icon name="log-out-outline"></ion-icon> salir \n`;

    salirModoLogin(asalir)

    divCuerpo.append(asalir)
    div.append(divCuerpo)
    cajaMenuUsuario.append(div)
} 

window.addEventListener('load', e =>{
    const storagrUsuarios = JSON.parse(localStorage.getItem('usuariosPage'))
    const userLog=  JSON.parse(localStorage.getItem('usuariosLogiados'))
    if (storagrUsuarios !== null) {
        console.log("usuario reducidio")
        usuariosReducido = [];
        usuariosReducido = storagrUsuarios;
        console.log(usuariosReducido)
        renderNombreUsuario(userLog.nombre);
    }
    // console.log(usuariosReducido)

    const userlogiado2 = JSON.parse(localStorage.getItem('usuariosLogiados'))
    if (userlogiado2 !== null) {
    elUsuarioLoginExiste(userlogiado2);
    console.log(userlogiado2)
    }

})



/*
GET — Obtener datos de la API. Por ejemplo, obtener un usuario de Twitter en función de su nombre de usuario.

POST — Empujar los datos a la API. Por ejemplo, crear un nuevo registro de usuario con nombre, edad y dirección de correo electrónico.

PUT — Actualizar un registro existente con nuevos datos. Por ejemplo, actualizar la dirección de correo electrónico de un usuario.

DELETE — Eliminar un registro. Por ejemplo, eliminar un usuario de la base de datos.
*/