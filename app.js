//obj.fun(arguments)
//1. Encapsulation - data are encapsulated inside an object. Data processing done through the object function

//2. Inheritance. Any encapsulation may inherit common encapsulation with common data. Example: 
//  Employee and Child may inherit the encapsulation of Person. It allows avoid repeating the common data.

//3. Polymorphism: 
// function(arg){
//  arg.toString(); -> the method toString will be called in accordence to the arg type. This is the polymorphism. 
//  }

const circle = {radius: 20, square: function(){
  return 3.14 * (this.radius ** 2)
}, perimeter: () => 2 * 3.14 * this.radius, 
toString: function(){
    return `radius of this circle is ${this.radius}` 
} };
console.log(`square = ${circle.square()}, perimeter = ${circle.perimeter()}`);
//circle.square wiil be converted to square(circle) where circle as argument value, "this" is the hidden
// parameter in the function.
// //in  any arrow function there is no "this"
 
function square(circle){
    return 3.14 * (circle.radius ** 2)
}
console.log(`circle: ${circle}`);

const circle1 = {radius: 20, perimeter: function() {
    return 2 * 3.14 * this.radius
  }, toString: function(){
      return `radius of this circle is ${this.radius}` 
  } };

  //circle1.square();  // error because the method square is not defined inside object circle1
 
  function Circle(radius) {
        this.radius = radius;
  }
  Circle.prototype.square = function() {
          return 3.14 * (this.radius ** 2);
  }  
  Circle.prototype.perimeter = function() {
          return 2 * 3.14 * this.radius;
  }
  Circle.prototype.toString = function() {
          return `radius of this circle is ${this.radius}`;
  }
  const circle10 = new Circle(10);
 
   console.log(circle10);
   console.log(`circle10: radius is ${circle10.radius}, square is ${circle10.square()}, 
   perimeter is ${Math.round(circle10.perimeter())}`);

  /////
  function Obj1(){
    this.func1;
  }
 
  Obj1.prototype.func1 = function(res){
    console.log(res + ' a');
  } 
   const obj1 = new Obj1();

console.log(obj1.func1('by'));
console.log(obj1);


//    //test
//    function Triangle(alfa, betta){
//       this.alfa = alfa;
//       this.betta = betta;
//    }
//    Triangle.prototype.angle3 = function(){
//      return 180 - (this.alfa + this.betta);
//    }
//    const triangleABC = new Triangle(30, 60);

//   console.log(triangleABC);
//   console.log(`angle C = ${triangleABC.angle3()}`);

// // 
//   function ObjN (one, two, three){
//          this.one = one;
//          this.two = two;
//          this.three = three;
//   }

//   const objN1 = new ObjN('a', 'b', 'c');
//   //  ObjN.prototype.toString = function(){
//   //    return `proprty two = ${this.two}`
//   //  }
//   const objN2 = objN1;
//   console.log(objN2);
//   console.log(`property one  = ${objN2.one}`);
//    
//   //********************HW-16: */
//   //write constructor Deffered
//   // const d = new Deffered()
// // d.then(function(res){ console.log('1 ', res); return 'a'; });
// // d.then(function(res){ console.log('2 ', res); return 'b'; });
// // d.then(function(res){ console.log('3 ', res); return 'c'; });
// // d.resolve('hello');
  
//   // output:
//   //1 hello
//   //2 a
//   //3 b


//   //task2
//   // 
//   //const myArray = new myArray(10); 
//   //myArray.get(index)   - result 10
//   //write method get getting an index value and returning common value (set in constructor)
//   //myArray.set(index, value);
//   //write method set that sets a given value and a given value
//   //myArray.setValue(value) - sets new value in all elements of myArray
//  // Example:
// //  const myArray = new MyArray(10);
// //  console.log(myArray(100))  //-> display out 10
// //  myArray.set(100, 500) //sets 500 at index 100
// //  console.log(myArray.get(200)) //displayed out 10
// //  console.log(myArray.get(100)) //displayed out 500
// //  myArray.setValue(300);
// //  console.log(myArray.get(100)) //displayed out 300
// //  console.log(myArray(200)) //displayed out 300

// //*************
 
// Array.prototype.filter = function(callbackPredicate){
//     console.log('Tel-Ran copiright');
//     const res = []      
//     this.forEach((n, i, a) => callbackPredicate(n, i, a) && res.push(n));
//     return res;
// }
// const ar = [1, 2, 3, 4, 5, 100]
// ar.filter(n => n % 2 == 0).forEach(n => console.log(n));

//return this.array[index] ?? this.value;  -if this.array[index] is undefine or null return this.value

//how to get array's length?   :
// const arr1 = [];
// arr1[100000000] = 10;
// console.log(`length of arr1 is ${arr1.length}`);
// arr1.length = 0;    // array will be reset
// console.log(arr1[100000000]);