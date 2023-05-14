export const DIFFICULTY = 2
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  Blockchain所在的区块链,prehash上一个区块的hash值,height所在链的长度,hash这个区块的hash值。
  */
  
  Blockchain;//区块所在链的信息
  prehash;//上一个区块的hash
  height;//区块的高度
  hash;//本身的hash值
  Nonce;//区块的随机数
  constructor(Blockchain,prehash,height,hash) {
    this.height=height;
    this.Blockchain=Blockchain;
    this.prehash=prehash;
    this.hash =hash;
  }

  //修改区块的随机数。
  setNonce(Nonce){
    this.Nonce=Nonce;
  }

  //验证区块是否符合挖矿难度
  isValid() {
    if (this.hash==DIFFICULTY){
      return true;
    }else{
      return false;
    }
  }
}
export default Block
