//first program

/*
console.log("Hello world!"); 
*/

//second program with one function

/*
var message = function(text) {
    console.log("[Message]:", text);
}
message("Hello everyone!");
message("SIT323");

*/

//third program with two functions

/*
var adder = function(value1, value2) {
    var sum = value1 + value2;
    return sum;
}
 var message = function(text) {
    console.log("[Message]: ", text);
 }

 message("Hello everyone!");
 message("The sum is: " + adder(4,5));

 */

 
 //fourth program to check the non-blocking functionality of NODE JS!
 
 function async() {
    setTimeout(function(){message("I am coming out later although I have been called before the next one")}, 2000);
}

var adder = function(value1, value2) {
    var sum = value1 + value2;
    return sum;
}

var message = function(text) {
    console.log("[Message]: ", text);
 }

 message("The sume is " + adder(7,8));
 async();
 message("This is going to come out before the previous one because node JS has non-blocking functionality");


