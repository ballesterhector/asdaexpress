//de 01-single-thread.js sacamos  console.log('Argumentos del proceso............' + process.argv)
// y le pasamos argumentos

'use strict'

function param(){
    //al n estar en el arreglo no necesita ,
    process.argv[2] = 'Aprendiendo for de Nodejs'
    process.argv[3] = 19
    process.argv[4] = null
    process.argv[5] = true

    console.log('---------------------------------------------------------')
    console.log('Argumentos del proceso............' + process.argv)
    console.log('----------------------------------------------------------')

    console.log(
        //por estar dentro del arreglo separamos con ,
        process.argv[0],
        process.argv[1]
    )

    //declaramos la variable key fuera del for porque en este caso si lo coloco adentro da error
    var key = 0    

    //mientras existan elementos en process.argv ejecuta el for
    for (key in process.argv) {
        console.log(process.argv[key])
    }

}

//la ejecutamos
param()
