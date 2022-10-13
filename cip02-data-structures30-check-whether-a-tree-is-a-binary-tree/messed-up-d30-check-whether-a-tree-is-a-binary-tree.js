var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // methods that I wrote for the first binary tree challenge - not uploaded to fCC for the current challenge
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

  // methods specific to the current challenge

  this.isBinarySearchTree = () => {
    if (this.root === null) {
      return true;
    } else {
      return this.recursivelyCheckChildTrees(this.root);
    }
  };

  this.recursivelyCheckChildTrees = (node) => {
    var isLeftBinaryTree, isRightBinaryTree;

    if (node.left === null) {
      isLeftBinaryTree = true;
    } else if (node.left.value >= node.value) {
      isLeftBinaryTree = false;
    } else {
      isLeftBinaryTree = this.recursivelyCheckChildTrees(node.left);
    }

    if (node.right === null) {
      isRightBinaryTree = true;
    } else if (node.right.value <= node.value) {
      isRightBinaryTree = false;
    } else {
      isRightBinaryTree = this.recursivelyCheckChildTrees(node.right);
    }

    return (isLeftBinaryTree && isRightBinaryTree);
  };

  // Only change code above this line
}