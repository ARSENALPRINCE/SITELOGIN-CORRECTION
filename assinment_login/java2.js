let isLoggedIn = true;
if (isLoggedIn == true){
    console.log("Welcome back!")
}else{
    console.log("Please Log in.")
}

//Ternary Operators
let isLoggedIn2 = true;
console.log(isLoggedIn ? "Welcome back!" : "Please Log In");


// switch statement
let day = 7;
 switch(day) {
    case  1:
    console.log("Monday")
    break;
    case 2:
    console.log("Tuesday")
    break;
    case 3:
    console.log("Wednesday")
    break;
    case 4:
    console.log("Thursday")
    break;
    case 5:
    console.log("Friday")
    break;
    case 6:
    console.log("Saturday")
    break;
    case 7:
    console.log("Sunday ")
    break;
 }
 //loop
 for(let i=1; i<=5; i++){
     console.log("Iteration:", i);
 }

 let count = 1;
 while( count<=5){
     console.log("count:", count);
     count++; 
 }

 let num = 2;
 do{
    console.log("Number:", num);
    num++;
 } while (num <= 6);




for(let a = 1; a <= 5; a++) {
    if (a === 3) continue; //skip3
    console.log(a);  
}

for(let ab =1 ; ab <= 15; ab++) {
    if (ab === 12) break;// stops at 12
    console.log(ab);
}
for(let i = 0; i < 21; i+=3) {
    console.log(i);
}
    
function greet(){
    console.log("Hello, World");
}
greet();

function code(){
    console.log("Java, World")
}
code();

function multiplication(kc , lk , dn){
    return kc * lk * dn;
}

let sum = multiplication(5,3,2);
console.log(sum);

// writing the variable as a function
const multiply = function(x,y,w){
    return x * y - w;
};
console.log(multiply(4 , 2 , 5));
 
//shoter version of function arrow function =>
const substract =(a,b) => a-b;
console.log(substract(10,3));

    const greetUser =(name) =>{
        console.log("Hello,"+ name, "your Welcome");     
    };
    greetUser("Alice");
    
    //IIFE (immediately invoked function expressios)
    
(function () {
      console.log("This runs immediately");
    })();
    
    (function (name) {
        console.log(`Hello, ${name}!`);
    })("john");  

     // DAta struccture and its coutdown start from 0
    let fruits =["apple","banana","Cherry"];
    console.log(fruits[2]);// output cherry bcos its set number 2
    console.log(fruits);// output it brings the whole variable bcos its not an array

    /* array methods
    .push(value); add value at the end of an array
    .pop(); Removes the last element
    .shift()
    .unshift(value); add value at the beginnin
    .map(fn); creating a new array by applying fn
    .filter(fn)
    .for each(fn)*/
    fruits.push("Mango")
    //console.log(fruits.push("Mango"));
    console.log(fruits);

    fruits.pop();
    console.log(fruits);
    
    fruits.shift();
    console.log(fruits);

    fruits.unshift("Grape");
    console.log(fruits);

    //Multiply each number by 4
    let numbers =[1,2,3,4,5];

    let doubled = numbers.map(num => num * 4);
    console.log(doubled);

    // numbers greater than two
    let filtered = numbers.filter(num => num > 2);
    console.log(filtered);

    let arrayloop = numbers.forEach(num => num * 2);
    //console.log(arrayloop);

    numbers.forEach(
        num => {
    console.log(num * 2)
        } 
    );
   // console.log(num*3);
    //console.log(num*4);
    //console.log(num*5);

    //Objects is the collection of key value pairs
    let person = {
        name: "Alice",
        age: 1000,
        isStudent: false,
        city: "Lagos", 
    };


   // updated the object 
   // if you want to remove a pair in your object type delete person."pair"
   delete person.isStudent;
   console.log(person.isStudent);
   console.log(person.age * 3);
   console.log(person.name);
   console.log(person.city);
   console.log(person);

// Dom Manipulation
//getElementById it select a single elemnet by id
   let heading = document.getElementById("java_ader");
   console.log(heading.innerText);

   //Queryselector & querySelectorAll &getElementbytags & getElementby
   let firstparagraph = document.querySelector("p");
   let allparagraphs = document.querySelectorAll("p");

   console.log(firstparagraph.innerText);

   //console.log(allparagraphs.innerHTML);
   allparagraphs.forEach(allparagraphs =>{
   console.log(allparagraphs.textContent);
   });
   document.getElementById("container").innerHTML = "<h2>New content</h2>";

   function reveal(){
    console.log("Reveal Hidden content")
   };

   let button = document.getElementById("myButton");

   button.addEventListener("click", function(){
    alert("Button Clicked!");
   });
// i gave my listed items an id = hoverbox and then did getelement(id)
   let variable = document.getElementById("hoverBox");

   variable.addEventListener("mouseover",function(){
    variable.style.color ="Red";
   });

   variable.addEventListener("mouseout", function(){
    variable.style.color = "yellow";
   }); 

   let variable2 =document.getElementById("hoverBox2")

   variable2.addEventListener("mouseover", function(){
    variable2.style.color = "red";
   });

   variable2.addEventListener("mouseout", function(){
    variable2.style.color = "yellow";
   }); 