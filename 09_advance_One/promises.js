const promisOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is Completed')
        resolve();
    },1000)
}) 

promisOne.then(function() {
    console.log("Promise consumed")
})

// promis two

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed")
        resolve();
    },1000)
}) .then(function(){
        console.log("task is completed")
    })

    // promise three

    const PromiseThree = new Promise(function(resolve, reject) {
        resolve({userName: "Aditya sing", emailId:"akash.akash.com"})
    })
    PromiseThree.then(function(user){
        console.log(user)
    })

    // promise four

    const PromiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false;
            if (!error) {
                resolve({userName: "Akash", emailId: "Akash.example.com"})
            } else {
                reject(`error: Something went wrong`)
            }
        },1000)
    })

    PromiseFour
    .then((user) => {
        console.log(user)
        return user.userName
    })
    .then((userName) => {
        console.log(userName)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log(`Ther Promis is Either resolved or rejected`)
    })


    const promiseFive = new Promise((resolve, reject) => {
             setTimeout(function(){
            let error = false;
            if (!error) {
                resolve({userName: "Javascript", password: "1234567890"})
            } else {
                reject(`error: Js went wrong`)
            }
        },1000)
    })

    async function consumePromiseFive() {
        try {
            const response = await promiseFive
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    // consumePromiseFive()

    // get all user try catch me

    async function getAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log("E:", error )
        }
    }

    getAllUsers()

    // get allusers in .then catch me 

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => console.log(erro))