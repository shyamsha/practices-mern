// PROMISE  
                
/* Every Promise() structure has 2 parts */
//First Part           
/* Create the Promise() and define the conditions of what is considered successful and not successful.*/
let promise7 = new Promise((resolve, reject) => {
    let dataReceivedSuccessfully = false
    /* This is an arbitrary variable and is NOT part of the Promise */
    if (dataReceivedSuccessfully)
        //This condition is considered successful, hence invoke resolve()
        resolve('Data Available!');
    if (!dataReceivedSuccessfully)
        //This condition is considered NOT successful, hence invoke reject()
        reject('Data Corrupted!');
})
//Second Part
/* Define what to do when the successful condition(i.e. resolve()) is / met, and what to do when the not successful condition(i.e.        / reject()) is met. */
promise7.then((message) => {
    console.log(message);
    /* define the resolve() function, 
    / in other words, what to do when the promise is successful. */
}).catch((message) => {
    console.log(message);
    /* define the reject() function, 
    / in other words, what to do when the promise is NOT successful.*/
})


//Passing Arrays and Objects as arguments
let dataReceivedSuccessfully = true;
//define the Promise
let promise8 = new Promise((resolve, reject) => {
    //construct the array or object you want to pass
    let some_array = [1, 2, 3, 4, 5];
    let some_object = {
        color: 'red',
        person: {
            name: "mike",
            age: '35'
        }
    };
    //define under what conditions to invoke resolve() and reject()
    if (dataReceivedSuccessfully)
        resolve(some_array);
    //passing an Array as the single argument
    else
        reject(some_object);
    //passing an Object as the single argument

});
//define the executing function for resolve() and reject()
promise8.then((message) => {
    console.log(`${message}`);
    //if dataReceivedSuccessfully=true, console.log shows 1,2,3,4,5
}).catch((message) => {
    console.log(`error`);
    console.log(`${message.color}`);
    //if dataReceivedSuccessfully=false, console.log shows "error" "red"
})

//more than one promise
var isRequestComplete = true;
promiseone = new Promise((resolve, reject) => {
    if (isRequestComplete)
        resolve("data received from  one");
})
promisetwo = new Promise((resolve, reject) => {
    if (isRequestComplete)
        resolve("data received from two");
})
promisethree = new Promise((resolve, reject) => {
    if (isRequestComplete)
    setTimeout(() => {
        resolve("data received from three");
    }, 2000);
    //We simulate a delay in data receipt by using setTimout() 
})

promiseone.then((message) => {
    console.log(message);
    return promisetwo; //return promise2 when promise1 resolves.
}).then((message) => {
    console.log(message);
    return promisethree; //return promise3 when promise2 resolves.
}).then((message) => {
    console.log(message); //resolve promise3.
})
//Note that in the above example, Promises resolve in sequence one after another.

// .all() example
var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from requestComplete 1");
})
promise2 = new Promise((resolve, reject) => {
    if (requestComplete)
        resolve("data received from requestComplete 2");
})
promise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("data received from requestComplete 3");
    }, 2000);
})
Promise.all([promise2, promise1, promise2, promise3,Promise.reject(1),1]).then((message) => {
    console.log(message)
})

// .race() example
var isCompleted = true;
promise4 = new Promise((resolve, reject) => {
    if (isCompleted)
        resolve("i won from 1");
})
promise5 = new Promise((resolve, reject) => {
    if (isCompleted)
        resolve("i won from 2");
})
promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("i won from 3");
    }, 5000);
})
Promise.race([Promise.reject(1),promise4, promise5, promise6,promise7]).then((message) => {
    console.log(message)
})
