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
<<<<<<< Updated upstream
    var keys=this.blocks.keys;
  for(let i=0;i<=keys.length-1;i++){
    backchain.push(this.blocks.get(keys[i]))
=======
    var value=this.blocks.values();
  for(var data of value){
    for(var data1 of value){
      if(data.height==data1.height && data.hash!=data1.hash){
        backchain.push(data1)
      }else{
        backchain.push(data1)
      }
    }
    
>>>>>>> Stashed changes
  }
    return backchain
  }
}


export default Blockchain
