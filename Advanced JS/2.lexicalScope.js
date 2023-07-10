// //1
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)
// }

// //console.log(a);         //2
// // console.log(this.a);    //2 (in browser)    (undefined in node/terminal)
// // console.log(this.c)     //2 (in browser)    (undefined in node/terminal)
// // console.log(this.x)     //undefined (in browser)    (undefined in node/terminal)
// //console.log(window.a)   //2 (in browser)    (Uncaught ReferenceError ReferenceError: window is not defined)in node
// //console.log(window.x)   //undefined         Uncaught ReferenceError ReferenceError: window is not defined
// console.log(b());       // 4 undefined

// //b();
// //console.log(b());

//2
// function abc() {
//   console.log(a);
// }
// abc();      //undefined
// var a = 7;
// abc();   //7

// //3
// function outerfunction() {
//   console.log(a);
//   var c = 10;

//   innerfunction();
//   function innerfunction() {
//     console.log(b);
//     console.log(c);
//   }
// }
// var a = 7;
// var b = 3;

// outerfunction();  //7  3  10

function outerfunction() {
  console.log(a);
  var a = 10;
  innerfunction();
  function innerfunction() {
    console.log(a);     
     //console.log(window.a);
    console.log(this.a);
   
  }
}
var a = 7;
var b = 3;
outerfunction();    //undefined 10 7 7
