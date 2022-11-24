import {assertEquals} from "https://deno.land/std/testing/asserts.ts";

class Queue<T> {
  public items: T[] = [];

  get length(): number {
    return this.items.length;
  }

  public enqueue(v: T) {
    this.items.push(v);
  }

  public dequeue() {
    return this.items.shift();
  }

  public empty() {
    this.items.length = 0;
  }
}

Deno.test("Queue enqueue dequeue", () => {
  const q = new Queue();

  assertEquals(q.dequeue(), undefined);

  q.enqueue(1);
  q.enqueue(2);

  assertEquals(q.dequeue(), 1);
  assertEquals(q.dequeue(), 2);
  assertEquals(q.dequeue(), undefined);
});

Deno.test("Queue empty", () => {
  const q = new Queue();

  assertEquals(q.length, 0);

  q.enqueue(1);
  q.enqueue(2);

  assertEquals(q.length, 2);

  q.empty();

  assertEquals(q.length, 0);

  q.enqueue(1);

  assertEquals(q.length, 1);
  assertEquals(q.dequeue(), 1);
});

export default Queue;