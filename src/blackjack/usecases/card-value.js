
/**
 * Obtener el valor de la carta
 * @param {String} card 
 * @returns {Number} Valor de la carta
 */
export const cardValue = ( card ) => {
    
    const value = card.substring(0, card.length - 1); // Primer parameto corta desde, y segundo parametro corta hasta

    return (value === 'A') ? 11  :
            (isNaN( value )) ? 10 : value * 1;
};