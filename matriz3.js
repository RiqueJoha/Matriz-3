const divTablero = document.querySelector("#tablero");

const MAX_COL=7;
const MAX_FILA=7;

const POS_INICIAL_COL=3;
const POS_INICIAL_FIL=3;

const ARRIBA= "w";
const ABAJO="s";
const IZQUIERDA= "a";
const DERECHA="d";

let posJugador=[POS_INICIAL_FIL,POS_INICIAL_COL]

document.addEventListener("keydown", function(event) {
    let jugador=document.querySelector(`#casilla-${posJugador[0] + "-" + posJugador[1]}`)
    jugador.innerHTML = ``;
    jugador.classList.remove("jugador");
    switch (event.key) {
        
        case ARRIBA:
            posJugador[0]--;
            break;
        case ABAJO:
            posJugador[0]++;
            break;
        case IZQUIERDA:
            posJugador[1]--;
            break;
        case DERECHA:
            posJugador[1]++;
            break;
        }
        agregarJugador(posJugador[0], posJugador[1]);
    
  
});

function generar() {
    
    
    divTablero.innerHTML = "";


    for (let fila = 0; fila < MAX_FILA; fila++) {

        divTablero.innerHTML += `
    <div class="row">
        ${agregarColumna(fila)}
    </div>
    `
    }
    agregarJugador(POS_INICIAL_FIL, POS_INICIAL_COL);
}



function agregarJugador(fila,col) {
    let jugador=document.querySelector(`#casilla-${fila + "-" + col}`)
    jugador.innerHTML = `<span>J<span>`;
    jugador.classList.add("jugador");
}

function agregarColumna(fila) {
    
    let columnasGeneradasHtml = "";
    for (let col = 0; col < MAX_COL; col++) {
        
            columnasGeneradasHtml += `
            <div id="casilla-${fila+"-"+col}"class="col casilla">
            </div>`;
        }
     return columnasGeneradasHtml;
       
    }
   
    
generar();


