//1
// console.log(a);  //Reference error - Cannot access 'a' before initialization
// let a=10;

//2
// var a;
// console.log(a)  // undefined
// a=10;


//3
// var a = 3;
// function printName(name) {
//   console.log(name);
// }
// printName("YAVTECH");
// console.log(a);    //ans = YAVTECH  3


//4
// printName("YAVTECH");
// console.log(a);
// var a = 3;
// function printName(name){
// console.log(name)
// }                        // ans = YAVTECH undefined

//5
// name();
// function name(){
//     console.log('Sanju')
// }
// //ans = sanju

// //6
// console.log(y);
// var y = function name(){
//     console.log('Sanju')
// }                           //undefined


// //7
// console.log(printName);
// //printName()                  //Uncaught TypeError TypeError: printName is not a function
// var printName=()=>{
//     console.log('sanju')
// }   


//8
// console.log(printName());        //Uncaught TypeError TypeError: printName is not a function
// console.log(a);                   // undefined
// var a = 3;
// var printName = (name) => {
// console.log(name)
// }

console.log(printName);    // undefined
console.log(a);             // undefined
var a = 3;
var printName = function (name) {
console.log(name)
}