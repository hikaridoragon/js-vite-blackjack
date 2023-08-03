import _ from 'underscore';
import { pedirCarta, valorCarta, crearCartaHTML } from './';

// Turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos son necesarios.')
    if ( !HTMLElement ) throw new Error('Argumento puntosHTML es necesario.')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        //TODO: crear carta
        const imgCarta = crearCartaHTML( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}