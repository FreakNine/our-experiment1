
import Block from "./Block.js";
import Blockchain from "./Blockchain.js";

var newblockchain =new Blockchain('newchain');
var newBlock = new Block(newblockchain, 'root', 0, 'root');
newblockchain.blocks.set(asd,123)
console.log(Blockchain.blocks)
a = newblockchain.longestChain();
