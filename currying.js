//! Introduction to Currying
function greet(greeting, name) {
    return `${greeting} ${name}`; 
}

console.log(greet('Greet:', 'Good evening,', 'Latch'));

/*
 What if we had a list of names and we wanted to create greetings for each name in the list?

 Here are our friends...
*/

const friends = ['Bill', 'Ted', 'Peter', 'Parker'];

/*
 Our greet function takes 2 parameters, the greeting and the name.
 However the map function in the friendGreeting will only take one (name) paramater.
 If we were to pass the greet function into the map i.e
 const friendGreetings = friends.map(greet);
 The result would be...
 [ 'Bill 0', 'Ted 1', 'Peter 2', 'Parker 3' ]
 Whats happening here is that the greet function is being called with the name as the first parameter, and then the index within the array, is getting passed in as the second parameter.

 We need to figure out a way to get our greeting into the greet function when we're trying to use it with the map function.

 A function is a value similar to how numbers, strings and objects are values. So we can pass functions into other functions. Functions can also be the return value of functions.

 So how do we pass 2 parameters to our greet function when we're using map...?

 Lets create a new greeting function (greet2) to compare...
*/

function greet2(greeting) { 
    return function(name) {
        return `${greeting} ${name}`;
    };
}

/*
 Instead of having a function that takes 2 parameters and returns a string. We have a function that takes 1 parameter (the greeting) and it returns an anonymous function that takes 1 parameter (a name).
 The return function then returns the two combined strings.

 This is called a High-Order Function. A HOF is a function that either takes a function as an input parameter and/or returns a function.
 
 Array.map() is also a HOF because it takes a function as an input parameter.
*/

console.log('Greet2:', greet2('Have a good weekend,') ('Latch'));

/*
 We now call the greet2 function inside of the map function and pass in the greeting that we would like to add to the string.
*/

const friendGreetings = friends.map(greet2('Good morning,'));

console.log('friendGreetings:', friendGreetings);