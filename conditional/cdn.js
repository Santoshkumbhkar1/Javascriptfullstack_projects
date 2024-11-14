let  a =20;
let b  = 20;

if(a>b){
    console.log("a is grater than b");  
}

else if(a<b) {
    console.log("a is less than b ");
}
else{
    console.log("both are equal");
    
}

// 2nd 

let time  =20 ;
let greetings;

if (time<5){
    greetings ="Good morning😂😂😁😁";
}

else if (time>5){
    greetings ="Good morning😂😂😁😁";
}

else{
    console.log("balle balle😎😎😍 ");
    
}


// 3rd This is short exercise

let password = "rohansingh";
let pass_Length =password.length;

if(pass_Length==8){
    console.log("Password is too short");
    
}
else if(pass_Length>=8){
    console.log("Password is long and good  ");
    
}
else{
    console.log(" Pleas eprovide ");
    
}

//  switch statements  
//  it controls the flow of our program 

// switch(expression){
//   case x:
//   print ;
//   break;
//   case y:
//   print;
//   break; 
   
// }

let x =0;
let text;

switch (x) {
    case 0:
        text ="off";
        console.log(text);
        break;
    case 1:
         text ="on";
         console.log(text);
         
         break;

    default:
        text ="no value are you robot 😎😣";
        console.log(text);
        
        break;
}

// For loop in javascript 

// pringting numbers from to 100 using for loop

for (let i = 0; i <= 100; i++) {
    // const element = array[i];
    console.log(i);
}

// while loop 

let j=1;
while (j<=10) {
   console.log("mrcomeback" , j);
    j++;
}

//  LOGICAL OPERATOR 

// 1. -> lOGICAL AND (&&)
//  true if both the operands/boolean values are true, else give to false.

// 2 . logical OR (||)
// True if the either of the logical operands/boolean is true.valueOf

// 3.Logical NOT(!)

//  It gives false if operands /boolean is true
//  and gives true if operands/boolean is false 


let passwordTwo ="fullstack-javascript";

if(passwordTwo.length>=8 &&passwordTwo.includes("java")){
    console.log("good to sea you buddy");
}

else{
    console.log("Go from here and learn JAVASCRIPT COurse😛😛");
}


//  data structure 

const num  =['eat' , 'go' ,'sleep', 'birth'];

// Accessing items from our array 

for(let n =0; n<num.length;n++){
    console.log(num[n]);
}

// Nested array or Two D array

const nesArray =['one' ,['two' ,'Three'] ,'four' ,'Five' ,'Six'];

console.log("i am from nested   Array ",nesArray[1][0]);




//  some methods used  on array 
const fruits =["jam " ,"apple" , "banana" , "Mango"];

console.log(fruits);

// shift method will delete first element of an array

fruits.shift();
console.log(fruits);

// pop method will delete last element from an array

fruits.pop();
console.log(fruits);

// unshift method add an item to the beginning of the aaray

// fruits.unshift("from unshift method");
// console.log(fruits);

const pl = ["python " ,"Golang ", "java"  , "php" ];
const numb_ =[3, 5, 6, 7, 8];

console.log(pl.includes("java"));
console.log(pl.join("😎"));
console.log((pl.reverse()));
console.log((pl.slice(0,2)));







