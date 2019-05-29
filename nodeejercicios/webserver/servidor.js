const servidor = require('http');
const url = require('url');
const fs = require('fs'); //para podder llevar un registro historico de los movimientos efectuados
function iniciar(enrutar,manejador){
    function arrancaServidor(requiere , respuesta){
        var ruta = url.parse(requiere.url).pathname;

        //si vemos regisro.txt los archivos sin url muestran una /
        //aqui siempre voy a buscar el scripts index.php
        if (ruta == '/') {
            ruta = 'index.html';
        }

        console.log('Servidor activado');
        //para leer el contenido de  index   
        var index = fs.readFileSync('www/'+ ruta);//obligo a que escriban la url completa con su extenxion

        //voy a crae un flujo de datos createWriteStream en un archivo llamado xxxx, y le pongo una
        //bandera (flags) : a para que sea en modo apent en modo incluir, de lo contrario se sobreescribe
        var registro = fs.createWriteStream('registro.txt', {'flags':'a'})
        //escribo algo dentro de registro con '\n' doy el salto de linea
        registro.write(ruta + '\n');
        //al ejecutar en la url se genera el archivo registro.txt en nuestro web server

        respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
        respuesta.end(index);
    }

    servidor.createServer(arrancaServidor).listen(8081);
}

//con exports la hacemos pública para cualquier script, ver exportA yB
exports.iniciar = iniciar;