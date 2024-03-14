// Cose da gestire ancora
// 1) il calcolo del punteggio
     // Al click su una cella azzurra punteggio + 1

// 2) partita termina quando non ci sono altri numeri cliccabili




// Recupero elemento contenitore
const containerElement = document.querySelector(".container");
// Recupero bottone play
const btnPlay = document.querySelector(".play-btn");
let selectElement = document.getElementById("difficulty");
const result = document.getElementById("risultato")



// Aggiungo un event listener che al click su play fa partire la funzione playOnclick
btnPlay.addEventListener("click", startGame)

function startGame (){
    let arrayRandomNumber = randomNumberGenerator();
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
            // SE gioco non è ancora finito
            // calcolo punteggio
            let score = 0;
            // SE num è presente in array impostare bg-red
            if (arrayRandomNumber.includes(num) === true){
               squareElement.classList.add("bg-red");
               containerElement.style.pointerEvents = "none"
               result.innerHTML = `TRY AGAIN!`
               console.log("La casella ", num, "è una bomba, Hai perso!")
            } 
            else {
               score++;
               // ALTRIMENTI bg-azzurro
               squareElement.classList.add("bg-lightblue");
               console.log(score)

            }
            
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


function randomNumberGenerator() {
    let arrayRandomNumber = [];
    let level = selectElement.value;
    if (level === "1") {
        let iEasy = 0;
        do {
            number = parseInt(Math.floor(Math.random() * 100) + 1);
            if (!arrayRandomNumber.includes(number)) {
                arrayRandomNumber.push(number);
                iEasy++
            }
        } while (iEasy < 16)
        console.log(arrayRandomNumber)

    } else if (level === "2") {
        let iMedium = 0;
        do {
            number = parseInt(Math.floor(Math.random() * 81) + 1);
            if (!arrayRandomNumber.includes(number)) {
                arrayRandomNumber.push(number);
                iMedium++
            }
        } while (iMedium < 16)
        console.log(arrayRandomNumber)

    } else {
        let iHard = 0;
        do {
            number = parseInt(Math.floor(Math.random() * 49) + 1);
            if (!arrayRandomNumber.includes(number)) {
                arrayRandomNumber.push(number);
                iHard++
            }
        } while (iHard < 16)
        console.log(arrayRandomNumber)

    }
    return arrayRandomNumber
}


     
// var incrementor = document.getElementById('incrementor');
// incrementor.addEventListener('click', plusOne);

// function plusOne() {
//   const squareElement = document.createElement("div"); // obj
//   squareElement.addEventListener("click", function(){
//     let score = 0;
//     let count = document.getElementById('score');
//     score+=
//     count.textContent = score.toString();
//     return score

//   })
// }
// plusOne()

// console.log(plusOne())





    

    
