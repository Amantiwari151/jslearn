var classroom = {
    no_of_students:20,
    students:[{name:"Aayushi",age:19,city:"jaipur",marks:[45,78,89,67,91],cast:"GEN"},
        { name: "Mohit", age: 18, city: "chandigarh", marks: [65, 71, 59, 77, 61],cast:"OBC"}
        , { name: "Rohit", age: 20, city: "bhilwara", marks: [62, 88, 99, 47, 60],cast:"SC"}
        , { name: "Pratik", age: 19, city: "jodhpur", marks: [26, 62, 48, 82, 76],cast:"GEN"}
        , { name: "Sagar", age: 21, city: "indore", marks: [89, 72, 24, 66, 83],cast:"OBC"}]
}

// give me that person name whose city is jaipur
var city = classroom.students.filter((s)=>{
        return s.city=="jaipur";
});
// console.log(city);

// give the result who belongs in general
var cast = classroom.students.filter((s)=>{
    return s.cast === "GEN";
})
console.log(cast);

// find out any student is fail here or not which means any student get less then 33 marks or not
var isPass = classroom.students.map((s)=>{
    var number = s.marks.every((m)=>{
        return m>33;
    })
    return number;
})
var child = classroom.students.forEach((s) => { return s.name })
if(isPass){
    console.log(child+"is pass");
}
else{
    console.log(child + "is fail");
}