import { cardValue } from "./";

export const acumulatePoints = (card, turn, pointsPlayers, changePoints) => {
    
    pointsPlayers[turn] += cardValue(card);

    changePoints[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
};