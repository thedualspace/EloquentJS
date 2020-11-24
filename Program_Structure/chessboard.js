/* 
Reasonably concise, easy to adjust symbol() to use different symbols or patterns, 
using if statements similar to that found in fizzbuzz.

The double nested for loop is kind of gross but knowing both the xPos and yPos 
is required to ensure checkerboard pattern. If we took the grid and linearised it,
we would find that the pattern is different depending on if the size is even or odd.
So a single for loop is insufficient (I think).
*/

const symbol = ( xPos, yPos ) => (xPos + yPos) % 2 === 0 ? 'O' : '#' ;

const chessboard = (size) => {
  let output = '';

  for ( let yPos = 0 ; yPos < size ; yPos++ ) {
    for ( let xPos = 0 ; xPos < size ; xPos++ ) {
      if ( xPos % size === 0) { output += '\n'};
      output += symbol(xPos, yPos);
    }
  }
  
  return output;
};

console.log(chessboard(6));
