const quizData = [
    {
        question: "Which is the best online classes?",
        options: ["Courses", "AlmaBetter", "Ninja code", "Physics Wallah"],
        correctAnswer: "Physics Wallah"
    },
    {
         question: "What is the name of your's",
        options: ["Chandel", "Prakhar", "Ayush", "Shivam"],
        correctAnswer: "Ayush"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
   
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
                               <p>Your score: ${score} out of ${quizData.length}</p>`;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

loadQuestion();