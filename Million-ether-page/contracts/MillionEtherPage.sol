// MillionEtherPage-001.sol
pragma solidity ^0.4.11;

contract MillionEtherPage {
  //every node on the network will hold this data
  //public field - means that setter and getter are created automatically
  bytes3[1000][1000] public pixels;
  
  //declare an event
  event PixelChanged(
    uint x,
    uint y,
    bytes3 color
  );

  function colorPixel(uint x, uint y, bytes3 color) public{
    pixels[x][y] = color;
    
    //emit an event
    PixelChanged(x, y, color);
  }
}


//latest contract address
//0xCdC373E5e8990420f7660E7a55c6f3A8F620e827
