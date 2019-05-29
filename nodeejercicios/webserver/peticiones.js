//se cargan los linck a las diferentes paginas, debo activarla en inicio.js
/*
    cada funcion manda una respuesta individual, por lo que se evita 
    bloquear a los demas usuarios si algun scrits tiene un codigo bloqueante
*/
function inicio(respuesta){
    console.log('Has entrado a la página de inicio');
    respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
    respuesta.end('<h1 style="color:red">Respuesta desde Inicio</h1>');
}

function pagina1(respuesta){
    console.log('Has entrado a la página1');
    respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
    respuesta.end('<h1 style="color:red">Respuesta desde la página1</h1>');
}

function pagina2(respuesta){
    console.log('Has entrado a la página2');
    respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
    respuesta.end('<h1 style="color:red">Respuesta desde la página2</h1>');
}

function favicon(respuesta){
    console.log('se ha pedido favicon.ico');
    respuesta.writeHead(200, {'Content-Type' : 'text/html'} );
    respuesta.end('<h1 style="color:red">Respuesta desde favicon.ico</h1>');
}

//debo exportar al enrutador para que tome la url
exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;