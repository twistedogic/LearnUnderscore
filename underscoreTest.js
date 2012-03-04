describe("Collection", function() {
    it("should iterate over all elements", function() {
        var array = [1,3,5,7,8,9,0];
        var f = jasmine.createSpy('forEachCaller');
        _.each(array, f);
        expect(f.callCount).toEqual(7);
    });
});