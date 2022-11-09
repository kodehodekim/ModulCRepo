const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

// moved the people array to a function below all our code
const people = getPeople();

// from the last task in module B:
/*
Use a normal for loop to loop over the people array and do the following:
- Make a new key on each person object in the array called "city" and set the value to a random city
	from the cities array.
- Make a new key on each person object called "title" and set it to "Mr." for males and "Ms." for females.
- Increment the age by 1
- Add "coding" to the hobby array on each object.
*/

// normal for loop solution:
/* for (let i = 0; i < people.length; i++) {
  people[i].city = cities[Math.floor(Math.random() * cities.length)];
  people[i].title = people[i].male ? "Mr." : "Ms.";
  people[i].age++;
  people[i].hobbies.push("coding");
} */
//console.log(people)

// "for of" loop solution:
/* for (const person of people) {
  person.city = cities[Math.floor(Math.random() * cities.length)];
  person.title = person.male ? "Mr." : "Ms.";
  person.age++;
  person.hobbies.push("coding");
} */
//console.log(people)

// In the code above, the people array contains each person as an object. Each object has different attributes.
// the Document Object Model, is also an object...
//console.log(document)

// the document body:
//console.log(document.body)

// to access elements inside the document body we can use a method called querySelector.
// querySelector works in a similar way to how we select elements in CSS. (using tagnames, or if its a class using a .classname)

// to select the h1 tag:
// document.querySelector("h1")

// to get the text from the h1-tag:
/* console.log(
document.querySelector("h1").textContent
) */

// store the h1-tag in a variable
const h1Element = document.querySelector("h1");
// change text of the h1 tag:
h1Element.textContent = "New text";

// select element with the classname of article
/* const articleElement = document.querySelector(".article")
console.log(articleElement) */

// select element with the classname of articles
const articleContainer = document.querySelector(".articles");

// function to render people array
function renderPeople() {
  // loop through the people array
  for (const person of people) {
    // append innerHTML content to the articleContainer element:
    articleContainer.innerHTML += `
      <div class="article">
        <h2>Name: <span class="name">${
          person.name
        }</span> - Age: <span class="age">${person.age}</span></h2>
        <p>${person.hobbies.join(" - ")}</p>
        <span class="isMale">${person.male}</span>
      </div>
    `;
  }
}
// call the renderPeople() function:
//renderPeople()

// select all elements with classname of article
// important: here we use querySelectorAll instead of querySelector because querySelector only returns the first result while querySelectorAll returns a list of nodes.
const articleElements = document.querySelectorAll(".article");

// function to update the articleElements NodeList:
function updatePeople() {
  // loop through the articleElements nodeList
  for (const article of articleElements) {
    // select specific child-elements inside of article
    // important: we use querySelector on the article object instead of on document itself because we only want to select the elements inside of the article rather than the entire page.
    const name = article.querySelector(".name");
    const age = article.querySelector(".age");
    const hobbies = article.querySelector("p");
    const isMale = article.querySelector(".isMale");

    // update age, hobbies and add a title to the persons name:
    age.textContent = parseInt(age.textContent) + 1;
    hobbies.textContent += ` - coding`;
    const title = isMale.textContent == "true" ? "Mr. " : "Ms. ";
    name.textContent = title + name.textContent;
  }
}
// call the updatePeople() function:
//updatePeople()

// few words on functions

// declare a global variable called num1 and assign it to number 2
let num1 = 2;

// this function adds 2 to the num1 variable
function addTwoV1() {
  console.log(num1 + 2);
}

addTwoV1();

// this function adds 2 to the number provided as parameter
function addTwoV2(number) {
  console.log(number + 2);
}

addTwoV2(num1);

/*
Both functions work in a similar way, but V1 is what we call an "impure" function, while the V2 is a "pure-function"
The advantage of a pure-function is that it will always produce the same result with the same input.
While an impure function can have unknown results, because it relies on "external state" (an external variable)
When possible we prefer pure-functions.
*/

// functions can take variables as parameters, but they can also take other functions as parameters:
// those are called "callback functions"

// function takes a number and a function as parameters
function addTwo(num, callback) {
  // attemt to run callback as if it was a function:
  callback(num + 2);
}

