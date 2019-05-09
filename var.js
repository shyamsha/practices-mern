var x = 0;

function f() {
  var x = y = 1; // x is declared locally. y is not!
}
f();

console.log(x, y); // Throws a ReferenceError in strict mode (y is not defined). 0, 1 otherwise. 
// In non-strict mode:
// x is the global one as expected
// y leaked outside of the function, though!

var x = 0;  // x is declared within file scope, then assigned a value of 0

console.log(typeof z); // undefined, since z doesn't exist yet

function a() { // when a is called,
  var y = 2;   // y is declared within scope of function a, then assigned a value of 2

  console.log(x, y);   // 0 2 

  function b() {       // when b is called
    x = 3;  // assigns 3 to existing file scoped x, doesn't create a new global var
    y = 4;  // assigns 4 to existing outer y, doesn't create a new global var
    z = 5;  // creates a new global variable z and assigns a value of 5. 
  }         // (Throws a ReferenceError in strict mode.)

  b();     // calling b creates z as a global variable
  console.log(x, y, z);  // 3 4 5
}

a();                   // calling a also calls b
console.log(x, z);     // 3 5
console.log(typeof y); // undefined as y is local to function a