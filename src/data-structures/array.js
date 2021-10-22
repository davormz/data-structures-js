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

    
}

export default MyArray;