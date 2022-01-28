
 const euros = [29.76, 41.85, 46.5];
// const doubled = euros.reduce((total, amount) => {total.push(amount * 2)
//     return total;},[])
// console.log(doubled);
const above30 = euros.reduce((total, amount) => {amount > 30 ? total.push(amount) : undefined
 return total }, [])
console.log(above30);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
//  //const count = fruitBasket.reduce((tally, fruit) => { !tally[fruit] ? tally[fruit] = 1 : 
//  //   tally[fruit] += 1 
//  //    return tally} , {})
const count = fruitBasket.reduce((tally, fruit) => {
    if(!tally[fruit]) {
        tally[fruit] = 1;
    }
    else {
        tally[fruit] += 1;
    }
    //tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
}, {} );
console.log(count);

const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ];

const colors = data.reduce((total, amount) => {amount.c.forEach(color => total.push(color));
return total
}, []);
console.log(colors);
