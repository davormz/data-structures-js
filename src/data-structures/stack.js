class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.botom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.botom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;

        return this;
    }

    pop(){
        const node = this.top;
        this.top =  node.next;
        return node;
    }
}