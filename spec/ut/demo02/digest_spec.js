describe("demo02 digest test", function () {
    var scope;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope;
        scope.value = "123";
        scope.count = 0;
    }));

    it("should return 0 if no change", function () {
        scope.$watch("value", function (new_value, old_value) {
            scope.count = scope.count + 1;
        });
        expect(scope.count).toEqual(0);
    });

    it("should return 0 if change value but no digest", function () {
        scope.$watch("value", function (new_value, old_value) {
            scope.count = scope.count + 1;
        });
        scope.value = "321";
        expect(scope.count).toEqual(0);
    });

    it("should return 1 if change value and digest", function () {
        scope.$watch("value", function (new_value, old_value) {
            scope.count = scope.count + 1;
            console.log("new" + new_value);
            console.log("old" + old_value);


        });
        scope.value = "321";
        scope.$digest();         //触发改动
        expect(scope.count).toEqual(1);
    });

    it("should return 1 if change value by apply", function () {
        scope.$watch("value", function (new_value, old_value) {
            scope.count = scope.count + 1;
        });
        scope.$apply("value = '321'");
        expect(scope.count).toEqual(1);
        expect(scope.$apply("2 + 3")).toEqual(5);
    });
});