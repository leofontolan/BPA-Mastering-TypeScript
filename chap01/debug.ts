var myBoolean: boolean = true; 
var myNumber: number = 1234; 
var myStringArray: string[] =  ['first', 'second', 'third']; 

 

myBoolean = myNumber === 456; 
myStringArray = [myNumber.toString(), "56789"]; 
myNumber = myStringArray.length; 

 

console.log(`myBoolean = ${myBoolean}`); 
console.log(`myStringArray = ${myStringArray}`); 
console.log(`myNumber = ${myNumber}`);