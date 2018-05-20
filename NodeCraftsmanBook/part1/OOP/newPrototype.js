
/**
  When called with 'new' this becomes a c'tor function
**/
var ClassX = function(){
  console.log("Constructor function is running....");
};

ClassX.prototype.func1 = function() { //prototype is an attribute of the Function class only!
  console.log("I am func1");
}


/**
  What happenes here?
  calling to 'new' creates a new object, which its prototype equals to the ones of the C'tor function
**/
var instance1 = new ClassX();
var instance2 = new ClassX();
instance1.func1(); //func1 is not found on instance1, the the interperter search in the prototype (__protp__ field) until it found at ClassX
instance2.func1();


//we can change func1 dynamically
ClassX.prototype.func1 = function() {
  console.log("I am func1'");
}
instance1.func1();

//we can add functuality dynamically
ClassX.prototype.func2 = function() {
  console.log("I am func2! added dynamically!");
}
instance1.func2();

try {
  instance2.func3(); //will not be found in the "prototype-chain" and will result in error
} catch(err) {
  console.log(err);
}
