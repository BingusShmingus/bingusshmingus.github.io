const sentences = [
"It's one of life's great mysteries, isn't it?... I don't know, man, but it keeps me up at night.",
"I think it looks more like a puma.",
"Don't. Ever. Be. Alone.",
"We need you to go to the store and get two quarts of elbow grease.",
"Thank you for calling Red Base, this is Private Grif, how may I assist you today?",
"Time is not made out of lines. It is made out of circles; that is why clocks are round.",
"You ever wonder why we're here?"
];

const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];

const sentenceElement = document.getElementById("sentence");
sentenceElement.textContent = randomSentence;
