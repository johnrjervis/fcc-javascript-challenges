var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line
  this.root = new Node();

  this.add = (word, node = this.root) => {
    let childNode;

    if (node.keys.has(word[0])) {
      childNode = node.keys.get(word[0]);
    } else {
      childNode = new Node();
    }

    if (word.length === 1) {
      childNode.setEnd();
    };

    node.keys.set(word[0], childNode);

    if (word.length > 1) {
      this.add(word.substring(1), childNode);
    }
  };

  this.isWord = (word, node = this.root) => {
    if (word.length === 1) {
      let result;
      try {
        result = node.keys.get(word[0]).isEnd();
      } catch {
        result = false;
      }
      return result;
    } else {
      return this.isWord(word.substring(1,), node.keys.get(word[0]))
    }
  };

  this.print = (node = this.root) => {
    const result = [];
    for (const key of node.keys.keys()) {
      const childNode = node.keys.get(key);

      if (childNode.isEnd()) {
        result.push(key);
      }

      if (childNode.keys.size > 0) {
        for (const subkey of this.print(childNode)) {
          result.push(key + subkey);
        }
      }
    }
    return result;
  };

  // Only change code above this line
};
