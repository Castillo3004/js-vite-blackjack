import _ from "underscore";

import { createDeck, orderCard, turnComputer, createCard, acumulatePoints } from "./usecases"

/*
 *2C = Two of Clubs
 *2D = Two of Diamonds
 *2H = Two of Hearts
 *2S = Two of Spades
 */

const myModule = (() => {
    "use strict";

    // setTimeout(() => {

    //     const namePlayer = prompt('Ingresa tu Nombre:')
    //     const changeName = document.querySelector('.namePlayer');
    //     changeName.innerText = namePlayer;
    // }, 500);


    let deck = [];
    const types = ["C", "D", "H", "S"];
    const especials = ["A", "J", "Q", "K"];
    let pointsPlayers = [];

    // Referencias HTML
    const btnOrder = document.querySelector("#btnOrder"),
        btnStop = document.querySelector("#btnStop"),
        btnNew = document.querySelector("#btnNew");

    const divCardsPlayers = document.querySelectorAll(".divCards"),
        changePoints = document.querySelectorAll("small");

    
    deck = createDeck(types, especials);

    // This Function initialize Game
    const initializeGame = (numPlayers = 2) => {
        
        
        deck = createDeck(types, especials);
        pointsPlayers = [];

        for (let i = 0; i < numPlayers; i++) {
            pointsPlayers.push(0);
        }

        changePoints.forEach( elem => elem.innerText = 0);
        divCardsPlayers.forEach((elem) => (elem.innerHTML = ""));

        btnOrder.disabled = false;
        btnStop.disabled = false;
    };    
   
    

    // Eventos
    btnOrder.addEventListener("click", () => {

        const card = orderCard( deck );
        const playerPoints = acumulatePoints(card, 0, pointsPlayers, changePoints);

        createCard(card, 0, divCardsPlayers);

        if (playerPoints > 21) {
            btnOrder.disabled = true;
            btnStop.disabled = true;
            turnComputer( pointsPlayers, changePoints, deck, divCardsPlayers);
        } else if (playerPoints === 21) {
            btnOrder.disabled = true;
            btnStop.disabled = true;
            turnComputer( pointsPlayers, changePoints, deck, divCardsPlayers);
        }
    });


    btnStop.addEventListener("click", () => {
        btnOrder.disabled = true;
        btnStop.disabled = true;
        turnComputer( pointsPlayers, changePoints, deck, divCardsPlayers);
    });

    btnNew.addEventListener("click", () => {
        initializeGame();
    });

    return {
        newGame: initializeGame,
    };
})();
