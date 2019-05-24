//codigo de ejemplo para preguntas de nombre y edad en la consola
'use strict'
//stdin y stdout permiten la interación del usuario con la consola
var stdin = process.stdin,
    stdout = process.stdout,
    //declaro objeto de  js
    person = {
        name : null,
        age : 0     //edad
    }

function saveAge(age){
    person.age = age

    if (person.age >= 18) {
        stdout.write(person.name + ' eres mayor de edad, tienes ' + person.age + ' años\n')
    }else{
        stdout.write(person.name + ' eres menor de edad, tienes ' + person.age + ' años\n')
    }

    process.exit()
}    

function saveName(name){
    person.name = name

    //vuelvo a preguntar
    var question = 'Hola ' + person.name + ' cuantos años tienes? '

    quiz(question , saveAge)        
}

//quiz recibe una pregunta y ejecuta una funcion
function quiz(question , callback){
    //.resume permite leer lo que se escribe en la terminal
    stdin.resume()
    //stdout escribe la pregunta de question
    stdout.write(question + ': ')
    //stdin ejecuta solo una vez(once)
    //res = respuesta, espera un res que es el callback savename 
    stdin.once('data' , function(res){
        //recibe saveName por el callback de la función, lo canvierte en texto toString y 
        //quita las " " a la cadena de texto
        callback(res.toString().trim())
    })
}

//todo lo que entre a la terminar se convierte a utf8
stdin.setEncoding('utf8')
//quiz alimenta a stdin.once en res pasa save name
quiz('Como te llamas? ', saveName)
