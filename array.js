// Updating Arrays in an immutable way

// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.

const friends = ['Dre', 'Ant'];

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name

const updatedFriends = [ ...friends, 'Brett'];

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.

const friendNameLengths = updatedFriends.map(nameToLength);

function nameToLength(name) {
  return name.length;
}

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.

const maxFriendLength = Math.max(...friendNameLengths);

const shorterNamedFriends = updatedFriends.filter(
  function(name) {
    return name.length < maxFriendLength;
  }
);

  
console.log(shorterNamedFriends);

// 5. Print each variable to the console.

// Solution can be seen at: 
// https://jsbin.com/nevonet/1/edit?js,console

//! OR

const meals = [
    { id: 1, description: 'Breakfast', dish: 'Toast' , cals: 250 },
    { id: 2, description: 'Snack', dish: 'Yoghurt' , cals: 120 },
    { id: 3, description: 'Lunch', dish: 'Chicken Salad' , cals: 450 }
];

console.log('meals', meals);

const newMeal = {
    id: 4,
    description: 'Dinner',
    dish: 'Pasta',
    cals: 550
};

console.log('newMeal', newMeal);

const updatedMeals = [ ...meals, newMeal ];

console.log('updatedMeals', updatedMeals);

const updatedMealDesc = updatedMeals.map(updateDescription);

function updateDescription(meal) {
    if (meal.id === 2) {
        return {
            ...meal,
            description: 'Brunch'
        }
    }
    return meal;
}

console.log('updatedMealDesc', updatedMealDesc);

const filteredMeals = updatedMeals.filter(function(meal){
    return meal.id !== 1;
});

console.log('filteredMeals', filteredMeals);

//! OR

const numbers = [1 , 2, 3];

const doubledNums = numbers.map(double);

function double(num) {
    return num * 2;
};

console.log(doubledNums);

//! Summarising arrays

const grades = [60, 55, 80, 90, 99, 92, 75, 72];

// Finding the average grade
const total = grades.reduce(sum);

function sum(acc, grade) {
    return acc + grade;
}

const count = grades.length;

console.log('The average grade', total / count);

// ==================================== //

// Grouping by grade
const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
    const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
    if (grade >= 90) {
        return {...acc, a: a + 1};
    } else if (grade >= 80) {
        return {...acc, b: b + 1};
    } else if (grade >= 70) {
        return {...acc, c: c + 1};
    } else if (grade >= 60) {
        return {...acc, d: d + 1};
    } else {
        return {...acc, f: f + 1};
    }
};

console.log('letterGradeCount', letterGradeCount);