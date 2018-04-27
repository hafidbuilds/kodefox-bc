/* eslint-disable */
// @flowS

class Counter {
  constructor(initialState: number) {
    console.log('contructor:', this)
    this.count = initialState
  }

  dec() {
    console.log('dec:', this)
    this.count -= 1
  }

  inc = () => {
    console.log('inc:', this)
    this.count += 1
  }

  getCount() {
    console.log('get:', this)
    return this.count
  }
}

const lets = new Counter(10)
console.log('lets Inc', lets.inc())
console.log('Lets get', lets.getCount())
