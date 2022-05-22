const quizData = [
    {
        question: 'Q1: How many states in Germany?',
        a: '14',
        b: '15',
        c: '16',
        d: '17',
        correct: 'c'
    }, {
        question: 'Q2: What is the richest state in Germany?',
        a: 'Bavaria',
        b: 'NRW',
        c: 'Hesse',
        d: 'Saxony',
        correct: 'b'
    }, {
        question: 'Q3: What was the currency name of Germany before Euro?',
        a: 'Deutsche Mark',
        b: 'Deutsche Dollar',
        c: 'Lira',
        d: 'Pound',
        correct: 'a'
    }, {
        question: 'Q4: Who is the first lady chancellor of Germany?',
        a: 'Nadja Vogel',
        b: 'Saara Bard',
        c: 'Angela Merkel',
        d: 'Hirsch Markel',
        correct: 'c'
    }, {
        question: 'Q5: Which European country has the strongest economy?',
        a: 'Russia',
        b: 'France',
        c: 'UK',
        d: 'Germany',
        correct: 'd'
    }

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById('b_text');
const d_text = document.getElementById('d_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}


function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if (answerEl.checked) {
            answer = answerEl.id;
            return answer;
        }

    });

    return answer;
}

function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
    });
}


submitBtn.addEventListener("click", () => {

    // Check to see the answer id
    const answer = getSelected();
    

    if (answer) {

        if(answer === quizData[currentQuiz].correct){

            score++;

        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();

        } else {

            //TODO: Show the results

            let score_percentage = (score/quizData.length)*100; 

            if(score < 3){
                quiz.innerHTML = `<h2 style="text-align: center; padding: 16px;"> Sorry!!! You Failed!!! <br> You correctly answered ${score} out of ${quizData.length} questions. <br> 
                You have got ${score_percentage}% Marks. </h2>
                <button onclick="location.reload()">Reload</button>`;
            }

            else{
                quiz.innerHTML = `<h2 style="text-align: center; padding: 16px;"> Hurrah!!! You Passed!!! <br> You correctly answered ${score} out of ${quizData.length} questions. <br> 
                You have got ${score_percentage}% Marks. </h2>
                <button onclick="location.reload()">Reload</button>`;
            }
            
        }
    }

});
//onclik the arrow function will call loadQuiz and increase the currentQuiz by 1.
