
//  const euros = [29.76, 41.85, 46.5];
// // const doubled = euros.reduce((total, amount) => {total.push(amount * 2)
// //     return total;},[])
// // console.log(doubled);
// const above30 = euros.reduce((total, amount) => {amount > 30 ? total.push(amount) : undefined
//  return total }, [])
// console.log(above30);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce((tally, fruit) => { !tally[fruit] ? tally[fruit] = 1 : 
 tally[fruit] += 1 
 return tally} , {})
// const count = fruitBasket.reduce((tally, fruit) => {
//     if(!tally[fruit]) {
//         tally[fruit] = 1;
//     }
//     else {
//         tally[fruit] += 1;
//     }
//     //tally[fruit] = (tally[fruit] || 0) + 1 ;
//   return tally;
// }, {} );
console.log(count);

// const data = [
//     {a: 'happy', b: 'robin', c: ['blue','green']}, 
//     {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
//     {a: 'sad', b: 'goldfish', c: ['green','red']}
//   ];

// const colors = data.reduce((total, el) => {el.c.forEach(color => {total.push(color)}); 
// return total}, []); 
//   console.log(colors);
  
// const uniqColors = data.reduce((total, el) => {el.c.forEach(color => {
//   if (total.indexOf(color, ) === -1){
//     total.push(color);
//   }
//   })
//   return total;
// }, []);
// console.log(uniqColors);
// const arStr1 = ['jhg', 'aer', 'dfg', 'jkl'];
// const arOrd = arStr1.sort(); 
// console.log(arOrd);

// const test = ['hgf', 'fdgfd', 'jhfhggd', 'dsads'];
// function displayOccurrences(array) {
//   const res = {};
//   for (let i = 0; i < array.length; i++) {
//           if (res[array[i]] === undefined) {
//                   //string as content of array[i] occures first time
//                   res[array[i]] = 1;
//           } else {
//                   res[array[i]] = res[array[i]] + 1;
//           }
//   }
//   //console.log(res) //-> intermediate debug log
//   Object.entries(res).sort((e1, e2) => {
//           const res = e2[1] - e1[1];
//           return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
//   }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


// }
// const ar =  ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
// displayOccurrences(ar);



// function dispStat (ar){ 
// const objArray = ar.reduce((total, elem) => {total[elem] = (total[elem] || 0) + 1; 
// return total; }, {});

// Object.entries(objArray).sort((e1, e2) => {
//   const res = e2[1] - e1[1];
//   return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
// }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
// }

function dispStat (ar){ 
  
  const objArray = objOccurances(ar);
  //ar.reduce((total, elem) => {total[elem] = (total[elem] || 0) + 1; 
  //return total; }, {});
  
  Object.entries(objArray).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
  }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
  }

function objOccurances(ar){
  return ar.reduce((total, elem) => {total[elem] = (total[elem] || 0) + 1; 
    return total; }, {});
}

//hw-15 part 2
function countBy(ar, callBackFunc){
   return ar.reduce((tot, el) => {tot[callBackFunc(el)] = (tot[callBackFunc(el)] || 0) + 1; return tot;}, {});
}


  //test
const arNames = ['john', 'mary', 'sid', 'john', 'li', 'tom', 'mary', 'tom', 'john'];

dispStat(arNames);
const statArNames = countBy(arNames, element => element.length);
console.log(statArNames);

//hw-15 part 2
// write useful function countBy(array, callbackFun) that returns object
// with keys as grouping criteria  and values as the occurrence counts

//where array - any array, callbackFun - function returning grouping criteria
//examples:
// const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(arr, element => Math.floor(element))
//result: statistics -> {"6": 3, "7":1}
// const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(arr, element => element.length)
//result: statistics -> {"4": 3, "2":1}
//const arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
// {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ]
//const statistics = countBy(arr, element -> element.age)
//result statistics -> {"25":2, "50":1, "70":1}


// const testAr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
//  {age: 25, id: 123, name: 'Vasya'}, {age: 70, id: 123, name: 'Vasya'} ];

//  const testAr1 = ['qwe', 'qrt', 'qazx', 'as', 'fg', 'jkhg', 'f'];

//test callback

function each (ar, callback){
  let result = [];
  for(let elem of ar) {
  result.push(callback(elem));    //call callback
  }
  return result;
}

const ar1 = ['qwe', 'ert', 'ghj'];  
const callback = (num => num.split('').reverse().join(''));
const str2 = each(ar1, callback);
console.log(str2);

// let arRes = each(ar1, callback);
// // let arRes = each(ar1, function (num){
// //   return num ** 2;
// // });



