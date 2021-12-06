class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left ){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right ){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value){
        if(this.root){
            let currentNode = this.root;
            while(currentNode.value){
                if(currentNode.value === value){
                    return currentNode;
                } else {
                    if( value < currentNode.value ){
                        currentNode = currentNode.left;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        } else {
            console.log('Empty tree')
        }
    }
}
