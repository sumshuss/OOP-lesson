//objects with plain old JS

const key = "species"

const pet = {
    species: 'Dog', name: "Elton", age: 1
}

console.log(pet)

//adding a value key will always be stringified

pet[true] = 'doggo'

//object methods

pet.bark = function() {
    return 'bark bark';
}


//functions and data. Adding functions in objects

function getTriangleArea(a,b) {
    return ( a*b/2 );
}

function getTriangleHypotenuse(a, b) {
    return Math.sqrt( a**2 + b ** 2);
}


let myTri = {
    a: 3,
    b: 4,
    getArea: function() {
        return ( this.a + this.b )/2;
    },
    getHypotenuse: function() {
        return Math.sqrt( this.a**2 + this.b ** 2);
    }
}


//----------------------------------------------------------------------------------------


// CLASSES

// class Triangle {
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }
// }

// const firstTri = new Triangle()

// firstTri.a = 4

// firstTri.b = 44

// console.log('here', firstTri.getArea())



//----------------------------------------------------------------------------------------

// ADDING A CONSTRUCTOR


// class Triangle {
//     constructor(sideA, sideB) {
//         this.a = sideA;
//         this.b = sideB;
//     }
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }
// }

// const tri = new Triangle(5, 12)

// console.log('triangle 1', tri)

// class Triangle {
//     constructor(a, b) {
//       if (!Number.isFinite(a) || a <= 0)
//         throw new Error (`Invalid a: ${a}`);

//       if (!Number.isFinite(b) || b <= 0)
//         throw new Error (`Invalid b: ${b}`);
      
//       this.a = a;
//       this.b = b;
//     }
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }
// }

// const tri = new Triangle(5, 12)

// console.log('triangle 1', tri)


//----------------------------------------------------------------------------------------

//METHODS

// class Triangle {
//     constructor(a, b) {
//       if (!Number.isFinite(a) || a <= 0)
//         throw new Error (`Invalid a: ${a}`);

//       if (!Number.isFinite(b) || b <= 0)
//         throw new Error (`Invalid b: ${b}`);
      
//       this.a = a;
//       this.b = b;
//     }
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }

//     sayHi () {
//         return `The Triangle with a side A of ${this.a} and side b with ${this.b} with an area of ${this.getArea()} says hi`
//     }
// }

// const tri = new Triangle(5, 12)

// console.log('triangle 1', tri.sayHi())


//----------------------------------------------------------------------------------------

//INHERITANCE


// class Triangle {
//     constructor(sideA, sideB) {
//         this.a = sideA;
//         this.b = sideB;
//     }
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }
    
//     describe() {
//         return `I am a triangle with an area of ${this.getArea()}`
//     }
// }


// class ShyTriangle extends Triangle {
//     describe() {
//         return "(runs and hides)";
//     }
// }



//----------------------------------------------------------------------------------------


//THE SUPER PROPERTY

// class Triangle {
//     constructor(sideA, sideB) {
//         this.a = sideA;
//         this.b = sideB;
//     }
//     getArea() {
//         return ( this.a + this.b )/2;
//     }

//     getHypotenuse () {
//         return Math.sqrt( this.a**2 + this.b ** 2);
//     }
    
//     describe() {
//         return `I am a triangle with an area of ${this.getArea()}`
//     }
// }

// class ColorTriangle extends Triangle {
//     constructor(a, b, color) {
//         super(a, b);
//         this.color = color
//     }
// }

// console.log (new ColorTriangle(2, 4, "orange"))

// class MoodTriangle extends ColorTriangle {
//     constructor (a, b, color, mood) {
//         super(a, b, color);
//         this.mood = mood
//     }
// }

// console.log (new MoodTriangle(6, 3, "red", "sad"))



//----------------------------------------------------------------------------------------


//STATIC PROPERTIES

// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }

//     static species = "felis catus"
// }

//----------------------------------------------------------------------------------------

//STATIC METHOD


// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }

//     static meow() {
//         return "meow meow!"
//     } 

//     static species = "felis catus"
// }

// console.log(Cat.meow())

//----------------------------------------------------------------------------------------

//USE CASES FOR STATIC METHOD


class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    static registerStray() {
        const names = ["muffin", "Biscuit", "Sleepy", "Dodo", "Princess"];
        const name = choice(names)
        return new Cat(name, "unknown")
    }

    
    meow() {
        return `${this.name} says meow meow!`
    } 
}

function choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx]
}

console.log(Cat.registerStray())

//----------------------------------------------------------------------------------------


// OOP NEW FEATURES

//GETTERS

// class Circle {
//     constructor(radius) {
//         this._radius = radius;
//     }

//     get diameter(){
//         return this._radius * 2;
//     }
// }

// const c = new Circle(4)

// console.log(c._radius)

// SETTERS


class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);
  
    constructor(radius, color) {
      this._radius = radius;
      this.setColor(color);
    }
  
    setColor(newColor) {
      if (Circle.allowedColors.has(newColor)) {
        this._color = newColor;
      } else {
        throw new Error("That color is not allowed");
      }
    }
  
    get radius() {
      return this._radius;
    }
  
    // Setter for the radius
    set radius(value) {
      if (value < 0) {
        throw new Error("Radius cannot be negative!");
      } else {
        this._radius = value;
      }
    }
  
    get color() {
      return this._color;
    }
  
    set color(newColor) {
      this.setColor(newColor);
    }
  }


 const c = new Circle()

 c.radius = 23;

 c.color = "red";

 

 //PUBLIC FIELD 

class Cat {
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    this.numLegs -= 1;
  }
}

//PRIVATE FIELD

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  
  }
}

const myCircle = new Circle(10);
console.log(myCircle.#radius) //can't access the private class here outside the class



//PRIVATE METHOD

//Just add the # to whatever method you want to call 

//STATIC INITIALIZATION BLOCK

