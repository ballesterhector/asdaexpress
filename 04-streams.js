/*
    son chorros de información que se transmiten en pedazos (Chunks)
    ejmp. la barra de estado al bajar un video, baja por pedazos
    3 tipos lectura / Escritura / Duplex(escritura y lectura al mismo tiempo)
    son instancias de EventEmitter
    Acceso asincrono
    Es raro crear streams directamente, pero muchos recursos nos ofrecen esta interfaz
    detras de muchos mecanismos de Node.js
        stdin/stdout
        request de HTTP
        Sockets
        Manipulación de ficheros/imágenes

*/
'use strict'
    var fs = require('fs'),
    //crear un chorro de información de lectura, necesita un archivo
    //leo archivo
        readStream = fs.createReadStream('assets/nombres.txt'),
    //escribo archivo    
        writeStream = fs.createWriteStream('assets/nombres_copia.text')

    //con pipe leo el readStream y hago la copia del writeStream, es el desencadenante de la acción
    readStream.pipe(writeStream)
    
    readStream
        .on('data' , function(Chunks){
            console.log(
                'He leido',
                Chunks.length,
                'Caracteres'
            )
        })

        .on('end' , function(){
            console.log('Terminamos la lectura y copia de la data')
        })