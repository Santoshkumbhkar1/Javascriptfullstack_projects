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

else if (time<20){
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

