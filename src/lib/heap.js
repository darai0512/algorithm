'use strict'
module.exports = class Heap {
  constructor() {
    this.elements = [];
  }
  add(data) {
    let idx = this.elements.push(data) - 1; // length - 1
    // swap data (skip first adding)
    while(idx !== 0) {
      const parentIdx = idx % 2 === 0 ? idx / 2 - 1 : (idx - 1) / 2;
      if (data < this.elements[parentIdx]) {
        this.elements[idx] = this.elements[parentIdx];
        this.elements[parentIdx] = data;
        idx = parentIdx;
        continue;
      }
      break;
    }
  }
  // @TODO replace UI animation by react.js
  show() {
    let dir = 0;
    let start = 0;
    const end = this.elements.length;
    while (start < end) {
      const elements = [];
      const dirElemNum = start + 2 ** dir < end ? 2 ** dir : end - start; // V8 >= 5.1.173
      for (let i = 0;i < dirElemNum;i++)
        elements.push(this.elements[start + i]);
      console.log(elements.join(' '));
      dir++;
      start += dirElemNum;
    }
    console.log('');
  }
};
