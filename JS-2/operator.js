// let num1 = 10;
// let num2 = 2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// num1++;
// num1--;
// console.log(num1);

// let firstName = "John";
// let lastName = "Jobs";
// // let result = firstName + " " + lastName;
// // let result = `${firstName} ${lastName}`;
// let result = "My name is ";
// result += "John";
// console.log(result);

// console.log(10 === "10");
// console.log(10 == "10");
// console.log(10 !== "10");
// console.log(10 > "10");
// console.log(10 >= "10");
// console.log(10 < "10");
// console.log(10 <= "10");

// let age = 16;
// let result = age>=16 ? "adult" : "child";
// console.log(result);

// let username = "John";
// console.log(username == "John");
// console.log(typeof username == "number");
// console.log(username == "John" || tyoeof username == "number");
// let result = !(username == "John");
// console.log(result);

// let myFruit = "Apple";
// switch (myFruit){
//     case "Apple":
//     console.log("This is Apple");
//     break;
//     case "Orange":
//     console.log("This is Orange");
//     break;
//     default:
//     console.log("Other Fruits");
//     break;
// }

// let day = 12;

// if (day === "Monday"){
//     console.log ("Today is Monday");
// }
// else if (typeof day === "string"){
//     console.log("This is other string");
// }
// else{
//     console.log("Other");
// }

let colors = ["white", "black", "pink", "blue"]
// for (let i = 0; i < colors.length; i++){
//     console.log(color[i]);
// }

// for (let i = 0; i <= 100; i++){
//     console.log(i);
// }

// for (let color of colors){
//     console.log(color);
// }

// let username ="John";
// for (let i of username){
//     console.log(i);
// }

// let person = {
//     name: "John",
//     age: 20,
//     city: "Yangon",
//     color: "White",
// };

let text = "";
for (let i = 0; i< 10; i++){
   if (i === 2){
    continue;
   } 
   text += i;
}
console.log(text);