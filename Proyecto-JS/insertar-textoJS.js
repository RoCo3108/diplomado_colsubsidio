
function texto(){

    const testA = document.getElementById("texto-addidas")
    testA.innerHTML="Adidas es una de las marcas más reconocidas en el mercado deportivo, es la favorita por muchos atletas y produce además de calzado deportivo."

    const testn = document.getElementById("texto-nike")
    testn.innerHTML="empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de equipamiento deportivo: balones, calzado, ropa."

    const testc = document.getElementById("texto-converse")
    testc.innerHTML="Converse es una compañía estadounidense de ropa y calzado fundada durante la decada de 1900. Desde 2003 es subsidiaria de Nike"

    const testr = document.getElementById("texto-reebok")
    testr.innerHTML="Reebok es una empresa estadounidense de zapatillas, ropa, y accesorios deportivos,subsidiaria del grupo Authentic Brands Group."

    const testp = document.getElementById("texto-puma")
    testp.innerHTML="Puma SE es una empresa alemana fabricante de accesorios, ropa y calzado deportivo,cuya sede principal está en Herzogenaurach, Alemania."

    const testb = document.getElementById("texto-balenciaga")
    testb.innerHTML="Balenciaga es una casa de moda de lujo española fundada en 1917 por el diseñador Cristóbal Balenciaga en San Sebastián, España"

    const testNew = document.getElementById("texto-new-balance")
    testNew.innerHTML="Más conocida simplemente como New Balance (NB), es un fabricante estadounidense de piezas de arco con sede en Boston (Estados Unidos). La fundación data del 1906 con el nombre New Balance Arch Support Company"

    const testNike = document.getElementById("texto-nike2")
    testNike.innerHTML="empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de equipamiento deportivo: balones, calzado, ropa, equipo, accesorios y otros artículos deportivos"

    const testaddidas = document.getElementById("texto-addidas2")
    testaddidas.innerHTML="Adidas es una de las marcas más reconocidas en el mercado deportivo, es la favorita por muchos atletas y produce además de calzado deportivo, otros artículos tipo sport"
    
}

function tabla() {

var x = document.getElementById("mytable");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}

}

function carrusel(){

    var x = document.getElementById("carrusel2");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    
}

function calculadora(){

    var num1 = parseInt(prompt("Ingrese el primer numero"))
    var num2 = parseInt(prompt("Ingrese el segundo numero"))

    suma = num1+num2;
    resta = num1-num2
    alert("Suma: " + suma)
    alert("Multiplicacion: " + num1*num2)
    alert("Resta: "+ resta)
    alert("Division: " + num1/num2)

    }
    

