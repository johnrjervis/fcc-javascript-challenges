function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line
  this.heap = [];

  this.insert = value => {
    /* Pushes a value to the end of the heap and then uses minHeapifyUp to move it to the correct position */
    this.heap.push(value);
    this.minHeapifyUp(this.heap.length - 1);
  }

  this.swap = (index1, index2) => {
    /* Switches the values at the two specified indices in the heap */
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  this.parent = index => {
    /* Calculates the index of the parent node from a node's index */
    return Math.floor((index - 1) / 2);
  }

  this.minHeapifyUp = index => {
    /* Repeatedly switches the element at the specified index with any parents that have a lower value */
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  this.remove = () => {
    /* Removes and returns the root node, then resorts the heap so that it is still a min heap */
    const result = this.heap.shift();

    if (this.heap.length > 1) {
      this.heap = [this.heap[this.heap.length - 1], ...this.heap.slice(0, this.heap.length - 1)];

      let currentNode = 0;
      let minChild = this.getMinChild(currentNode);

      while ((minChild < this.heap.length) && (this.heap[currentNode] > this.heap[minChild])) {
        this.swap(currentNode, minChild);
        currentNode = minChild;
        minChild = this.getMinChild(currentNode);
      }
    }

    return result;
  };

  this.getMinChild = index => {
    /* For the node at index, this function returns the index of the child with the lowest value (or the first child's index if there is no second child) */
    let result;

    if ((this.heap[2 * index + 2] === undefined) || (this.heap[2 * index + 1] < this.heap[2 * index + 2])) {
      result = 2 * index + 1;
    } else {
      result = 2 * index + 2;
    }

    return result;
  };

  this.sort = arr => {
    /* Sorts the heap's values into ascending order by removing the values from the heap into an ordered array */
    const result = []

    while (this.heap.length > 0) {
      result.push(this.remove());
    };

    return result;
  };
  // Only change code above this line
};
