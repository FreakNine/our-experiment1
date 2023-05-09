import { chain } from "ramda";


// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
 //构造函数，区块链的名字
constructor(name){
  this.name=name;
  var chain =new Array();
  return chain
  }

 genesis(){
  return chain[0];
 }

blocks={}
  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    var backchain=[]
    var index =0
  for(let i=chain.length-1;i>=0;i--){
    if(this.chain[i].prehash!=null){
      backchain[index]=this.chain[i];
      index++;
    }
    else{
      break;
    }
  }
    return backchain
  }
}

export default Blockchain
