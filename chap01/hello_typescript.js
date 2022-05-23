"use strict";
var version = 'es6';
console.log(`Hello, ${version} TypeScript!`);
let myString = `this is a string`;
console.log(myString);
//Retorna um erro, se tentarmos atribuir um boolean em um tipo string
//myString =  true;
let inferredString = 'this is a string';
console.log(typeof (inferredString));
//Duck Type
var nameIdObject = { name: "myName", id: 1, print() { } }; //Duck Type
nameIdObject = { id: 2, name: "anotherName", print() { } }; // Não gera erro, pois o tipo é o mesmo
// nameIdObject = { id: 3, name: "thirdName" }; //Gera erro, pois sem método print(), o tipo não é o mesmo
//Funções com retorno e com parâmetros tipados
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log("calculate() = " + calculate(2, 3, 1));
function printString(a) {
    console.log(a);
}
printString("Hello World");
//# sourceMappingURL=hello_typescript.js.map