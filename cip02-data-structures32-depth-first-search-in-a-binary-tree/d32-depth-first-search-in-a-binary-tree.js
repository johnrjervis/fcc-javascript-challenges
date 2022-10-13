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

  this.searchBase = (opt) => {
    if (this.root === null) {
      return null;
    } else {
      const leftTree = new BinarySearchTree();
      leftTree.root = this.root.left;
      const leftList = (leftTree.searchBase(opt) === null) ? [] : leftTree.searchBase(opt);

      const rightTree = new BinarySearchTree();
      rightTree.root = this.root.right;
      const rightList = (rightTree.searchBase(opt) === null) ? [] : rightTree.searchBase(opt);

      if (opt === "preorder") {
        return [this.root.value, ...leftList, ...rightList];
      } else if (opt === "postorder") {
        return [...leftList, ...rightList, this.root.value];
      } else if (opt === "inorder") {
        return [...leftList, this.root.value, ...rightList];
      }
    }
  };

  this.preorder = () => {
    return this.searchBase("preorder");
  };

  this.postorder = () => {
    return this.searchBase("postorder");
  };

  this.inorder = () => {
    return this.searchBase("inorder");
  };

  // Only change code above this line
}