let a = [1, 2];
let b = a + [3, 4];
console.log(b);
obj = {};
console.log(obj);
let obj1 = new Object({ 1: 1 });
console.log(obj1);
let v = 9;

let obj2 = {
	name: "shyam",
	age: 25,
	rank: v, //accesing via variable
	rank: 5,
	greet() {
		return this.name + "hello";
	},
	"l k": 23
};
console.log(obj2.rank); //. notation
console.log(obj2["name"]);
console.log(obj2.greet()); //method invokation
console.log(obj2["l k"]); //mullti word via this way
obj2.last = "kumar"; //add
console.log(obj2.last);
obj2.last = "sga";
console.log(obj2.last);
delete obj2.rank;
console.log(obj2.rank);
for (const key in obj2) {
	if (obj2.hasOwnProperty(key)) {
		const element = obj2[key];
		console.log(element, key);
	}
}
console.log(Object.keys(obj2));
let has = obj2.hasOwnProperty("name");

console.log(Object.keys(obj2).length);
console.log(Object.values(obj2), Object.values(obj2).length);
console.log(Object.values(obj));
let obj3 = Object.create(obj2);
console.log((obj3.name = "sam"));
console.log(obj3.greet());
obj3.f = function() {
	return this.name + this.age;
};
obj3.l = 4;
console.log(obj3.f());
console.log(obj2.l);
let obj4 = Object.entries(obj3);
console.log(obj4);
console.log(Object.entries(399)); //if give any primitive value return emepty array
let results = Object.assign(obj2, obj3);
console.log(results);
console.log(obj2.f());
console.log(obj3.age);
console.log({ obj1, ...obj2 });
console.log({ ...obj1, obj2 });
console.log((add = { obj1, obj2 }));
Object.freeze(obj1);
console.log((obj1.a = 25));
console.log(obj1.a);
//freazing the array
let c = [20];
Object.freeze(c);
c[0] = 1;
console.log(c);
Object.freeze(add);
console.log((add.name = 25));
console.log((add.obj1[1] = 2));
console.log(add);

console.log(Object.isFrozen(obj1));
Object.seal(obj3);
obj3.sum = 12;
console.log(obj3);
obj3.name = "saMc";
console.log(obj3);
let d = 123456987;
//console.log([...d]); //spread doesnot work primitive value
let e = "sahya";
console.log(...e);
let f = [...e];
let g = { ...e };
console.log(f, g);
console.log("name" in obj1);
console.log("name" in obj2);
if ("name" in obj2) {
	console.log(obj2.name);
}
console.log([] + [1]);
let o = {};
let j = o;
console.log(o == j, o === j);
let h = {};
let n = {};
console.log(h == n);
const user = {};
console.log((user.name = "jf"));
console.log(user);
l = 25;
delete this.l;
console.log(l);
const str = "shyam";
let p = [0];
Object.freeze(p); // The array cannot be modified now.

p[0] = 1;
// p.push(12)
console.log(p);
function player(name, age) {
	(this.name = name), (this.age = age);
}
player1 = new player("s", 25);
console.log(player1);
let object = {
	name: "shyam",
	g() {
		return this.name;
	}
};
console.log(object.g());
