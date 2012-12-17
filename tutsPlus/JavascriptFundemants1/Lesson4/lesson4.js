// Anonmymous function
var doSomething2 = function(paramOne, paramTwo, fn) {
    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return fn(paramOne, paramTwo);
}

function sum(x, y) {
    return x + y;
}

function product(x, y) {
    return x * y;
}

var foo = 2 + 3;  // 5
foo = foo = 1; // 6
foo = foo * 8; // 48

// replace foo
foo = doSomething2(2, 2, sum); 

// set two
var bar = 3 + 3; // 6
bar = bar = 1; // 7
bar = bar * 8 // 56
// replace bar
bar = doSomething2(3, 2, product); 

// anonymous function 2
bar = doSomething2(3, 2, function (x, y) {
    return x * y;
});


alert(foo);
alert(bar);

// Camel Case for functions
function doSomething(paramOne, paramTwo) {
    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return paramOne * paramTwo;
}


