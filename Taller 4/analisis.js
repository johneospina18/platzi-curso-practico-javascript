//Helpers

function esPar(numero){
    return (numero%2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){
         return valorAcumulado + nuevoElemento;
        }
    );
     const promedioLista = sumaLista/lista.length;
     return promedioLista;
 }


const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
function (SalaryA,SalaryB){
    return SalaryA-SalaryB;
}
);

//Calculadora de mediana 

//Mediana General
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if(esPar(lista.length)){
    const personaMitad1 = lista[mitad-1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
    return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
//Mediana top 10%

const spliceStart= (salariosColSorted.length*(90))/100;
const spliceCount= salariosColSorted.length-spliceStart;

const salarios1ColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarios1ColTop10);
const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log(
medianaGeneralCol,
medianaTop10Col,
);
