class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(item) {

    if (!this.has(item)) {
      // I wanted to set this.dictionary[item] = 1
      // but it needs to be as below to get the fcc tests to pass
      this.dictionary[item] = item;
      this.length++;
      return true;
    } else {
      return false;
    }

  }

  remove(item) {

    if (this.has(item)) {
      delete this.dictionary[item];
      this.length--;
      return true;
    } else {
      return false;
    }

  }

  size() {
    return this.length;
  }
  // Only change code above this line
}