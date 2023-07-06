
/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const orderCard = ( deck ) => {
    
    if ( !deck || deck.length === 0) throw Error("No hay cartas en el deck");

    return deck.pop();
};
