const argv = require('yargs')
                        .option(
                            'b', {
                                alias: 'base',
                                type:'number',
                                demandOption: true,
                                describe: 'Es la base de la tabla de multiplicar.'
                            }
                        ).option(
                            'l', {
                                alias: 'listar',
                                type:'boolean',
                                default: false,
                                describe: 'Muestra la tabla en consola.'
                            }
                        ).option(
                            'h', {
                                alias: 'hasta',
                                type: 'number',
                                demandOption: true,
                                describe: 'Determina la cantidad del multiplando.'
                            }
                        )
                        .check( (argv, options) => {
                            if( isNaN( argv.b ) ){
                                console.log( argv );
                                throw 'La base tiene que ser un Número';
                            }
                            return true;
                        } )
                        .argv; 

module.exports = argv;