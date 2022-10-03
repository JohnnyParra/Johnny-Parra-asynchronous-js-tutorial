const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


// // METHOD 1 Callback Hell//
// function startAnimation(element, callback){
//   const response = element.animate(aliceTumbling, aliceTiming).finished
//     .then(() => callback())
// }
// 
// function finishAnimation(){
//   startAnimation(alice1, () => {
//     startAnimation(alice2, () => {
//       startAnimation(alice3, () => {
//         console.log('finished')
//       })
//     })
//   });
// }
// finishAnimation();


// // METHOD 2 promise chaining//
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//   .catch(error => console.error(`problem animating: ${error}`));


// METHOD 3 Async and Await//
async function startAnimation() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}
startAnimation()