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

  this.isPresent = (value) => {
    if (this.root === null) {
      return false;
    } else {
      return this.recursivelyCheckPresence(this.root, value);
    }
  };

  this.recursivelyCheckPresence = (node, value) => {
    if (value === node.value) {
      return true;
    } else if (value < node.value && node.left !== null) {
      return this.recursivelyCheckPresence(node.left, value);
    } else if (value > node.value && node.right !== null) {
      return this.recursivelyCheckPresence(node.right, value);
    } else {
      return false;
    }
  };

  // Only change code above this line
}