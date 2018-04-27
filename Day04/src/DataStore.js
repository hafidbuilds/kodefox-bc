/* eslint-disable */
// @flow

type Data = {[itemKey: string]: number}
type FuncDoSomething = (itemKey: string, price: number) => mixed

class DataStore {
  data: Data = {}
  
  // constructor(initialState: Data) {
  //   this.data = initialState
  // }

  set(itemKey: string, price: number) {
    this.data[itemKey] = price
  }

  get(itemKey: string) {
    return this.data[itemKey]
  }

  forEach(doSomething: FuncDoSomething) {
    const arrays = Object.keys(this.data)
    for (let itemKey of arrays) {
      let price = this.data[itemKey]
      doSomething(itemKey ,price)
    }
  }
}

export default DataStore
