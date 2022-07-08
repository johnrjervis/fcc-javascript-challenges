# Binary search

The aim of this challenge is to find a value in a sorted array. The algorithm should compare the sought value with the central (median) value of the array and then picking either the middle value of the higher or lower portion of the array and again comparing this with the sought value. The 'remaining' array values to search through are thereby successively halved until the sought value is found.

To pass the challenge, the search algorithm should list the 'picked' values from all of the search steps that are required to find a given number.