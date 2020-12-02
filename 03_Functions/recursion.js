/*
Not super jived with how long this function definition is, though not sure how much it could reduced,
because we're required to define /two/ base cases, and a case each for positive and negative numbers.
*/ 
const evenOdd = (num) => {
  if ( num > 1) {
    return evenOdd( num - 2 );
  } else if (num < 0 ) {
    return evenOdd( num + 2 );
  } else if ( num === 0 ) {
    return 'even';
  } else if ( num === 1 ) {
    return 'odd';
  }
};

//Slightly shorter by use of ternary to define base cases. I like this better.
const oddEven = (num) => {
  if ( num > 1) {
    return evenOdd( num - 2 );
  } else if (num < 0 ) {
    return evenOdd( num + 2 );
  } else {
    return  num === 0 ? 'even' : 'odd';
  }
}; 