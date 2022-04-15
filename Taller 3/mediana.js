const lista1 = [
    100,
    200,
    500,
    400000000,
    300,
  ];

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){
         return valorAcumulado + nuevoElemento;
        }
    );
     const promedioLista = sumaLista/lista.length;
     return promedioLista;
 }

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numero){
if (numero % 2 === 0 ){
    return true;
}
else{
    return false;
    }
}

let mediana;
if(esPar(lista1.length)){
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
}
else{
    mediana = lista1[mitadLista1];
}


function calcularMediana(lista){
    const mitadLista = parseInt(lista.length/2);
    let medianafuncion;
    if (esPar(lista.length)){
        const elemento1=lista[mitadLista-1];
        const elemento2=lista[mitadLista];
        const promedioelemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        medianafuncion = promedioelemento1y2;
        return medianafuncion;
    }
    else{
        medianafuncion=lista[mitadLista];
        return medianafuncion;
    }
}

console.log(calcularMediana([5,4,3,2]));
console.log(lista1.sort());
