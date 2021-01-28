 //console.log(name) //undefined only declaration hoisted not assignment
 // var name = 'abc'

var i = 'f'
for (let i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(function () {
        console.log(i); //everting 3
    }, 0)

 }
//console.log(i); //3
 // var j = 'f'
 // for (var j = 0; j < 3; j++) {
 //     console.log(j);
 // }
 // console.log(j);
 // let j = 'f'
 // for (let j = 0; j < 3; j++) {
 //     console.log(j); //0,1,2//not hoisted
 // }
 // console.log(j); //f
 // function hey() {
 //     console.log(name)
 // }
 // hey()
 // var name = 'saM'

 //var a = 1 //type error function name var name same
 // function a() {
 //     console.log(1)
 // }
 // console.log(a());

 // var a = 1
 // function b() {
 //     a = 10
 //     return a;

 //     function a() {}
 // }
 // var c = b()
 // console.log(a, c);


 // function parent() {
 //     var hoisted = "I'm a variable";

 //     function hoisted() {
 //         return "I'm a function";
 //     }
 //     return hoisted();
 // }
 // //console.log(parent());
 // var f = function () {
 //     return 's'
 // }
 // var f = function () {
 //     return 'g'
 // }
 // //console.log(f())//g var hoisted above var

 // console.log(foo());

 // function foo() {
 //     var bar = function () {
 //         return 3;
 //     };
 //     return bar(); //3 the bellow one is not innovoking at time of runtime
 //     var bar = function () {
 //         return 8;
 //     };

 // }
