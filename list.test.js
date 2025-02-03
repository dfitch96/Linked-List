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


});