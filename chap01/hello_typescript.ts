var version = 'es6';

console.log(`Hello, ${version} TypeScript!`);

let myString: string = `this is a string`;
console.log(myString);

//Retorna um erro, se tentarmos atribuir um boolean em um tipo string
//myString =  true;

let inferredString = 'this is a string';
console.log(typeof(inferredString));

//Duck Type
var nameIdObject = { name: "myName", id: 1, print() { } }; //Duck Type
nameIdObject = { id: 2, name: "anotherName", print() { } }; // Não gera erro, pois o tipo é o mesmo
// nameIdObject = { id: 3, name: "thirdName" }; //Gera erro, pois sem método print(), o tipo não é o mesmo