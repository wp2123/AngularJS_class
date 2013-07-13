describe("scope test", function () {
    var scope;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope;
    }));

    it("should return right eval result", function () {
        expect(scope.$eval("2 + 3")).toEqual(5);
    });

    it("should inherit from parent scope", function () {
        var child_scope = scope.$new();
        scope.name = "parent";
        expect(child_scope.name).toEqual("parent");
    });
});