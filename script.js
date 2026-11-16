// ===================================
// 1. SELECCIONAR ELEMENTOS DEL HTML
// ===================================

const btnComenzar = document.getElementById("btnComenzar");
const pantallaInicio = document.querySelector(".pantalla-inicio");
const pantallaCorazon = document.getElementById("pantallaCorazon");
const contenedorCorazon = document.getElementById("contenedorCorazon");
const btnGaleria = document.getElementById("btnGaleria");
const pantallaGaleria = document.getElementById("pantallaGaleria");
const pantallaCarta = document.getElementById("pantallaCarta");
const btnIrCarta = document.getElementById("btnIrCarta");
const sobre = document.getElementById("sobre");
const cartaCompleta = document.getElementById("cartaCompleta");
const btnPantallaFinal = document.getElementById("btnPantallaFinal");
const pantallaFinal = document.getElementById("pantallaFinal");


// ===================================
// 2. BOTÓN PARA COMENZAR LA SORPRESA
// ===================================

btnComenzar.addEventListener("click", function() {

    pantallaInicio.style.display = "none";
    pantallaCorazon.style.display = "block";

    crearCorazon();

});


// ===================================
// 3. CREAR EL CORAZÓN
// ===================================

function crearCorazon() {

    // Cantidad de pequeños corazones
    const cantidad = 1000;

    for (let i = 0; i < cantidad; i++) {

        // Creamos un pequeño corazón
        const corazon = document.createElement("span");

        corazon.classList.add("mini-corazon");
        corazon.innerHTML = "♥";

        // Posición matemática del corazón
        const t = Math.random() * Math.PI * 2;

        // Escala aleatoria para rellenar el corazón
        const escala = Math.sqrt(Math.random());

        const x = 16 * Math.pow(Math.sin(t), 3) * escala;

        const y = -(13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)) * escala;

        // Convertimos las coordenadas
        const posicionX = 140 + x * 7;
        const posicionY = 125 + y * 7;

        corazon.style.left = posicionX + "px";
        corazon.style.top = posicionY + "px";

        // Preparamos la aparición del corazón
        corazon.style.opacity = "0";
        corazon.style.transform = "translate(-50%, -50%) scale(0)";

        // Agregamos el corazón al contenedor
        contenedorCorazon.appendChild(corazon);

        // Hacemos que aparezca progresivamente
        setTimeout(function() {

            corazon.style.opacity = "1";
            corazon.style.transform = "translate(-50%, -50%) scale(1)";

        }, i * 15);

        // Variamos el movimiento y el tamaño
        corazon.style.animationDelay = Math.random() * 2 + "s";
        corazon.style.fontSize = (12 + Math.random() * 6) + "px";

    }

    // ===================================
    // 4. MOSTRAR EL BOTÓN DE LA GALERÍA
    // ===================================

    setTimeout(function() {

        btnGaleria.style.display = "inline-block";

    }, cantidad * 15 + 600);

}


// ===================================
// 5. ABRIR LA GALERÍA DE FOTOGRAFÍAS
// ===================================

btnGaleria.addEventListener("click", function() {

    pantallaCorazon.style.display = "none";
    pantallaGaleria.style.display = "block";

});


// ===================================
// 6. ABRIR LA PANTALLA DE LA CARTA
// ===================================

btnIrCarta.addEventListener("click", function() {

    pantallaGaleria.style.display = "none";
    pantallaCarta.style.display = "block";

});


// ===================================
// 7. ANIMACIÓN DEL SOBRE Y APARICIÓN
//    DE LA CARTA
// ===================================

sobre.addEventListener("click", function() {

    if (!sobre.classList.contains("abierto")) {

        sobre.classList.add("abierto");

        setTimeout(function() {

            sobre.style.display = "none";
            cartaCompleta.style.display = "block";

            revelarCarta();

        }, 1500);

    }

});


// ===================================
// 8. REVELAR LA CARTA PROGRESIVAMENTE
// ===================================

function revelarCarta() {

    const parrafos = document.querySelectorAll(".texto-carta");
    const firma = document.querySelector(".firma-carta");

    parrafos.forEach(function(parrafo, indice) {

        setTimeout(function() {

            parrafo.classList.add("visible");

        }, (indice + 1) * 1800);

    });

    setTimeout(function() {

        firma.classList.add("visible");

        // Mostramos el botón para ir a la pantalla final
        btnPantallaFinal.style.display = "block";

    }, (parrafos.length + 1) * 1800);

}


// ===================================
// 9. ABRIR LA PANTALLA FINAL
// ===================================

btnPantallaFinal.addEventListener("click", function() {

    pantallaCarta.style.display = "none";
    pantallaFinal.style.display = "block";

});