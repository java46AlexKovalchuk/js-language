
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
function displayOccurrences(array) {
  const res = {};
  for (let i = 0; i < array.length; i++) {
          if (res[array[i]] === undefined) {
                  //string as content of array[i] occures first time
                  res[array[i]] = 1;
          } else {
                  res[array[i]] = res[array[i]] + 1;
          }
  }
  //console.log(res) //-> intermediate debug log
  Object.entries(res).sort((e1, e2) => {
          const res = e2[1] - e1[1];
          return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
  }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


}
const ar =  ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);



// function dispStat (ar){ 
// const objArray = ar.reduce((total, elem) => {total[elem] = (total[elem] || 0) + 1; 
// return total; }, {});

// Object.entries(objArray).sort((e1, e2) => {
//   const res = e2[1] - e1[1];
//   return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
// }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
// }

function dispStat (ar){ 
  
  const objArray = ar.reduce((total, elem) => {total[elem] = (total[elem] || 0) + 1; 
  return total; }, {});
  
  Object.entries(objArray).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
  }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))
  }
//test
const arNames = ['john', 'mary', 'sid', 'john', 'tom', 'mary', 'tom', 'john'];
dispStat(arNames);



