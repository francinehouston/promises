// Promises
// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef= document.querySelector("email");
// console.log(emailRef)
//  1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });

// 2. Aynsc/Await
// async function main () {
//  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//  const data = await response.json();
//  console.log(data)
//  emailRef.innerHTML= data.email;
// }
// main();

const statusRef = document.querySelector('.status');
const videoRef = document.querySelector('.video');

function getSubscriptionStatus() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("VIP")
        }, 2000);
       
    })   
}
// Then
// getSubscriptionStatus() .then (response => console.log(response))

// aync/await

function getVideo(getSubscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (getSubscriptionStatus === "VIP"){
            resolve("show video")
        }
        else if(subscriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else {
           reject("no video") 
        }
    })

}
async function main() {
    const status = (await getSubscriptionStatus())
// console.log( await getSubscriptionStatus())
    statusRef.innerHTML = status;
    console.log( await getVideo(status))
}

main();

//  Challenge
// 1. Create a function called 'getVideo'
// accept a parameter called 'subscriptionStatus'
// return a new promise inside of the function that:
// if "VIP" resolve("show video")
// if "FREE" resolve("show trailer")
// otherwise reject("no video")
// console.log the result of getVideo(status) in main()
