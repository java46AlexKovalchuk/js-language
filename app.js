const point = {
      x: 3,
      y: 4
};
function displayPointInSpace(z, t){
      //"this" - reference to any object having properties x and y
      console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t} `);
}

// point.method = displayPointInSpace;
// point.method(10, 20);

// displayPointInSpace.call(point, 10, 20);
// displayPointInSpace.mybind(point, 10, 20)();
// displayPointInSpace.apply(point, [10, 20]);
/*********************************** */

Function.prototype.mybind = function(thisObj, ...args){
             //this - reference to any functional object (in example - displayPointInSoace)
             //thisObject - reference to any object(in example - point)
            
             return (...params) =>  {
                  thisObj.method1233456 = this;
                  const res = thisObj.method1233456(...args.concat(params));
                  delete thisObj.method1233456;
                  return res;
             }
}
//arguments are passed at function call
const funDisplay = displayPointInSpace.mybind(point);
funDisplay(10, 20); 
/******************* */
//all arguments are bound by the method "mybind"
const funDisplayArguments = displayPointInSpace.mybind(point, 10, 20);
funDisplayArguments();
/*************** */
//mixed - part of arguments are bount by the method mybind and other part of arguments are past at function code
const funDisplayMixed = displayPointInSpace.mybind(point, 10);
funDisplayMixed(20)





//hw



// //for best understanding:
// function addDigit(n){
//       return function(num){
//             return n + num;
//       }
// }
// const addOne = addDigit(1);
// const theAddOne = addOne(10);
// console.log(theAddOne); 


// //example

// function createStep(n = 0  ){ 
//       let count = n;
//       return function (){
//             count++;
//             console.log(count);
//        }
// } 

// function randomInteger(min, max){    //get random nunmber in interval (min-0.5 , max+0.5)
//      let rand = min - 0.5 + Math.random() * (max - min + 1);
//       return Math.round(rand);
// }
// console.log(randomInteger(0, 1));

// function createBeggar(){
//       let s = 0;
//       return function beggar(){
//             s += randomInteger(0, 100);
//             console.log(s);
//             if(s >= 250) return;
//             beggar();
//             }
// }

// hw-19
//part 1.


function rndFromInterval(first, last){
   let [min, max] = [first, last].sort((a, b) => a - b); //destructuring array, getting variables min & max, sorting 
   return Math.round(min - 0.5 + Math.random() * (max - min + 1)); //using randomiser on given interval (including)
}
 
console.log(rndFromInterval(5, 0));
//console.log(min);



// function concatinate(prefix){
//       return function(str){
//             return prefix + str;
//       };
// }
//2.
function concatinate(prefix) {
      return (str => prefix + str);
} 

//solution2
let  concatApp1 = concatinate(prefix => str => prefix + str); 
//test

const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);

concatApp1 = concatinate('App - ');
const concatMessage1 = concatApp1('Test status: Done');
console.log(concatMessage1);


/* HW definition
1. function getRandomNumber(min, max){
    TODO
    min - minimal value
    max - maximal value
    example   getRandomNumber(0, 1) -> returns number that is either 0 or 1
    if min > max then you should swap values
    swap should be without editional variable in one line code
}

2.  write the function concatinate(prefix) {...}
    that by using the following code
    const concatApp = concatinate('App - ');
    const concatMessage = concatApp('Test status: Done');
    console.log(concatMessage); 
    there should be displayed out App - Test status: Done 
*/



