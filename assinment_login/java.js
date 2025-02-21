console.log('Java Class');
console.log('Java Script Class')
console.log('My Java Class')
console.log('Class of Java')
console.log('JS Class')
console.log('Java Only Class')
console.log('Cophild Js')
console.log('js of Cophild')
console.log('JavaScript')
console.log('java.Html')

var JavaClass = "true";// is not Rec
let Java =  23;// it can change
const JavaClass_Cophild = "Daniella, Leke, KC, Raphael, Isaiah, Ahdams, Prince "// it cannot be changed
 
console.log(JavaClass)
console.log(Java)
console.log(JavaClass_Cophild)

let Prince = "Prince is My FisrtName"
const Nnamani = "Nnamani is My Surname"

console.log(Prince,Nnamani, Java)

let num1 = 123;// it can change
let num2 = 12;;// it can change
let num3 = 1;;// it can change
let num4 = num1 +3// it can change

let num7 = 48;
let num6= 12;
  
const sum = num7 + num6
console.log(sum)
 
const divide = sum / num6
console.log(divide)

const Addition = num1 + num2 + num3;
console.log(Addition)

var NotRecommended = "Not Recommended";

let NotRecommended2 = 2;

var NewRec = NotRecommended + "Done writing";
console.log(NewRec);
// assignment syntax

console.log(5 == 5);
console.log(5 === 6); //strickt equality 
console.log(5 !== 5);
console.log(4 >= 3);

if( NotRecommended2 === 1 && num4 ===126){
    console.log("Your Condition is Perfect")
}else{
    console.log("Error the condition not met")
 };
console.log(5 !== 9);
console.log(NotRecommended2++);//Pre Increment
console.log(++NotRecommended2);//Post Increment
console.log(--NotRecommended2);//Post Increment
console.log(NotRecommended2--);//pre Increment

console.log('Hello world my javascript is working')

let animal1 = "Dog"
let animal2 = "cat"
let animal3 = "Bird"

console.log(animal1, animal2, animal3)

const classmate = prompt("Enter classmate name No 1");
const classmate1 = prompt("Enter classmate name No 2");

if (classmate == "Prince" && classmate1 == "Leke"){
    console.log(classmate, "and", classmate1, "are my classmate" );

}else if (classmate == "Prince" && classmate1 != "Leke"){
     console.log(classmate, "is my classmate", "but", classmate1, "is not my classmate");

}else if (classmate != "Prince" && classmate1 == "Leke"){
     console.log(classmate, "is not my classmate", "but", classmate1, "is my classmate");

}else if( classmate != "Prince" && classmate1 != "Leke"){
    console.log(classmate, "and",  classmate1, "are not my classmate");

}else{
    console.log("error in syntax")
}
    




const Email = prompt("Enter Email");
const Username = prompt("Enter your Username")
const Password = prompt("Enter Your Password")

if(Email == "prince@gmail.com" && Username == "Prince2005" && Password == "12345"){
    console.log("You are welcome", Username, "to your Home Page or Dashboard");

} else if(Email != "prince@gmail.com" && Username == "Prince2005" && Password == "12345" ){
    console.log("Your", "Username", "and", "Password", "are Correct", "but Your", "Email", "Is Wrong")

}else if(Email == "prince@gmail.com" && Username != "Prince2005" && Password == "12345"){
       console.log("Your Email and Password are Correct but Your Username is wrong");

}else if(Email == "prince@gmail.com" && Username == "Prince2005" && Password != "12345"){
    console.log("Your", "Email", "and", "Username", "are Correct", "but Your","Password", "wrong")

}else{
    console.log("error in syntax")
}
   