function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  /* A function with properties and methods? I would have used a class instead. */

  this.getStack = function() {
    return collection;
  }

  this.push = function(item) {
    collection = [...collection, item];
  }

  this.pop = function() {
    const result = this.peek();
    collection = collection.slice(0, collection.length - 1);
    return result;
  }

  this.peek = function() {
    return collection[collection.length - 1];
  }

  this.isEmpty = function() {
    return (collection.length === 0);
  }

  this.clear = function() {
    collection = [];
  }

  // Only change code above this line
}

