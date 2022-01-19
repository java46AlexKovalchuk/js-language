/************Arrays******/
const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){
//         return a - b;
// }); 
// ar.sort((a, b) => a - b); 
// console.log(`ar is ${ar.toString()}`);
            

/****HW-12 ****/
//  let arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
// let arHw1 = [];
// let arHw2 = [];
// let i = 0;
// let j = 0;
//  for (i = 0, j = 0; i < arHw.length; i++, j++){
//          if(arHw[i] % 2 == 0){
//                  arHw1[j] = arHw[i];
//         }
//         else arHw2[j] = arHw[i];
// }
// arHw1.sort((a, b) => a - b);
// arHw2.sort((a, b) => b - a);
// arHw1.push(...arHw2);
// console.log(arHw1);

      
 

// expected [-10, 4, 28, 40, 27, 25, 17, 15, 13]
// write a comparator (a comparator returns <0 if first less then srcond,
//         >0 if first greated then second, ==0 if first equals second)
/********************************** */
// adding element/s at end of an array
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25)
console.log(ar);
const ar1 = [-8, 30, -57];
//ar.push(ar1); there will be added array but not separated numbers
//if you want to add separated a numbers, you should apply a spread operator ... :
ar.push(...ar1);
console.log(ar);
// for adding elements at beginning of array there is method "unshift"
//everything has been said about "push" will work for "unshift", only adds elements at beginning
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);


//abc123drtyugr
//method "splice" for inserting or replacing any elements in any place
//first argument - index for inserting or replacing
//second argument - number of the deleted elements (if 0 than splice will be aply only for insert)
//third argument - designates sequence of being inserting elements like push/unshift
ar.splice(2, 0, 1, 2);

console.log(ar); 
//removing (deleting)
let el = ar.pop();  //removes the last element and returns it
//el = -57; -57 will be remove from the array ar
el = ar.shift(); ///removes the first element and returns it
//el = 27; 27 will be removed from the array ar
console.log(el, ar);
ar.splice(3, 5); //remove 5 elements beginning from the one at index 3
/* console.log(ar); */
//includes, indexOf, lastIndexOf  ....... working for arrays too

//two dimensional arrays

// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 4, 5]];  
// const matrix2 = [[10, 20], [50, -5], [34, 28]];    

// function displayMatrix(matrix) {
//         for(let i = 0; i < matrix.length; i++){
//                 let row = '';
//                 for(let j  = 0; j < matrix[i].length; j++){
//                         row = row + matrix[i][j] + '  ';
//                 }
//                 console.log(row);
//         }
// }
//displayMatrix(matrix1);
//displayMatrix(matrix2);


//HW 12  
//write function
/* function matrixTransp(matrix){ */
        //TODO
        //return matrix with columns that are rows of the source matrix and
        //rows that are columns of the source matrix
        //example: source matrix [[1,2], [3,4], [5,6]]
        //result matrix: [[1,3,5], [2,4,6]]
        

/* } */
function matrixTransp(matrixSource){
        let col = matrixSource.length; // number columns in transp matrix
        let row = matrixSource[0].length;// number of rows in transp matrix;
        let resMatrix = []; // will be after transposition
             for (let i = 0; i < row; i++){
                        resMatrix[i] = [];    
                                for(let j = 0; j < col; j++){
                                        resMatrix [i][j] = matrixSource[j][i];
                                }
                        }
                return resMatrix; 
        }
 

function displayMatrix(matrix) {
                for(let i = 0; i < matrix.length; i++){
                        let row = '';
                        for(let j  = 0; j < matrix[i].length; j++){
                                row = row + matrix[i][j] + '  ';
                        }
                        console.log(row);
                }
        }
//test
let matrixSource = [[1,2], [3,4], [5,6]]; //matrixTransp = [[1, 3, 5], [2, 4, 6]]     
matrixTransp(matrixSource);    
displayMatrix(matrixTransp(matrixSource));


