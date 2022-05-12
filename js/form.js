let btnEmpezar = document.getElementById('btnEmpezar');

function verificar(e) {
    //Previene que se reinicie el sitio al presionar Enviar
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;

    /*Devuelve error si no se ingresa lo requerido
    if (nombre === '' || edad === '' || email === '') {
        //swal.fire({
            type: 'error',
            tittle: 'ups',
            text: 'Ingrese todos los campos requeridos :)',
            showConfirmButton: false,
            timer: 100
        })
    } else {
        users.showUsers(nombre, edad, email)
    }*/

/*Agrego Operador Ternario*/

(nombre === '' || edad === '' || email === '') ? alert ("Ingresar todos los datos solicitados") : users.showUsers(nombre, edad, email);

}