// var name = "jatin";
// name = 30;
// console.log(name)


// function sum(a,b){
//     return a+b;

// }

// let ans= sum(5,9);
// console.log(ans)



// function canVote(age){
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let age = 15;
//  let ans=canVote(age);
// console.log(ans)



//objectin js

// function info(user1){
//     return(`my name is  ${user1.name} my age is ${user1.age} my gender is ${user1.gender}`)
// }


// let user1 = {
//     name:"jatin",
//     age: 18,
//     gender: "male"

// }
// let ans = info(user1)

// console.log(ans)






//assignment 3

// function canVote(user1){
//     if(user1.age>=18){
//         return "tou are legal to vote"
//     }else{
//         return "na na you cant vote"
//     }
// }
// let user1 = {
//     name:"jatin",
//     age: 15,
//     gender: "male"

// }
// let ans = canVote(user1)
// console.log(ans)





//create a funtion that take an array aof abject as input, and return the users whose age > 18 and are male

function verify(arr){

    let arr1 = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i].age>=18){
            arr1.push(arr[i]) 
        } 
        
    }
    return arr1;
   
    //else{
    //     return "no one valid";
    // }

}

let users=[{
    name: "jatin",
    age:20},
    {
        name: "karan",
        age:45
    },
    {
        name: "lamp",
        age:12
    },
    {
        name: "banpppn",
        age:10
    },
    {
        name: "lamdsss",
        age:55
    }
]

let ans = verify(users)
console.log(ans)
