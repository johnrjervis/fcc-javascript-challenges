function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    const newNode = new Node(element);

    if (length === 0) {
      head = newNode;
    } else {
      var lastItem = this.head();
      // the official solution (see next challenge) uses while (lastItem.next) {...}, which is much neater
      for (let i = 1; i < length; i++) {
        lastItem = lastItem.next;
      }
      lastItem.next = newNode;
    }

    length++
    // Only change code above this line
  };
}
