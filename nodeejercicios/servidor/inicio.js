//aqui entramos a la carpeta donde esta el servidor y con require traemos su contenido
var servidor = require('./servidor');
//aqui requerimos el enrutador.js que nos da la url
var enrutador= require('./enrutador');
//aqui requerimos las peticiones a las diferentes paginas
var peticiones = require('./peticiones')

//creamos un manejador para poder elegie que peticiones,js voy a ejecutar
//manejador = {} significa que manejador = a una lista de elementos
var manejador = {}
//si manejador no tiene parámetros en  raiz url http://localhost:8081/ "esta es la raiz o nombre de la pagina"
//busca en peticiones la funcion inicio
manejador['/'] = peticiones.inicio;

//si manejador tiene pagina1 en  raiz url http://localhost:8081/pagina1 "esta es la raiz o nombre de la pagina"
//busca en peticiones la funcion pagina1
manejador['/pagina1'] = peticiones.pagina1;

//si manejador tiene pagina2 en  raiz url http://localhost:8081/pagina2 "esta es la raiz o nombre de la pagina"
//busca en peticiones la funcion pagina2
manejador['/pagina2'] = peticiones.pagina2;

//busca en peticiones la funcion favicon
manejador['/favicon.ico'] = peticiones.favicon;

//incluimos la funcion iniciar que encierra el servidor y pasamos al servidor.js los parametro enrutar y manejador
servidor.iniciar(enrutador.enrutar , manejador);
/*dentro de la funcion del servidor, como parametro le pasamos el c
    ontenido de enrutar que esta en el script enrutador, pero este parametro
    se valida desde el servidor por lo que debemos colocarlo como parametro de iniciar
*/