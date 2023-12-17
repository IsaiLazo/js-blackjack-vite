import _ from 'underscore';

export const a = 'Hola mundo';

/**
 * JSDoc nos da una manera facil de poder prototipar nuestras variables
 * 
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tipoEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tipoEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tipoEspeciales || tipoEspeciales.length === 0 ) 
        throw new Error('tipoEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

export default crearDeck;

//En la parte final del fichero se puede poner la palabra reservada export default
//junto con la importacion por defencto que deseamos enviar:
//export default crearDeck;
//esto es util cuando tenemos varias exportaciones en un mismo modulo pero queremos enviar una por defecto