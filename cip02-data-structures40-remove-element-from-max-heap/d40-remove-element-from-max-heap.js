var MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line
  this.remove = () => {
    /* Removes and returns the root node
    To preserve the max heap, the last node is placed at the root and repeatedly switched with its max child until the children have lower values */
    const result = this.heap.shift();

    if (this.heap.length > 1) {
      this.heap = [this.heap[this.heap.length - 1], ...this.heap.slice(0, this.heap.length - 1)];

      let currentNode = 0;
      let maxChild = this.getMaxChild(currentNode);

      while ((maxChild < this.heap.length) && (this.heap[currentNode] < this.heap[maxChild])) {
        this.swap(currentNode, maxChild);
        currentNode = maxChild;
        maxChild = this.getMaxChild(currentNode);
      }
    }

    return result;
  };

  this.getMaxChild = index => {
    /* For the node at index, this function returns the index of the child with the highest value (or the first child's index if there is no second child) */
    let result;

    if ((this.heap[2 * index + 2] === undefined) || (this.heap[2 * index + 1] > this.heap[2 * index + 2])) {
      result = 2 * index + 1;
    } else {
      result = 2 * index + 2;
    }

    return result;
  }; 

  // Only change code above this line
};
