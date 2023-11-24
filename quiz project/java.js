const quizdata = [
  {
    question: " which Team you support?",
    a: "manchestar city",
    b: "arsenal",
    c: "liverpool",
    d: "chelsea",
    correct: "d",
  },
  {
    question: "Which team won the world cup 2022? ",
    a: "portugal",
    b: "france",
    c: "argentina",
    d: "brazil",
    correct: "c",
  },
  {
    question: "Who is the president of somalia?",
    a: "farmaajo",
    b: "xasan samar",
    c: "xasan shiikh",
    d: "muqtaar roobow",
    correct: "c",
  },
  {
    question: "Who is the best player of all time?",
    a: "Messi",
    b: "Plele",
    c: "Zidane",
    d: "C/Ronaldo",
    correct: "d",
  },
  {
    question: "What is the most used programming language",
    a: "python",
    b: "java",
    c: "C",
    d: "javascript",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
//const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const atext = document.getElementById("atext");
const btext = document.getElementById("btext");
const ctext = document.getElementById("ctext");
const dtext = document.getElementById("dtext");
const submitbn = document.getElementById("submitbtn");

let currentquiz = 0;
let score = 0;
let answer;
loadQuiz(); //we are going to call everytime we submit

function loadQuiz() {
  deselectQuestion();
  let currrentQuizData = quizdata[currentquiz];
  questionEl.innerHTML = currrentQuizData.question;
  atext.innerHTML = currrentQuizData.a;
  btext.innerHTML = currrentQuizData.b;
  ctext.innerHTML = currrentQuizData.c;
  dtext.innerHTML = currrentQuizData.d;
}

function selectQuestion() {
  let selectedAnswer = document.querySelectorAll(".answer");
  selectedAnswer.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id;
    }
  });
  return answer;
}

function deselectQuestion() {
  let selectedAnswer = document.querySelectorAll(".answer");
  selectedAnswer.forEach((answerel) => {
    answerel.checked = false;
  });
  return answer;
}

submitbn.addEventListener("click", () => {
  let answer = selectQuestion();
  console.log(answer);
  if (answer) {
    if (answer === quizdata[currentquiz].correct) {
      score++;
    }
    currentquiz++;
    if (currentquiz < quizdata.length) {
      loadQuiz();
      //ilaa uu false ka noqonayo question
      //cusub ba laso bandhiga marki currentquiz
      //uu la ekaado quizdata.length else la aada
    } else {
      quiz.innerHTML = `you answered ${score} 
    out of ${quizdata.length} question
    <button onclick="location.reload()">load</button>`;
    }
  }
});

/* function loadQuiz() {
  deselect();
  const currrentQuizData = quizdata[currentquiz];
  questionEl.innerHTML = currrentQuizData.question;
  atext.innerHTML = currrentQuizData.a;
  btext.innerHTML = currrentQuizData.b;
  ctext.innerHTML = currrentQuizData.c;
  dtext.innerHTML = currrentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach(function (answerel) {
    if (answerel.checked) {
      answer = answerel.id;
    }
    /* answer = answerel.checked ? answerel.id : answer;
    
  });
  return answer;
}
function deselect() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach(function (answerel) {
    answerel.checked = false;
  });

  return answer; //kan hdi la turo wyhy u u shaqayna
}

submitbn.addEventListener("click", () => {
  const answer = getSelected();
  //console.log(answer)

  if (answer) {
    if (answer === quizdata[currentquiz].correct) {
      score++;
    }
    currentquiz++;
    if (currentquiz < quizdata.length) {
      loadQuiz();
      //this is going to be false becosuse
      //current quiz will be greater
    } else {
      // todo: print result
      quiz.innerHTML = `you answered ${score}/${quizdata.length}questions
            <button onclick="location.reload()">load</button>`;
    }
  }
});
 */
