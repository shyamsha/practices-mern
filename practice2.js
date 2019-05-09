let arr = [
    12,
    24,
    "a",
    "abc",
    52,
    47,
    "b",
    "sHyaM",
    24,
    {
        title: "full-stack",
        type: "traing"
    }
];

let a = [1, 2, 2, 1, "s", 2];
let length = arr.length;
console.log(length);
//arr.length = 5
//console.log(arr)
//arr.reverse()
//console.log(arr)
arr.fill({
        1: 1,
        0: 2
    },
    2,
    3
);
//console.log(arr)
arr.splice(0, 0, 1, "saMc");
//console.log(arr)
for (let i = 0; i < arr.length; i++) {
    //console.log(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
    //console.log(arr[i].title)
}
let values = [];
for (let i = 0; i < a.length; i++) {
    values.push(a.indexOf(a[i]) == a.lastIndexOf(a[i]));
    if (values == true) {
        console.log(a[i]);
    }
}
//console.log(values);
let arr1 = "hello";
let search = arr1.search("e");

//console.log(search);
let u = null;
//console.log(typeof u);
let obj = {
    title: "book name",
    author: "name of author",
    desc: "book description",
    price: 890,
    "age of book": "5 years"
};
// let key=Object.keys(obj)
// console.log(key)
// let value=Object.values(obj)
// console.log(value)
// console.log('name' in obj);
// console.log('title' in obj);
// //console.log(obj.age of book);//not work
// console.log(obj["age of book"]);
// console.log(Object.entries(obj))
// console.log(Object.seal(obj));
// console.log(obj.add=25)
// console.log(obj.title='full-stack')
// console.log(obj.title);
// console.log(obj.hasOwnProperty('title'))
// console.log(Object.freeze(obj))  // u can't do anything
// let res=Object.create(obj)
// //console.log(res.title);
// let obj1={}
// Object.assign(obj1,obj)
// //console.log(obj1.desc);
// Object.isSealed(obj)
// Object.isFrozen(obj)
// let o={...obj,obj1}
// //console.log(o)
// let ar=[[1],[2,5],[1,2],[1,2,5,4]]
// let o1={...ar}
// let s=[]
// let l=[...ar]
// console.log(l)


let obj1={
    user:25,
    say:function(){
      return 'hello1'
    },
    sayhai(){
      return 'hello2'// shorte method
    }
  }
  console.log(obj1.sayhai())
  console.log(obj1.say())
  let user = {
    name: "John",
    go: function() { console.log((this.name)) }
  };
  
(user.go)()

// let objs, method;

// objs = {
//   go: function() { console.log((this)); }
// };

// objs.go();               // (1) [object Object]

// (objs.go)();             // (2) [object Object]

// (method = objs.go)();    // (3) undefined

// (objs.go || objs.stop)(); // (4) undefined

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user1 = makeUser();
  
  console.log( user1.ref.name );
