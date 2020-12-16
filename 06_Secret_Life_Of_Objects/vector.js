class vector {
  constructor(x, y) {
    this.x = x,
    this.y = y
  }
  
  plus(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  minus(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  
  get length() {
    return Math.sqrt( this.x**2 + this.y**2 );
  }
};

let example = new vector( 3, 4 );

console.log( example.plus( new vector(2,3)) );