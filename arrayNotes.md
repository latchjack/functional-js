#  Updating arrays in an immutable way

This is our array
```js
const meals = [
    { id: 1, description: 'breakfast', calories: 100 },
    { id: 2, description: 'lunch', calories: 200 }
];
```

If we wanted to add a new object to the array, we can utilise
the spread operator like before.

This is the new object we want to add to the array.
```js
const newMeal = {
    id: 3,
    description: 'dinner',
    calories: 400
};
```

Now we can add the new object to the array using the spread.
```js
const updatedMeals = { ...meals, meal };
```

To update something within an array i.e. update the description,
we could use the array's map method.
```js
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(double);

function double(num) {
    return num * 2;
};
```
Console logging this would return the results `[2, 4, 6]`.

So if we wanted to update the description of the second meal in
our meals array, we could do the following...

This maps through the updatedMeals array and checks for the meal
with the id of '2'. When it finds the meal it spreads the existing
data and then replaces the old description value with the new one.
Any meals in the array that don't have an id of '2' are returned
unchanged.
```js
const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription(meal) {
    if (meal.id === 2) {
        return {
            ...meal,
            description: 'early brunch'
        };
    };
    return meal;
};
```

To remove an item from the array we can use the filter function.
```js
const filteredMeals = updatedMeals.filter(function(meal) {
    return meal.id !== 1;
});
```

This would remove the meal with the id of '1' from the array.
Instead of passing a named function we passed an anonymous
function to the filter function. We then passed the meal as a
parameter.

To summarise data in an array in an immutable way, we can use
the Reduce function.

Reduce is similar to map and filter because it expects transformation\
function as a paratemer.

In our sum function it takes the numbers array and takes 
```js
const numbers = [1 (x), 2 (y), 3];

function sum (x , y) {
    return x + y;
};
```
`x + y` gives us '3'. It then moves onto the next index in the array '3'.
The total of the last x + y becomes our 'x' this time around which is named the accumulator. So it would be 3 + 3, giving us the total of '6'.

*Example*
```js
const numbers = [1, 2, 3];

function sum(x, y) {
    return x + y;
};

const total = numbers.reduce(sum);
```

1. Find the average grade from all of the below scores.
2. To find out how many students scored A's, B's, C's, D's,
E's and F's.

`const grades = [60, 55, 80, 90, 99, 92, 75, 72];`

## 1.
```js
const total = grades.reduce(sum);

function sum(x, y) {
    return x + y;
};
```
Which would give us 623. 
To calculate the average we just need to divide the total
by the number of grades.

`const count = grades.length`

`console.log(total/count)`, which would give us 77.875

## 2.
The object at the end of the reduce function will make
the accumulator as an empty object when it initialises.
```js
const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
    if (grade >= 90) {
        return {...acc, a: acc.a + 1};
    }
};
```
On the first challenge the accumulator was a number that
increased as each element in the array was evaluated.
However the accumulator doesn't have to be a number. To
specify an initial or starting accumulator value, that 
the reducer should use, you pass in a second parameter
to the reduce function.

*e.g.*

`const total = numbers.reduce(sum, ?);`

This second parameter is passed into the sum function as
the first parameter (the acc) and the first parameter 
becomes the second.
```js
const total = numbers.reduce(sum, 5);

const numbers = [1, 2, 3];

function sum(x (5), y (1)) {
    return x + y;
}
```
Which would make the final total `11` instead of the original
`6` result.

## Summary
+ Add to an array = `Spread` operator

+ Transform an array = `Map` function

+ Remove from an array = `Filter` function

+ Summarise information in an array = `Reduce` function