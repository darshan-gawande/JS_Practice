// define a node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

// define a linked list 
class linkedList {
    constructor() {
        this.value = null;
        this.length = 0;
    }


// add element at the beginning 
addFirst(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

// add element in the middle 
addMiddle(value) {
    const newNode = new ListNode(value);
    if(!this.head) {
        this.head = newNode;
    }else {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.length++;
}

// remove a element
removeElement(value) {
    let currentEle = this.head;
    let previousEle = null;

while (currentEle !== null && currentEle.value !== value) {
    previousEle = currentEle;
    currentEle = currentEle.next;
}
if(currentEle === null) {
    return;
}
if(previousEle) {
    previousEle.next = currentEle.next;
}else {
    this.head = this.head.next;
}
this.length--;
}


 PrintList() {
    let current = this.head;
    let result = "";
    while(current) {
        result += current.value + "->";
        current = current.next;
    };
    result += 'null';
    console.log(result);
}
}
