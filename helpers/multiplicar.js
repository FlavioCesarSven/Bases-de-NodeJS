const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const colors = require('colors');


const crearArchivoTabla = ( base = 8, listar = true, hasta = 5) => {
    
    try {

    let salida = "";
    let consola = "";

    return new Promise(( res , rejec ) => { 
        for (let i = 1; i <= hasta ; i++) {
            salida +=  `${base} x ${i} = ${ i * base }\n`;
            consola +=  `${base} ${colors.yellow('x')} ${i} = ${ i * base }\n`;
        }

        if ( listar ){
            
            console.log( "=======================" );
            console.log( `===== TABLA DEL ${base} =====` );
            console.log( "=======================" );

            console.log( colors.blue(consola) );
        } 
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
        
        res( `tabla-${ base }.txt` );

    });
} catch (error) {
        console.log( error );
        throw error;
    }

}


module.exports = {
    crearArchivoTabla
}


