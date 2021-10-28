const R = require('ramda');
// Function Composition

/*
Function Composition is making new functions out of other functions by combining
the logic of the other functions..

e.g.

We have a function named slice that takes apples and returns them sliced

function slice(apples) {
    return slicedApples
};

We also have a function named bake that takes sliced apples as it's input
and returns an apple pie using the baked slices

function bake(slicedApples) {
    return applePie;
};

The output of the slice function is the expected input of the bake function.
What if we could combine these?
When the output from one pure function is the same as the expected input to another
pf you can combine (compose) them

const makePie = compose (bake, slice);

const pie = makePie(apples);

Which would give us our pie.
*/

// I want to find out how many words are in the following sentence..

const sentence = "To be, or not to be. That is the question";
const wordList = R.split(' ', sentence);
const wordCount = R.length(wordList);
console.log(wordCount);

// We could also do this more succinctly by writing, but we lose readability

const sentence2 = "To be, or not to be. That is the question";
const wordCount2 = R.length(R.split(' ', sentence2));
console.log(wordCount2);