let app = document.querySelector('#app')
var web3 = require('web3');

var web3 = new web3();
window.web3 = web3;

/**
localhost:8545 - is the address to our geth RPC server.
we need to boot geth.exe in RPC mode
**/
window.web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

app.innerHTML = '<h2>Welcome to hello-counter</h2>' +
                '<input type="button" value="show balances" onclick="getBalances">';

function getBalances() {
  window.web3.eth.accounts.forEach(function (account) {
      console.log(account + " --> " +    window.web3.fromWei(window.web3.eth.getBalance(account), "ether"));
  });
}
window.getBalances = getBalances;




let counterAbi = require('./counter_sol_Counter_abi.json');
console.log(counterAbi);

/**
The contract is living in an adress on the blockchain, we must keep it!!!!!
**/
let contractAddress = "0xAAAAAAAAAAAAAAAAAAAA";
