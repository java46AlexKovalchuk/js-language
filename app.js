/**********HW-13 */ 
//1. Method myForEach:

const myForEach = function(ar, callback){
    for(let i = 0; i < ar.length; i++){
        callback(ar[i], i, ar);
    }
}

// test
  let arr1 = [1, 2, 3, 4, 5];
  let str1 = '';

//create string with delimiter * :
myForEach(arr1, n => str1 += n + '*'); 
console.log(str1);

//calculate the sum of elements of array arr1:
let sum = 0;
myForEach(arr1, n => sum += n);
console.log(sum);

//multiply by 2 each element of array arr1 and rewrite the array:
myForEach(arr1, (n, i, arr1) => arr1[i] = n * 2);
console.log (arr1);


//**********HW-13 task2 *****/

