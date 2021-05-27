// Updating Objects in an immutable way

const meal = {
    description: 'Dinner',
  };
  // 1. In an Immutable way, add a property to the
  // meal called calories setting it's value to 200,
  // then log the result to the console
  
  const updatedMeal = {
      ...meal,
      calories: 200
  }
  
  console.log(updatedMeal);
  // 2. In an Immutable way, increase the calories 
  // by 100 and print the result to the console
  
  const updatedMealTwo = {
      ...updatedMeal,
      calories: 300
  }
  
  console.log(updatedMealTwo);
  
  // 3. In an Immutable way, remove the calories property and log the result to the console
  
  const { calories, ...mealWithoutCals } = updatedMeal;
  
  console.log(mealWithoutCals);
  
  // See solution at: https://jsbin.com/sunewil/edit?js,console

  //! OR

  const fridge = {
	liquid: 'Milk',
	food: 'Cheese',
	veg: 'Peppers',
	fruit: 'Melon'
}

console.log(fridge);

const updatedFridge = {
	...fridge,
	shakes: 'Banana'
}

console.log(updatedFridge);

const { liquid, food, ...fridgeWithoutDairy } = updatedFridge;

console.log(fridgeWithoutDairy);
console.log(food);
console.log(liquid);
