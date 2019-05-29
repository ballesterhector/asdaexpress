const PI=3.14;

function sumar(x1,x2)
{
  return x1+x2;
}
 
function restar(x1,x2)
{
  return x1-x2;
}
 
function dividir(x1,x2)
{
  if (x2==0)
  {
    mostrarErrorDivision();
  }
  else
  {
    return x1/x2;
  }
}
 
function mostrarErrorDivision() {
  console.log('No se puede dividir por cero');
}
 
exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI;

/*
    En este archivo podemos definir variables, funciones, objetos etc. y los que necesitamos que sean 
    accedidos desde otro archivo los exportamos agregándolos al objeto exports:

    exports.sumar=sumar;
    exports.restar=restar;
    exports.dividir=dividir;
    exports.PI=PI; 
    Aquello que no necesitemos llamarlo desde otra archivo como en este ejemplo pasa con la
    función mostrarErrorDivision simplemente no la agregamos al objeto exports.
*/