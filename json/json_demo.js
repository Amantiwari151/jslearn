var a = "Hello";
var b = 76;
var marks = [45,78,65,56,87];
// if we want to store multiple data of single entity that time we will use json object
// we can also say json is data structure in js
var person = {
    name:"Mahrana Pratap",
    work:"Protect their matriarchy",
    age:45
}
// so that's how we can access key of json using . operator
console.log(person.name);

// we can also do this using [] notation like =>
console.log(person["work"]);

// if we have key stored outside of json in a variable then how can we check that key is present in json or not 
var x = 'age';
console.log(person[x]);