
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  Blockchain所在的区块链,prehash上一个区块的hash值,height所在链的长度,hash这个区块的hash值。
  */
  
  Blockchain;//区块所在链的信息
  prehash;//上一个区块的hash
  height;//区块的高度
  hash;//本身的hash值
  constructor(Blockchain,prehash,height,hash) {
    this.height=height;
    this.Blockchain=Blockchain;
    this.prehash=prehash
    this.hash =hash;
  }
}
export default Block
