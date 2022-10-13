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
      this.root = null;
    } else {
      this.recursivelyRemoveChildNode(this.root, value);
    }
  };

  this.recursivelyRemoveChildNode = (node, value) => {
    let side;
    (node.value > value) ? side = "left" : side = "right";

    if (node[side] === null) {
      return null;
    } else if (node[side].value === value) {
      node[side] = null;
    } else {
      this.recursivelyRemoveChildNode(node[side], value);
    }
    
  };
}