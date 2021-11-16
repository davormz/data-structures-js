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

    insert(index, value){
        const newNode = new Node(value);
        let previousNode = this.getByIndex(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length ++;
        return this;
    }

    getByIndex(index){
        let node = this.head;
        let i = 0;
        while(i <= index && index < this.length){
            if(i === index){
                return node;
            } else { 
                node = node.next;
                i++;
            }
        }
        return undefined;       
    }

    delete(index){
        const previousNode = this.getByIndex(index - 1);
        let node = previousNode.next;
        previousNode.next = node.next;
        this.length --;
        return this;
    }
}

export default SinlglyLinkedList;