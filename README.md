array-filter_one
=======

returns first element that pass the test implemented by the provided function.


```javascript
var arrayFilterOne = require("@nathanfaucett/array-filter_one");


var four = arrayFilterOne([2, 4, 6], function isFour(value, index, array) {
    return value === 4;
});
```