// call addTwo with num set to 2 and renderNumber as callback function
// important: when providing a callback function, only provide the name of the function without the ending ()
addTwo(2, renderNumber);

// renderNumber function replaces the page content with the given parameter
function renderNumber(number) {
  document.body.innerHTML = number;
}

// providing inline anonymous function as parameter:
addTwo(7, function(text) {
  console.log("adding two to " + text)
  console.log(text)
  renderNumber(text)
})

// same as above but using the arrow => function syntax instead of function function
addTwo(7, (text) => {
  console.log("adding two to " + text)
  console.log(text)
  renderNumber(text)
})

// the different ways we can declare functions:

// variable set to an arrow function:
const myFunc1 = () => {
  console.log("myFunc");
};

// variable set to a function:
const myFunc1b = function () {
  console.log("myFunc");
};

// and function declared the normal way:
function myFunc1c() {
  console.log("myFunc");
}

// advantage of using the normal function definition is that normal functions are automatically hoised to the top of the script.
// That means that we can call functions before they're declared (we can't do that with variables)

// this is the same as myFunc1 but using even shorter syntax (if code in our function is only one line we can drop the {})
const myFuncShorter = () => console.log("myFunc");

// back to the topic of looping:

// At the top of the script we've used the for loop variants: for (let i = 0... ) and for (const person of people)
// It's also possible to loop through arrays without using loops...
// We can do so by using the .forEach method:
// syntax: nameOfArray.forEach(callbackFunction)

// for example:
people.forEach(function (person) {
  // log to console each person:
  console.log(person)
});

// Reproducing the for loops at top of this script which adds random city, a title etc...
/* people.forEach((person) => {

  person.city = cities[Math.floor(Math.random() * cities.length)];
  person.title = person.male ? "Mr." : "Ms.";
  person.age++;
  person.hobbies.push("coding");
}) */

//console.log(people)

// One downside of manipulating the original people array is that we have no way of getting the original data.
// We could create a new array and then append data to it from within the forloop.
// But there exists another array-method, which can simplify it for us, its called the .map method.
// The .map works almost exactly the same as a .forEach but it also returns a new array like below:

let updatedPeople = people.map((person) => {
  // return a new object with some modifications to the persons data:
  return {
    city: cities[Math.floor(Math.random() * cities.length)],
    title: person.male ? "Mr." : "Ms.",
    name: person.name,
    age: person.age + 1,
    hobbies: person.hobbies.concat("coding")
  };
});
// logs out the new array
console.log(updatedPeople);

// logs out the original array
console.log(people);

// The .reduce method is another very usueful array method, we can use it to reimplement the above .map, the following way:

let updatedPeople2 = people.reduce((accumulator, person) => {
  accumulator.push({
    city: cities[Math.floor(Math.random() * cities.length)],
    title: person.male ? "Mr." : "Ms.",
    name: person.name,
    age: person.age + 1,
    hobbies: person.hobbies.concat("coding")
  });

  return accumulator;
 

// so the .reduce takes that initial value [], then with each iteration we can grab the current person variable
// then we can push the current person object to the accumulator which we return back to the .reduce method.

// A better example of using the .reduce method, is to actually reduce an array into an html-string:

// function to render people array
function renderPeople(people) {
  const articleContainer = document.querySelector(".articles");
  // loop through the people array

  let htmlResult = people.reduce((accumulator, person) => {
    accumulator += `
    <div class="article">
      <h2>Name: <span class="name">${
        person.name
      }</span> - Age: <span class="age">${person.age}</span></h2>
      <p>${person.hobbies.join(" - ")}</p>
      <span class="isMale">${person.male}</span>
    </div>`;
    return accumulator;
  }, "");

  articleContainer.innerHTML = htmlResult;
}
// similarly to the previous example, we start with an initial value, this time that is an empty string.
// then with each iteration we append some data to the accumulator, and we return the accumulator.
// The result is that htmlResult contains a group of html elements for each element in the array.

// function used to feed data to the people variable.
function getPeople() {
  return [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"]
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"]
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"]
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["writing", "games", "memes"]
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"]
    },
    {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"]
    },
    {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"]
    },
    {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"]
    }
  ];
}} 
