// let fruits = [];
// fruits[0] = "apple";
// fruits[1] = "orange";
// console.log(fruits);

// let fruits = new Array ("Apple", "Orange");
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Mango"];
// // let strFruits = fruits.toString();
// // console.log(fruits);
// // console.log(strFruits);
// // console.log(typeof strFruits);

// let push = fruits.push("Pineapple");
// let pop = fruits.pop();
// let shift = fruits.shift();
// let unshift = fruits.unshift("Kiwi");
// console.log(fruits);

// fruits.splice(1, 1, "Lemon", "Grape");
// console.log(fruits);

// let colors = ["White", "Black"];
// let result = fruits.concat(colors);
// console.log(result);

let fruits = ["Apple", "Orange", "Mango"];
let text = " ";
function myFruits(item, index){
    console.log(index);
    text += item;
}
fruits.forEach(myFruits);
console.log(text);
// fruits.forEach((item) => (text += item));
// console.log(text);