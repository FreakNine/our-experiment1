import  SHA256  from "crypto-js";
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  Blockchain所在的区块链,prehash上一个区块的hash值,height所在链的长度,hash这个区块的hash值。
  */
  
  constructor(Blockchain,prehash,height,hash) {
    this.height=height;
    this.Blockchain=Blockchain;
    this.prehash=prehash
    this.hash =hash;
  }
}
export default Block
