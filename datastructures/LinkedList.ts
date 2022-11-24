import {assertEquals} from "https://deno.land/std/testing/asserts.ts";

class ListNode<T> {
  value?: T;
  next?: ListNode<T>;

  constructor(value?: T, next?: ListNode<T>) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  head?: ListNode<T>;

  constructor() {
    this.head = undefined;
  }

  setHead(n: ListNode<T>) {
    this.head = n;
  }

  /**
   * Delete head and shift
   */
  deleteStart() {
    if(!this.head) return;
    this.head = this.head.next;
  }

  /**
   * Add element before current head
   */
  push(n: ListNode<T>) {
    const temp = this.head;
    this.head = n;
    this.head.next = temp;
  }

  /**
   * Add element to end of list
   */
  append(n: ListNode<T>) {
    if(!this.head) {
      this.head = n;
      return;
    }
    
    let last = this.head;
    while(last.next) {
      last = last.next;
    }
    last.next = n;
  }

  /**
   * Insert node after another
   */
  insertAfter(t: ListNode<T>, v: ListNode<T>) {
    const temp = t.next;
    t.next = v;
    v.next = temp;
  }

  /**
   * Insert node at nth index
   */
  insertAtNth(n: number, v: ListNode<T>): boolean {
    if(n === 0) {
      this.push(v);
      return true;
    }

    let c = 0;
    let cur = this.head;

    while(cur && c+1 !== n) {
      cur = cur.next;
      c++;
    }

    if(!cur) return false;

    this.insertAfter(cur, v);
    return true;
  }

  /**
   * Get total nodes in list
   */
  length(): number {
    let c = 0;
    let cur = this.head;

    while(cur) {
      cur = cur.next;
      c++;
    }

    return c;
  }

  /**
   * Get Nth node
   */
  nth(n: number): ListNode<T> | undefined {
    let c = 0;
    let cur = this.head;

    while(cur && c !== n) {
      cur = cur.next;
      c++;
    }

    return cur;
  }

  /**
   * Find by reference
   */
  findNode(n: ListNode<T>): ListNode<T> | undefined {
    let cur = this.head;

    while(cur && cur !== n) {
      cur = cur.next;
    }

    return cur;
  }

  /**
   * Find by value
   */
  find(v: T): ListNode<T> | undefined {
    let cur = this.head;

    while(cur && cur.value !== v) {
      cur = cur.next;
    }

    return cur;
  }

  /**
   * Value exists in list?
   */
  hasValue(v: T) {
    return !!this.find(v);
  }

  /**
   * Node exists in list?
   */
  hasNode(n: ListNode<T>) {
    return !!this.findNode(n);
  }

  /**
   * Delete by reference
   */
  deleteNode(n: ListNode<T>) {
    let cur = this.head, prev;

    if(cur && n === cur) {
      this.head = cur.next;
      return;
    }

    while(cur !== undefined && cur !== n) {
      prev = cur;
      cur = cur.next;
    }

    if(!cur || !prev) return;

    prev.next = cur.next;
  }

  /**
   * Delete by value
   */
  deleteNodeByValue(v: T) {
    let cur = this.head, prev;

    if(cur && v === cur.value) {
      this.head = cur.next;
      return;
    }

    while(cur !== undefined && cur.value !== v) {
      prev = cur;
      cur = cur.next;
    }

    if(!cur || !prev) return;

    prev.next = cur.next;
  }
}

/**
 * Tests
 */
Deno.test("LinkedList push", () => {
  const list = new LinkedList();
  assertEquals(list.head, undefined);

  const firstNode = new ListNode(1)
  list.push(firstNode);
  assertEquals(list.head, firstNode);

  const secondNode = new ListNode(2)
  list.push(secondNode);
  assertEquals(list.head, secondNode);
  assertEquals(secondNode.next, firstNode);
});

Deno.test("LinkedList length", () => {
  const list = new LinkedList();
  
  list.push(new ListNode(1));
  list.push(new ListNode(2));
  list.push(new ListNode(3));

  assertEquals(list.length(), 3);

  list.deleteStart();

  assertEquals(list.length(), 2);
});

Deno.test("LinkedList find", () => {
  const list = new LinkedList();
  
  const refNode = new ListNode(2);
  list.push(new ListNode(1));
  list.push(refNode);

  assertEquals(list.find(2), refNode);
});

Deno.test("LinkedList has", () => {
  const list = new LinkedList();
  
  const refNode = new ListNode(2);
  list.push(new ListNode(1));
  list.push(refNode);
  list.push(new ListNode(3));

  assertEquals(list.hasValue(3), true);
  assertEquals(list.hasValue(4), false);

  assertEquals(list.hasNode(refNode), true);
  assertEquals(list.hasNode(new ListNode()), false);
});

Deno.test("LinkedList append", () => {
  const list = new LinkedList();
  
  const refNode = new ListNode(2);
  const refLast = new ListNode(3);
  list.push(refNode);
  list.append(refLast);

  assertEquals(list.hasNode(refLast), true);
  assertEquals(refLast.next, undefined);
  assertEquals(refNode.next, refLast);
  
  list.head = undefined;
  list.append(refLast);
  assertEquals(list.head, refLast);
});

Deno.test("LinkedList delete", () => {
  const list = new LinkedList();
  
  const refNode = new ListNode(2);
  list.push(new ListNode(1));
  list.push(refNode);
  list.push(new ListNode(3));

  assertEquals(list.length(), 3);
  list.deleteNode(refNode);
  assertEquals(list.hasNode(refNode), false);
  assertEquals(list.length(), 2);

  assertEquals(list.hasValue(1), true);
  list.deleteNodeByValue(1);
  assertEquals(list.hasValue(1), false);
  assertEquals(list.length(), 1);
});

Deno.test("LinkedList insert", () => {
  const list = new LinkedList();
  
  const refNode = new ListNode(1);
  list.insertAtNth(0, refNode);

  assertEquals(list.head, refNode);

  const refNode2 = new ListNode(2);
  list.insertAfter(refNode, refNode2);

  assertEquals(refNode.next, refNode2);

  const refNode3 = new ListNode(3);
  list.insertAfter(refNode, refNode3);

  assertEquals(refNode.next, refNode3);
  assertEquals(refNode3.next, refNode2);
});

export default LinkedList;
export { ListNode };