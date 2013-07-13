describe("demo01", function () {

    it("should set count 0", function () {
        var scope = {}
        InvoiceCntl(scope);
        expect(scope.count).toEqual(0);
    })

})
