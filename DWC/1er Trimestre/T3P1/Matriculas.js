/* Declaración de variables */
let arrayNumeros = [0,0,0,0];
let arrayNumerosFake;
let poker = 0;
let doblePareja = 0;
let escaleraSimple = 0;
let escaleraCompleta = 0;
let trio = 0;
let terminar = false;

// Apartado 1
function apartado1 ()
{
    // Bucle for que se repite 10000 veces para comprobar desde el 0000 al 9999
    for (let i = 0; i <= 9999; i++)
    {
        // Guardo el array original en otro array y el primero lo ordeno
        arrayNumerosFake = Array.from(arrayNumeros);
        arrayNumeros.sort();
       
        // Compruebo que tipo de figura es

        if(CompararPoker(arrayNumeros) == 1)
        {
            poker += 1;
            trio +=2;
            doblePareja +=3;
            terminar = true;
        }
    
        if(terminar == false && CompararEscaleraCompleta(arrayNumeros) == 1)
        {
            escaleraCompleta += 1;
            escaleraSimple+=2;
            terminar = true;
        }
    
        if(terminar == false && CompararEscaleraSimple(arrayNumeros) == 1)
        {
            escaleraSimple += 1;
            terminar = true;
        }
    
        if(terminar == false && CompararTrio(arrayNumeros) == 1)
        {
            trio += 1;
            terminar = true;
        }
    
        if(terminar == false && CompararDoblePareja(arrayNumeros) == 1)
        {
            doblePareja += 1;
            terminar = true;
        }

        // Vuelvo introducir el array original y lo incremento
    
        arrayNumeros = arrayNumerosFake;
        incrementar (arrayNumeros);
        terminar = false;
    }
    
    // Escribe en el documento la cantidad que existe de cada figura

    document.getElementById("DoblePareja").innerHTML = ("<b>Dobles parejas: </b>" + doblePareja);
    document.getElementById("Trio").innerHTML = ("<b>Trios: </b>" + trio);
    document.getElementById("EscaleraSimple").innerHTML = ("<b>Escalera Simple: </b>" + escaleraSimple);
    document.getElementById("EscaleraCompleta").innerHTML = ("<b>Escalera Completa: </b>" + escaleraCompleta);
    document.getElementById("Poker").innerHTML = ("<b>Poker: </b>" + poker);

}

// Función para incrementar el número del array

function incrementar (arrayNumeros)
{
    // Comprueba si el último número es diferente a 9, y si lo es se incrementa en uno, en caso contrario, ese número pasa a 0 y se repite la misma formula hasta el final
    if (arrayNumeros[3] != 9)
        arrayNumeros[3]++;
    else
        {
            arrayNumeros[3] = 0;
            if (arrayNumeros[2] != 9)
                arrayNumeros[2]++;
            else
                {
                    arrayNumeros[2] = 0;
                    if (arrayNumeros[1] != 9)
                        arrayNumeros[1]++;
                    else
                    {
                        arrayNumeros[1] = 0;
                        if (arrayNumeros[0] != 9)
                            arrayNumeros[0]++;
                        else
                        {
                            arrayNumeros[1] = 9;
                            arrayNumeros[2] = 9;
                            arrayNumeros[3] = 9;
                        }
                    }
                }
        }
}

// Función para comrpobar si es un poker

