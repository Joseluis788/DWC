let arrayNumeros = [0,0,0,0];
let arrayNumerosFake;
let poker = 0;
let doblePareja = 0;
let escaleraSimple = 0;
let escaleraCompleta = 0;
let trio = 0;
let terminar = false;

function apartado1 ()
{
    
    for (let i = 0; i <= 9999; i++)
    {
        arrayNumerosFake = Array.from(arrayNumeros);
        arrayNumeros.sort();
       
        if(CompararPoker(arrayNumeros) == 1)
        {
            poker += 1;
            terminar = true;
        }
    
        if(terminar == false && CompararEscaleraCompleta(arrayNumeros) == 1)
        {
            escaleraCompleta += 1;
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
    
        arrayNumeros = arrayNumerosFake;
        incrementar (arrayNumeros);
        terminar = false;
    }
    
    document.getElementById("DoblePareja").innerHTML = ("<b>Dobles parejas: </b>" + doblePareja + ", Porcentaje = " + doblePareja*100/10000 + "%");
    document.getElementById("Trio").innerHTML = ("<b>Trios: </b>" + trio + ", Porcentaje = " + trio*100/10000 + "%");
    document.getElementById("EscaleraSimple").innerHTML = ("<b>Escalera Simple: </b>" + escaleraSimple + ", Porcentaje = " + escaleraSimple*100/10000 + "%");
    document.getElementById("EscaleraCompleta").innerHTML = ("<b>Escalera Completa: </b>" + escaleraCompleta + ", Porcentaje = " + escaleraCompleta*100/10000 + "%");
    document.getElementById("Poker").innerHTML = ("<b>Poker: </b>" + poker + ", Porcentaje = " + poker*100/10000 + "%");

}


function incrementar (arrayNumeros)
{
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

function CompararPoker (arrayNumeros)
{
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[0] == arrayNumeros[2] && arrayNumeros[0] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

function CompararDoblePareja (arrayNumeros)
{
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[2] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

function CompararTrio (arrayNumeros)
{
    if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[0] == arrayNumeros[2] || arrayNumeros[1] == arrayNumeros[2] && arrayNumeros[1] == arrayNumeros[3])
        return 1;
    else
        return 0;
}

function CompararEscaleraSimple (arrayNumeros)
{
    if (arrayNumeros[1] == arrayNumeros[0]+1 && arrayNumeros[2] == arrayNumeros[1]+1 || arrayNumeros[2] == arrayNumeros[1]+1 && arrayNumeros[3] == arrayNumeros[2]+1)
        return 1;
    else
        return 0;
}

function CompararEscaleraCompleta (arrayNumeros)
{
    if (arrayNumeros[1] == arrayNumeros[0]+1 && arrayNumeros[2] == arrayNumeros[1]+1 && arrayNumeros[3] == arrayNumeros[2]+1)
        return 1;
    else
        return 0;
}

function apartado2 ()
{
    let numIntroducido = document.getElementById("numero").value;
    let numIntroducidoArray = numIntroducido.split("");

    for (let i = 0; i < 4; i++)
    {
        numIntroducidoArray[i] = parseInt(numIntroducidoArray[i]);
    }
    numIntroducidoArray.sort();
    let fin = false;
    let respuesta;

    if(CompararPoker(numIntroducidoArray) == 1)
    {
        respuesta = "Poker";
        fin = true;
    } 
    else if(fin == false && CompararEscaleraCompleta(numIntroducidoArray) == 1)
    {
        respuesta = "Escalera completa";
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

    document.getElementById("figura").innerHTML = "Tu figura es: " + respuesta;

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

    setTimeout(function () {
        cerrarVentana ()}, 10000);

    function cerrarVentana()
    {
        ventana.close();
    }
}


