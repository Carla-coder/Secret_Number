// Gerar um número aleatório entre 1 e 50
let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 10;

// Elementos do DOM
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

// Função para verificar o palpite
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = 'Por favor, insira um número válido entre 1 e 50.';
        return;
    }

    attempts--;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `Parabéns! Você acertou o número é ${randomNumber}!`;
        endGame();
    } else if (attempts === 0) {
        message.textContent = `Fim de jogo! O número era ${randomNumber}.`;
        endGame();
    } else {
        message.textContent = userGuess < randomNumber ? 'Muito baixo! Tente novamente.' : 'Muito alto! Tente novamente.';
    }

    guessInput.value = '';
}

// Função para encerrar o jogo
function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = 'block'; // Mostra o botão de Começar Novamente
}

// Função para reiniciar o jogo
function restartGame() {
    randomNumber = Math.floor(Math.random() * 50) + 1; // Novo número entre 1 e 50
    attempts = 10;
    attemptsDisplay.textContent = attempts;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none'; // Esconde o botão de Começar Novamente
}

// Evento de clique no botão de palpite
guessButton.addEventListener('click', checkGuess);

// Evento de pressionar Enter no campo de entrada
guessInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Evento de clique no botão de Começar Novamente
restartButton.addEventListener('click', restartGame);