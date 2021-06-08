// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
  
  const congrats = {
      a: 'Excellent job',
      b: 'Nice job',
      c: 'Well done',
      d: 'What happened',
      f: 'Not good'
  };
  
  function grading(score){
    if(score >= 90){
      return 'a';
    } else if (score >= 80){
      return 'b'; 
    } else if (score >= 70){
      return 'c'; 
    } else if (score >= 60){
      return 'd'; 
    } else {
      return 'f'; 
    }
  }
  
  function teachersNotes(feedBackRules){
    return function(student){
      const grade = grading(student.grade);
      const message = feedBackRules[grade];
      return `${message} ${student.name}, you got an ${grade}`;
    }
  }
  
  const gradeFeedback = studentGrades.map(teachersNotes(congrats));
  
  console.log(gradeFeedback);
  
  /*
  const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, you got an a',
    'Well done Steph, you got an c',
    'What happened Allen, you got an d',
    'Not good Gina, you got an f',
  ]; 
  */

/* ============================== */

const products = [
    {name: 'milk', price: 1.50},
    {name: 'bread', price: 1.80},
    {name: 'cheese', price: 4.50},
    {name: 'water', price: 0.80},
    {name: 'peanut butter', price: 3.40},
    {name: 'jam', price: 2.80},
    {name: 'grapes', price: 3.90}
];

function printReceipt(vat, vatTotal, newTotal) {
    console.log(
        'VAT is', vat + '%.', '\n',
        'The VAT on your purchase came to', '£' + vatTotal.toFixed(2), '\n',
        'The total including VAT', newTotal, '\n');
}

function addVat(total) {
    const vat = 20;
    const vatTotal = total / 100 * vat;
    const newTotal = total + vatTotal;
    // console.log('VAT is', vat + '%', 'The VAT on your purchase came to', '£' + vatTotal.toFixed(2));
    // console.log('The total including VAT', newTotal);
    return printReceipt(vat, vatTotal, newTotal);
}

function totalCounter(items) {
    let total = 0;
    for (i = 0; i < items.length; i++) {
        console.log(items[i].name, items[i].price);
        total += items[i].price;
    };
    return addVat(total);
};

function takeToCounter(...items) {
    return totalCounter(items);
};

takeToCounter(products[0], products[1], products[3]);
takeToCounter(products[2], products[4], products[6]);
takeToCounter(products[5], products[1]);