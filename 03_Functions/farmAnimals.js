/*
We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, 
with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.
*/

function farmAnimals( cows, chickens ) {
  function paddedNum( num, width ) {
    const numLength = num.toString().length;
    const requiredZeros = width - numLength;
    
    return '0'.repeat( requiredZeros ) + num;
  }

  console.log( `${ paddedNum( cows, 4 )} Cows`);
  console.log( `${ paddedNum( chickens, 4 )} Chickens`);
}

farmAnimals(4, 620);