let obj = {
    position: 'Cashier',
    type: `Hourly `,
    showdetails: function() {
        return `saMc has ${this.position} and his salary ${this.salaray}`
    }
}
let changePosition = Object.create(obj)
changePosition.position = 'Full Stack Developer'
changePosition.salaray = 39000
    // console.log(changePosition.position)
    // console.log(changePosition.salaray);
    // console.log(changePosition.showdetails());
    // console.log(changePosition.type)
    // let result = Object.entries(obj)
    // console.log(result)
for (key of Object.entries(obj)) {
    //console.log(`${key}`)
}
let name = {
    a: 1,
    b: 2
}
let newobj = Object.assign(name, obj)
    //console.log(newobj.a)
let n2 = Object.assign(obj)
    //console.log(name.position)
Object.freeze(obj)
obj.position = 'af'
console.log(Object.isFrozen(obj))

let person = {
    name: 'saMc',
    age: 25,
    position: 'Full Stack Developer',

}
let person1 = [1, 2, 3, 4]
console.log(Object.getPrototypeOf(person));

console.log(Object.getPrototypeOf(person1));
console.log(person.hasOwnProperty());