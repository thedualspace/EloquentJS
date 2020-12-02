/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

const countBs = ( string ) => {
  let Bs = 0
  for (let i = 0; i < string.length; i++) {
    (string[i] === 'b' || string[i] === 'B') && Bs++ ;
  };
  return Bs;
}

const countChar = ( string, character ) => { 
  if ( typeof character !== 'string' || character.length > 1 ) {
    return 'Character must be of type \'string\', and must be a single character only';
  }
  
  let count = 0; 
  for (let i = 0; i < string.length; i++) {
    (string[i] === character.toUpperCase() || string[i] === character.toLowerCase() ) && count++ ;
  }
  return count;
}

console.log( countChar('Use this to count my characters', 'C'));