'use strict'
// what is function 
// simply a piece of code that we can reuse
// over and over again in our code.
// So it's a little bit like a variable
// but for whole chunks of code.
// So remember a variable holds value
// but a function can hold one or more complete lines of code.
// it recieve data and also return data 


function logger(){
console.log("hello i am from function ");
}

// calling /running /invoking function 
console.log(logger());
// console.log(logger()); we call it again and again and it recieve data and return data 

function fruitProcessor(appNum , orgNum){
    // console.log(`This is my Juice with ${appNum} apples and ${orgNum} oranges`);
    const juice =(`This is my Juice with ${appNum} apples and ${orgNum} oranges`);
    return juice;
}
// it will print our function 
console.log(fruitProcessor(4,5));
console.log(fruitProcessor(7,5));

// console.log();


// Function and Expression 

// Function is  declare using fucntion name and expression are writtern without the  function name expression are stored in other variables 

// i.e
// This is function 
function calcAge1(age){
    return (2024-age);
} 
console.log(calcAge1(2001));

// This is Expression means anonymous function 

 const calcAge2 =function(age){
 const n =2024-age;
 return n ;
 }

 console.log(calcAge2(2000),calcAge1(2001));


// Arrow function 

// IT is shorter and faster 

const age3=age =>2027-age; 
console.log( age3(1999));

const yearRetirement =(birthYear,firsName)=>{
    const age  =2025-birthYear;
    const retirement =70-age;

     return `${firsName} is retire in ${retirement}`;
}

console.log(yearRetirement(2001 ,"techJoint"));
console.log(yearRetirement(2007 ,"normal"));



 