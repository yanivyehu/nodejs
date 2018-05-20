var myBuf = new Buffer(100);

for ( i=0; i< myBuf.length; i++) {
    myBuf[i] = i;
}

console.log(myBuf.toString());