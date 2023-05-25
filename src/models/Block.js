export const DIFFICULTY = 2
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  */
  
  //区块所在链的信息
  Blockchain;
  //上一个区块的hash
  prehash;
  //区块的高度
  height;
  //本身的hash值
  hash;
  //
  utxoPool;
  //一个区块奖励最终的受益者
  coinbaseBeneficaiary;
  //矿工
  miner;

  constructor(Blockchain,prehash,height,hash,miner) {
    this.height=height;
    this.Blockchain=Blockchain;
    this.prehash=prehash
    this.hash =hash;
    this.miner=miner;
  }
  //验证是否符合挖矿难度
  isValid() {
    if (this.hash<=this.Nonce){
      return true;
    }else{
      return false;
    }
  }
 //修改Nonce
  setNonce(Nonce){
    this.Nonce=Nonce;
  }
}
export default Block
