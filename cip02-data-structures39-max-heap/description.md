# Insert an element into a max heap

A max heap is a data structure that is in some ways similar to a balanced binary tree. Each child node's value is less than it's parent's values and new levels are not created until the previous level is full.

The values of a max heap can be stored in an array, and the node number is determined by a value's index in the array. For example, the 0th element represents the root node, the 1st and 2nd element represent the root node's left and right children, the 3rd and 4th elements represent the root node's left child's children and the 5th and 6th elements represent the root nodes right child's children, etc.

More generally, for an index, i, the node's children will be at indices 2i + 1 and 2i + 2, respectively. As a result, the parent node's index for an element at index, i, can be calculated as the floor of (i - 1) / 2.

These relationships can be simplified to 2i, 2i + 1, and the floor of i/2 if the root node is at index 1.

The aim of this challenge is to add insert and print methods to the pre-defined MaxHeap function. The insert method should add a new item and then swap it with preceding values until it is at the correct position within the heap. The print method should return an array with all the values of the heap in the correct order. 
