function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  /* A function with properties and methods? I would have used a class instead. */

  this.getQueue = function() {
    return collection;
  }

  this.enqueue = function(item) {
    collection = [...collection, item];
  }

  this.dequeue = function() {
    const front = this.front();
    collection = collection.slice(1);
    return front;
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return (this.size() === 0);
  }

  // Only change code above this line
}

