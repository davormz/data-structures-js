class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinlglyLinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
}