rm -vf *.abi *.bin
solcjs --bin --abi $1
ls -ltr
