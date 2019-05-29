'use strict'

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()

pub.
    on('myevent', function(message){
        console.log(message)
    })

//la primera vez que se ejecute myevent reciba un mensaje
    .once('myevent' , function(message){
        console.log('Se emite la primera vez: ' + message)
    })

//ejecuta myevent y refleja soy un emisor de eventos 
    pub.emit('myevent' , 'Soy un emisor de enventos')
    pub.emit('myevent', 'Volviendo a emitir')

//puedo remover todos los eventos asociados a myevent
pub.removeAllListeners('myevent')    
//todo los eventos de myevent posteriores no se ejecutarán por el remove, a menos que lo elimine, reposisione o comente
pub.emit('Soy el tercer evento')