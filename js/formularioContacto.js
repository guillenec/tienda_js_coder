const butonFormContact = document.querySelector('#enviar_form_contact')
console.log("formulario")
console.log(butonFormContact)

butonFormContact.addEventListener('submit', e =>{
    e.preventDefault();
    mjsToastify(`form enviado correctamente!!!`,'#00b09b','#96c93d' );

    // setTimeout(() => {

    // }, 900);
})