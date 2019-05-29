const mat=require('./exportarA');

/* 
    El JavaScript que se ejecuta en un navegador web actualmente no puede hacer referencia a otro archivo, 
    en Node.js esto se hace llamando a la función require e indicando el path donde se encuentra en este 
    caso el archivo exportaA.js (no es necesario indicar la extensión)

    const mat=require('./exportarA');

    Luego la constante mat tiene acceso a todas las variables, funciones y objetos exportados.
    Llamamos luego a las funciones y accedemos a las variables mediante la constante mat:
*/

console.log('La suma de 2+2='+mat.sumar(2,2));
console.log('La resta de 4-1='+mat.restar(4,1));
console.log('La división de 6/3='+mat.dividir(6,3));
console.log('El valor de PI='+mat.PI);

/* 
    Tengamos en cuenta que solo podemos acceder del módulo a aquellos elementos exportados, si por 
    ejemplo tratamos de acceder a la función mostrarErrorDivision del módulo matematica.js:

    mat.mostrarErrorDivision();
    Tendremos como resultado un error en tiempo de ejecución ("undefined is not a function"):
    
*/