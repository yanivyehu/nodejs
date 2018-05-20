/**
  https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29
**/

function CLASS() {
  if (global === this) {
    console.log("this object is the 'global' object [same as window object in console");
  } else {
    console.log("'this' is an object that was created by NEW");

    /**
      The prototype is a property on a constructor function that sets what will become the __proto__ property on the constructed object.
    **/
    CLASS.prototype.func1 = function () {
        console.log("method func1 is called!")
    };

    console.log('this.__proto__ equlas to ' + this.__proto__); //__proto__ is the prototype object from the Constructor function
    console.log('this.prototype equlas to ' + this.prototype); //prototype is a property on a constructor function only!!!

    //add common properties to class intances
    this.a = 1;

  }
}

console.log(this);

//normal function call
CLASS();

/* What happens heee?
  1. creates an object like in 'JAVA'.
  2. the prototype of the created object equls to the prototype of the creating function
*/
var classInstance1 = new CLASS();
classInstance1.func1(); //the interpert will not find func1 on classInstance1, then look for in __proto__
console.log(classInstance1.a);
