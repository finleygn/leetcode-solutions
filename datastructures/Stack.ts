import {assertEquals} from "https://deno.land/std/testing/asserts.ts";

class Stack<T> {
  public items: T[] = [];

  get size(): number {
    return this.items.length;
  }

  public push(v: T): void {
    this.items.push(v);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  public empty() {
    this.items.length = 0;
  }
}

Deno.test("Stack push pop", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  assertEquals(s.size, 2);

  assertEquals(s.pop(), 2);
  assertEquals(s.pop(), 1);
  assertEquals(s.pop(), undefined);
});

Deno.test("Stack peek", () => {
  const s = new Stack();
  assertEquals(s.peek(), undefined);
  s.push(1);
  s.push(2);
  assertEquals(s.peek(), 2);
  s.pop();
  assertEquals(s.peek(), 1);
});

Deno.test("Stack empty", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  assertEquals(s.size, 2);
  s.empty();
  assertEquals(s.size, 0);
  assertEquals(s.peek(), undefined);
});

export default Stack;