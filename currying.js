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

 So how do we pass 2 parameters to our greet function when we're using map...?

 Lets create a new greeting function (greet2).
*/

function greet2(greeting, name) {
    return `${greeting} ${name}`; 
}

const friendGreetings = friends.map(greet);

console.log(friendGreetings);