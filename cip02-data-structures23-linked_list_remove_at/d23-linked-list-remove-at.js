function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line

  this.removeAt = function(indexNo) {

    var currentElem, prevElem;

    for (let i = 0; i < length; i++) {
      if (i === 0) {
        currentElem = head;
      } else {
        prevElem = currentElem;
        currentElem = currentElem.next;
      }

      if (i === indexNo) {
        if (i === 0) {
          head = currentElem.next;
        } else {
          prevElem.next = currentElem.next;
        }
        length--;
        return currentElem.element;
      }
    }

    return null;

  };

  // Only change code above this line
}
