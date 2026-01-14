// function greet (){
//      console.log("Hello");
// }
// greet();

// let myFunc = function () {
//     console.log("myFunc");
//     return "Hello";
// };
// console.log(myFunc());

// function sum (num1 = 10, num2 = 5){
//     return num1 + num2
// }

// console.log(sum(2,10));
// console.log(sum(30, 50));
// console.log(sum());

// (function name(name){
//     console.log(name);
// })("John");

// let name = myName();

// function myName(){
//     console.log("Doe");
// }

// function myFruit (name, price) {
//     this.name = name;
//     this.price = price;
// }

// let myObj = new myFruit ("Apple", "$10")
//     console.log(myObj);
//     console.log(myObj.name);
//     console.log(myObj.price);

// let username = {
//     name: "John",
//     age: 19,
//      parent:{
//         FatherName: "Jobs",
//         MotherName: "Amelia",
//      },
// };
// console.log(username.parent.FatherName, username.parent.MotherName);

// delete username.age;
// username.name = "Rose";
// console.log(username);

// function user(name, age){
//     return name + age;
// }

// let user = (name, age) => name + age;
// console.log(user("John", 20));

// let user = {
//     name: "John",
//     age: 20,
// };

// let admin = user;
// admin.name = "Rose";
// user.name = "Doe";
// console.log("user", user);
// console.log("admin", admin);

// let clone = {};
// for (let i in user){
//     clone[i] = user[i];
// }
// clone.name = "Rose";
// user.name = "Doe";
// console.log("user", user);
// console.log("clone", clone);

let a = {};
let b = a;
console.log(a == b);
console.log(a === b);