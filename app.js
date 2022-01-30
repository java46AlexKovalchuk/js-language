//HW-15 part1.
// REFACTORING:

function dispStat (ar){ 
  //use method reduce and ternary operator instead "if"
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

