// PURE FUNCTIONS

/*
The rules for a pure function are..

1. Must have input parameters.
2. Must not have stateful values.
3. Return data based on the input values.
4. Must not create side effects.
*/

// Pure function examples

// 1
function add(x, y) {
    return x + y;
};

// 2
const add2 = (x , y) => x + y;

// Impure function example
let counter = 0;

function inc() {
    counter++;
};

/*
Pure functions are harder to write. So why write them?

Some of the benefits of writing pure functions...

1. They're reusable.
2. They're composable (You can combine functions to create new functions).
3. They're easy to test.
4. They're easy to cache.
*/