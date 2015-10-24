var tape = require("tape"),
    arrayFilterOne = require("..");


tape("arrayFilterOne(array, callback) returns value that passes the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        arrayFilterOne([0, 1, 2, 3, 4], function(value) {
            return (value + 1) === 3;
        }), 2
    );
    assert.end();
});
