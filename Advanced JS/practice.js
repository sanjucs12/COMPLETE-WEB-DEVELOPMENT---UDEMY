// ///Promises

const buyCar = () => {
  setTimeout(() => {
    console.log("buy car");
  }, 5000);

};

const planTrip = () => {
  setTimeout(() => {
    console.log("plan a trip");
  }, 2000);
};
const goToCkm = () => {
  setTimeout(() => {
    console.log("reached ckm");
  }, 1000);
};

// // buyCar();
// // planTrip();
// // goToCkm();

// buyCar(planTrip,goToCkm);

// const buyCar = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("buy car");
//     }, 5000);
//   });
// };

// const planTrip = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("plan a trip");
//     }, 2000);
//   });
// };
// const goToCkm = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("reached ckm");
//     }, 1000);
//   });
// };

// buyCar().then((res) => {
//   console.log(res);
//   planTrip().then((res) => {
//     console.log(res);
//     goToCkm().then((res) => {
//       console.log(res);
//     });
//   });
// });

const myFun = async () => {
  const msg1 = await buyCar();
  console.log(msg1);
  const msg2 = await planTrip();
  console.log(msg2);
  const msg3 = await goToCkm();
  console.log(msg3);
};

myFun();
