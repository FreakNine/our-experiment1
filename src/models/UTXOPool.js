import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos=utxos;
  }

  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
   */
  addUTXO() {
    this.utxos.amount+=12.5
  }

  // 将当前 UXTO 的副本克隆
  clone() {
    var clone_utxo = {}
    clone_utxo = UTXO
    return clone_utxo
  }
}

export default UTXOPool
