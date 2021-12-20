// arrow function is the shortest way to define a function generally we use arrow function when we want to deal alot with callback methods
// generally there are 3 ways to define functions -

// 1. general  way to define function
// function fun(){
//     console.log("normal way to define function");
// }
// fun();

// 2. storing function in variable
// var fun1 = function(a){
//     return function (b){
//         return a+b;
//     };
// }
// var store = fun1(5) (4);
// console.log(store);


// 3. using arrow function 
var sum = (a,b)=>{ return a+b ;}
var res = sum(4,1);
console.log(res);

//  if one parameter in arrow function => don't use ()
const print = a =>{console.log("This is print body");}
print();

// but if we have one statement only and want to return something then =>
const  double = a=>a*2;
var d = double(2);
console.log(d);