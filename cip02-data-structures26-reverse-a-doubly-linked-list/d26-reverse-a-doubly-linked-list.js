var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  this.add = (item) => {
     var prevNode = this.head;
     const newNode = new Node(item, null);
     this.tail = newNode;

     if (this.head === null) {
       this.head = newNode;
     } else {
       while (prevNode.next !== null) {
         prevNode = prevNode.next;
       }

       newNode.prev = prevNode;
       prevNode.next = newNode;
     }
  };

  this.reverse = () => {
    [this.head, this.tail] = [this.tail, this.head];
    var currentNode = this.head;

    while (currentNode !== null) {
      [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];
      currentNode = currentNode.next;
    }
  };

  // Only change code above this line
};