// exp-1
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

// example-2
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); 

// example-3
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// example-4
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined