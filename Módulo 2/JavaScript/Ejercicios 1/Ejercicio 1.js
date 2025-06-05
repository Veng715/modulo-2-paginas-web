let peso = prompt("ingresa tu peso en kilogramos: ");
let altura = prompt("ingresa tu alturaen metros: ");

peso = parseFloat(peso);
altura = parseFloat(altura);

let imc = peso / (altura * altura);
let categoria;

if (imc < 18.5) {
    categoría = "bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "peso normal";
} else if (imc >= 24.9 && imc < 29.9) {
    categoria = "sobrepeso";
} else {
    categoria = "obesidad";
}

console.log("tu IMC es " + imc.toFixed(2));
console.log("categoría: " + categoría);