const {Node, LinkedList} = require('./LinkedList');



describe("LinkedList", () => {

    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test("initial linked list should be empty", () => {
        expect(list.len).toBe(0);
        expect(list.head()).toBeNull();
    });

    test("append nodes to the linked list", () => {
        list.append(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));

        expect(list.len).toBe(3);
        expect(list.head().value).toBe(1);
        expect(list.tail().value).toBe(3);
    });

    test("prepend nodes to the linked list", () => {
        list.prepend(new Node(1));
        list.prepend(new Node(2));
        list.prepend(new Node(3));

        expect(list.len).toBe(3);
        expect(list.head().value).toBe(3);
    });

    test("retrieve node at given index", () => {
        list.append(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));

        expect(list.at(0).value).toBe(1);
        expect(list.at(1).value).toBe(2);
        expect(list.at(2).value).toBe(3);
        expect(list.at(3)).toBeNull();
    });

    test("pop the last element from the linked list", () => {
        list.append(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));

        const popped = list.pop();
        expect(popped.value).toBe(3);
        expect(list.len).toBe(2);
        expect(list.tail().value).toBe(2);
    });

    test("check if linked list contains a value", () => {
        list.append(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));

        expect(list.contains(10)).toBe(true);
        expect(list.contains(20)).toBe(true);
        expect(list.contains(40)).toBe(false);
    });

    test("find index of a value", () => {
        list.append(new Node(5));
        list.append(new Node(10));
        list.append(new Node(15));

        expect(list.find(5)).toBe(0);
        expect(list.find(10)).toBe(1);
        expect(list.find(15)).toBe(2);
        expect(list.find(20)).toBeNull();
    });

    test("insert a node at a specific index", () => {
        list.append(new Node(1));
        list.append(new Node(3));
        list.insertAt(2, 1);

        expect(list.len).toBe(3);
        expect(list.at(1).value).toBe(2);
        expect(list.at(2).value).toBe(3);
    });

    test("remove a node at a specific index", () => {
        list.append(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));
        list.removeAt(1);

        expect(list.len).toBe(2);
        expect(list.at(0).value).toBe(1);
        expect(list.at(1).value).toBe(3);
    });

    test("convert linked list to string", () => {
        list.append(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));

        expect(list.toString()).toBe(" ( HEAD ) -> ( 1 ) -> ( 2 ) -> ( 3 ) ->  null");
    });


});