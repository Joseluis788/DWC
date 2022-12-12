let contador = 0;
document.cookie = "contador="+ contador;

let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", function (){
    contador++;
})

function mayus (id)
{
    let texto = document.getElementById(id);
    texto.value = texto.value.toUpperCase();
}
