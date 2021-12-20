function fun(x){
    console.log("This is function of fun");
    x();
}
function fun2(){
    console.log("This is the second function");
}
fun(fun2);
// callback functions are those functions which are passed as a parameter to another function
// and here fun2 is a callback function for fun() function.
// when we pass  a function as callback that time =>
// fun(fun2) =>correct
// fun(fun2()) => wrong  because function is called 

// setTimeout() => setTimeout() is a method of window object. it sets a timer and executes a callback function after the timer expires
setTimeout(fun2,3000);