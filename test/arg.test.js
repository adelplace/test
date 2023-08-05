const assert = require("assert");
const {extract} = require("../arg");
describe('Arg', function () {
    it ('should extract default values', function () {
        assert.deepEqual(extract(['--foo', 'bar']), {pattern: undefined, count: false});
    });

    it('should extract --filter', function () {
       assert.equal(extract(['foo', '--filter=de']).pattern, 'de');
    });

    it('should ignore empty --filter', function () {
        assert.equal(extract(['foo', '--filter']).pattern, undefined);
    });

    it('should extract --count', function () {
        assert.equal(extract(['foo', '--count']).count, true);
    });
});
