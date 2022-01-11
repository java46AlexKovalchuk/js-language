console.log("Hello World");
//output for var: 3 3 3 
for (let i = 0; i < 3; i++){
   setTimeout (function() {
        console.log(i)});
    }

   // for (let i = 0; i < 3; i++);{
    
     //   console.log(i);
    //}   
    //console.log(i);
    const fun = function(a, b) {
        return a + b;
    }
    let a = 5;
    //console.log(a ** 2);
    //console.log(fun(10,20));
   // console.log(fun ** 2);
   console.log("12" + 12, '"12" + 12');
   console.log("12" - 12);
   console.log("ab" - 12);
   //sometimes there is a need to explicit conversion from string to the number
   //"+" unary is the simplest way for the explicit conversion of a string to numb
    console.log('+"12" + 12 = ${+"12" + 12}');
    //home work#10
    //1.using only two letters "a", "s" print out word "ananas" case insensitive
    //2.write function calculate that can perform any arithmetic operations on two numbers
    //3.write any exapmle for running the following expression fun(5)(10, 3)
    console.log(+"12" + 12);
    console.log('12 + 12'); 
    console.log(`${+"12" + 12}`);

