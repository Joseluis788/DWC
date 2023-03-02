var numerosAleatorios = [];
var numeros1;
var eleccion1;
var expresionRegularCorreo = /^[A-Za-z]*@[A-Za-z]*\.[A-Za-z]{2,3}$/;
// Mínimo un número, una letra mayus, una letra minus y un caracter especial
var SuperContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,15}$/;

function confirmarUsuario ()
{
    let usuario = document.getElementById("usuario");
    if (usuario.value != "usuario")
    {
        document.getElementById("error").innerHTML = "El nombre de usuario debe de ser \"usuario\"";
        usuario.focus();
    }
    else
    {
        document.getElementById("error").innerHTML = "";
    }
}

function confirmarContraseña ()
{
    let contraseña1 = document.getElementById("contraseña1");
    let contraseña2 = document.getElementById("contraseña2");

    if (validarContraseña(contraseña1.value))
    {
        if (contraseña1.value != contraseña2.value)
        {
            document.getElementById("error").innerHTML = "Las contraseñas no coinciden";
        }
        else
        {
            document.getElementById("error").innerHTML = "";
            enviar();
        }
    }
    else
    {
        document.getElementById("error").innerHTML = "La contraseña no tiene un formato válido, tiene que tener un número y una letra mayúscula";
    }

}



function validarContraseña (contraseña)
{
    let patron = /[A-Z]+/;
    let patron2 = /[0-9]+/;

    if (patron.test(contraseña))
    {
        if (patron2.test(contraseña))
        {
            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        return false
    }
}

function cogerNumeros ()
{
    numeros1 = document.getElementById("numeros").value;
    numeros1 = parseInt(numeros1);
    console.log(numeros1);
}

function cogerEleccion ()
{
    eleccion1 = document.getElementById("eleccion").value;
    eleccion1 = parseInt(eleccion1);
    console.log(eleccion1);
}


function calculo (eleccion, numeros)
{

    for (let i = 0; i < eleccion; i++)
    {
        numerosAleatorios.push(parseInt(Math.random()*(numeros-1)+1));
        console.log(numerosAleatorios);
    }
    numerosAleatorios.sort;
   
}

function recorrer ()
{
    for (let i = numerosAleatorios[0]; i <= numerosAleatorios[eleccion1]; i++)
    {
        ventana1.document.write(i);
    }
}