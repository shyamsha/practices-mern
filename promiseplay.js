function makeApiCall(params) {
    const time = Math.round(Math.random() * 600)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const number = Math.round(Math.random() * 120)
            console.log(params,'-', 'number is',number, 'time is',time);
            // if (number%2==0) {
            //     resolve(number)
            // } else {
            //     reject('error:odd number')
            // }
            resolve(number)
        }, time);
    })
}
//sequentilly executing promises
 let n1, n2, n3
makeApiCall('n1')
    .then((number) => {
        n1 = number
        return makeApiCall('n2')
    })
    .then((number) => {
        n2 = number
        return makeApiCall('n3')
    })
    .then((number) => {
        n3 = number
        console.log(n1+n2+n3);
    })
    //this will return array of paralel
// Promise.all([makeApiCall('n1'), makeApiCall('n2'), makeApiCall('n3')]).then(() => { 
//    console.log(n1,n2,n3);
// })
// //this one return value
// Promise.race([Promise.reject(1),makeApiCall('n1'), makeApiCall('n2'), makeApiCall('n3')]).then((value) => {
//     console.log('result',value,n1,n2,n3);
// })
Promise.resolve(1)
  .then((x) => x + 5)
  .then((x) => { throw new Error('My Error') })//here error handle that y we can carry forward value if not handle throw a error with promise rejection
  .catch(() => 4)
  .then((x) => x + 4)
  .then((x) => console.log(x))
  .catch(console.error)
