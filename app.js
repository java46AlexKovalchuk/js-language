
//1. Typing "ANANAS"

const ananasObject = {letter1: "a", syllable1: `${"a" - 1}`, syllable2: "as"};
console.log(ananasObject.letter1, ananasObject.syllable1, ananasObject.syllable2);


//2. Calculator
let num1 = 100;
let signAct = "/";
let num2 = 5;
console.log(calculator(num1, signAct, num2));
function calculator (num1, signAct, num2) {
  switch(signAct){
    case signAct = "+":
      return num1 + num2;
      break;
    case signAct = "-":
      return num1 - num2;
      break;
    case signAct = "*":
      return num1 * num2;
      break;
    case signAct = "/":
      if (num2 != 0)
        {
        return num1 / num2;
        }
      else
        {
        console.log('ERROR: division by zero!');  
        }
      break;
    default: 
      console.log('ERROR: check the input of operation symbol');
  }
}


//3. expression of type fun(10)(3,5)
  //3.1
const res = fun(5)(10, 3);
  function fun(a)  {
  return function (b,c) {
         return a + (b*c)
         }
      };
console.log(res);
   
  //3.2
function func(a){
  return function (b,c) {
  return a * (b ** c)
  }
};
console.log( func(5)(10,3));

