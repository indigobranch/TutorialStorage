var num = 8;

var simple = num + "";
var optimized = num.toString();

var person = {};
var myString = new String("Dumb, but functional");

person.firstName = "My First Name";
person.lastName = "My Last Name";

person.getFullName = function() {
   return person.firstName + " " + person.lastName;
};

alert(person.getFullName());