const newHero = ['Hunk', 'spiderman']
console.log(newHero);
// response of hero
// (2) ['Hunk', 'spiderman']
// 0:"Hunk"
// 1:"spiderman"
// length: 2
// [[Prototype]]:Array(0)
// at: at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length:0
// map:ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()

// prototype is a reason that's why we have this keyword,class ,prototypical inheritance

// array is an object is js
// object has no parent
// string is also a object
// function is function and object as well

function multiplyby5(num) {
    return num * 5
}

multiplyby5.power = 2
console.log(multiplyby5(5));
// 25
console.log(multiplyby5.power);
// 2
console.log(multiplyby5.prototype);
// {}

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printme = function () {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 23);
const tea = new createUser("tea", 45);

/** Here's what happens behind the scenes when the new keyword is used : 

// A new object is created:The new keyword initiates the creation of a new Javascript object.

A prototype is linked:The newly created object gets linked to the prototype property of the constructor
function.This means that t has access to properties and methods defined on the constructor's prototype.


The constructor is called; The constructor function is called with the specified arguments and this 
is bound to the newly created object. If no explcit return value is
specified from the constructors.Javascript assumes this .the newly created object,to be the intended returns value.

The new object is returned:after the constructor function has been  called,if it does not return a non-primitive value (object,array,function,etc)
the newly created object is returned.






**/


chai.printme()


let myName = "Hitesh";


console.log(myName.truelength);

