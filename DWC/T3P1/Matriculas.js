let arrayNumeros = [0,0,0,0];
let arrayNumerosFake;

for (let i = 0; i <= 9999; i++)
{
    arrayNumerosFake = [...arrayNumeros];
    arrayNumeros.sort();
    console.log("ordenado"+arrayNumeros);
    console.log("desordenado"+arrayNumerosFake);
    arrayNumeros = arrayNumerosFake;
    incrementar (arrayNumeros);
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