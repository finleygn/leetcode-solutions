const m = (n: number, t: number) => ((n % t) + t) % t;
class CircularQueue<T> {
  size: number;
  items: T[];
  read: number;
  write: number;

  constructor(k: number) {
    this.size = k;
    this.read = 0;
    this.write = -1;
    this.items = new Array(k);
  }

  get currentSize(): number {
    return this.write - this.read + 1;
  }

  enqueue(value: T): boolean {
    this.write++;
    if (this.currentSize <= this.size) {
      this.items[m(this.write, this.size)] = value;
      return true;
    }
    this.write--;
    return false;
  }

  dequeue(): boolean {
    if (this.currentSize >= 1) {
      this.read++;
      return true;
    }
    return false;
  }

  front(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[m(this.read, this.size)];
    if (item !== undefined) return item;
    return undefined;
  }

  rear(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[m(this.write, this.size)];
    if (item !== undefined) return item;
    return undefined;
  }

  isEmpty(): boolean {
    if (!this.currentSize) {
      return true;
    }
    return false;
  }

  isFull(): boolean {
    return this.currentSize === this.size;
  }
}

export default CircularQueue;
