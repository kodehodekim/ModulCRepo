const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];
// moved the people array to a function below all our code
const people = getPeople();
function getPeople() {
  return [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["writing", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
    {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
    },
    {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
    },
    {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
    },
  ];
}

/** Excercise 1: read text from an html element on the page
 *               the page has an h1 element: <h1>Hello world!</h1>
 *
 *               * Fix line 16 such that h1Element is assigned to the h1 element
 *               * Fix line 17 such that it only console.logs the textContent (only Hello world!) and not the complete data from the h1Element object.
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *                https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 */

const h1Element = document.querySelector("h1");
console.log(h1Element);

/** Excercise 2: change the text inside the h1Element, so that it says "People" rather than "Hello world!"
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 *                https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
 *                https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 */

h1Element.textContent = "People";

/** Excercise 3: Write the missing code in the addArticle function below.
 *                In the function there is a variable called articleContainer, it points to the div found in the index.html: <div class="articles"></div>
 *                And then there are 2 variables that contain some text, write code such that it appends both:
 *                articleTitle text as a H2 tag, and
 *                articleText text as a P tag
 *                To the articleContainer.
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 */

function addArticle() {
  const articleContainer = document.querySelector(".articles");
  const articleTitle = "New article";
  const articleText = "Lorem ipsum";
  articleContainer.innerHTML += `
         <div class="article">
           <h2>${articleTitle}</h2>
           <p>${articleText}</p>
         </div>`;
}

addArticle();

// the line below would just add the texts as a text, but we need html elements too.

// Oneliner :
articleContainer.textContent += `<h2>${articleTitle}</h2> <p>${articleText}`
addArticle();

/** Excercise 4: Fix the renderPeople() function below such that it displays data inside of html elements instead of just text.
 *               Use the following html: 
                  <div class="article">
                    <h2>Name: <span class="name"> PERSONS_NAME </span> - Age: <span class="age"> PERSONS_AGE </span></h2>
                    <p> PERSONS_HOBBIES </p>
                    <span class="isMale"> PERSON_ISMALE </span>
                  </div>
 * 
 *                Replace PERSONS_* with appropriate person.*-data.
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *                https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 */

// // function to render the people array
function renderPeople() {
  // select the div with the classname articles
  const articleContainer = document.querySelector(".articles");
  // loop through the people array
  for (const person of people) {
    articleContainer.innerHTML += `
  <div class="article">
  <h2>Name: <span class="name"> ${person.name} </span> - Age: <span class="age">${person.age}</span></h2>
  <p>${person.hobbies}</p>
  <span class="isMale">${person.male}</span>
</div>`;
  }
}

renderPeople();

/** Excercise 4a: In excercise 3 you created several divs with the classname "article", fix line 96
 *                such that its assigned to a list of all Nodes with the classname "article"
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *                https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 */

const articleElements = document.querySelectorAll(".article");

console.log(articleElements);

/** Excercise 4b: articleElements contains a NodeList, i've created a function called updatePeople().
 *               Inside that function write code that will loop through the NodeList, and
 *               use querySelector to read data from html-elements for each:
 *                - name
 *                - age
 *                - hobbies
 *                - isMale
 *                Then alter the data the following way:
 *                Add +1 to age, replace isMale boolean with a title like: "Mr.", "Mrs.", and add "coding" to the hobbies array.
 *                (ps: update the data shown on the page, not in the people-array)
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */

// function to update the articleElements NodeList:
// loop through the articleElements nodeList, and alter some elements

function updatePeople() {
  for (const article of articleElements) {
    const name = article.querySelector(".name");
    const age = article.querySelector(".age");
    const hobbies = article.querySelector(".hobbies");
    const isMale = article.querySelector(".isMale");
    age.textContent = parseInt(age.textContent) + 1;
    hobbies.textContent += ` - coding`;
    const title = isMale.textContent === "true" ? "Mr. " : "Ms. ";
    name.textContent = title + name.textContent;
  }
}

updatePeople();

/** Excercise 5a: Callback functions.
 *               The addTwo function below takes a number as parameter and writes out the result of the number + 2 in the console.
 *               Upgrade this function so that instead of being limited to only console.logging the result it can be passed a function as parameter.
 *               For example, i should be able to write:
 *
 *               addTwo(2, console.log) // this would show 4 in the console
 *                or:
 *               addTwo(5, function(number) {
 *                document.body.textContent = number + 2 // this would display the number 7 on the webpage
 *               })
 *
 *                Resources:
 *                https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// function takes a number as parameter and logs it out to the console

function addTwo(number) {
  console.log(number + 2);
}
addTwo(2);

addTwo(11, console.log);
addTwo(4, function (number) {
   document.body.textContent = number + 2
});

addTwo(19);

/** Excercise 5b: Callback functions variants.
 *                Redo the excercise 5a, but use different variants of supplying callback functions (named functions, anonymous functions, arrow functions, etc)
 */
  const twoAdd(number) => console.log(number + 2);
  let twoAddAnon() = {
    console.log(number + 2);
  };

/** Excercise 6a: Set by reference vs set by value
 *               We discussed in class today how arrays don't store values, but rather store a reference to a memory address.
 *               So when we change a value in an array, wether directly or indirectly the value in the array itself changes.
 *               The doubleNums() function looks good, but if you console log arrayOfNumbers after running the function
 *               you'll notice the values in the original array get mutated as well.
 *               Think of a way to fix this function so that it still returns an array with each element doubled in value,
 *               but without mutating the original array.
 *
 *               Resources you may find useful:
 *               https://www.slingacademy.com/article/javascript-5-ways-to-create-a-new-array-from-an-old-array/
 *               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

// array of numbers
let arrayOfNumbers = [1, 2, 3];

// function that returns an array with each elements value doubled
function doubleNums(nums) {
  const newArray = [...arrayOfNumbers];
  for (let index = 0; index < nums.length; index++) {
    newArray[index] *= 2;
  }
  return newArray;
}

// This is how I solved it in the start, before I put it into the for loop.
const oldArrayOfNum = [...arrayOfNumbers];
console.log(oldArrayOfNum)

console.log(doubleNums(arrayOfNumbers)); // expected output: [2,4,6]
console.log(arrayOfNumbers); // we want this line to show [1,2,3] rather than [2,4,6]

/** Excercise 6b: Solve the excercise 6a on a separate line using the .map method.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
const mapArray = arrayOfNumbers.map((number) => number * 2);

console.log(mapArray);
console.log(arrayOfNumbers);

/** Excercise 6c: Solve the excercise 6a on a separate line using the .reduce method.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

let newArrayOfNumbers = [];
const reducedArray = arrayOfNumbers.reduce((accumulator, X) => {
  newArrayOfNumbers.push(X * 2);
  accumulator = newArrayOfNumbers;
  return accumulator;
}, []);

console.log(newArrayOfNumbers); // New reduced array
console.log(arrayOfNumbers); // Testing to see if the old array is mutated

/** Excercise 7: Try using the .forEach, .map and .reduce methods (separately) to loop through and alter the people's array (without mutating the original array)
 *               For example, add +2 to their age, add another hobby (or add some new fields)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const alterForEach.forEach = () => {
  people.age += 1;
}

/** Excercise 8: Create a function that will sort the people array. (for example sort on Age, or Name)
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
// function used to feed data to the people variable.

// Sort the array by age
let sortAge = (x, y) => {
  if (x.age < y.age) {
    return -1;
  }
  if (x.age > y.age) {
    return 1;
  }
  return 0;
};

console.log(people.sort(sortAge));
