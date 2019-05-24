'use strict'

/*------------------------------PRIMERA FORMA--------------------------------- 
var http = require('http')
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hola con la primera forma de servidor\n')

}).listen(3000,'localhost')

console.log('Servidor ejecutandose en localhost forma 1')
-------------------------------------------FIN FORMA 1 --------------------------*/

/*------------------------------SEGUNDA FORMA--------------------------------- 
var http = require('http')

function webServer(req, res){
    res
       // .writeHead(200, {'Content-Type': 'text/plain'})
       // .end('Hola con la segunda forma de servidor con txt plano\n')
        
        .writeHead(200, {'Content-Type': 'text/html'})
        .end('<h1 style="color:blue">Hola con la segunda forma de servidor con text html\n</h1>')
}

http.createServer(webServer).listen(3000,'127.0.0.1')

console.log('Servidor ejecutandose en localhost forma 2')
-------------------------------------------FIN FORMA 2 --------------------------*/

/*---------------------- TERCERA FORMA---------------------------*/
const http = require('http');

const hostname = '127.0.0.1';
//por cpnvención se debe usar el puerto 3000
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //aqui responde con un texto plano
  //res.setHeader('Content-Type', 'text/plain');
  //para que acepte etiquetas HTML text/html
  res.setHeader('Content-Type', 'text/html')
  //end es la salida para paginas web
  res.end('<h1 style="color:blue">Hola Mundo desde 02-servidorHttp.js tercera forma\n</h1>')
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando tercera forma en http://${hostname}:${port}/`);
});

/*---------------------------FIN TERCERA-----------------------------------------*/



/*
    debo ejecutarlo por consola antes de la web ya que de no hacerlo no cargaria.
    En la consola queda el proceso en suspenso, para salir Ctrl + c, pero ya no puedo verlo en web
    req = request  : petición
    res = response  : respuesta

    antes, Por cada modificación al scripts debo correr en consola para evitarlo instale nodemon
    el cual reinicia automaticamente el servidor por cada modificacionecha, una vez instalado
    debo ejecutar nodemon + el scripts donde esta el create server
*/