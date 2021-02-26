// variable decleration
let i = 1;
//the name shoud beign with alpha letter or underscore or doller symbal
let j = 'string'
    // before the time variable declere by var
var o = '25'
    // constant varible it is fixed can't be changed
const h = 52
i = 2
console.log(i, j, o, h)
    // primitive type data types
    //1.number
let num = 25
console.log(typeof num)
    //methods
let m = Math.PI
console.log(typeof m);
console.log(Math.PI); //property
console.log(Math.abs(-2))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.9))
console.log(Math.sqrt(2))
console.log(Math.pow(2, 2))
console.log(Math.round(2.45641))
console.log(Math.min(0, 1, 2))
console.log(Math.max(99, 999, 322))
console.log(Math.floor(Math.random() * 5))
console.log(typeof o);

//type conservations
let k = NaN;
console.log('f' + 5); //string concatanation anything add to string 
console.log(5 + '5');
console.log(String(h));
console.log(parseFloat(19.25));
console.log(parseInt(19.2562));
console.log(Number.isNaN(''));
console.log(Number.isNaN(k));
console.log(Number('25 vb'));
console.log(new Date());
console.log(5 + 5);
console.log(5 + 6 + '5');
console.log('65' + 5 + 5);
//null is assigned value , its means nothing
//undefind mean variable is declare but not defind
//null is an object undefind is type of undefined
//null is equl to undefined
console.log(typeof null);
console.log(null != undefined);
console.log(null == undefined);
var x = true,
    y = false
var str = 'sHyaM cherukuri"s'
    // console.log(x);
    // console.log(y);
    // console.log(str);
    // console.log(str.length);
    // console.log(str.toLowerCase());
    // console.log(str.toUpperCase());
    // console.log(str.includes('k'));
    // console.log(str.indexOf('H'));
    // console.log(str.repeat(2));
    // console.log(str.charAt(0));
    // console.log(str.search('M '));
    // console.log(str.lastIndexOf('s'));
    // console.log(str.slice(1, 2));
    // console.log(str.substring(0, 2));
    // console.log(str.replace('sHyaM', 'saMc'));
    // console.log(str);
    // console.log(str.split(''));
    // if (x = true) { console.log('true'); } else { console.log('false'); }
    // if (x == true) console.log('yes');
    // if (x != true) { console.log('true'); } else if (y != true) { console.log('false'); }
    // y == undefined ? y = 1 : y = 0;
    // console.log(y);
    // switch (y = 0) {
    //     case 1:
    //         console.log('not')
    //         break
    //     case 2:
    //         console.log('yes')
    //         break
    //     default:
    //         console.log(' y is not defind')
    // }
    // for (var i = 0; i < str.length; i++) {
    //     console.log(str[i], '@', i);
    // }
let arr = ['s', 'H', 'y', 'a', 'M']
    //console.log(str.split('').reverse());
    // console.log(arr.push(5));
    // console.log(arr);
    // console.log(arr.pop());
    // console.log(arr);
    // console.log(arr.shift());
    // console.log(arr);
    // console.log(arr.unshift('s'));
    // console.log(arr);
    // console.log(arr.slice(0, 2));
    // console.log(arr.indexOf('M'));
    // console.log(arr.lastIndexOf('s'));
    // console.log(arr.splice(0, 1));
    // console.log(arr);
    // console.log(arr.splice(0, 0, 's'));
    // console.log(arr);
    // console.log(arr.includes('k'));
    // console.log(arr.join(''));
    // console.log(arr);
    // console.log(arr.fill(0, 1));
    // console.log(arr.concat(str));
    //console.log(str.split('').sort());
    //console.log(arr.toString());
console.log(arr);
let result = arr.forEach(function(each) {
    console.log(each)

});
console.log(result);
let result1 = arr.find(function(each) {
    console.log(each==M)

});
console.log(result1);
