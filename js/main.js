"use strict"

// UTILIY FUNCTIONS
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//ARRAY
const chosenNumbers = [];
const bombContainer = [];

//VARIBLE SENTINEL

//MAIN JS
const boardContainer = document.querySelector(".boardContainer")
function createGame(boardElement, totCell){ //funzione che crea la griglia di gioco
    boardElement.innerHTML = "";
    
    let bomb = 1; 
    while(bomb < 16){ //ciclo while che genera 16 numeri casuali e li trasferisce nell'array bombContainer
        let bombCell = getRndInteger(1, 100); 
        bombContainer.push(`${bombCell}`);
        bomb++
       
    } 
    console.log(`Queste sono le bombe: ${bombContainer}`);  //DEBUG

    for (let i = 1; i <= 100; i++){ //ciclo for che va da 1 a 100 
        const boardCell = document.boardCell = document.createElement("div"); //crea l'elemento div
        boardCell.innerHTML = i; // inserisce un valore in ogniuno dei div
        boardCell.classList.add("boardNumber"); // assegna ai div la classe .boardNumber

        

        boardCell.addEventListener("click", function onClick(){ //aggiunge un event listener a tutti gli elementi boardCell
            this.classList.add("selected"); //dà agli elemtni delezionati con un click la classe .selected
            chosenNumbers.push(`${i}`); //inserisce i numeri scelti nell'array chosenNumbers
            console.log(`HAI SELEZIONATO L'ELEMENTO:  ${i}`);
            console.log(`Questi sono i numeri scelti : ${chosenNumbers}`); //DEBUG
            
            if (`${i} == ${chosenNumbers}`){ // ciclo if che fa toglie l'event listener dall'elemento una volta che viene attivato per la prima volta 
                this.removeEventListener("click", onClick); //rimuove l'event listener
            }
        });
        
        boardContainer.append(boardCell); //aggiunge gli elementi nell'html

    }
     
}

   
document.getElementById(`play`).addEventListener(`click`, function startGame(){
    const boardContainer = document.querySelector(`.boardContainer`); 
    const totCell = 100; //indica il numero di celle da creare
    createGame(boardContainer, totCell); //richiama la funzione che crea la griglia di gioco
})

