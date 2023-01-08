//take a function of two intergers
//add the two intergers in the function
//add the all numbers between two integers
//maybe use a count to show numbers in between
function sumAll(num1, num2){
    let newNum =  0;
    for(let i = num1; i <= num2 ; i++) {
       newNum += i;
       console.log(newNum); 
          
    };
return newNum;
}
// Do not edit below this line
module.exports = sumAll;
