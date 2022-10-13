# Deleting a node with two children from a binary search tree

This is the tenth binary search tree challenge, and the aim here is to extend the 'remove' method created for the previous two challenges so that nodes with two children can be deleted. However, with two child nodes to be re-attached to a single point, the approach required in this case is not clear-cut. The challenge description proposes the following solution: the smallest value in the right subtree should be chosen for the node that will occupy the position of the deleted node. The left subtree can then be joined to the left property of the newly created node. The value used to create the new node must be removed from the right subtree before it can be joined to the right property of the new node. This may orphan more nodes, and so the whole process will need to be recursive.

To create new trees for my tests, I have retained the add method from the first binary search tree challenge; I have also included the tests from that challenge as regression tests. I have also included my tests from the previous two challenges to ensure that the modified 'remove' method continues to be able to delete leaf nodes and nodes with one child.

The tests start from #117 - I am (re)using a single set of numbers for all of the binary search tests.

I have used two separate approaches in completing this challenge. The code in 'd36-deleting-a-node-with-two-children-from-a-binary-tree-v1.js' uses the code supplied by fCC as a starting point, and the tests results for this code are shown in 'tests-v1.html'. In my second attempt, I used my (v2) solution from the previous challenge as a starting poin, and the code for this is saved in 'd36-deleting-a-node-with-two-children-from-a-binary-tree-v2.js'. Both versions of the code were test against the  tests in the "tests-v1.js" file.

There is also an alternative solution in the "alternative_solution" folder. In this code, the removed node is replaced by its right-side node and the left branch is joned to the left-side of the node with the smallest value in the right branch.
