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
        });
        scope.value = "321";
        scope.$digest();         //出发改动
        expect(scope.count).toEqual(1);
    });
});