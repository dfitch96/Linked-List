

class Node {
    constructor(value=null, nextNode=null){
        this._value = value;
        this.next = nextNode;
    }

    get value() {
        return this._value;
    }

    set value(val){
        this._value = val;
    }

    
}


class LinkedList {

    #head;

    constructor(){
        this.#head = new Node();
        this.length = 0;
    }

    head(){
        return this.#head.next
    }

    tail(){

        let cur = this.#head;
        while(cur.next){
            cur = cur.next;
        }

        return cur;
    }

    append(newNode){

        let cur = this.#head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = newNode;
        this.length += 1;
    }

    prepend(newNode){

        newNode.next = this.#head.next;
        this.#head.next = newNode;
        this.length += 1;
    }

    size(){
        return this.length;   
    }


    toString(){
        let str = '';
        let cur = this.#head.next;
        while(cur){
            str += `( ${cur.value} ) -> `;
            cur = cur.next;
        }
        str += ` ${cur}`;
        return str;
    }

}





let list = new LinkedList();
list.append(new Node(5));
list.append(new Node(12));
list.append(new Node(1));
list.prepend(new Node(-5));
list.prepend(new Node(1233));
console.log(list.size());
console.log(list.toString());

console.log(list.head().value);
console.log(list.tail().value);