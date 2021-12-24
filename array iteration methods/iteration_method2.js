// every() - if all array elements satisfied the condition then it will return true
// some() - at least one array element satisfied the condition  then it will return true
// reduce() - combine or reduce  multiple elements into one element
// var marks = [45,76,82,31,35];
var arr = [5,4,7,2,1];
// callback function
// function fail(a){
//     return a<33;
// }

// callback for reduce()
function sum(a,b){
    // if used reduce() method then first(a) and second(b) both are inorder array element otherwise first parameter is element and second is index
    return a-b;
}


// every() =>
// var isPass = marks.every(pass);
// console.log(isPass);

// some() =>
// var isFail = marks.some(fail);
// console.log("Am i fail \n" + isFail);

// reduce()=>
// var result = arr.reduce(sum);
var result = arr.reduceRight(sum);
console.log(result);