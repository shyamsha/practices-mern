// obj references and copying
let obj={
  firstName:'Shyam',
  lastName:'Kumar',
}

let copyObj=obj;
// objects are reference type when we assign obj to copyObj it is not copy it is reference to obj. 
// when change it will change in both objects because it referring same obj
copyObj.firstName='Rakesh';
// console.log(obj)

// copy objects into new variable look like bellow
let copy={...obj}
copy.firstName='ch'
// console.log(copy,obj)

let obj1={
  firstName:'Shyam',
  lastName:'Kumar',
  address:{
    city:'chirala'
  }
}

let copy2={}
for (const key in obj) {
    const element = obj[key];
    copy2[key]=element
}
copy2.firstName='sam'
// console.log(copy2,obj)

let copy1={}
for (const key in obj1) {
    const element = obj1[key];
    copy1[key]=element
}
copy1.firstName='sam'
// we can't copy the nested objects because those are reference another memory address
// copy1.address.city='Bangalore'
// console.log(copy1,obj1)

// copy the nested objects overwritten like bellow or use lodash deepClone method
// copy single objects also
let copy3=Object.assign({},obj1)

// console.log(copy3.address===obj1.address)
copy3.address.city='Bangalore'
console.log(obj1,copy3)

// cloning nested objects like this
function cloneDeep(obj){
  let clone = {}
  for (let key in obj){
      if (typeof obj[key] === "object"){
          clone[key] = cloneDeep(obj[key])
      }else {
          clone[key] = obj[key]
      }
  }
  return clone;
}
let nestObj={
  name:'Shyam',
  address:{
    city:'chirala'
  }
}
// let o1= cloneDeep(nestObj)
// o1.address.city='London'
// console.log(o1)
// nestObj.address.city='bangalore'
// console.log(nestObj)

let clone1= JSON.parse(JSON.stringify(nestObj))
// nestObj.address.city='bangalore'
// console.log(clone1)

// this in objects

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }

};

user.sayHi(); // John