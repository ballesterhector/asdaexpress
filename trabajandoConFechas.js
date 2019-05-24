/*
    en este primer caso mandamos a escribir por consola hola desde node.js, cada segundo 
    la ejecución es cada mile segundo 1s = 1000mls

    en este caso no colocamos cuendo termina la ejecucion por lo que para pararla Ctrl + c, en la consola 
    se muestra ^C

*/
/*
setInterval(function(){
    console.log('hola desde node.js')
},1000)

*/
function myFunc(arg) {
    console.log(`arg was => ${arg}`);
  }
  
  setTimeout(myFunc, 1500, 'funky');

  console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');