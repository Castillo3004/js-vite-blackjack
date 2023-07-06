import { orderCard, winPlayer, acumulatePoints, createCard } from "./";


export const turnComputer = async(pointsPlayers, pointsMin, deck, divCardsPlayers) => {
    
    const sleep = (ms) =>{
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    let computerPoints = 0;
    let count = 0;

    do {
        const card = orderCard( deck );

        computerPoints = acumulatePoints(card, pointsPlayers.length - 1, pointsPlayers, pointsMin );
        createCard(card, pointsPlayers.length - 1, divCardsPlayers);
        await sleep(150);

        count++;


    } while ( (computerPoints < pointsPlayers[0]) && (pointsPlayers[0] <= 21) || (count < 2));

    let result =  winPlayer(pointsPlayers);
    alert( result );


};