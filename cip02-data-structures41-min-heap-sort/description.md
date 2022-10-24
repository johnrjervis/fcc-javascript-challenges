# Implement heap sort with a min heap

This is the next challenge on heaps, but this one focusses on a min heap instead of a max heap. The challenge requires insert and remove methods to be created; these will be similar to the max heap methods, but the methods should observe the rules for a min heap (i.e. the smallest element should be at the root, and each child value should be larger than its parent).

The main part of the challenge is to create a sort method that should accept an unsorted array as an argument, sort the values into min heap order and return the sorted values as an array.

I have based the insert and remove methods of my solution for this challenge on the fCC solution provided for the second max heap challenge (#40 in this archive). I have added tests for these methods and for the helper methods that support them.
