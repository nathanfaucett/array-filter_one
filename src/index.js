module.exports = arrayFilterOne;


function arrayFilterOne(array, callback) {
    var i = -1,
        il = array.length - 1,
        value;

    while (i++ < il) {
        value = array[i];

        if (callback(value, i, array)) {
            return value;
        }
    }

    return undefined;
}
