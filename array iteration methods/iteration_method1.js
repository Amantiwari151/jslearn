var arr = [9,3,7,4,2];


// callback or helper function
function fun(a){
    // a(first parameter of callback) used for array element , b(second prarmeter) used for index number,c(third parameter) for whole array
    // console.log("got a: " + a + " b: " + b + " c " + c);

    return a%2==0;
}


// forEach() method is only responsible for giving array element to callback and it will not expect anything in return from callback
// arr.forEach(fun);
// here fun is callback of forEach iteration method


// map() => this method is also give the array element to callback but it want something in return for every element from callback and this method returns a new array 
// var newArr = arr.map(fun);
// console.log(newArr);

// filter() => used when we want to filter elements based on condition that time we use this method
// console.log(arr.filter(fun));
console.log(arr.find(fun));