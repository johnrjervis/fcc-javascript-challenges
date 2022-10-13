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

  this.remove = (value) => {
    if (this.root === null) {
      return null;
    } else if (this.root.value === value) {
      const rootChildren = countChildren(this.root);
      if (rootChildren === 0) {
        this.root = null;
      } else if (rootChildren === 1 && this.root.left !== null) {
        this.root = this.root.left;
      } else if (rootChildren === 1 && this.root.right !== null) {
        this.root = this.root.right;
      } else {
        const newTargetValue = this.getMin(this.root.right);
        this.remove(newTargetValue);
        this.root.value = newTargetValue;
      }
    } else {
      this.recursivelyRemoveChildNode(this.root, value);
    }
  };

  this.recursivelyRemoveChildNode = (node, value) => {
    let side = (node.value > value) ? "left" : "right";

    if (node[side] === null) {
      return null;
    } else if (node[side].value === value) {
      let targetChildren = countChildren(node[side]);

      if (targetChildren === 0) {
        node[side] = null;
      } else if (targetChildren === 1) {
        let childSide = (node[side].left === null) ? "right" : "left";
        node[side] = node[side][childSide]
      } else if (targetChildren === 2) {
        const newTargetValue = this.getMin(node[side].right);
        this.remove(newTargetValue);
        node[side]["value"] = newTargetValue;
      }
    } else {
      this.recursivelyRemoveChildNode(node[side], value);
    }
    
  };

  this.getMin = (node) => {
    if (node.left === null) {
      return node.value;
    } else {
      return this.getMin(node.left);
    }
  };
}

countChildren = (node) => {
  return ((node.left === null) ? 0 : 1) + ((node.right === null) ? 0 : 1);
};
