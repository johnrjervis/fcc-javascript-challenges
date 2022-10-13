var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
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

  // Only change code above this line
}