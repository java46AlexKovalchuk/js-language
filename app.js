/**********HW-13 */ 
//1. Method myForEach:

// const myForEach = function(ar, callback){
//     for(let i = 0; i < ar.length; i++){
//         callback(ar[i], i, ar);
//     }
// }

// // test
//   let arr1 = [1, 2, 3, 4, 5];
//   let str1 = '';

// //create string with delimiter * :
// myForEach(arr1, n => str1 += n + '*'); 
// console.log(str1);

// //calculate the sum of elements of array arr1:
// let sum = 0;
// myForEach(arr1, n => sum += n);
// console.log(sum);

// //multiply by 2 each element of array arr1 and rewrite the array:
// myForEach(arr1, (n, i, arr1) => arr1[i] = n * 2);
// console.log (arr1);


// //**********HW-13 task2 *****/

// function myMap(arr, callback) {
//     let newAr = []; 
//       myForEach(arr, function (a, i, arr) {newAr.push(callback(a, i, arr))});
   
//           return newAr;
//     } 

//     //test
//     const ar5 = [1, 3, 5, 7, 9];
//     //let ar7 = ;
//     console.log(myMap(ar5, n => n *= 2));  


    /********* filter */
    const ar20 = [13, 17, 20, 23, 2, 40];
    const arEvenOdd = ar20.filter((n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
    console.log(arEvenOdd);
    /*************HW-14 task1 */
    //TODO write myFilter(array, callback) based on myForEach
    //callback - function with 3 possible parametres - current element, index, reference to array
    /************************* */
    const res = ar20.reduce((res, cur) => res + cur, 0);
    console.log(res);
    const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
console.log(max);
//reduce with no second argument
//const res = ar20.reduce((res, cur) => res + cur);


//TODO write myReduce(array, callback, initialResult) based on myForEach
    //callback - function with 4 parametres: accumulate result , current element, index, reference to array
    //if the user call does not contain initialResult, then the first element of the array 
    //will be considered as initial result (inthis case iteratinf begin from the second element of the array)
/****************************** */

//HW-14
// task.3
function getPersonsCity(persons, city) {
    return persons.filter(n => n.address.city == city);
}

function personsNoCity (persons, city) {
    const perNoCity =  persons.filter(n => n.address.city != city);
    const personsCity = persons.filter(n => n.address.city == city);
    const res = perNoCity.concat(personsCity);
    return res;
}
//const personsNoCity = persons.filter(n => n.address.city != city);
// task.4
// function movePersonsNoCityAtBeginnning(persons, city){
//     const personsNoCity = persons.filter(n => n.address != city);
//     const personsCity = persons.filter(n => n.address.city == city);
//     const personsNoCityFirst = personsNoCity.concat(personsCity);
//     return personsNoCityFirst;
    
//     //return notInCity = persons.filter(n => n.address.city !== city);
// }

// function getPersNotCityFirst(persons, city){

//     return getPersNotCity(persons, city).concat(getPersonsCity(persons, city));
// }

//test
// input: 

const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
];


//output:
console.log(personsNoCity(persons, 'Rehovot'));
// const residentsRehovot = getPersonsCity(persons, 'Rehovot');
// const residentsNotrehovot = movePersonsNoCityAtBeginnning(persons, 'Rehovot');
// console.log(residentsRehovot);
//console.log(residentsNotrehovot);

//console.log(persons);

//factory functions:
function createAddress(city, street) {
    return {city, street};
}
function createPerson(id, name, address) {
    return {id, name, address};
}

// console.log(notResRehovot.concat(residentsRehovot));
// console.log(getPersNotCityFirst(persons, 'Rehovot'));
