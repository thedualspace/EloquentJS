/*
By starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. 
How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?
*/

const sequence = function( num ) {
  if ( num < 1) {
    console.log('failure')
    return 1;
  } else if ( num === 1 ) {
    console.log('success');
    return true;
  } else if ( num%3 === 0 ) {
    console.log(`${num} is divisible by 3!`)
    sequence( num/3 );
  } else {
    console.log('subtracting 5')
    sequence( num - 5 );
  }
};

/* 
This is honestly an awesome solution.
Use of the || operator in the return statement is just *chefs kiss*
Not immediately clear why this solution uses a double nested function definition though.
*/
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
