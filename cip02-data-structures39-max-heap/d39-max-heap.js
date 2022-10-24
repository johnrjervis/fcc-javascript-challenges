var MaxHeap = function() {
  // Only change code below this line
  this.heap = [null];

  this.insert = number => {
    /* Adds a value to the heap and switches it with its successive parent nodes if the parent is smaller */
    this.heap.push(number);

    let currentNode = this.heap.length - 1;

    while (currentNode > 1) {
      const parentNode = Math.floor(currentNode / 2);
      if (this.heap[currentNode] > this.heap[parentNode]) {
        [this.heap[currentNode], this.heap[parentNode]] = [this.heap[parentNode], this.heap[currentNode]];
      } else {
        currentNode = 0;
      };
      currentNode = parentNode;
    };
  };

  this.print = () => {
    /* Returns an array containing the values of a heap (excluding the initial null value) */
    return this.heap.slice(1,);
  };
  // Only change code above this line
};
