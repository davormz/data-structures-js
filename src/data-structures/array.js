class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        //Borrar el ultimo elemento
        this.length--;
        const item = this.data[this.length];
        delete this.data[this.length];
        return item;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    dequeueu(){
        const item = this.data[0];
        this.shiftIndex(0);
        return item;
    }

    
}

export default MyArray;