class Set {
  constructor() {
    // This will hold the set
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
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      // At this point fCC switched to this.dictionary[element] = true
      // I have kept my code for this challenge to avoid breaking the regression tests
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }

  union(otherSet) {
    const result = new Set();
    this.values().forEach(elem => result.add(elem));
    otherSet.values().forEach(elem => result.add(elem));
    return result;
  }

  intersection(otherSet) {
    const result = new Set();
    this.values().forEach(elem => {
      if (otherSet.has(elem)) {
        result.add(elem);
      }
    });
    return result;
  }

  difference(otherSet) {
    const result = new Set();
    this.values().forEach(elem => {
      if (!otherSet.has(elem)) {
        result.add(elem)
      }
    });
    return result;
  }

  // this function is my solution to the challenge
  isSubsetOf(otherSet) {
    let result = true;
    this.values().forEach(elem => {
      if (!otherSet.has(elem)) {
        result = false;
      }
    });
    return result;
  }
}