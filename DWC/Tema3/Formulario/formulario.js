let contador = 0;


let botonEnviar = document.getElementById("botonEnviar");


function crearCookie ()
{
    if (document.cookie && document.cookie.match('contador'))
        var contador = parseInt(document.cookie.match(/contador=(\d+)/)[1]);
    else
        var contador = 0;
    
    return contador;
}


botonEnviar.addEventListener("click", function (){
    crearCookie();
    contador++;
    document.cookie = "contador="+ contador + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.getElementById("cookies").innerHTML = "Número de intentos: " + document.cookie.replace(/(?:(?:^|.*;\s*)contador\s*\=\s*([^;]*).*$)|^.*$/, "$1");
})

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

function errores (texto)
{
    document.getElementById("errores").innerHTML = "Errores: "+ texto;
}

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