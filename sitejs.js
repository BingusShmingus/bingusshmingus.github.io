const sentences = [
  "What even is a website?",
  "Made with JavaScript.",
  "Made with HTML.",
  "Made with CSS.",
  "Made with Love",
  "You know I can see you, right?.",
  "My favorite game is Halo Reach!",
];

const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];

const sentenceElement = document.getElementById("sentence");
sentenceElement.textContent = randomSentence;
