import { map } from "ramda";
import Block from "./Block";

// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
 //构造函数，区块链的名字
 constructor(name,genesis,blocks){
  this.name=name;
  this.Blockchain=[genesis]
  blocks=new map[[Block.hash,hash]]
 }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    let i=0;
  while (i<this.length){
    
  }

    return []
  }
}

export default Blockchain
