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
const drumApp = document.getElementById("app");
const drumkit = sounds.reduce((accumulator, sound) => {
  const button = buttonEl'(sound, handleClick);
  return [...accumulator, button];
}, []);
drumApp.append(...drumkit);

function handleClick(sound) {
  audioElement("sounds/" + sound).play();
}

function buttonEl(text, clickEvent) {
  const element = document.createElement("button");
  element.textContent = text;
  element.addEventListener("click", () => clickEvent(text));
  return element;
}

function audioElement(source) {
  const element = new Audio(source);
  return element;
}

window.onkeyup = function (event) {
  if (keys[event.key]) audioElement("sounds/" + keys[event.key]).play();
};
