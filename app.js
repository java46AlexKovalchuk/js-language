/****HW-12 ****/

//1. rewrite the given array: even elements by rise, odd elements - by down
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
const arHw1 = [];
const arHw2 = [];
let i = 0;
for (i = 0; i < arHw.length; i++){
         if(arHw[i] % 2 == 0){
         arHw1[i] = arHw[i]; 
        }
        else {
           arHw2[i] = arHw[i];
        }
 }

arHw1.sort((a, b) => a - b); 
arHw2.sort((a, b) => b - a);
arHw1.push(...arHw2);
//test

console.log(arHw1);


// 2. Transposition of matrix

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
 //function for output matrix
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



