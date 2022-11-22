// https://leetcode.com/problems/implement-queue-using-stacks/
// Difficulty: Easy

class MyQueue {
  ss: number[] = [];
  fs: number[] = [];
  flipped = false;

  // O(n) or O(1) on consecutive writes
  push(x: number): void {
      if(!this.flipped) {
          while(this.ss.length) {
              const popped = this.ss.pop();
              if(popped) {
                this.fs.push(popped);
              }
          }
          this.flipped = true;
      }
      this.fs.push(x);
  }

  ensureQueue() {
      if(this.flipped) {
          while(this.fs.length) {
            const popped = this.fs.pop();
            if(popped) {
              this.ss.push(popped);
            }
          }
          this.flipped = false;
      }
  }

  // O(n) or O(1) on consecutive reads
  pop(): number | undefined {
      this.ensureQueue();
      return this.ss.pop();
  }

  // O(n) or O(1) on consecutive reads
  peek(): number {
      this.ensureQueue();
      return this.ss[this.ss.length-1];
  }

  // O(1)
  empty(): boolean {
      if(this.flipped) {
          return !this.fs.length;
      } else {
          return !this.ss.length;
      }
  }
}

export const solution = MyQueue;