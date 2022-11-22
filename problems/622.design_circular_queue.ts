// https://leetcode.com/problems/design-circular-queue/
// Difficulty: Medium

// Mod that works with negative numbers.
const m = (n: number, t: number) => ((n % t) + t) % t;

class MyCircularQueue {
  size: number;
  items: number[];
  read: number;
  write: number;

  constructor(k: number) {
      this.size = k;
      this.read = 0;
      this.write = -1;
      this.items = new Array(k);
  }

  get currentSize(): number {
      return (this.write - this.read) + 1;
  }

  enQueue(value: number): boolean {
      this.write++; 
      if(this.currentSize <= this.size) {
          this.items[m(this.write, this.size)] = value;
          return true
      }
      this.write--;
      return false;
  }

  deQueue(): boolean {
      if(this.currentSize >= 1) {
          this.read++;
          return true;
      }
      return false;
  }

  Front(): number {
    if(this.isEmpty()) return -1;
    const item = this.items[m(this.read, this.size)];
    if(item !== undefined) return item;
    return -1;
  }

  Rear(): number {
    if(this.isEmpty()) return -1;
    const item = this.items[m(this.write, this.size)];
    if(item !== undefined) return item;
    return -1;
  }

  isEmpty(): boolean {
      if(!this.currentSize) {
          return true;
      }
      return false;
  }

  isFull(): boolean {
      return this.currentSize === this.size;
  }
}

export const solution = MyCircularQueue;