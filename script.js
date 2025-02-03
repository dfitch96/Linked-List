

class Node {
    constructor(value=null, nextNode=null){
        this.value = value;
        this.next = nextNode;
    }
}


class LinkedList {

    constructor(){
        this.head = new Node();
    }

    append(newNode){

        let cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = newNode;
    }


    toString(){
        let str = '';
        let cur = this.head.next;
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
console.log(list.toString());