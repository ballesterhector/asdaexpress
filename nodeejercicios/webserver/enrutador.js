/*
    enrutar espera la ruta que sera capturada en servidor.js var ruta = url.parse(require.url).pathname;
    en la funcion enrutar debo incluir al manejador para que tome las url
    como el servidor.js tiene tres parametros, debo colocarlos igual en enrutar
*/
function enrutar(manejador,ruta,respuesta){
    console.log('Voy a rutear algo para ' + ruta);

    /*para evitar que al ejecutar me de un error por una funcion no prgramada
        como por ejemplo favicon.ico
        creo una condicional if
    */
    if (typeof manejador[ruta] === 'function') {
         //capturo la url enviada por el manejador + el parametro ruta, pero debo enviarla al servidor
        manejador[ruta](respuesta);
    }else{
        console.log('no existe una función para esa ruta ' + ruta );
    }
}
//se hace publico el enrutar para otros scripts, en este caso lo paso a inicio.js
//ya que en este estan todas los modulos a usar.
exports.enrutar = enrutar;