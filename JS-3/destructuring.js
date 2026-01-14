// let a,b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50, 60];

// console.log("a", a);
// console.log("b", b);
// console.log("rest", rest);

let user = ["John", 20, "Yangon", 'white'];
let [username, age, ...city] = user;
console.log(username, age, city); 