var arr =[4,3,6,9,1,5];
// function fun(a,b,c){
//     console.log(a+b+c);
// }
// // spread operator => in this operator, array element is distributed and stored in differnt different variable
// fun(...arr);
function sum(a,b,...c){
    // rest operator => which means all rest elements is stored as in an array, used as function  defination
    total = a+b;
    if(c.length>0){
        for(var i of c){
            total += i;
        }
    } 
    return total;
}
console.log(sum(4,5,7,1,2,4,6));

delete arr[1];
console.log(arr);