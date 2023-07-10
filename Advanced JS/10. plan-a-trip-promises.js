// ///........CALL BACK HELL.........../////////

// function buyCar(cb1, cb2, cb3) {
//   setTimeout(() => {
//     console.log("buy a car");
//     cb1(cb2, cb3);
//   }, 5000);
// }

// function planTrip(cb1,cb2) {
//   setTimeout(() => {
//     console.log("lets go to chikmagaluru");
//     cb1(cb2);
//   }, 2000);
// }

// function reachCkm(cb) {
//   setTimeout(() => {
//     console.log("reached chikmagaluru");
//     cb();
//   }, 2000);
// }

// function bookHotel() {
//   setTimeout(() => {
//     console.log("hotel booked");
//   }, 1000);
// }

// // buyCar();
// //planTrip();
// buyCar(planTrip, reachCkm, bookHotel);
// // reachManali();

////>>>>>>>>>>>>>PROMISES<<<<<<<<<<////////////
function buyCar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("buy a car");
    }, 5000);
  });
}

function planTrip() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("lets go to CKM");
    }, 2000);
  });
}

function reachCkm() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("reached ckm");
    }, 2000);
  });
}

function bookHotel() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   res("hotel booked");
      rej("error: some accident happened");
    }, 1000);
  });
}

//using promises - then////////
// buyCar().then((msg) => {
//   console.log(msg);
//   planTrip().then((msg) => {
//     console.log(msg);
//     reachCkm().then((msg) => {
//       console.log(msg);
//       bookHotel().then((msg) => {
//         console.log(msg);
//       });
//     });
//   });
// });

/////>>>>>>>>>ASYNC AWAIT<<<<<<<<<//////////

async function async() {
  try {
    const msg1 = await buyCar();
    console.log(msg1);
    const msg2 = await planTrip();
    console.log(msg2);

    const msg3 = await reachCkm();
    console.log(msg3);
    const msg4 = await bookHotel();
    console.log(msg4);
  } catch (err) {
    console.log(err);
  }
}
async();
