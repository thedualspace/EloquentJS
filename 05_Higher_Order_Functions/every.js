const everyWithForLoop = function( array, test ) {
  for ( let i=0 ; i < array.length ; i++) {
    if ( !test(array[i]) ) return false;
  }
  return true;
};

/*
Important lesson here:
This will not work:
array.some( !test )
because !test will apply ! to an exporession, not the returned value of our function. 
Thus the .some method thows an error.

Instead we must pass test to an anonymous function like so:
array.some( element => !test(element) )
*/
const everyWithSomeMethod = function( array, test ) {
  if ( array.some( element => !test(element) ) ) return false;
  return true;
}


console.log( everyWithSomeMethod( [1, 2, 5, 11], n=> n < 10));