let arr = [1, 2, 3, 4, 5];
//double the array///

///.......>>>>>....ForEach........<<<<<<.....///////
//for each takes each element in the array one by one and do something to it.
// forEach cant return  = any returned value will always be undefined

// arr.forEach((n)=>{
//     console.log(n*2)
// })

// arr.forEach((n,i)=>{
//   console.log(`${n} index is ${i}`)
// })

// let doubled = arr.forEach(n => {
//     return(n*2);
// });
// console.log(doubled);

// let doubled = arr.forEach((n,i) => {
//         return(n*2);
//     });
//     console.log(doubled);

///.......>>>>>....ForEach........<<<<<<.....///////
//MAP return an arry as a result

// arr.map((n)=>{
//     console.log(n*2)
// })

// let doubled = arr.map((n)=>{
//     return(n*2)
// })
// console.log(doubled)

// let doubled = arr.map((n, i) => {
//   return `${n} index ${i}`;
// });
// console.log(doubled);

arr.map((n)=>{
    console.log(n)
})
setTimeout(() => {
  console.log("a");
}, 0);
console.log("sanju");
