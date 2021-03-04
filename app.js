const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivoTabla( argv.b, argv.l, argv.h )
                        .then( res => console.log(  'Archivo Guardado Exitosamente', res ) )
                        .catch( err => console.log( err ) );

console.log( process.argv );
console.log( argv.b, argv.l , argv.h);



