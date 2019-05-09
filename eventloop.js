// sinppet -1
function main() {
    console.log('A');
    setTimeout(
        function display() {
            console.log('B');
        }, 0);
    console.log('C');
}

//	Output
//	A
//	C
//  B
//sinppet -2 depper
function main1() {
    console.log('1');
    setTimeout(
        function exec() {
            console.log('B');
        }, 0);
    runWhileLoopForNSeconds(3);
    console.log('2');
}
main1();
main();

function runWhileLoopForNSeconds(sec) {
    let start = Date.now(),
        now = start;
    while (now - start < (sec * 1000)) {
        now = Date.now();
        //console.log(now)
    }
}
// Output
// A
// C
// B

//promises
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve))
    baz()
}

foo()
// chaining promises
var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function (val) {
    console.log(val); // 1
    return val + 2;
}).then(function (val) {
    console.log(val); // 3
})
