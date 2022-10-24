# Remove an element from a max heap

This challenge continues from the previous challenge. The aim this time is to create a remove method that should remove and return the root value, and then re-order the remaining values in a manner that conforms to the rules for a  max heap. To achieve this, the last value in the heap should be promoted to the root and then repeatedly swapped with the greater of its immediate children until it has a higher value than all of its children or it is on the lowest level of the tree.

The fCC solution to the previous challenge forms the starting point to this challenge. The tests for the previous challenge are included here as regression tests, so the tests for this code start from test #9.
