//herencia'
'use strict'

var EvenEmiter = require('events').EvenEmiter,
    //para tomar la herencia del methodo util
    inherits = require('util').inherits

var Clock = function(){
    var self = this
//setInterval se ejecuta cada segundo
    setInterval(function(){
        //console.log('Hola')
        self.emit('tictac')
    },1000)
}

//Clock hereda las caracteristicas del emisor de enventos EvenEmiter
util.inherits(Clock, EvenEmiter)

//extender prototypo
Clock.prototype.theTime = function(){
    var date = new Date()
        day = date.getDay(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = day + ' / ' + hrs + ':' + min + ':' + sec

    console.log(msg)    
}

var cucu = new Clock()
    cucu.on('tictac', function(){
        cucu.theTime()
    })