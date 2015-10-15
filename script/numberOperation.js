//Method Addition of 2 numbers
var addTwoNumber = function(number1,number2) {
    return number1 + number2;
};
//Method Find greatest number
var findGreatestNumber = function(number1,number2) {
    return ((number1 > number2)? number1 : number2);
};
var result= addTwoNumber(5,7);
var greatestNumber= findGreatestNumber(5,7);
console.log("Result: ",result);
console.log("Greatest Number: ",greatestNumber);