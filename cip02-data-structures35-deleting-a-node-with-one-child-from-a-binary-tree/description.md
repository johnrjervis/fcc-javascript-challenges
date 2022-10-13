# Deleting a node with one child from a binary search tree

This is the ninth binary search tree challenge, and the aim for this one is to extend the 'remove' method created for the previous challenge so that nodes with one child can be deleted. To prevent the child node from becoming orphaned, it should be linked to the deleted node's parent.

To create new trees for my tests, I have retained the add method from the first binary search tree challenge; I have also included the tests from that challenge as regression tests. I have also included my tests from the previous challenge to ensure that the modified 'remove' method continues to be able to delete leaf nodes.

The tests start from #106 - I am (re)using a single set of numbers for all of the binary search tests.

I have used two separate approaches in completing this challenge. The code in 'd35-deleting-a-node-with-one-child-from-a-binary-tree-v1.js' uses the code supplied by fCC as a starting point, and the tests results for this code are shown in 'tests-v1.html'. In my second attempt, I used my solution from the previous challenge as a starting point, and the code for this is saved in 'd35-deleting-a-node-with-one-child-from-a-binary-tree-v2.js'. Additional tests for this code are stored in 'test-v2.js', and the results of these tests (along with the tests for the v1 code) are displayed in 'tests-v2.html'.