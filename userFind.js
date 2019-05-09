let list = ['sachin', 'dravid', '1', false]
let find = 'sachin'

if (list.indexOf(find >= 0)) {
    console.log(find);
} else {
    console.log('not find');
}
if (list.includes(find)) {
    console.log(find);
} else {
    console.log(find);
}
let isFound = false
for (var i = 0; i < list.length; i++) {
    if (list[i] === find)
        isFound = true
}
if (isFound === true) {
    console.log(find + 'found');
}
let found = list.find(function(name) {
    return name == find
})
