let app = document.querySelector('#app')

app.innerHTML = '<h2>Welcome to million-ether-page</h2>'

// first we'll require web3
var Web3 = require('web3');

// next we'll create a new instance of web3.
var web3 = new Web3();

// Set the provider
web3.setProvider(
  new Web3.providers.WebsocketProvider(
    'ws://localhost:8546'
  )
);

function checkBalance() {
  web3.eth.personal.getAccounts().then(accounts => {
    console.log('accounts', accounts);

    web3.eth.getBalance(accounts[0]).then(balance => {
      console.log('balance[0]', balance);
    });
  });
}


function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    let imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );
    let data = imageData.data;
    console.log(canvas.width, canvas.height, data.length);

    for (var i = 0; i < data.length; i += 4) {
      data[i] = i % 255; // red
      data[i + 1] = i % 255; // green
      data[i + 2] = i % 255; // blue
      data[i + 3] = i % 255;

      // let rnd = () => parseInt(Math.random() * 1000 % 255);
      // data[i] = rnd(); // red
      // data[i + 1] = rnd(); // green
      // data[i + 2] = rnd(); // blue
      // data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }
}


document.body.onload = function() {
  checkBalance();
  draw();
}
