const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar elemento por hacer',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como comletado o como pendiante la tarea'
        }
    })
    .command('borrar', 'Borrar Elemoento por hacer',{
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}