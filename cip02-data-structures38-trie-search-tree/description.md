# Create a trie search tree

A trie search tree is a data structure in which each node may have multiple child nodes. According to the challenge description, this type of tree is often used to store strings. The root node is used to store the first letters of each of the strings, and each first letter is linked to a node that contains all of the letters that follow it as a second letter. 

At the start of this challenge, an outline of a trie data structure is provided, along with a node template. The aim of the challenges is to create three methods: one for adding strings to the tree, one for checking whether a word is in a tree, and another for printing all of the words for the tree.

It took me a few attempts to get the print method right, and some of my previous efforts are saved in previous_attempts.js. The method called print was my first working solution, and a refactored version of this method became the solution in d38-trie-search-trie.js that I submitted to fCC.
