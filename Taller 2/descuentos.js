//const precioOriginal = 120
//const descuento = 18;
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioconDescuento = (precio*(porcentajePrecioConDescuento)/100);
    return precioconDescuento;
}

function onClickButtonPriceDisscount(){
    const inputPrice = document.getElementById("price");
    const inputDisccount = document.getElementById("disscount");
    const price = inputPrice.value;
    const disccount = inputDisccount.value;
    const priceDiscount=calcularPrecioConDescuento(price,disccount);
    const resultP = document.getElementById("ResultP")
    resultP.innerText="El precio con descuento es: "+priceDiscount+"$"
}

//console.log({
//precioOriginal,
//descuento,
//porcentajePrecioConDescuento,
//precioconDescuento
//});