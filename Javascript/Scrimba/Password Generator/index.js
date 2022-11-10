const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;
// let password = document.getElementById("password");

function randomCharacters() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (i = 0; i < passwordLength; i++) {
    randomPassword += randomCharacters();
  }
  return randomPassword;
}

function generateRandomPasswordTwo() {
  let randomPassword = "";
  for (i = 0; i < passwordLength; i++) {
    randomPassword += randomCharacters();
  }
  return randomPassword;
}

const generatedPasswordTwo = generateRandomPasswordTwo();
const generatedPassword = generateRandomPassword();

console.log(
  "Here is your randomly generated passwords: ",
  generatedPassword,
  "  -  ",
  generatedPasswordTwo
);
