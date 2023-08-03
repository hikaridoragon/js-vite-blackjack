import _ from 'underscore';
/**
 * Esta funcion crea un nuevo deck
 * @param   {Array<String>} deck un arreglo de string 
 * @returns {String} retorna un nuevo deck de cartas
 */
export const pedirCarta = ( deck ) => {


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}