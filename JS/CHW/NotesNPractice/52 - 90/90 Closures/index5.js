// const x = () => {
//   let a = 1;
//   console.log(a);

//   const y = () => {
//     let a = 2;
//     console.log(a);

//     const z = () => {
//       let a = 3;
//       console.log(a);
//     };
//     z();
//   };
//   y();
// };

// x();

console.log("*********************");

// function returnFunc() {
//   const x = () => {
//     let a = 1;
//     console.log(a);

//     const y = () => {
//       let a = 2;
//       console.log(a);

//       const z = () => {
//         let a = 3;
//         console.log(a);
//       };
//       z();
//     };
//     y();
//   };

//   return x;
// }

// let a = returnFunc();
// a();

console.log("*********************");

function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);

    const y = () => {
      //   let a = 2;
      console.log(a);

      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 9999; // before calling y, we are updating a, so y will be using its parent a
    y();
  };

  return x; // x is returning with its lexical environment
}

let a = returnFunc();
a();

// closure has also scope of its outer function
