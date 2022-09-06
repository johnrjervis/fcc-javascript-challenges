var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = function(key, item) {
    let entry = this.collection[hash(key)]; 
    if (entry === undefined) {
      entry = {}
    };
    entry[key] = item
    this.collection[hash(key)] = entry;
  }

  this.lookup = function(key) {
    const hashResult = this.collection[hash(key)];
    let result;
    hashResult === undefined ? result = undefined : result = hashResult[key];
    if (result === undefined) {
      return null;
    } else {
      return result;
    }
  }

  this.remove = function(key) {
    const result = this.collection[hash(key)]
    delete result[key];
    if (Object.keys(result).length === 0) {
      delete this.collection[hash(key)];
    }
  }
  // Only change code above this line
};
