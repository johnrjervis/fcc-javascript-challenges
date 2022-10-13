var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line  

  // method that I wrote for the first binary tree challenge (useful for testing) - not uploaded to fCC for the current challenge

  this.add = (value) => {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.recursivelyPlaceChildNode(newNode, this.root);
    }
  };

  this.recursivelyPlaceChildNode = (childNode, parentNode) => {

    if (childNode.value < parentNode.value) {

      if (parentNode.left === null) {
        parentNode.left = childNode;
      } else {
        return this.recursivelyPlaceChildNode(childNode, parentNode.left);
      }

    } else if (childNode.value > parentNode.value) {

      if (parentNode.right === null) {
        parentNode.right = childNode;
      } else {
        return this.recursivelyPlaceChildNode(childNode, parentNode.right);
      }

    } else {

      // this clause is not required, but "explicit is better than implicit"
      return null;

    }
  };

  // end code copied from previous challenge
  this.levelOrder = (mode) => {
    if (this.root === null) {
      return null;
    } else {
      const nodeQueue = [this.root];
      const result = [];

      while (nodeQueue.length > 0) {
        const currentNode = nodeQueue.shift();

        if (mode === "rev") {
          this.pushChild(currentNode, nodeQueue, "right");
          this.pushChild(currentNode, nodeQueue, "left");
        } else {
          this.pushChild(currentNode, nodeQueue, "left");
          this.pushChild(currentNode, nodeQueue, "right");
        }

        result.push(currentNode.value)
      };
      return result;
    }
  };

  this.pushChild = (node, queue, side) => {
    if (node[side] !== null) {
      queue.push(node[side]);
    }
  };

  this.reverseLevelOrder = () => {
    return this.levelOrder("rev");
  };

  // Only change code above this line
}