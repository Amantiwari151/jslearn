var person = [
    {name:"jay",age:56,marks:[5,4,2,1]},
    {name:"jay",age:36,marks:[8,3,1,4]},
    { name: "jay", age: 26, marks: [3, 5, 1, 2] },
    { name: "jay", age: 29, marks: [6, 8, 9, 7] }
]

// helper function for sort
function cmp(a,b){
    var totalOfA = a.marks.reduce((p,q)=>{return p+q})
    var totalOfB = b.marks.reduce((p,q)=>{return p+q})
    return totalOfA-totalOfB;
}
person.sort(cmp);
// var x = JSON.stringify(person,null,'')
console.log(person);
// console.log(x);