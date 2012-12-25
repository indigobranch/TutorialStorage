/*var num = 8;

var simple = num + "";
var optimized = num.toString();

var person = new Object();
var myString = new String("Dumb, but functional");

person.firstName = "My First Name";
person.lastName = "My Last Name";

person.getFullName = function() {
   return person.firstName + " " + person.lastName;
};*/

var person = {
    firstName : "FName",
    lastName : "LName",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
 };

alert(person.getFullName());