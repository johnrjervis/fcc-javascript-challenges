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

  this.remove = function(element){
    // Only change code below this line
    var currentNode = head;

    if (currentNode === null) {
      return;

    } else if (currentNode.element === element) {

      head = currentNode.next;
      length--;
      return;

    } else {

      while (currentNode.next) {
        if (currentNode.next.element === element) {
          currentNode.next = currentNode.next.next;
          length--;
          return;
        }
        currentNode = currentNode.next;
      }
    }

    // Only change code above this line
  };
}
