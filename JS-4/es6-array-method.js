let users = [
    {
        name: "Person 1",
        age: 21,
        city: "MDY"
    },
    {
        name: "Person 2",
        age: 25,
        city: "YGN"
    },
    {
        name: "Person 3",
        age: 16,
        city: "YGN"
    },
];

//  console.log(users[0].name, users[0].age);
//  console.log(users[1].
name, users[1].age;

 let getAllNames = users.map((user) => {
    console.log(user);
    return user.name;
 });
 console.log(getAllNames);

 let getUserFromYangon = users.find((user) => 
    user.city === "YGN"
 );
 console.log(getUserFromYangon);