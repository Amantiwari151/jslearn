// array - in js, array is the collection of data , data can be of similar type or different type 
// 1. can create array using this literal way =>
var arr = [3,5,8,"hello",true];
// using constructor => (from making object of array)
// using constructor way if we give only one value in array constructor then it will treat as length of an array not as element of array
// var arr2 = new Array(9);
// console.log(arr2.length);
// console.log(arr.length);

// We can print array elements seperately on console
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// so js is loosely typed or dynamically typed programming language so in js , we can change the value of array element too
arr[1] = 9;
console.log(arr);
