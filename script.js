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
// const foo = ['one', 'two'];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue);  //undefined

// example-5
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true

// example-6
const o = {p: 42, q: true};
const {p: food, q: bar} = o;

console.log(food); // 42
console.log(bar); // true

// example -7
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5