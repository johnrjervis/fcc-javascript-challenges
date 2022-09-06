function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    // added the following if to prevent test #10 from failing (the subsequent clause changes from 'if' to 'else if')
    if (currentNode === null) {
      return;
    } else if(currentNode.element === element){
      head = currentNode.next;
      // added length-- here to prevent test #15 from failing
      length --;
    } else {
      while(currentNode.element !== element && currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // added the following 'if' to prevent tests #17-#20 from failing
      if (currentNode.element === element){
        previousNode.next = currentNode.next;
        // Moved the length-- statement here to get test #13 to pass
        length --;
      }
    }

      // The length-- statement was originally here
      // it would run even if a non-existant element was removed (causing test #13 to fail

  };

  // Only change code below this line
  this.isEmpty = function() {
    return (length === 0);
  }

  this.indexOf = function(element) {
    var i = 0;
    var currentNode = this.head();

    while (i <= length && currentNode) {
      if (currentNode.element === element) {
        return i;
      }
      i++;
      currentNode = currentNode.next
    }

    return -1;
  }

  this.elementAt = function(index) {

    var currentNode = null;

    for (let i = 0; i <= index; i++) {
      if (i === 0) {
        currentNode = head;
      } else if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }

    if (currentNode === null) {
      return undefined;
    } else {
      return currentNode.element;
    }

  }
  // Only change code above this line
}
