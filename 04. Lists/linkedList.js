
// [ ] Implement LinkedList class
// [x] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [x] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return true/false whether the value exists
//
// [ ] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
  this.data = data;
  this.next = next;
};

var LinkedList = function() {
  this.head = new LinkedListNode(null, null);
  this.tail = head;
};



LinkedList.prototype.insert = function(index, value) {
  // ...
    this.currentIndex = 0;
    this.currentNode = this.head;
    while(this.currentIndex != index && this.currentNode != null){
      this.currentNode = this.currentNode.next;
      this.currentIndex++;
    }
    this.nextNode = this.currentNode.next;
    this.newNode = new LinkedListNode(value, null);
    this.newNode.next = this.nextNode;
    this.currentNode.next = this.newNode.data;

};

LinkedList.prototype.remove = function(index) {
  // ...
    this.currentIndex = 0;
    this.currentNode = this.head;
    while(this.currentIndex != index && this.currentNode != null){
        this.currentNode = this.currentNode.next;
        this.currentIndex++;
    }
    this.currentNode.next = this.currentNode.next.next;
};

LinkedList.prototype.get = function (index) {
  //
    this.currentIndex = 0;
    this.currentNode = this.head;
    while(this.currentIndex != index+1){
        this.currentNode = this.currentNode.next;
        this.currentIndex++;
    }
    return this.currentNode.data;
};

LinkedList.prototype.set = function(index, value) {
  // ...
  this.currentIndex = 0;
  this.currentNode = this.head;
  while(this.currentIndex != index+1){
      this.currentNode = this.currentNode.next;
      this.currentIndex++;
  }
  this.currentNode.data = value;
};

LinkedList.prototype.find = function(value) {
  //
      this.currentNode = this.head;
      while(currentNode.data != value && currentNode.next != null){
          currentNode = currentNode.next;
      }
      return currentNode.data;

};

LinkedList.prototype.contains = function(value) {
  // ...
};
