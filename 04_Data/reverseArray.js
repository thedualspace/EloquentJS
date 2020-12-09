const { reverse } = require("./journal");

//Uses push.
const reverseArray = ( array ) => {
  const reversedArray = [];
  for ( let i = 1; i <= array.length; i++) {
    reversedArray.push( array[ array.length - i] );
  }
  return reversedArray;
}

//Pre initialises the array to be reversed.
const fasterReverseArray = ( array ) => {
  const reversedArray = new Array( array.length );
  for ( let i = 0; i < array.length; i++) {
    reversedArray[i] = array[ array.length -1 -i] ;
  }
  return reversedArray;
}

//Reverses array in place, as the .reverse array method apparently does.
//Headvalue just saves the value towards the start of the array before its overwritten. 
const reverseArrayInPlace = ( array ) => {
  for ( let i = 0; i < array.length/2 ; i++) {
    let headValue = array[i];
    array[i] = array[ array.length -1 -i ];
    array[ array.length -1 -i ] = headValue;
  }
  return array;
}

/*
Quick performance investigation. Looks like they perform in the order they 
have been defined here, with reverseArrayInPlace being significantly faster.
Results for array size 10**7 as below are as follows:

256ms : reverseArray
59ms : fasterReverseArray
16ms : reverseArrayInPlace
*/

let filledArray = new Array(10000000).fill(1);

console.time('reverse1');
reverseArray(filledArray);
console.timeEnd('reverse1');

console.log(typeof filledArray)

console.time('reverse2');
fasterReverseArray(filledArray);
console.timeEnd('reverse2')


console.time('reverse3');
reverseArrayInPlace( filledArray );
console.timeEnd('reverse3')

