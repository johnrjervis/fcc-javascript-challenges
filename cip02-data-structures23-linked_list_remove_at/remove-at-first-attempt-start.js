  this.removeAt = function(indexNo) {

    var currentElem = head;

    for (let i = 0; i < indexNo; i++) {
      currentElem = currentElem.next;
    }

    if (currentElem === null) {
      return null;
    } else {
      return currentElem.element;
    }

  };

