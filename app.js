/***Homework 11***/

const codingString = "!@#$"; //entering coding string and encoded number
let num = 55;

function encode (num, codingString) {
    let res = "";
    const base = codingString.length;
    
    // loop for check repeaded symbols in the code string
    for(let i = 0; i < codingString.length - 1; i++){
        if (codingString.indexOf(codingString[i]) != codingString.lastIndexOf(codingString[i])){
           console.log(`WARNING: code string contains repeated symbols like ${codingString[i]}`);
        }
    }
    // get number in the system that specified by base
    do {
    const digit = Math.trunc(num % base);  
    const symb = getSymbol(digit, codingString);
    res = symb + res;
    num = Math.trunc(num / base);
    } while(num >= 1);
    return res;
}
    //get the corresponding symbol from coding string
function getSymbol(digit, codingString){
return codingString[digit];
}

console.log(encode(num, codingString));

