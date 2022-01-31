//obj.fun(arguments)
//1. Encapsulation - data are encapsulated inside an object. Data processing done through the object function
//2. Inheritance. Any encapsulation may inherit common encapsulation with common data. Example: 
//  Employee and Child may inherit the encapsulation of Person. It allows avoid repeating the common data.

//3. POlymorphism 
// function(arg){
//  arg.toString(); -> the method toString will be called in accordence to the arg type. This is polymorphism. 
//  }

const circle = {radius: 20, square: function(){
    return 3.14 * (this.radius ** 2)
}, perimeter: () => 2 * 3.14 * this.radius,        // in  any arrow function there is no "this" !
toString: function(){
  return `radius of this circle is ${this.radius}`
}};  
console.log(`square = ${circle.square()}, perimeter = ${circle.perimeter()}`);
//circle.square wiil be converted to square(circle) where circle as argument value, "this" is the hidden
//parameter in the function.
//in  any arrow function there is no "this"
 function square(circle) {
   return 3.14 * (circle.radius ** 2);
 }
 console.log(`circle: ${circle}`);
 

 const circle1 =  {radius: 20,  perimeter: function(){
    return 2 * 3.14 * this.radius}, 
    toString: function(){
      return `radius of this circle is ${this.radius}`
    }}; 
   // circle1.square(); error because the method square is not defined inside object circle1

   function Circle(radius) {
       this.radius = radius;
   }
   Circle.prototype.square = function() {
      return 3.14 * (this.radius ** 2);
   }
   Circle.prototype.perimeter = function(){
     return 2 * 3.14 * this.radius;
   }
   Circle.prototype.toString = function(){
     return `radius of this circle is ${this.radius}`
   }
  const circle10 = new Circle(10);
  //********************HW-16: */
  //write constructor Deffersd
  // const d = new Deffered()
// d.then(function(res){ console.log('1 ', res); return 'a'; });
// d.then(function(res){ console.log('2 ', res); return 'b'; });
// d.then(function(res){ console.log('3 ', res); return 'c'; });
// d.resolve('hello');
  
  // output:
  //1 hello
  //2 a
  //3 b

  //task2
  // 
  //const myArray = new myArray(10); 
  //myArray.get(index)   - result 10
  //write method get getting an index value and returning common value (set in constructor)
  //myArray.set(index, value);
  //write method set that sets a given value and a given value
  //myArray.setValue(value) - sets new value in all elements of myArray
 // Example:
//  const myArray = new MyArray(10);
//  console.log(myArray(100))  //-> display out 10
//  myArray.set(100, 500) //sets 500 at index 100
//  console.log(myArray.get(200)) //displayed out 10
//  console.log(myArray.get(100)) //displayed out 500
//  myArray.setValue(300);
//  console.log(myArray.get(100)) //displayed out 300
//  console.log(myArray(200)) //displayed out 300

//*************
Array.prototype.filter = function(callbackPredicate){
    console.log('Tel-Ran copiright');
    const res = []      
    this.forEach((n, i, a) => callbackPredicate(n, i, a) && res.push(n));
    return res;
}
const ar = [1, 2, 3, 4, 5, 100]
ar.filter(n => n % 2 == 0).forEach(n => console.log(n));