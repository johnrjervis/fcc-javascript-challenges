function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  /* A function with properties and methods? I would have used a class instead. */

  this.getQueue = function() {
    return this.collection;
  }

  this.enqueue = function(item) {

    for (let i = 0; i < this.collection.length; i++) {
      
      if (item[1] < this.collection[i][1]) {
        this.collection = [...this.collection.slice(0, i), item, ...this.collection.slice(i)];
        return;
      }
    }

    this.collection = [...this.collection, item];
    return;  

  }

  this.dequeue = function() {
    const front = this.front();
    this.collection = this.collection.slice(1);
    return front;
  }

  this.front = function() {
    return this.collection[0][0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.isEmpty = function() {
    return (this.size() === 0);
  }

  // Only change code above this line
}

