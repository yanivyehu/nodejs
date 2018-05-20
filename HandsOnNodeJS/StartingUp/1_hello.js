// setTimeout(function(){
//     console.log('world!');
// },2000);

// console.log('Hello');

// console.trace();
// (function schedule(){
//     setTimeout(function(){
//         console.log('Hello World!');
//         schedule();
//         console.trace();
//     },1000);
// })();


var open = false;

setTimeout(function() {
    open = true;
 }, 1000)

 while(!open) {
 // wait
 }