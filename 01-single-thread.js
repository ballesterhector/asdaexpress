//Single Thread: hace referencia a un solo hilo que maneja node = al modulo de process
'use strict'

//creamos una funcion para ver parametros de Single Thread
/*
    process.pid : Indica el id que se genera cada vez que se ejecuta la funcion, con esto podemos manipular datos
    process.title : indica desde donde ejecutamos la funcion en powershell, morcilla, google
    process.execPath : ruta desde donde se ejecuta node
    process.cwd() : ruta donde se encuentra el scritps
    process.version : version instalada de node
    process.versions : 
    process.platform : Sistema operativo = win32
    process.arch : version sistema operativo x64
    process.uptime() : tiempo que tardó la ejecución
    process.argv : arreglo que indica la ruta del ejecutable de node , ruta del scripts que se ejecuta
        es igual a escribir console.log(
                                process.argv[0],
                                process.argv[1]
                            )
        

*/
function param(){
    console.log('---------------------------------------------------------')
    console.log(' EL PROCESO DE NODE.JS    ')
    console.log('Id del proceso....................' + process.pid)
    console.log('Titulo............................' + process.title)
    console.log('Directorio de Node................' + process.execPath)
    console.log('Directorio actual.................' + process.cwd())
    console.log('Version de Node...................' + process.version)
    console.log('Versiones Dependencias............' + process.versions)
    console.log('Plataforma (S.O.).................' + process.platform)
    console.log('Arquitectura (S.O.)...............' + process.arch)
    console.log('Tiempo activo de Node.............' + process.uptime())
    console.log('Argumentos del proceso............' + process.argv)
    console.log('----------------------------------------------------------')
}

//la ejecutamos
param()