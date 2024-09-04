let secretWord = '';
let displayWord = [];
let attempts = 6;
let guessedLetters = [];
let letrasJaChutadas = "";
let letrasErradas = "";

// Inicializa o jogo ao carregar a página
window.onload = initializeGame;

// Configura eventos para os botões
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('guess-btn').addEventListener('click', guessLetter);

// Inicializa o jogo
function initializeGame() {
    document.getElementById('setup-section').classList.remove('hidden');
    document.getElementById('game-section').classList.add('hidden');
}

// Função para começar o jogo
function startGame() {
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');

    // Obtém a palavra secreta do campo de entrada
    secretWord = document.getElementById('secret-word').value.toUpperCase().trim();
   
    if (secretWord === '') {
        document.getElementById('message').innerText = 'Por favor, insira uma palavra secreta.';
        return;
    }

    // Inicializa o jogo
    displayWord = Array(secretWord.length).fill('_');
    attempts = 6;
    guessedLetters = [];
    letrasJaChutadas = "";
    letrasErradas = "";

    updateDisplay();
}

// Atualiza a exibição da palavra
function updateDisplay() {
    document.getElementById('word-display').innerText = displayWord.join(' ');
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('letrasJaChutadas').innerText = letrasJaChutadas;
    document.getElementById('letrasErradas').innerText = letrasErradas;
}

// Verifica se a letra adivinhada está na palavra
function guessLetter() {
    const letterInput = document.getElementById('letter-input');
    const letter = letterInput.value.toUpperCase();
    letterInput.value = '';
    letterInput.focus();

    if (letter === '' || guessedLetters.includes(letter)) {
        document.getElementById('message').innerText = 'Por favor, insira uma letra válida.';
        return;
    }

    guessedLetters.push(letter);

    let correctGuess = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            displayWord[i] = letter;
            if (!letrasJaChutadas.includes(letter)) {
                letrasJaChutadas += letter + ", ";
            }
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attempts--;
        letrasErradas += letter + ", ";
    }

    if (displayWord.join('') === secretWord) {
        document.getElementById('message').innerText = `Parabéns! Você ganhou!`;
        document.getElementById('letter-input').disabled = true;
        document.getElementById('guess-btn').disabled = true;
        document.getElementById('word-display').innerText = secretWord;
    } else if (attempts <= 0) {
        document.getElementById('message').innerText = `Game over! A palavra era "${secretWord}".`;
        document.getElementById('letter-input').disabled = true;
        document.getElementById('guess-btn').disabled = true;
    } else {
        updateDisplay();
    }
}




