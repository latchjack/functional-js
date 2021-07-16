// Updating objects in an immutable way

// This is our object
const meal = {
    id: 1,
    description: 'breakfast'
};

/*
| If you wanted to add a new key:value pair to the object, we could
| do the following
*/
const updatedMeal = {
    id: meal.id,
    description: meal.description,
    calories: 600
};

/*
| This works but it is a very verbose of doing it as if there were more 
| keys we would have to copy each of those before adding the new key/s too.
| To avoid this we can utilise the spread operator which would give us the 
| same result but cut out the length process of copying each value 
| separately.
*/
const updatedMeal = {
    ...meal,
    calories: 600
};

/*
| Whilst using the spread operator to add a new field we can also update
| an existing key's value by changing the data previously held.
*/
const updatedMeal = {
    ...meal,
    description: 'brunch',
    calories: 600
};

// These are immutable ways we can add to or update our object.

/*
| To delete a property from the object, we can use destructuring and the
| rest operator.
*/
const { id, ...mealWithoutId } = updatedMeal;

/*
| Doing this pulls the id out into it's own constant. Console logging 'id'
| would return '1' and logging mealWithoutId would return the following...
| 
|   Object {
|       description: 'brunch',
|       calories: 600
|   };
*/

/*
| Spread:
| '...' the three periods are on the right-hand side of the '='
|
| Rest:
| '...' the three periods are on the left-hand side of the '='
*/