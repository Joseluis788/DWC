
// Listener que se ejecuta cuando se carga el DOM 
document.addEventListener("DOMContentLoaded", function () {

    // Nodos
    let huecos = document.querySelectorAll(".hueco");
    let zonaDibujo = document.getElementById("pizarra");
    let btnActivado = document.getElementById("pincel");
    let btnLimpiar = document.getElementById("limpiar");
    let pincel = true;
    let pizarra = false;


    // Función que activa y desactiva el pincel con el click
    btnActivado.addEventListener("click", function () {
        pincel = !pincel;
        if (!pincel) {
            btnActivado.innerHTML = "Activar Pincel";
            btnActivado.setAttribute("class", "btn btn-info");
        } else {
            btnActivado.innerHTML = "Desactivar Pincel";
            btnActivado.setAttribute("class", "btn btn-info");
        }
    })

    
    // Dos eventos que cuando pulsan y mantienen el boton se puede pintar, y cuando se levanta el ratón no
    zonaDibujo.addEventListener("mouseup", function () {
        pizarra=!pizarra;
    })
    zonaDibujo.addEventListener("mousedown", function () {
        pizarra=!pizarra;
    })

    // Recorre los huecos y con los pinta con el color seleccionado
    for (var i = 0; i < huecos.length; i++) {

        huecos[i].addEventListener("mouseover", function () {
            if (pincel && pizarra) {
                let color = document.getElementById("color").value;
                this.style.backgroundColor = color;
            }
        })

    }
})
