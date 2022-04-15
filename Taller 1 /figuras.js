// Código del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado*4;
} 
function areaCuadrado (lado){
    return lado**2;  
} 
perimetroCuadrado();
areaCuadrado();
console.groupEnd();

//Código del triángulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){
    const resultado=Number(lado1) + Number(lado2) + Number(base);
    return resultado;
} 
function areaTriangulo(altura,base){
    return (base*altura)/2;
}      
console.groupEnd(); 

//Código del círculo
console.group("Circulo");
const pi = Math.PI;
function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio)
   return diametro*pi;
}
function areaCirculo(radio){
    return (radio**2)*pi;
}
console.groupEnd();    

//Para interactuar con el HTML 
function calcularPerimetroCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
} 
function calcularAreaCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("ladoTriangulo");
    const input2 = document.getElementById("ladoTriangulo2");
    const input3 = document.getElementById("base");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("base");
    const input2 =document.getElementById("altura");
    const base = input1.value;
    const altura = input2.value;
    const area = areaTriangulo(altura,base);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    perimetro=perimetroCirculo(radio);
    alert(perimetro);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    diametro =diametroCirculo(radio)
    alert(diametro);
}


function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    area=areaCirculo(radio);
    alert(area);
}
