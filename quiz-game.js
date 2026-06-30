let gameState = {
    currentCategory: null,
    currentQuestionIndex: 0,
    questions: [],
    correctAnswers: 0,
    totalScore: 0,
    answered: false,
    selectedAnswer: null
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryButtons();
});

function initializeCategoryButtons() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = '';
    for (const [category, data] of Object.entries(quizCategories)) {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = `${data.icon} ${category}`;
        btn.onclick = () => startQuiz(category);
        grid.appendChild(btn);
    }
}

function startQuiz(category) {
    gameState.currentCategory = category;
    gameState.questions = quizCategories[category].questions.sort(() => Math.random() - 0.5);
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswers = 0;
    gameState.totalScore = 0;
    gameState.answered = false;
    gameState.selectedAnswer = null;
    document.getElementById('categorySelect').classList.remove('show');
    document.getElementById('quizArea').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    const progress = ((gameState.currentQuestionIndex) / gameState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCount').textContent = `${gameState.currentQuestionIndex + 1}/${gameState.questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    const diffBadge = document.getElementById('difficultyBadge');
    diffBadge.textContent = question.difficulty.toUpperCase();
    diffBadge.className = `difficulty ${question.difficulty}`;
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        btn.disabled = gameState.answered;
        container.appendChild(btn);
    });
    document.getElementById('resultBox').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('nextBtn').style.display = 'none';
    gameState.answered = false;
    gameState.selectedAnswer = null;
}

function selectAnswer(index) {
    if (gameState.answered) return;
    gameState.selectedAnswer = index;
    gameState.answered = true;
    const question = gameState.questions[gameState.currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options.forEach(btn => btn.disabled = true);
    const isCorrect = index === question.correct;
    options[index].classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        options[question.correct].classList.add('correct');
    }
    let points = 0;
    if (isCorrect) {
        gameState.correctAnswers++;
        points = question.difficulty === 'easy' ? 10 : question.difficulty === 'medium' ? 25 : 50;
    }
    gameState.totalScore += points;
    updateStats();
    showResult(isCorrect, question.explanation, points);
    if (gameState.currentQuestionIndex < gameState.questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
        setTimeout(showFinalScreen, 2000);
    }
}

function showResult(isCorrect, explanation, points) {
    const resultBox = document.getElementById('resultBox');
    const resultMessage = document.getElementById('resultMessage');
    const resultExplanation = document.getElementById('resultExplanation');
    resultBox.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
        resultMessage.innerHTML = `<span class="result-correct">✓ CORRETO! +${points} PONTOS</span>`;
    } else {
        resultMessage.innerHTML = `<span class="result-incorrect">✗ INCORRETO!</span>`;
    }
    resultExplanation.textContent = explanation;
}

function updateStats() {
    document.getElementById('correctCount').textContent = gameState.correctAnswers;
    document.getElementById('scoreCount').textContent = gameState.totalScore;
    const percentage = gameState.currentQuestionIndex > 0 ? Math.round((gameState.correctAnswers / (gameState.currentQuestionIndex + 1)) * 100) : 0;
    document.getElementById('percentCount').textContent = percentage + '%';
}

function nextQuestion() {
    gameState.currentQuestionIndex++;
    if (gameState.currentQuestionIndex < gameState.questions.length) {
        loadQuestion();
    } else {
        showFinalScreen();
    }
}

function showFinalScreen() {
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('finalScreen').classList.add('show');
    const percentage = Math.round((gameState.correctAnswers / gameState.questions.length) * 100);
    const totalQuestions = gameState.questions.length;
    document.getElementById('finalScore').innerHTML = `<div style="margin-bottom: 20px;">${gameState.correctAnswers}/${totalQuestions} ACERTOS</div><div style="margin-bottom: 20px; font-size: 1.5em;">TAXA: ${percentage}%</div><div style="font-size: 2em;">PONTUAÇÃO FINAL: ${gameState.totalScore}</div>`;
    const circle = document.getElementById('scoreCircle');
    circle.style.setProperty('--percentage', `${percentage}%`);
    circle.textContent = percentage + '%';
    let rating = '';
    if (percentage === 100) {
        rating = '🔥 PERFEITO! VOCÊ É UM GÊNIO! 🔥';
    } else if (percentage >= 80) {
        rating = '⭐ EXCELENTE! MUITO BOM! ⭐';
    } else if (percentage >= 60) {
        rating = '✨ BOM! CONTINUE ESTUDANDO! ✨';
    } else if (percentage >= 40) {
        rating = '💪 PODE MELHORAR! MAIS UMA VEZ! 💪';
    } else {
        rating = '📚 ESTUDE MAIS E TENTE NOVAMENTE! 📚';
    }
    document.getElementById('finalScore').innerHTML += `<div style="margin-top: 30px; font-size: 1.3em; color: #0f0;">${rating}</div>`;
}