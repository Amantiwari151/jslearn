// in operator => when we apply in operator for array that time it will print index when we console i 
var arr = [5,8,2,1];
// for(var i in arr){
//     console.log(i);
// }
// var obj = {
//     name:"Akshat",
//     age:25,
//     city:"jaipur"
// }
// for(var i in obj){
//     console.log(i);
// }


// of operator =>
// this operator is not valid for json object
// but when we apply it on array it will give us array element
for (var i of arr){
    console.log(i);
}