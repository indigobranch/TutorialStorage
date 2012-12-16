var sum = 4 + 5;  // 9
var difference = 4 - 5; // -1

// optimized
var sum2 = 4 + 5,
    difference = 4 - 5, // -1
    product = 4 * 5, // 20
    quotient = 4 / 5;  // .8

// multi-operator
var foo = 4 + 5 * 6 - 8; // 26:  Note left to right

// test integer 
var foo2 = 4 / 5;

// string concat
var foo3 = "Hello, " + "World";  //Hello, World

// Mixing variable types
var foo4 = 4 + 5 + "7";  // 97

var foo5 = "7" + 6 + 5; // 765

// string to int
var foo6 = parseInt("32T34", 10);
var foo7 = parseInt("A"); // NaN
var foo8 = parseInt("3.14") // 3

alert(foo8);

