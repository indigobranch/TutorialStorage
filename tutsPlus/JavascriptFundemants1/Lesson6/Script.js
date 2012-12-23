var obj = "This is a string object",
    length = obj.length; // 24

var index = obj.indexOf("is"); // 2
var index2 = obj.indexOf("is", index + 1); // 5
var index3 = obj.indexOf("this"); // -1
var index4 = obj.lastIndexOf("is");  // 5 - This is not backwards, it is from the front.
var index5 = obj.lastIndexOf("is", index4 - 1); // 2

var index6 = obj.indexOf("st");
var substr = obj.substr(index6, 6);

var subsubstring = obj.substring(0, 5); // This

var newString = obj.replace("object", "value");
var newString = obj.replace("Object", "value"); // This is = obj

var upperCase = obj.toUpperCase(),
    lowerCase = obj.toLowerCase();

alert(upperCase);
alert(lowerCase);
