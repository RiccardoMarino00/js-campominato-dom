// Recupero elemento contenitore
const containerElement = document.querySelector(".container");
// Recupero bottone play
const btnPlay = document.querySelector(".play-btn");
let  selectElement = document.getElementById("difficulty");

// Aggiungo un event listener che al click su play fa partire la funzione playOnclick
btnPlay.addEventListener("click", startGame)

function startGame (){
    // Dichiaro una costante contenente la dimensione di un lato
    const size = sizeGrid();
    // Dichiaro una costante contenente il numero di celle da far stare nel contenitore attraverso il calcolo dell'area del contenitore (quadrato)
    const numberOfCell = size * size;
    // Svuoto contenuto container
    containerElement.innerHTML = " ";
    // Gestione colonne
    containerElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    // Creo un ciclo for per stamparmi 100 quadrati nel mio contenitore containerElement
    for (let i = 0; i < numberOfCell; i++) {
        // Dichiaro una costante numero per avere i quadrati numerati
        const num = i + 1;
        // Dichiaro una costante per crare il mio elemento square come oggetto
        const squareElement = document.createElement("div"); // obj
        // Aggiungo la classe square a divElement
        squareElement.className = "square";
        // Appendo tutti i div uno dopo l'altro 
        containerElement.append(squareElement);
        // Aggiungo al quadrato il suo rispettivo numero
        squareElement.innerHTML = num
        // Aggiungo un event listener che cambia il colore del quadrato in azzurro al mio click e ad un ulteriore click lo toglie ( grazie a toggle)
        squareElement.addEventListener("click", function () {

            squareElement.classList.toggle("bg-lightblue");
        })
    }

}

// Livelli di difficoltà

function sizeGrid (){
    let size = 10
    let level = selectElement.value;
    if (level === "3"){
        size = 7
    } else if (level === "2"){
        size = 9
    }
    
    return size

}

selectElement.addEventListener("click", randomNumberGenerator)


function randomNumberGenerator (){
    let level = selectElement.value;
    let arrayRandomNumber = [];
    if (level === "1"){
        let iEasy = 0;
        do{
           iEasy++
           arrayRandomNumber = parseInt(Math.floor(Math.random()*100) + 1);
           console.log(arrayRandomNumber)
        } while (iEasy < 16)
    } else if ( level === "2"){
        let iMedium = 0;
        do{
          iMedium++
          arrayRandomNumber = parseInt(Math.floor(Math.random()*81) + 1);
          console.log(arrayRandomNumber)
        } while (iMedium < 16)
    } else {
        let iHard = 0;
        do{
          iHard++
          arrayRandomNumber = parseInt(Math.floor(Math.random()*49) + 1);
          console.log(arrayRandomNumber)
        } while (iHard < 16)
    }
   return arrayRandomNumber
}


  


  


    


    
      




