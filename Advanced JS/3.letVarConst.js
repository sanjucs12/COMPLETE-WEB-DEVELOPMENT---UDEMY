//1
// console.log(a);
// var a=100;

// //2
// console.log(a)   //error
// console.log(b);  // undefined
// let a =5;
// var b =6;
// console.log(b);  //6

//3
// console.log(a);  //undefined
// var a = 5;
// console.log(b)   //error

//4
// let a = 5;
// var b = 6;

// console.log(this.b);  //6
// console.log(window.b)//6
// console.log(window.a)  //undefined
// console.log(this.a);  //undefined

// var a=10;
// {
//     var a=100;
// }
// console.log(a);

// var a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)

const a = 10;
{
  const a = 20;
  {
    console.log(a);
  }
  console.log(a);
}
console.log(a);
