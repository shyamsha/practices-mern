let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done');
    }, '1l0')
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.error(err)
});

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('whoops!'));
//     }, 1000)
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.error(err)
// });
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('done2');
    }, 0)
}).then((result) => {
    console.log(result)
}).then((res) => {
    console.log(res*'catch')
}).catch((err) => {
    console.error(err)
});

//var i = 2;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }
//console.log(i)
let promise4 = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);//it not reslove becsuse its only once resolve
});

promise4.then((result) => {
    console.log(result*2);
})

function dealy(sec) {
    return new Promise(resolve => setTimeout(() => {
        resolve('sHyaM');
    }, sec))
}
dealy('jh').then((r) => {

    console.log(r);
}).catch((err) => {
    console.log(err);
})

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve("Whoops!");
//     }, 1000);
//   }).catch('ok');
//   let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise fetch(github url)
//   let requests = urls.map(url => fetch(url));
  
//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => alert(`${response.url}: ${response.status}`)
//     ));
//     let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     // all responses are ready, we can show HTTP status codes
//     for(let response of responses) {
//       alert(`${response.url}: ${response.status}`); // shows 200 for every url
//     }

//     return responses;
//   })
//   // map array of responses into array of response.json() to read their content
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then(users => users.forEach(user => alert(user.name)));
