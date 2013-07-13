describe("demo02 digest test", function () {
    var scope;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope;
        scope.value = "123";
        scope.count = 0;
    }));

    it("should return 0 if no change", function () {
        scope.$watch("name", function (new_value, old_value) {
            scope.count = scope.count + 1;
        });
        expect(scope.count).toEqual(0);
    });

});