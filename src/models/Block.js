import  SHA256  from "crypto-js";
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  时间戳timestamp，数据data，上一个区块的hash值previousHash，难度系数nonce。
  */
  constructor(Blockchain,timestamp,data, previousHash = '') {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce=0;
    this.Blockchain=Blockchain;
    this.hash = this.calculateHash(); 
}
//获取区块的hash值
calculateHash() {
    return SHA256(this.previousHash + this.timestamp+this.nonce+ JSON.stringify(this.data)).toString();
}
}

export default Block
