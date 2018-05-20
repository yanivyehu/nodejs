
/**
/* Using eventEmitters
*/
// var fs = require('fs'); // get the fs module
// var readStream = fs.createReadStream('mytxt.txt');
// readStream.on('data', function(data) {
//     console.log('got:' + data);
// });
// readStream.on('end', function() {
//     console.log('file ended');
// });


var EventEmitter = require('events').EventEmitter,
util = require('util');

// Here is the eventEmitterInherite constructor function:
var classA = function(option1, option2) {
    /*  option1 and option2 are properties of the newly created object.
        a.hasOwnProperty('option1') --> true
        a.hasOwnProperty('option2') --> true
    */
    this.option1 = option1; 
    this.option2 = option2;
}

/**
 * set property 'yaniv' on the prototype field of the constructor function.
 * it means that the future created object wouldn't own 'yaniv' property, but
 * 'yaniv' will be part of the __proto__ object, therefore can be access by the
 * prototype chain mechanizm.
 */
classA.prototype.yaniv = 4;


util.inherits(classA, EventEmitter);

classA.prototype.someMethod = function() {
    //'this' in this scope is a refernce to the object which the method is running on!
    //equals to JAVA extend from class and then use 'this' in the concrete class on the inherited method
    this.emit('eventA', this.option1 + this.option2); 
}

classA.prototype.someMethod2 = function() {
    //'this' in this scope is a refernce to the object which the method is running on!
    //equals to JAVA extend from class and then use 'this' in the concrete class on the inherited method
    this.emit('eventB', this.option1 + this.option2); 
}


var instance1 = new classA(1, 2);
var instance2 = new classA(3, 4);
// console.log(instance1.__proto__)
// console.log(instance1.__proto__.__proto__);


instance1.on('eventA', function(data) { console.log("eventA!" + data);});
instance2.on('eventB', function(data) { console.log("eventB!" + data);});

/* later in the program.... */
instance1.someMethod();

/* later in the program.... */
instance2.someMethod2();

















