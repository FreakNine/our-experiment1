import { chain, map } from "ramda";


// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
 //区块链的名字
  name;
 //地址映射就是一个map。
  blocks=new Map()
  //增加创世区块
  genesis
 //构造函数
constructor(name,genesis){
  this.name=name;
  this.genesis=genesis;
  }

 

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    var backchain=[];
    var value=this.blocks.values();
  for(var data of value){
    for(var data1 of value){
      if(data.height==data1.height && data.hash!=data1.hash){
        backchain.push(data1)
      }else{
        backchain.push(data1)
      }
    }
    
  }
    return backchain
  }
    // 判断当前区块链是否包含
    containsBlock(block) {
      // 添加判断方法
      return false
    }
      // 获得区块高度最高的区块
  maxHeightBlock() {
    // return Block
  }
    // 添加区块
  /*

  */
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return

    // 添加 UTXO 快照与更新的相关逻辑
  }
}


export default Blockchain
