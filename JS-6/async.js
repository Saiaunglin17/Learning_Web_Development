// console.log("Async Start");

// setTimeout(() => {
//     console.log("This runs after 2 seconds")
// }, 2000);

// console.log("async end");

console.log("Sync start");

function doTask(){
    for (let i = 0; i < 10000000; i++){

    }
    console.log("Sync task finish");
}
doTask();
console.log("Sync end");