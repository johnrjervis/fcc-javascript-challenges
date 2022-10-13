var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

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
}
function isBinarySearchTree(tree) {
  // Only change code below this line

  if (tree.root === null) {
    return true;
  }

  var isLeftBinarySearchTree, isRightBinarySearchTree;

  if (tree.root.left === null) {
    isLeftBinarySearchTree = true;
  } else if (tree.root.left.value >= tree.root.value) {
    isLeftBinarySearchTree = false;
  } else {
    const leftTree = new BinarySearchTree();
    leftTree.root = tree.root.left;
    isLeftBinarySearchTree = isBinarySearchTree(leftTree);
  }

  if (tree.root.right === null) {
    isRightBinarySearchTree = true;
  } else if (tree.root.right.value <= tree.root.value) {
    isRightBinarySearchTree = false;
  } else {
    const rightTree = new BinarySearchTree();
    rightTree.root = tree.root.right;
    isRightBinarySearchTree = isBinarySearchTree(rightTree);
  }

  return (isLeftBinarySearchTree && isRightBinarySearchTree);

  // Only change code above this line
}