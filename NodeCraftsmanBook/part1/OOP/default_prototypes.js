var obj1 = {};
var obj2 = new Object();
console.log(obj1.__proto__ === obj2.__proto__); //true

var a = 5;
console.log(a.__proto__); //Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}
a = "5";
console.log(a.__proto__); //String {"", length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
a = function(){};
console.log(a.__proto__); //ƒ () { [native code] }
a = [];
console.log(a.__proto__); //[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, shift: ƒ, …]
