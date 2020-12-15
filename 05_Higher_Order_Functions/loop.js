const loop = function( initialValue, testFunction, updateFunction, bodyFunction ) {
  for ( let value = initialValue; testFunction(value); value = updateFunction(value) ) {
    bodyFunction(value);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);