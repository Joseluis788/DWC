let arrayNumeros = [0,0,0,0];
let arrayNumerosFake;
let poker = 0;
let doblePareja = 0;
let escaleraSimple = 0;
let escaleraCompleta = 0;
let trio = 0;
let terminar = false;

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

document.getElementById("DoblePareja").innerHTML = ("Dobles parejas: " + doblePareja);
document.getElementById("Trio").innerHTML = ("Trios: " + trio);
document.getElementById("EscaleraSimple").innerHTML = ("Escalera Simple: " + escaleraSimple);
document.getElementById("EscaleraCompleta").innerHTML = ("Escalera Completa: " + escaleraCompleta);
document.getElementById("Poker").innerHTML = ("Poker: " + poker);


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