const assert = require('assert');
const filter = require('../filter').filter;

describe('Filter', function () {
    it('should print data', function () {
        const result = filter();
        assert.equal(result.length, 5);
        assert.equal(result[0].name, 'Dillauti');
        assert.equal(result[0].people[0].name, 'Winifred Graham');
        assert.equal(result[0].people[0].animals[0].name, 'Anoa');
    });

    it("should filter by animal name", function () {
        const result = filter('xwing');
        assert.equal(result.length, 1);
        assert.equal(result[0].name, 'Zuhackog');
        assert.equal(result[0].people[0].name, 'Elva Baroni');
        assert.equal(result[0].people[0].animals.length, 1);
        assert.equal(result[0].people[0].animals[0].name, 'Waxwing');
    });

    it('should print data with count', function () {
        const result = filter(undefined, true);
        assert.equal(result.length, 5);
        assert.equal(result[0].name, 'Dillauti [5]');
        assert.equal(result[0].people[0].name, 'Winifred Graham [6]');
    })

    it("should filter and count by animal name", function () {
        const result = filter('xwing', true);
        assert.equal(result[0].name, 'Zuhackog [1]');
        assert.equal(result[0].people[0].name, 'Elva Baroni [1]');
    });

    it("should ignore case", function () {
        const result = filter('XWING');
        assert.equal(result.length, 1);
    });
});