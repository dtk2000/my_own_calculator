
import readline from "readline" ;

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

console.log("BMW calculator");
console.log("kya karega");
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");




const name = await askQuestion('Maqsad :  ');

if(name === '1'){
  console.log("Addition") 
  
}
if (name === '2'){
console.log("Subtraction");
}
if(name === '3'){
console.log("Multiplication");
}
if(name === '4'){
console.log("Division")
}

// Print the result

const num1 = await askQuestion('Enter your integer:  ');


const num2 = await askQuestion('Enter your other Integer:   ');



if(name === '1'){
  
  let result = num1 + num2 ;

var x = parseInt(num1); 
var y = parseInt(num2);
let sum = x + y ;
console.log("Result:  ",sum);

  
}
if (name === '2'){
  let result = num1 - num2 ;

var x = parseInt(num1); 
var y = parseInt(num2);
let sum = x - y ;
console.log("Result:  ",sum);
}
if(name === '3'){
  let result = num1 * num2 ;

var x = parseInt(num1); 
var y = parseInt(num2);
let sum = x * y ;
console.log("Result:  ",sum);
}
if(name === '4'){
  let result = num1 / num2 ;

var x = parseInt(num1); 
var y = parseInt(num2);
let sum = x / y ;
console.log("Result:  ",sum);
}

// Close the readline interface
rl.close();


