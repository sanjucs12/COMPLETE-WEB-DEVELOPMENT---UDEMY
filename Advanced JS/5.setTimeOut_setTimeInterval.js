//setTimeOut

// let timeOut = setTimeout(()=>{
//     console.log('sanju')
// },2000)
// console.log('a');
// console.log('b');
// clearTimeout(timeOut);

for(let i=1;i<=10;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}


//setInterval

// const interval = setInterval(() => {
//     console.log(1)
// }, 2000);
// clearInterval(interval);