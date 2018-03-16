console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;
//const subtract = (a, b) => a - b;

export default (a, b) => a - b;
// exports - default export - named export
// export { square, add, subtract as default };

///////////////////////////////////
////////// in app.js //////////////
///////////////////////////////////

// import './utils';
// import anything, { square, add } from './utils';
// console.log('app.js is running!');
// console.log(square(2));
// console.log(add(2, 4));
// console.log(anything(2, 4));

// import isSenior, { isAdult, canDrink } from './people';

// console.log(isAdult(18));
// console.log(canDrink(18));
// console.log(isSenior(65));