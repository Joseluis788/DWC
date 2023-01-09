let ventana11;
let ventana2;
let ventana3;
let num = 8;

function abrirVentana1 ()
{
    ventana11 = window.open("ventana1.html", "Ventana 1", "width = 300 height = 300");
}

function abrirVentana2()
{
    ventana2 = window.open("", "Ventana 2", "width = 300 height = 300");
    ventana2.document.bgColor = "blue";
    ventana2.moveTo(1900,0);
}

function abrirVentana3()
{
    ventana3 = window.open("", "Ventana 3", "width = 300 height = 300");
    ventana3.document.bgColor = "pink";
    ventana3.moveTo(800,2000);
}

function cerrarVentana1()
{
    ventana11.close();
}

function cerrarVentana2()
{
    ventana2.close();
}

function cerrarVentana3()
{
    ventana3.close();
}

function numeros ()
{
    ventana11.document.getElementById("prueba1").innerHTML = num;
}

function cambiaColor ()
{
    ventana11.document.body.style.background = "red";
}