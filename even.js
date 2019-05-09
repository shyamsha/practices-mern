// let even = [10, 20, 25, 30, ]
// let num = []
// let find = function(eve) {

//     for (let i = 0; i < eve.length; i++) {
//         if (eve[i] % 2 === 0) {
//             num.push(eve[i])
//         }
//     }
//     return num

// }
// console.log(find(even))
// let result = even.filter(function(value) {
//     return value % 2 == 0
// })
// console.log(result);
let items = [{ isveg: true, veg: ['idly', 'dosa'] }, { isnonveg: false }]
let result = items.filter(function(item) {
    return item.isveg
})
console.log(result[0].veg)