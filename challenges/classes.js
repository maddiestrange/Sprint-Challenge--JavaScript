// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker{
    constructor(object){
    this.length = object.length;
    this.width = object.width;
    this.height = object.height;
  }
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  volume(){
    return (this.length*this.width*this.height);
  }
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
 surfaceArea(){
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
}
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboid = new CuboidMaker({
    length: 4, 
    width: 5,
    height: 5,
  })
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker{
  constructor(object){
    super(object)
  }
  cubeVolume(){
    return (Math.pow(this.length, 3));
  }
  cubeSA(){
    return (6*(Math.pow(this.length, 2)));
  }
}
const cube1 = new CubeMaker({
  length: 4, 
  width: 4,
  height: 4,
})
console.log(cube1.volume()); // 64
console.log(cube1.surfaceArea()); // 96

//or

const cube2 = new CubeMaker({
  length: 4,
})
console.log(cube2.cubeVolume()); // 64
console.log(cube2.cubeSA()); // 96
