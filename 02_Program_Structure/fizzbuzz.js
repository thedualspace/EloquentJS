//First attempt
const FizzBuzz = (input) => {
  if (input % 15 === 0) {
    return 'FizzBuzz';
  } else if ( input % 5 === 0 ) {
    return 'Buzz';
  } else if ( input % 3 === 0 ) {
    return 'Fizz'; 
  } else {
    return input;
  }
}

//More considered approach. Better modularity, upgradeability. 
const fizzBuzz = (input) => {
 let output = '';
 if ( input % 3 === 0 ) { output += 'fizz' };
 if ( input % 5 === 0 ) { output += 'buzz' };
  
 if ( output === '' ) { output = input };
 return output;
}  

for ( let i = 1; i <= 100 ; i++) {
	console.log( fizzBuzz(i) );
}