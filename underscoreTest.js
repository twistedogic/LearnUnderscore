describe("Collections", function () {
    var iArray, sArray, objs;
    beforeEach(function () {
        iArray = [1, 2, 3, 4, 5, 6, 7, 8];
        sArray = ["hello", "john", "lennon", "bababoyi", ""];
        objs = { "hello":1, "goodbye":2, "ok":0};
    });
    describe("each", function () {
        it("should iterate over all elements", function () {
            var f = jasmine.createSpy('forEachCaller');
            _.each(iArray, f);
            expect(f.callCount).toEqual(iArray.length);
        });
    });
    describe("map", function () {
        it("should call the iterator once on each element", function () {
            var f = jasmine.createSpy('forEachCaller');
            _.map(iArray, f);
            expect(f.callCount).toEqual(iArray.length);
        });
        it("should return an array of the same length", function () {
            var f = function (num) {
                return num * 2;
            };
            var temp = _.map(iArray, f);
            expect(temp.length).toEqual(iArray.length);
        });
        it("should apply the function on a random element", function () {
            var f = function (num) {
                return num * 2;
            };
            var temp = _.map(iArray, f);
            var random = Math.floor(Math.random() * iArray.length);
            expect(temp[random]).toEqual(iArray[random] * 2);
        });
    });
    describe("reduce", function () {
        it("can add all the value of an array", function () {
            var f = function (a,b) { return a+b; };
            var rv = _.reduce(iArray, f);
            expect(rv).toEqual(8*9/2); // sum of all the element of iArray
        });
        it("can concat all strings in an array of strings", function () {
            var f = function (a,b) { return a.concat(b); };
            var rv = _.reduce(sArray, f);
            var _length = 0;
            var f2 = function (s) { _length+= s.length;};
            _.each(sArray,f2);
            expect(rv.length).toEqual(_length); // sum of all the element of iArray
        });


    });
});