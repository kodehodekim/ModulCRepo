const sounds = [
  "a.wav",
  "s.wav",
  "d.wav",
  "f.wav",
  "g.wav",
  "h.wav",
  "j.wav",
  "k.wav",
];
const keys = {
  a: sounds[0],
  s: sounds[1],
  d: sounds[2],
  f: sounds[3],
  g: sounds[4],
  h: sounds[5],
  j: sounds[6],
  k: sounds[7],
};
const appElement = document.getElementById("app");

const drumKitElements = sounds.reduce((accumulator, sound) => {
  const button = buttonElement(sound, handleClick);
  return [...accumulator, button];
}, []);
appElement.append(...drumKitElements);

window.onkeyup = function (event) {
  if (keys[event.key]) audioElement("sounds/" + keys[event.key]).play();
};

function handleClick(sound) {
  audioElement("sounds/" + sound).play();
}

function audioElement(source) {
  const element = new Audio(source);
  return element;
}

function buttonElement(text, clickEvent) {
  const element = document.createElement("button");
  element.textContent = text;
  element.addEventListener("click", () => clickEvent(text));
  return element;
}
