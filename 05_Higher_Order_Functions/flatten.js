//Use reduce and concat
const flatten = function(array) {
  return array.reduce( (accumulator, currentElement) => accumulator.concat( currentElement ), [] )
}

console.log( flatten( [[1, 2, 3], [4, 5], [6]] ) );