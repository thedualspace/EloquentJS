//First attempt, works but is likely too slow. Dont like conditional. Repititious.
const range = ( start, stop, step ) => {
  stepSize = step ? step : 1; //If step isnt passed or is defined as 0, defaults to 1
  let rangeArray = [];
  
  if ( start > stop ) {
    for ( let i = start ; i >= stop ; i-= stepSize ) {
      rangeArray.push( i );
    }
    return rangeArray
  } else {
    for ( let i = start ; i <= stop ; i+= stepSize ) {
      rangeArray.push( i );
    }
    return rangeArray
  }
  
}

const sum = ( array ) => {
  return array.reduce( 
    (a, b) => a + b
  )
}

console.log( sum( range( 6, 1) ));