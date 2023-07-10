// //1
// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x(); //10

//2
function x() {
  let a = 10;
  function y() {
    return a;
  }
  console.log(y());
}
x();
