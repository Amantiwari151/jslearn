var v = "Programmer";
var v2 = 89;
var v3 = false;
var v4 = [5,3,7,2];
var v5 ={
    name:"Ram",
    age:16,
    marks:99
}
// use inbuilt constructor
var v6 = new Date();
// create constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}
var v7 = new Person("Rohit",21);

// typeof operator
// console.log(typeof v);
// console.log(typeof v2);
// console.log(typeof v3);
// console.log(typeof v4);
// console.log(typeof v5);
// console.log(typeof v6);
// console.log(typeof v7);

// instanceof operator => it returns true or false it checks variable is particular kind of constructor or object or not
console.log(v4 instanceof Array);
console.log(v5 instanceof Object);
console.log(v6 instanceof Date);
console.log(v7 instanceof Person);