function CompararPoker (arrayNumeros)
{
    // Compruebo si los cuatro componentes del array son iguales
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[0] == arrayNumeros[2] && arrayNumeros[0] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

// Función para comprobar si es una doble pareja

function CompararDoblePareja (arrayNumeros)
{
    // Comprueba que los dos primeros y los dos últimos son iguales entre ellos
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[2] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

// Función para comprobar si es un trio

function CompararTrio (arrayNumeros)
{
    // Comprueba si los primeros tres números o los últimos tres números son iguales
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[0] == arrayNumeros[2] || arrayNumeros[1] == arrayNumeros[2] && arrayNumeros[1] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

// Función para comprobar si es una escalera simple

function CompararEscaleraSimple (arrayNumeros)
{
    // Comprueba si el número existente en la posición siguiente es +1 la posición anterior hasta 3 consecutivos
    if (arrayNumeros[1] == arrayNumeros[0]+1 && arrayNumeros[2] == arrayNumeros[1]+1 || arrayNumeros[2] == arrayNumeros[1]+1 && arrayNumeros[3] == arrayNumeros[2]+1)
        return 1;
    else
        return 0;
}

// Función para comprobar si es una escalera completa

function CompararEscaleraCompleta (arrayNumeros)
{
    // Comprueba si el número existente en la posición siguiente es +1 la posición anterior todos consecutivos
    if (arrayNumeros[1] == arrayNumeros[0]+1 && arrayNumeros[2] == arrayNumeros[1]+1 && arrayNumeros[3] == arrayNumeros[2]+1)
        return 1;
    else
        return 0;
}

// Apartado 2

function apartado2 ()
{
    // Creo una variable donde se guarda el número introducido por el usuario y los guarda en un array con la función "split"
    let numIntroducido = document.getElementById("numero").value;
    let numIntroducidoArray = numIntroducido.split("");

    // Castea los cuatro números del array a int
    for (let i = 0; i < 4; i++)
    {
        numIntroducidoArray[i] = parseInt(numIntroducidoArray[i]);
    }
    // Se ordena el array y se crean dos variables, una de control (fin) y la respuesta que sacará al final (respuesta)
    numIntroducidoArray.sort();
    // Si el número no tiene 4 números, le añade 0
    for (let i = 0; i < 4; i++)
    {
        if (isNaN(numIntroducidoArray[i]))
            numIntroducidoArray[i] = 0;
    }
    let fin = false;
    let respuesta;
    console.log(numIntroducidoArray);

    // Comparación de todas las figuras para saber cuál es
    if(CompararPoker(numIntroducidoArray) == 1)
    {
        respuesta = "Poker, 2 trios y 3 dobles parejas";
        fin = true;
    } 
    else if(fin == false && CompararEscaleraCompleta(numIntroducidoArray) == 1)
    {
        respuesta = "Escalera completa y 2 escaleras simples";
        fin = true;
    }
    else if(fin == false && CompararEscaleraSimple(numIntroducidoArray) == 1)
    {
        respuesta = "Escalera simple";
        fin = true;
    }
    else if(fin == false && CompararTrio(numIntroducidoArray) == 1)
    {
        respuesta = "Trio";
        fin = true;
    }
    else if(fin == false && CompararDoblePareja(numIntroducidoArray) == 1)
    {
        respuesta = "Doble pareja";
        fin = true;
    }
    else
    {
        respuesta = "Ninguna";
        fin = true;
    }
    
    // Muestra la figura
    document.getElementById("figura").innerHTML = "Tu figura es: " + respuesta;

    // Toda la ventana nueva que se genera
    let ventana = window.open("", "Porcentajes", "width = 800, height= 400");
    ventana.document.write("<link rel='stylesheet' href='Matriculas.css'");
    ventana.document.write("<body>");
    ventana.document.write("<div class='superContenedor'>");
    ventana.document.write("<div class='contenedor'>");
    ventana.document.write("<h1>Porcentajes</h1><br><br>");
    ventana.document.write("<p>Doble pareja: " + doblePareja*100/10000 + "%" + "</p>");
    ventana.document.write("<p>Trio: " + trio*100/10000 + "%" + "</p>");
    ventana.document.write("<p>Escalera Simple: " + escaleraSimple*100/10000 + "%" + "</p>");
    ventana.document.write("<p>Escalera Completa: " + escaleraCompleta*100/10000 + "%"+ "</p>");
    ventana.document.write("<p>Poker: " + poker*100/10000 + "%"+ "</p>");
    ventana.document.write("</div>");
    ventana.document.write("</div>");
    ventana.document.write("</body>");

    // El tiempo que tardará en cerrarse la ventana
    setTimeout(function () {
        cerrarVentana ()}, 10000);

    // La función de cerrar la ventana
    function cerrarVentana()
    {
        ventana.close();
    }
}


