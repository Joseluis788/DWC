// Creo botón enviar donde guardo el submit
let botonEnviar = document.getElementById("botonEnviar");
// La función cookie para crear la cookie y actualizarla
function cookie() {
    // Si existe la cookie y se llama intentos, asigno a contador el número de intentos
    if (document.cookie && document.cookie.match('intentos')) {
        
        var contador = parseInt(document.cookie.match(/intentos=(\d+)/)[1])
      } else {
        // Si no inicializo contador a 0
        var contador = 0
      }
      // Incremento contador
      contador++
      // Creo la cookie y la muestro
      document.cookie = "intentos=" + contador+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"
      document.getElementById("cookies").innerHTML = document.cookie.match(/intentos=(\d+)/)[1]
    
}

// El evento listener que envia el formulario y llama la función cookie
botonEnviar.addEventListener("click", function (){
    if (confirm("¿Desea enviar el formulario?"))
    {
        document.formulario.submit();
    }
    cookie();
})

// La función mayus que pone el nombre y el apellido en mayúsculas y comprueba que no tenga números
function mayus (id)
{
    let texto = document.getElementById(id);
    texto.value = texto.value.toUpperCase();

    let patronNombre = /^[A-Z]*$/;
    if (patronNombre.test(texto.value))
    {
        console.log("bien");
        errores("");
    }
    else
    {
        errores("error en "+ id)
        texto.focus();
    }
        
}
// Función para mostrar los errores
function errores (texto)
{
    document.getElementById("errores").innerHTML = "Errores: "+ texto;
}
// Función para comprobar que la edad está entre 0 y 105
function comprobarEdad ()
{
    let edad = document.getElementById("edad");
    if (edad.value < 0)
        {
            errores("error en edad");
            edad.focus();
        }
    else if (edad.value > 105)
        {
            errores("error en edad");
            edad.focus();
        }
    else
        {
            console.log("bien");
            errores("");
        }
}
// Función para comprobar que el NIF tiene 8 números y una letra con un guión en medio
function comprobarNIF ()
{
    let patronNIF = /^[0-9]{8}-[A-Z]+$/
    let nif = document.getElementById("NIF");
    if (patronNIF.test(nif.value))
        {
            console.log("bien");
            errores("");
        }
    else
        {
            errores("error en NIF");
            nif.focus();
        }
}
// Función para validar el email
function comprobarEmail ()
{
    let patronEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email");
    if (patronEmail.test(email.value))
    {
        console.log("bien");
        errores("");
    }
    else
    {
        errores("error en email");
        email.focus();
    }
}
// Función para comprobar la provincia
function comprobarProvincia()
{
    let provincia = document.getElementById("provincia");
    if (provincia.value == "default")
        {
            errores("error en provincia");
            provincia.focus();
        }
    else
        {
            console.log("bien");
            errores("");
        }
}
// Función para comprobar el teléfono
function comprobarTelefono()
{
    let telefono = document.getElementById("telefono");
    let patronTlf = /^[0-9]{9}$/;

    if (patronTlf.test(telefono.value))
    {
        console.log("bien");
        errores("");
    }
    else
    {
        errores("error en teléfono");
        telefono.focus();
    }
}