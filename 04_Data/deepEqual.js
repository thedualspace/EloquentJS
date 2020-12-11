/* 
A function to check if two objects (including arrays) are 'deeply' equal, 
that is to say, all their properties and sub-properties have identical values.
This solution is effective, but a little verbose. Could be worth an exercise in refactoring.
*/

const deepEqual = ( object1, object2 ) => {
  //If the objects are both arrays, check their lengths match, and then check each element in each array.
  if ( Array.isArray(object1) && Array.isArray(object2) ) {
    if ( object1.length !== object2.length ) {
      return false
    } else {
      for( let i = 0; i < object1.length; i++) {
        if ( object1[i] !== object2[i] ) return false;
      }
    }
    return true
  }

  /*
  If the objects are not arrays or null, do the following:
  1.) Ensure they have the same number of keys
  2.) If the current object value is a nested object, make a recursive call to deepEqual.
  3.) If the current object value is not an object, compare the values for each object according to the current key.
    If there is any inequality, return false. 
    If all values are equal, the loop runs through, and the function returns true.
  */
  if ( typeof object1 === 'object' && typeof object2 === 'object' && object1 !== null && object2 !== null ) {
    const keys1 = Object.keys( object1 );
    const keys2 = Object.keys( object2 );

    if ( keys1.length !== keys2.length ) return false;

    //if typeof entry is object, call deepEqual on the object. Otherwise, compare the values at the current key.
    for ( let i = 0; i < keys1.length; i++ ) {
      if (typeof object1[ keys1[i] ] === 'object') {
        return deepEqual( object1[ keys1[i] ], object2[ keys1[i] ]);
      } else {
        if ( object1[ keys1[i] ] !== object2[ keys1[i] ] ) return false;
      }
    }
    return true;
  }

  //If the objects are neither arrays nor objects, a normal comparison is sufficient.
  return object1 === object2;
};