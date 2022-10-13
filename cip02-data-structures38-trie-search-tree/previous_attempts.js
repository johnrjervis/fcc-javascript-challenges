  this.oldPrint = () => {
    const result = [];
    for (const key of this.root.keys.keys()) {
      result.push(key);
    }
    return result;
  };

  this.getWordsRecursively = (node = this.root) => {
    let result = '';
    let temp = []
    for (const key of node.keys.keys()) {
      result = key;
      temp.push(key);
    }

    //if (node.isEnd()) {
    if (temp.length === 0) {
      return result;
    } else {
      return result + this.getWordsRecursively(node.keys.get(result))
    }
  };

  this.printNearly = (node = this.root) => {
    const result = [];
    for (const key of node.keys.keys()) {
      const childNode = node.keys.get(key);
      result.push(key + this.print(childNode));
      //console.log(`result: ${result}`);
      //console.log(result.length);
      //console.log(`child: ${this.print(childNode)}`);
    }
    return result;
  };

  this.printBackup = (node = this.root) => {
    console.log("lwr called");
    const result = [];
    for (const key of node.keys.keys()) {
      if (node.keys.size === 0) {
        return key;
      } else {
        const childNode = node.keys.get(key);
        const word = key + this.print(childNode);
        result.push(word);
      }
    }
    return result;
  };

  this.print = (node = this.root) => {
    const result = [];
    for (const key of node.keys.keys()) {
      const childNode = node.keys.get(key);

      if (childNode.isEnd() && childNode.keys.size > 0) {
        result.push(key);
      }

      if (childNode.keys.size === 0) {
        result.push(key);
      } else {
        for (const subkey of this.print(childNode))
          result.push(key + subkey);
      }
    }
    return result;
  };
