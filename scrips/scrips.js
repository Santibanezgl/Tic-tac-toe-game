const nombrePlayer1 = document.querySelector("#nombreplayer1")
const nombrePlayer2 = document.querySelector("#nombreplayer2")
const botonPlayer1 = document.querySelector("#aceptarplayer1")
const botonPlayer2 = document.querySelector("#aceptarplayer2")
const FormPlayer1 = document.querySelector("#player1")
const FormPlayer2 = document.querySelector("#player2")
const listNombres = document.querySelector("#listanombres")


function random(min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
 }

 const numeroAzar = (random(0,10))

 let nombrePlayer1Value;
 let nombrePlayer2Value;

botonPlayer1.onclick = () => {
    let newElement = document.createElement("div");
    let textoDelElemento = document.createTextNode(`Bienvenido, ${nombrePlayer1.value} eres el player UNO, usaras el simbolo "X"`)
    newElement.appendChild(textoDelElemento)
    document.querySelector("#listanombres").appendChild(newElement)
    FormPlayer1.style.display ="none"
    nombrePlayer1Value = nombrePlayer1.value;
    console.log(nombrePlayer1Value);
}

botonPlayer2.onclick = () => {
    let newElement = document.createElement("div");
    let textoDelElemento = document.createTextNode(`Bienvenido, ${nombrePlayer2.value} eres el player DOS, usaras el simbolo "O"`)
    newElement.appendChild(textoDelElemento)
    document.querySelector("#listanombres").appendChild(newElement)
    FormPlayer2.style.display ="none"
    nombrePlayer2Value = nombrePlayer2.value;
    console.log(nombrePlayer2Value);
    if (numeroAzar >= 5) {
        let newElemento = document.createElement("div");
        let textoDelElement = document.createTextNode(`El jugador que comienza es ${nombrePlayer1.value}`) 
newElemento.appendChild(textoDelElement)
document.querySelector("#listanombres").appendChild(newElemento)
    } else {
        let newElemento = document.createElement("div");
        let textoDelElement = document.createTextNode(`El jugador que comienza es ${nombrePlayer2.value}`) 
newElemento.appendChild(textoDelElement)
document.querySelector("#listanombres").appendChild(newElemento)
    }
}

const Cuadrante1 = document.querySelector("#cuadrante1")
const Cuadrante2 = document.querySelector("#cuadrante2")
const Cuadrante3 = document.querySelector("#cuadrante3")
const Cuadrante4 = document.querySelector("#cuadrante4")
const Cuadrante5 = document.querySelector("#cuadrante5")
const Cuadrante6 = document.querySelector("#cuadrante6")
const Cuadrante7 = document.querySelector("#cuadrante7")
const Cuadrante8 = document.querySelector("#cuadrante8")
const Cuadrante9 = document.querySelector("#cuadrante9")


const Validar = () => {
    if (nombrePlayer1Value === nombrePlayer1.value && nombrePlayer2Value === nombrePlayer2.value){
        clearInterval(InternalID);
        if (numeroAzar >= 5) {
            console.log (`Comienza ${nombrePlayer1.value}`)
            CurrentPlayer1 = nombrePlayer1.value
            ponerX()
            
        } else {
            console.log (`Comienza ${nombrePlayer2.value}`)
            CurrentPlayer2 = nombrePlayer2.value
            ponerO()
            
        }
    } else {
        console.log ("A la espera de nombres")
    }
}

let InternalID = setInterval(Validar, 500)
console.log (numeroAzar)


