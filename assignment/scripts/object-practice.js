console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Terry',
  lastName: 'O\'Keefe',
  hasSiblings: true,
  shoeCount: 40,
  favThreeFoods: ['pizza', 'tacos', 'sushi']
};
console.log('A little about me:', me); // console log the items placed in the object

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log('My full name is:', fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('My first favorite food is:', me.favThreeFoods[0]); // console log index 0 for first item in array
console.log('My last favroite food is:', me.favThreeFoods[me.favThreeFoods.length-1]); // console log length-1 for last item


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log('My shoe count is:', me.shoeCount);

me.shoeCount = me.shoeCount += 1;
console.log('Just bought a new pair. New shoe count is:', me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Blue';
console.log('My favorite color is:', me.favoriteColor);
console.log(me); // console log object
