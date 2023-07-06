

export const winPlayer = ( pointsPlayers ) => {

    const [pointsMin, computerPoints] = pointsPlayers;
    let result;

        if (computerPoints === pointsMin) {
            result = 'Empate';
        } else if (pointsMin > 21) {
            result = 'Computadora Gana';
        } else if (computerPoints > 21) {
            result = 'Jugador Gana';
        } else {
            result = 'Computadora Gana';
        }

        return result
};
