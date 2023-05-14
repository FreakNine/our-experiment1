export const num1 = 2

import Block from "./Block.js";
import Blockchain from "./Blockchain.js";
import { sha256 } from "crypto.js";

var newblockchain =new Blockchain('newchain');
var newBlock = new Block(
    newblockchain,
     'root',
      0,
      sha256(new Date().getTime().toString()).toString(),
      );
console.log(sha256(new Date().getTime().toString()).toString()==num1)
