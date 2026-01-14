// function greet (){
//     console.log("Hello");
// }
// greet();

// let myFunc = function (){
//     console.log("MyFunc");
//     return "Hello";
// }
// console.log(myFunc());

//  function sum (num1, num2){
//     return num1 + num2
//  }
// console.log(sum(3,4));
// console.log(sum(6,8));
// console.log(sum(2.2, 4.13));

// (function name(name){
//     console.log(name);
// })("John");

// let name = myName();
// function myName(){
//     console.log("Doe");
// }

// function myFruit (name, price){
//     this.name = name;
//     this.price = price;
// }
// let Fruits= new myFruit("Apple","$10")
// console.log (Fruits);
// console.log (Fruits.name);
// console.log (Fruits.price);

// let username = {
//     name: "John",
//     age: "19",
//     parent:{
//         FatherName: "Jobs",
//         MotherName: "Amelia"
//     }
// };
// console.log (username.parent.FatherName);
// console.log (username.parent.MotherName);
// delete username.age;
// username.name = "Rose";
// username.parent.FatherName = "Smith";
// delete username.parent.MotherName;
// console.log(username);

// let user = (name,age) => name + age;
// console.log(user("John","20"));

let user = {
    name: "John",
    age: "19"
}
// console.log(user);

// let admin = user;
// user.name = "Doe";
// admin.name = "Rose";
// console.log("Admin", admin);
// console.log("User: ", user);

let clone = {};
for (let i in user){
    clone[i] = user[i];
}
clone.name = "Rose";
user.name = "Doe";
console.log("User: ", user);
console.log("Clone: ", clone);

// let a = {};
// let b = a;
// console.log(a == b);
// console.log(a === b);

// let a, b, rest;
// [a, b, ...rest] = (10, 20, 30, 40, 50, 60);
// console.log("a", a);
// console.log("b", b);
// console.log("rest", rest);

// let user = ["John", 20, "Yangon", 'white'];
// let [username, age, ...city] = user;
// console.log(username, age, city); 