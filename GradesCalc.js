const prompt = require('prompt-sync')();

for(let i=0; i<3;i++){

let name = prompt("Enter your name: ")
let mark1 = parseFloat(prompt("Enter the first mark: "))
let mark2 = parseFloat(prompt("Enter the second mark: "))
let mark3 = parseFloat(prompt("Enter the third mark: "))

let sum = mark1 + mark2 + mark3;
let average = sum/3;
let status;

if(average < 50){
    status = "You failed"
}
else if(average >= 50 && average < 75){
    status = "You passed"
}
else if(average >= 75 && average < 100){
    status = "You passed with a distinction"
}
else{
    status = "recheck your inputs"
}  

console.log(`Here are your results ${name}, your status is: ${status} \n`)
}