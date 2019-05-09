// let subcat = [{
//     "id": 1,
//     "ele": {
//         "sub1": "mobiles",
//         "sub2": "A.C's",
//         "sub3": "laptops"
//     }
// }, {
//     "id": 2,
//     "cloths": {
//         "sub1": "gence",
//         "sub2": "T-shirts",
//     }
// }]
// //let user = JSON.parse(subcat)
// //console.log(user);
//find the key of maximum value 
//let obj = {
//     a: 12,
//     c: 21,
//     l: 51,
//     d: 10
// }
// let obj1 = {
//     12: "m",
//     21: 'c',
//     50: 'b',
//     10: 'a'
// }
// console.log(Object.keys(obj).sort());
// // let key = Object.values(obj).sort((a, b) => a - b)
// // let index = key[key.length - 1]

// // for (const key in obj) {

// //     if (obj[key] == index) {
// //         console.log(key + ':' + obj[key]);

// //     }
// // }
// // const arr = ['cat', 12, 2.5, true, 'dog', 'fish'];
// // for (let i in arr) {
// //     console.log(i)
// // }
// const string = 'hello';
// for (let character in string) {
//     console.log(character, string[character])
// }

// // for (let i = 0; i < subcat.length; i++) {
// //     console.log(subcat[i].ele)
// // }

//number to string
// let number = 15
// let alpha = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thertheen', 'fourtheen', 'fiftheen', 'sixtheen', 'seventheen', 'eightheen', 'ninetheen']
// let bigger = ['twenthy', 'thirthy', 'fourthy', 'fifthy', 'sixthy', 'seventhy', 'eighty', 'nighty', 'onehundared']
// //let split = alpha.join('')
// //console.log(split);
// for (let i = 0; i < alpha.length; i++) {
//     if (number == Math.abs(i + 1)) {
//         // console.log(alpha[i])
//     } else if (number >= 20) {

//     }
// }
//difference of async programing
// for (let i = 0; i < (str = 'hello').length; i++) {
//     setTimeout(function () {
//         console.log(str[i]);
//     }, 2000)
// }
// for (let i = 0; i < 5; i++) {
//     setInterval(function () {
//         console.log(i);

//     }, 1000)

// }
let person = {
    firstname: 'saM',
    secondname: 'kumar',
    fullname() {
        return `${this.firstname} ${this.secondname}`
    }
}
console.log(person.fullname())
console.log(person.firstname);
var firstname = 'sHyaM'
var secondname = '.'

function fullname(a, b) {
    return `${a} ${b}`
}
console.log(fullname(firstname, secondname));
