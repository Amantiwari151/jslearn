var arr = [2,8,4,23,65];
// push() - push method is used for adding the element at the end of the array
arr.push(97);
// console.log(arr);
// pop() - this method is used for removing the element from end of an array
arr.pop();
arr.pop();
// console.log(arr);
// toString() => this method is used for converting an array or object into string
// var str = arr.toString();
// console.log(str);


// shift() => this method is used for removing element from the start of an array
arr.shift();
console.log(arr);

// unshift() => this method is used for adding an element at the start of an array
arr.unshift(90);
console.log(arr);

// splice() => this method is used for adding an element at specified index or can remove elements too as second parameter and in third parameter of this method we can add elements what we want to add.
arr.splice(1,2,2,6);
console.log(arr)

// slice() => this method is used for selecting subset , it is used to divide the array in subparts but array is not effected from this
var s = arr.slice(1,2);
// here 2 is exclusive  
console.log(s);
console.log(arr);



// concat() - this method is used for adding two or more array with each other
var arr2 =[1,2];
var arr3 = [9,7];
var p = arr.concat(arr3,arr2);
console.log(p);
console.log(arr);