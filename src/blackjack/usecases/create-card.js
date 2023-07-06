

export const createCard = (card, turn, divCardsPlayers) => {
    
    const imgCard = document.createElement("img");
    imgCard.src = `./assets/cartas/${card}.png`;
    imgCard.classList.add("card");
    divCardsPlayers[turn].append(imgCard);

    return imgCard;
};