const ponerX = () => {
    Cuadrante1.onclick = () => {
        document.getElementById("cuadrante1").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante2.onclick = () => {
        document.getElementById("cuadrante2").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante3.onclick = () => {
        document.getElementById("cuadrante3").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante4.onclick = () => {
        document.getElementById("cuadrante4").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante5.onclick = () => {
        document.getElementById("cuadrante5").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante6.onclick = () => {
        document.getElementById("cuadrante6").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante7.onclick = () => {
        document.getElementById("cuadrante7").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante8.onclick = () => {
        document.getElementById("cuadrante8").classList.add("equis");
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    Cuadrante9.onclick = () => {
        document.getElementById("cuadrante9").classList.add("equis")
        ponerO()
        combinacionGanadoraX()
        borrarClases()}
    }

    const ponerO = () => {
    Cuadrante1.onclick = () => {
        document.getElementById("cuadrante1").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante2.onclick = () => {
        document.getElementById("cuadrante2").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante3.onclick = () => {
        document.getElementById("cuadrante3").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante4.onclick = () => {
        document.getElementById("cuadrante4").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante5.onclick = () => {
        document.getElementById("cuadrante5").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante6.onclick = () => {
        document.getElementById("cuadrante6").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante7.onclick = () => {
        document.getElementById("cuadrante7").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante8.onclick = () => {
        document.getElementById("cuadrante8").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
    Cuadrante9.onclick = () => {
        document.getElementById("cuadrante9").classList.add("circulo")
        ponerX()
        combinacionGanadoraO()
        borrarClases()}
}

const borrarClases = () => {
    const cuadrantes = document.querySelectorAll(".cuadrante");
    let contador = 0;
    cuadrantes.forEach(cuadrante => {
      if (cuadrante.classList.contains("equis") || cuadrante.classList.contains("circulo")) {
        contador++;
      }
    });
  
    if (contador === 9) {
      cuadrantes.forEach(cuadrante => {
        cuadrante.classList.remove("equis");
        cuadrante.classList.remove("circulo");
      });
      swal("Nadie ganó, comienza un nuevo juego");
    } else {
      const alguienGanoX = combinacionGanadoraX();
      const alguienGanoO = combinacionGanadoraO();
      if (alguienGanoX) {
        swal("¡El jugador X ganó! Comienza un nuevo juego");
      } else if (alguienGanoO) {
        swal("¡El jugador O ganó! Comienza un nuevo juego");
      } else {
        // Si no hay ganador y no se han ocupado todos los cuadrantes, el juego continúa
        return;
      }
    }
  };

const combinacionGanadoraX = () => {
    if (Cuadrante1.classList.contains("equis") && Cuadrante2.classList.contains("equis") && Cuadrante3.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       } else if (Cuadrante4.classList.contains("equis") && Cuadrante5.classList.contains("equis") && Cuadrante6.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       } else if (Cuadrante7.classList.contains("equis") && Cuadrante8.classList.contains("equis") && Cuadrante9.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       } else if (Cuadrante1.classList.contains("equis") && Cuadrante4.classList.contains("equis") && Cuadrante7.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       } else if (Cuadrante2.classList.contains("equis") && Cuadrante5.classList.contains("equis") && Cuadrante8.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       }  else if (Cuadrante3.classList.contains("equis") && Cuadrante6.classList.contains("equis") && Cuadrante9.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
       } else if (Cuadrante1.classList.contains("equis") && Cuadrante5.classList.contains("equis") && Cuadrante9.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`)
        clearInterval(InternalIDD)
    } else if (Cuadrante3.classList.contains("equis") && Cuadrante5.classList.contains("equis") && Cuadrante7.classList.contains ("equis")) {
        swal(`${nombrePlayer1.value} GANA LA PARTIDA`) 
        clearInterval(InternalIDD)
    }
}

const combinacionGanadoraO = () => {
    if (Cuadrante1.classList.contains("circulo") && Cuadrante2.classList.contains("circulo") && Cuadrante3.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       } else if (Cuadrante4.classList.contains("circulo") && Cuadrante5.classList.contains("circulo") && Cuadrante6.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       } else if (Cuadrante7.classList.contains("circulo") && Cuadrante8.classList.contains("circulo") && Cuadrante9.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       } else if (Cuadrante1.classList.contains("circulo") && Cuadrante4.classList.contains("circulo") && Cuadrante7.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       } else if (Cuadrante2.classList.contains("circulo") && Cuadrante5.classList.contains("circulo") && Cuadrante8.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       }  else if (Cuadrante3.classList.contains("circulo") && Cuadrante6.classList.contains("circulo") && Cuadrante9.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
       } else if (Cuadrante1.classList.contains("circulo") && Cuadrante5.classList.contains("circulo") && Cuadrante9.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`)
        clearInterval(InternalIDDD)
    } else if (Cuadrante3.classList.contains("circulo") && Cuadrante5.classList.contains("circulo") && Cuadrante7.classList.contains ("circulo")) {
        swal(`${nombrePlayer2.value} GANA LA PARTIDA`) 
        clearInterval(InternalIDDD)
    }
}


/*let InternalIDD = setInterval(combinacionGanadoraX, 50)
let InternalIDDD= setInterval(combinacionGanadoraO, 50) */
