(function(){
  function buildQuiz(){

    const output = [];


    myQuestions.forEach(
      (currentQuestion, questionNumber) => {


        const answers = [];

  
        for(letter in currentQuestion.answers){

 
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }


        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );


    quizContainer.innerHTML = output.join('');
  }

  function showResults(){


    const answerContainers = quizContainer.querySelectorAll('.answers');


    let numCorrect = 0;


    myQuestions.forEach( (currentQuestion, questionNumber) => {


      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;


        answerContainers[questionNumber].style.color = 'lightgreen';
      }
 
      else{
 
        answerContainers[questionNumber].style.color = 'red';
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "In Programming array Index Start from",
      answers: {
        a: "1",
        b: "2",
        c: "0"
      },
      correctAnswer: "c"
    },
    {
      question: "What is The Age Of Sir Mohammad Ali",
      answers: {
        a: "22",
        b: "25",
        c: "26",
        d: "28"
      },
      correctAnswer: "d"
    },
    {
      question: "Headquarter of the International Monetary Fund is in___________?",
      answers: {
        a: "Capetown",
        b: "Geneva",
        c: " Washington",
        d: "Berlin"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is not Olympic Sport ?",
      answers: {
        a: "BasketBall",
        b: "Hockey",
        c: "Football",
        d: "Cricket"
      },
      correctAnswer: "d"
    },
    {
      question: "Zulu is the prominent tribe of____________?",
      answers: {
        a: "South Africa",
        b: "Austrailia",
        c: "Pakistan",
        d: "India"
      },
      correctAnswer: "a"
    },
    {
      question: "How many points are in badminton Game ?",
      answers: {
        a: "22",
        b: "19",
        c: "20",
        d: "21"
      },
      correctAnswer: "d"
    },
    {
      question: "In which region New Zealand is situated?",
      answers: {
        a: "Eastern Europe",
        b: "Oceania",
        c: "Australia",
        d: "NOT"
      },
      correctAnswer: "b"
    },
    {
      question: "The headquarter of European Court of Justice (ECJ) are situated at__________?",
      answers: {
        a: "Luxembourg",
        b: "parice",
        c: "france",
        d: "NOT"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was the first president of Turkey who issued presidential decree to transform the Hagia Sophia Mosque into a Muesum?",
      answers: {
        a: "Nawaz Khan",
        b: "GUll M",
        c: "Tayyab Ordagan",
        d: "Mustafa Kemal Atatürk"
      },
      correctAnswer: "d"
    },
  ];


  buildQuiz();


  submitButton.addEventListener('click', showResults);
})();