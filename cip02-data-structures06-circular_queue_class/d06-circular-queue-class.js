class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    /* This time it is a class! */

    if (this.read !== this.write || this.queue[this.write] === null) {
      this.queue[this.write] = item;
    
      if (this.write === this.queue.length - 1) {
        this.write = 0;
      } else {
        this.write++;
      }

      return item;

    } else {

      return null;

    }
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    const result = this.queue[this.read];

    if (this.read !== this.write || result !== null) {
      this.queue[this.read] = null;

      if (this.read === this.queue.length - 1) {
        this.read = 0;
      } else {
        this.read++;
      }
    }

    return result;
    // Only change code above this line
  }
}