// using sort() method 

var arr = [2,8,4,7,1];

//helper function for customized logic of number array because by default, sort() function will sort the array according to string
function cmp(a,b){
    return a-b;
}
// so if this function return positive which means a >b
// otherwise negative then b > a
// 0 then both are equal
// otherwise sort function can sort array by it own's
arr.sort(cmp);
console.log(arr);