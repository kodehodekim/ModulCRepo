let arrayOfNumbers = [1, 2, 3];

// function that returns an array with each elements value doubled
function doubleNums(nums) {
  const newArray = [...arrayOfNumbers];
  for (let index = 0; index < nums.length; index++) {
    newArray[index] *= 2;
  }
  return newArray;
}
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
