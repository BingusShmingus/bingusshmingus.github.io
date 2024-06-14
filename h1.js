const sentences = [
  "Welcome to My Website!",
  "Oi Mate Welcome to My Site!",
  "Rivers Quomo."
];

const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];

const sentenceElement = document.getElementById("sentence");
sentenceElement.textContent = randomSentence;
