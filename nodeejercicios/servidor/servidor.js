/*
    TDOS LOS PARAMETROS VIENEN DE INICIAR.JS
el módulo http se encarga de convertir lo que pidamos a lenguage web
el módulo url se encarga de registrar la url y permitirme un comportamiento personalizado, pirmitiendo
ir a diferentes paginas, para esto creo otro script llamado enrutador.js
el cual detecta la url y ejecuta una acción, segun lo programado en ella.
-esto se encarla http- -esto se encarga url-
http://localhost:8081     /pagina2

*/
const servidor = require('http');
const url = require('url');
const fs = require('fs'); //para podder llevar un registro historico de los movimientos efectuados
/* esta es la forma iniciar para un createServer sencillo
    function arrancaServidor(requiere , respuesta){
        console.log('Servidor activado');
        respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
        respuesta.end('<h1 style="color:blue">Hola Mundo desde EJERCICIOS</h1>');
    }

    servidor.createServer(arrancaServidor).listen(8081);
*/

//en este caso lo convertimos en un módulo para ser usado en otros scripts
//para esto lo encerramos en otra funcion que en este caso llamamos iniciar
//enrutar viene de enrutador.js y debemos colocarlo para que lo mande a inicio,js
//manejador viene de inicio.js
function iniciar(enrutar,manejador){
    function arrancaServidor(requiere , respuesta){
//con parse se analiza lo que pasamos antes de hacer algo
//con pathname detectamos la url
//capturamos lo que viene por require.url y lo pasamos a var ruta en enrutador,js
        var ruta = url.parse(requiere.url).pathname;

        console.log('Servidor activado');
//llamamos al metodo, y le pasamos lo que viene del manejador y la ruta, y debo colocar el manejador en iniciar
//yo quiero que se muestre la pagina que estoy llamando por url, por lo que enrutar(manejador,ruta) lo metemos
//en una variable para qe se muestre en respuesta.end
//para prevenir que se ejecuten códigos bloqueantes pido directaamente la respuesta desde peticiones.js
//debo colocar el parametro en el enrutador
        var contenido = enrutar(manejador,ruta,respuesta);

        //voy a crae un flujo de datos createWriteStream en un archivo llamado xxxx, y le pongo una
        //bandera (flags) : a para que sea en modo apent en modo incluir, de lo contrario se sobreescribe
        var registro = fs.createWriteStream('registro.txt', {'flags':'a'})
        //escribo algo dentro de registro con '\n' doy el salto de linea
        registro.write(ruta + '\n');
        //al ejecutar en la url se genera el archivo registro.txt en nuestro web server

        //la desactivamos ya que la pediremos en cada peticiones.js {
       // respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
        /*no quiero que simpre se muestre 
            respuesta.end('<h1 style="color:red">Hola Mundo desde EJERCICIOS</h1>');
            por lo que sistituyo por var contenido
        */
       // respuesta.end(contenido);}
    }

    servidor.createServer(arrancaServidor).listen(8081);
}

//con exports la hacemos pública para cualquier script, ver exportA yB
exports.iniciar = iniciar;