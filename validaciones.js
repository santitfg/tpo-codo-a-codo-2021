//regex para mail
//  ^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$

//testeo de expresion mail
var mail = "hello  @world.print";
const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var result = reg.test(mail);
console.log(result); // true



//Validación de un formulario con Javascript
//Fuente: https://desarrolloweb.com/articulos/1767.php
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var mail = document.getElementById('correoElectronico').value;
    if (!validar(mail, reg)) {
        alert('No has escrito bien tu mail');
        return;
    }
    // var clave = document.getElementById('clave').value;
    // if (clave.length < 6) {
    //     alert('La clave no es válida');
    //     return;
    // }
    this.submit();
}



function validar(cadena, expresion) {
    return expresion.test(cadena);
}