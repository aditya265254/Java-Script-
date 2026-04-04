const promisOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is Completed')
    },1000)
}) 

promisOne.then(function() {
    console.log("Promise consumed")
})