const phrases = [

    "Analista de Sistemas.",
    "Pós-graduado em Engenharia de Software.",
    "Programador JavaScript Full Stack."

];

const qualities = [
  "Proativo.",
  "Comunicativo.",
  "Curioso e creativo."
];

const outputElement_1 = document.getElementById("Im-a-developer-1");
const outputElement_2 = document.getElementById("Im-a-developer-2");
let currentPhraseIndex = 0;
let currentQualitiesIndex = 0;

function typeWriter() {
  const currentPhrase = phrases[currentPhraseIndex];
  const currentqualities = qualities[currentPhraseIndex];
  let charIndex = 0;

  function type() {
    if (charIndex < currentPhrase.length) {
      outputElement_1.textContent += currentPhrase.charAt(charIndex);
      outputElement_2.textContent += currentqualities.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); 
    } else {
      setTimeout(erase, 1000); 
    }
  }

  function erase() {
    if (charIndex > 0) {
      outputElement_1.textContent = currentPhrase.substring(0, charIndex - 1);
      outputElement_2.textContent = currentqualities.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); 
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      currentQualitiesIndex = (currentQualitiesIndex + 1) % qualities.length;
      setTimeout(typeWriter, 500); 
    }
  }

  type();
}

// Iniciar a função quando a página carregar
document.addEventListener("DOMContentLoaded", typeWriter);