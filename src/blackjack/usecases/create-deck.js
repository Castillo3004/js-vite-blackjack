import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} cardTypes Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especialsTypes Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>}  retorna un nuevo deck de cartas
 */


export const createDeck = ( cardTypes, especialsTypes ) => {

    if( !cardTypes || cardTypes.length <= 0 ) throw new Error('cardTypes es obligatorio como un arreglo de string');

    if( !especialsTypes || especialsTypes.length <= 0 ) throw new Error('especialTypes es obligatorio como un arreglo de string');

    let deck = [];

    for(let i = 2; i <= 10; i++){
        for (let type of cardTypes){
        
            deck.push( i + type);
        }
    }

    for(let type of cardTypes){
        for (let especial of especialsTypes ){
            deck.push( especial + type )
        }
    }

    return _.shuffle( deck ); 
}


