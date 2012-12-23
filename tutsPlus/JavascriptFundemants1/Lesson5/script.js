var globalVar = "This is a global variable.";

var globalFunction = function (paramOne) {
    var localVar = "local variable.";

    var localFunction = function () {
        var localVar = "hello, world!";
        var subLocalVar = "SubValue";
        alert(subLocalVar);
    };

    localFunction();
    alert(localVar);
    // alert(superLocalVar);  Console has only one error at at time
};

// alert(superLocalVar);
globalFunction(2);