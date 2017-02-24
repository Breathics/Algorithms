
// A Vector is a dynamic array that expands in size when it fills up and needs more space, and
//  reduces size when elements are removed and a certain amount of space is wasted.
//
// NOTE: In all cases, if the index is out of bounds, throw an error.
// NOTE: Must implement from scratch, cannot create a direct wrapper around built-in functionality
//
// [ ] implement a Vector class with the following functions
// [x] .insert() function that takes an index and value to insert
// [x] .add() function to append a value to the end of the array
// [x] .remove() function to remove whatever value at index
// [ ] .get() function to return value at index
// [ ] .set() function to set value at index
//
// [ ] .contains() function to return true/false whether a given value exists in the Vector
//
var Vector = function(initialCapacity, maxCapacity) {
  this.storage = [];
  this.capacity = initialCapacity || 16;  // Default to array size 16
  this.max = maxCapacity || 1 << 24;      // Default to max Vector size 16,777,216
  this.length = 0;
};


Vector.prototype.insert = function(index, value) {
  // ...
    this.newArray = [];
    if (index === this.storage.length) {
        this.storage[this.storage.length] = value;
        return;
    }
    if (index > this.storage.length - 1) {
        for (var i = this.storage.length; i < index; i++){
            this.storage[i] = undefined;
            this.storage[index] = value;
        }
        return;
    }
    if (index < this.storage.length - 1){
        for (var i = 0; i < index; i++){
            this.newArray[i] = this.storage[i];
        }
        this.newArray[index] = value;
        this.length++;
        for (var i = index, j = index + 1; i < this.storage.length; i++,j++){
            this.newArray[j] = this.storage[i];
        }
        this.storage = this.newArray;
    }

};

Vector.prototype.add = function(value) {
  // ...
    this.storage[this.length] = value;
    this.length++;
};

Vector.prototype.remove = function(index) {
  // ...
    this.newArray = [];
    // for (var i = 0,j=0; i < this.storage.length-1; i++,j++) {
    //     if(i===index){
    //         j++;
    //     }
    //     this.newArray[i] = this.storage[j];
    // }
    /*****************************/
    // Brute force solution below
    /*****************************/
    for (var i = 0; i < index; i++){
        this.newArray[i] = this.storage[i];
    }
    for (var i = index+1; i < this.storage.length; i++){
        this.newArray[i] = this.storage[i];
    }
    this.storage = this.newArray;
    this.length--;
};

Vector.prototype.get = function(index) {
  // ...
    for (var i = 0; i < this.storage.length; i++){
        if (index === i){
            return this.storage[i];
        }
    }
};

Vector.prototype.set = function(index, value) {
  // ...
    if (index > this.storage.length - 1) {
        for (var i = this.storage.length; i < index; i++){
            this.storage[i] = undefined;
        }
    }
    this.storage[index] = value;
};



var v = new Vector();
v.add(1);
v.add(2);
v.add(3);
console.log("v.length: " + (v.length === 3));
v.add(4);
v.add(5);
v.insert(2, 10);
console.log("v.length: " + (v.length === 6));
console.log("v.get(2): " + (v.get(2) === 10));
v.set(2, 15);
console.log("v.set(2, 15): " + (v.get(2) === 15));
v.remove(2);
console.log("v.remove(2): " + (v.length === 5));
