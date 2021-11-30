let numero = Number(prompt("Ingrese un numero")) 
let dato = document.querySelector("#division")
if(numero%3 == 0) {
    dato.innerHTML = "Fizz"
}
if(numero%5 == 0) {
    dato.innerHTML = "Buzz"
}
if (numero%5 == 0 && numero%3 == 0) {
    dato.innerHTML = "FizzBuzz"
}


