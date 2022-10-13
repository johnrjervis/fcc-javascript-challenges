var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    // added "target === undefined" condition to the line below to prevent failures in edge case tests for the previous challenge
    if (target === null || target === undefined) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      // Not sure why the following line isn't "(target == this.root)" as in the children === 0 case
      if (parent === null) {
        target.value = newChild.value;
        // I don't see any reason for the following - why can't the new root keep its former children?
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
    else if (children === 2) {
      const newSubTree = target.right;
      const newSubTreeMin = this.getMinChild(newSubTree);
      newSubTreeMin.left = target.left;

      if (target === this.root) {
        this.root = newSubTree;
      } else if (newSubTree.value < parent.value) {
        parent.left = newSubTree;
      } else {
        parent.right = newSubTree;
      }
    }
  };

  this.getMinChild = (node) => {
    if (node.left === null) {
       return node;
    } else {
       return this.getMinChild(node.left);
    };
  };

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
