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

const generateEl = document.getElementById("generate-el");
const displayOne = document.getElementById("display-One");
const displayTwo = document.getElementById("display-Two");
const passwordLength = 15;

function generatePassword() {
  displayOne.innerHTML = "";
  displayTwo.innerHTML = "";

  for (let i = 0; i < passwordLength; i++) {
    let passwordOne = Math.floor(Math.random() * characters.length);
    let passwordTwo = Math.floor(Math.random() * characters.length);

    displayOne.innerHTML += characters[passwordOne];
    displayTwo.innerHTML += characters[passwordTwo];

    console.log(characters[i]);
  }
}

function copyContent(displayId) {
  const targetElement = document.getElementById(displayId);

  const tempInput = document.createElement("textarea");
  tempInput.value = targetElement.textContent;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");

  document.body.removeChild(tempInput);
  alert("Password Copied: " + targetElement.textContent);
}
