// for printing elements of an array using for of loop
// const arra1= ["hello " ,"rohan ", "sohan " ,"monu ", "gona"];

// for (const i of arra1) {
//    document.write(i);
// }

// For each  loop pass in anonymous callback function 

const words =["hello" ,"mona" ,"sona" ,"gona"];

const capWords=words.forEach((word ,index ,words )=>{
words[index] =word[0].toUpperCase()+word.substring(1);
});

console.log(words)

// Create an array of numbers 
const arrNum =[22 ,44, 34, 55, 66, 89 ,30];

// creat a variable to hold the sum 
let sum =0;

// create the adder function which takes the parameter og munber and add with sum variables.



function adder(n){
    sum=sum+n;
    return sum;

};
let  last;
for (const i in arrNum) {
  last = adder(arrNum[i]);

}

console.log(last);

// in advance javascript

let numbers =[1,2,3,4,5,6];
let numSum =0;
function numAdder(n){
    numSum+=n;
}
numbers.forEach(numAdder);
// arrNum.forEach(numAdder);
console.log(numSum);
// console.log(sum);



// map method  map()

let Numbers =[1,2,3,4,5]
// map method will not modify the exiting array but only perform operation given by us.

let double =Numbers.map(num=>num*2);
console.log(double);
console.log(Numbers);

let peoples =[
    
    {firstName:"mohan" ,lastName:"sharma"},
    {firstName:"sohan" ,lastName:"sharma"},
    {firstName:"jeevan" ,lastName:"sharma"},

]

const results =peoples.map(person=>{
    return [person.firstName ,person.lastName];
})

console.log(results);
document.write(results);
console.log(peoples);// just for developer purpose.

// filter method filter()

const songs =[
  {name:"Luck you" ,duration: 4},
  {name:"just like you " ,duration: 5},
  {name:"remains silent " ,duration: 2},
  {name:"banno re" ,duration: 3}

]

// const finSong= songs.map(n=>{
//     return n.name;  
// })
const finSong =songs.filter((n)=>n.duration>3);

document.write(finSong);// it will give only obejct object and we will not used din broser rendering.













