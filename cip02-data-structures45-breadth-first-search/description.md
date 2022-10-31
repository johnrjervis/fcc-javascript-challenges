# Breadth first search (for an adjacency matrix)

Having created an adjancency matrix in a previous challenge (#43, which was simple enough that I did not include a folder for the challenge in this repo), the aim in this challenge is to create a function that can list the distance between one node and all the others in an adjacency matrix.

(An adjacency matrix is coded as a 2D array with n rows and n columns, where n is the number of nodes represented in the matrix. The i<sup>th</sup> row represents the relationships for the i<sup>th</sup> node, with a 1 in the j<sup>th</sup> column indicating that there is a relationship between the i<sup>th</sup> and j<sup>th</sup> nodes and a 0 indicating that there is no relationship.)

The function required to complete the challenge should accept an adjacency matrix and a node number as arguments, and return a JavaScript object in which the keys represent the nodes of the matrix and the values represent the distance between the node specified by the function argument and the node represented by the value's key. For example, if the 3<sup>rd</sup> node has a a relationship with the 1<sup>st</sup> node and the 1<sup>st</sup> node has a relationship with the 0<sup>th</sup> node, the distance between the 3<sup>rd</sup> node and the 1<sup>st</sup> node would be 1 and the distance between the 3<sup>rd</sup> node and the 0<sup>th</sup> node would be 2 (because the route from the 3<sup>rd</sup> to the 0<sup>th</sup> node goes via the 1<sup>st</sup> node). The relationships returned for the 3<sup>rd</sup> node of a (zero indexed) four-node matrix with the relationships described above should be:

    {0: 2, 1: 1, 2: Infinity, 3: 0}

Note that the distance between the 3<sup>rd</sup> node and itself is 0, and that the value for a given key will be "Infinity" if there is no route between the node that the key represents and the node specified in the function's arguments.
