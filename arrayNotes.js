//  Updating arrays in an immutable way

//  This is our array
const meals = [
    { id: 1, description: 'breakfast', calories: 100 },
    { id: 2, description: 'lunch', calories: 200 }
];

/*
|   If we wanted to add a new object to the array, we can utilise
|   the spread operator like before.
*/

//  This is the new object we want to add to the array.
const newMeal = {
    id: 3,
    description: 'dinner',
    calories: 400
};

//  Now we can add the new object to the array using the spread.
const updatedMeals = { ...meals, meal };

/*
|   To update something within an array i.e. update the description,
|   we could use the array's map method.
*/
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(double);

function double(num) {
    return num * 2;
};

//  Console logging this would return the results [2, 4, 6].

/*
|   So if we wanted to update the description of the second meal in
|   our meals array, we could do the following...
|
|   This maps through the updatedMeals array and checks for the meal
|   with the id of '2'. When it finds the meal it spreads the existing
|   data and then replaces the old description value with the new one.
|   Any meals in the array that don't have an id of '2' are returned
|   unchanged.
*/
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
