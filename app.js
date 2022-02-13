// HW-19
//part 1.

function getRandomNumber(min, max){
   let [elMin, elMax] = [min, max].sort((a, b) => a - b); //destructuring array, getting variables min & max, sorting 
   return Math.round(elMin - 0.5 + Math.random() * (elMax - elMin + 1)); //using randomiser on given interval (including)
}
 
// part 2.
function concatinate(prefix) {
      return (str => prefix + str);
} 

//test 1
console.log(getRandomNumber(5, -60));

//test 2
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);


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



