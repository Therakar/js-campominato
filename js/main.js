"use strict"

const boardContainer = document.querySelector(".boardContainer");



function createGame(boardElement, nCell){
    boardElement.innerHTML = "";
    for (let i = 1; i <= 100; i++){ //ciclo for che va da 1 a 100 
    const boardCell = document.boardCell = document.createElement("div"); //crea l'elemento div
    boardCell.innerHTML = i; // inserisce un valore in ogniuno dei div
    boardCell.classList.add("boardNumber"); // assegna ai div la classe .boardNumber
    boardCell.addEventListener("click", function(){ //aggiunge un event listener a tutti gli elementi boardCell
        this.classList.add("selected");
        console.log(`HAI SELEZIONATO L'ELEMENTO:  ${i}`);
    });
    boardContainer.append(boardCell); //aggiunge gli elementi nell'html
}}

document.getElementById(`play`).addEventListener(`click`, function(){
    const boardContainer = document.querySelector(`.boardContainer`);
    const totCell = 100;
    createGame(boardContainer, totCell);
})
