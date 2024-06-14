const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a powerful scripting language for web development.",
  "Building websites can be both fun and challenging.",
  "Let's keep learning and creating!",
];

const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];

const sentenceElement = document.getElementById("sentence");
sentenceElement.textContent = randomSentence;