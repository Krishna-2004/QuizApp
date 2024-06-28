const question = [
  {
    question:
      "What will be the output of the following SQL query?      SELECT floor(‘b’);",
    answers: [
      { text: "Zero(0)", correct: true },
      { text: "a", correct: false },
      { text: "98", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question:
      "What will be the output of the following SQL query?      SELECT floor(‘b’);",
    answers: [
      { text: "Zero(0)", correct: true },
      { text: "a", correct: false },
      { text: "98", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question:
      "What will be the output of the following SQL query?      SELECT floor(‘b’);",
    answers: [
      { text: "Zero(0)", correct: true },
      { text: "a", correct: false },
      { text: "98", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question:
      "What will be the output of the following SQL query? SELECT floor(‘b’);",
    answers: [
      { text: "Zero(0)", correct: true },
      { text: "a", correct: false },
      { text: "98", correct: false },
      { text: "Error", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// function selectAnswer() {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

let selectedBtn;
let isCorrect;

function selectAnswer(e) {
  selectedBtn = e.target;
  isCorrect = selectedBtn.dataset.correct === "true";
  Array.from(answerButtons.children).forEach((button) => {
    button.classList.remove("correct", "incorrect");
    button.style.background = "white";
    button.style.color = "black";
    //button.disabled = true;
  });
  selectedBtn.style.background = "black";
  selectedBtn.style.color = "white";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    //button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        console.log(isCorrect);
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }
  currentQuestionIndex++;
  if (currentQuestionIndex == question.length - 1) {
    nextButton.innerHTML = "Submit";
  }
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is ${score}`;
  nextButton.style.display = "none";
}

startQuiz();
