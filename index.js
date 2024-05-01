const questionTag = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answerButton=document.querySelector(".btns");
let currentIndex = 0;
let maxIndex;
let questions;


async function getData() {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
}

function clickAnswer(event){
    if(event.target.tagName === 'BUTTON'){
        const userAnswer = event.target.innerText;
        console.log(questions.quiz)
        console.log(userAnswer)
        if(userAnswer === questions.quiz[currentIndex].answer){ 
            // 맞힌문제갯수 ++
            document.querySelector(".score").innerText++;
        }
        //다음문제로 넘어가기
        currentIndex++;
        if(currentIndex <= maxIndex){
            createQuestionComponent(questions.quiz[currentIndex])
        }else{
            alert("퀴즈가 종료되었습니다.")
        }
        event.stopPropagation();
    }
}
  
async function main() {
  questions = await getData();
  maxIndex = questions.quiz.length - 1;
  createQuestionComponent(questions.quiz[currentIndex]);
  
  
}

main();

answer1.addEventListener("click",clickAnswer);
answer2.addEventListener("click",clickAnswer);
answer3.addEventListener("click",clickAnswer);
answer4.addEventListener("click",clickAnswer);

function createQuestionComponent(dataQuestion) {
    questionTag.innerText = dataQuestion.question;
    answer1.innerText = dataQuestion.answer1;
    answer2.innerText = dataQuestion.answer2;
    answer3.innerText = dataQuestion.answer3;
    answer4.innerText = dataQuestion.answer4;
}