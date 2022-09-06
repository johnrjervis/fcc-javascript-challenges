function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(indexNo, element) {

    const newNode = new Node(element);

    if (indexNo === 0) {
      if (head) {
        newNode.next = head;
      }
      head = newNode;
      length++;
      return true;
    }

    var currentElem = head;

    for (let i = 0; i < length; i++) {

      if (i === indexNo - 1) {
        newNode.next = currentElem.next;
        currentElem.next = newNode;
        length++;
        return true;
      } else {
        currentElem = currentElem.next;
      }

    }

    return false;

  }
  // Only change code above this line
}
