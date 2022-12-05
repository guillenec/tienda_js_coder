
const ventana_login = document.querySelector('.seccionlogin')
const botonUs = document.querySelector('.usuario_log')
const cerrarLogin = document.querySelector('.closeForm')

const irAregistro = document.querySelector('#registro_sesion')
const irLogin = document.querySelector('#login_sesion')

const formInicio = document.querySelector('.ingresarUser')
const formRegistro = document.querySelector('.registrarUser')

botonUs.addEventListener('click', e =>{
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

//  Object.fromEntries() Devuelve un nuevo objeto de los pares iterables [key, value]. (Este método hace lo contrario a Object.entries).
const usuarios = [
    {
        'id': uniqueId('user'),
        'nombre': 'root',
        'correo': 'root@gmail.com',
        'password': 'root1234',
        'edad': 18,
        'img':'https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino05_e24mtr.gif'
    },
    {
        'id': uniqueId('user'),
        'nombre': 'guilleNec',
        'correo': 'guillermoneculqueo@gmail.com',
        'password': 'guilleNec123',
        'edad': 30,
        'img':'https://res.cloudinary.com/dpiwmbsog/image/upload/v1662872387/imgs/peakpx_4_vhuizk.jpg'
    },
    {
        'id': uniqueId('user'),
        'nombre': 'tux123',
        'correo': 'tux123@gmail.com',
        'password': 'tux12345',
        'edad': 20,
        'img':'https://res.cloudinary.com/dpiwmbsog/image/upload/v1662872388/imgs/peakpx_2_rqss7p.jpg'
    }
]

const formLogin = document.querySelector('#ingresarUs');
formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    // usuarios.push(datos);
    console.log(usuarios)
})