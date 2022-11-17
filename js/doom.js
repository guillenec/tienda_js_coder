console.log(document.body);

const depura = (texto) =>{
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}

depura("tarjeta simple");
console.log(document.querySelector(".targeta_simple"));

depura("todas las tarjetas");
console.log(document.querySelectorAll(".targeta_simple"));

depura("guardo coleccion de tarjetas en array y mostramos 1°:");
let tarjetas = document.querySelectorAll(".targeta_simple");
console.log(tarjetas[0]);

depura("recorremos todo el arreglo foreach");
tarjetas.forEach(element => {
    console.log(element);
});

depura("usamos forof");
for (const iterator of tarjetas) {
    console.log(iterator);
}

depura("accedemos a la lista de clase classNme classList");
let tarCategoria = document.querySelector("#top_prod");
console.log(tarCategoria.className);    //devuelve string
console.log(tarCategoria.classList);    //devuelve arreglo

depura("añadimos una clase al elemento: .add");
tarCategoria.classList.add("YamshaPuar");
console.log(tarCategoria.classList);

//tarCategoria.className("YamshaPuar"); //No se recomienda ya que borra las clases que ya posea

depura("quitamos la clase al elemento: .remove");
tarCategoria.classList.remove("YamshaPuar");
console.log(tarCategoria.classList);

depura("accedemos al html con innerHTML: \nDevuelve la estructura entera, HTML correspondiente.");
console.log(tarCategoria.innerHTML);

depura("accedemos al html con innerText: \nDevuelve solo el texto correspondiente.");
console.log(tarCategoria.innerText);

depura("cambio texto con innerText");
//let tituloCategorias = document.querySelectorAll(".categorias");

tarjetas[0].innerHTML = "hola mundo 1";


tarjetas[1].innerText = "hola mundo 2";


tarjetas[0].innerHTML = `<img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png" alt="jon week">
<div class="textos_target">
    <a class="title_targ">movies</a>
    <p>Funkos de Peliculas, series como House Of The Dragons o Mandalorian. </p>
</div>`;


function depura2 (val){
    let dep = "\n---- Depurador => "
    console.log(`${dep} ${texto} ---- \n`)
}

//sacado del principal
//EVENTOS DE TECLADO PROBANDO EN EL FFOOTER
depura("teclado")
let input1 = document.querySelector('.footer #nombre');
let input2 = document.querySelector('.footer #edad');

console.log(input1)
console.log(input2)

//cuando se suelta la teca
input1.onkeyup = () => {console.log("Key Up")}

//cuando se presiona la tecla
input2.onkeydown = () => {console.log("Key Down")}

//se activa cuando detecta un cambio
input1.onchange = () => {console.log("On change")}

//cada vez que tipeamos
input1.addEventListener('input',() => {
    console.log(input1.value)
})

//submit cuando el formulario se envia
let miForm = document.querySelector("#formulario");
miForm.addEventListener('submit', validacion);

function validacion(e){
    e.preventDefault();
    console.log("Formulario Enviado")
}
