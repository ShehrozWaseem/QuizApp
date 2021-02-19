var quiz = [ 
{ question:"Q1: What is the capital of United Kingdom?",
  a: "John",
  b: "California",
  c: "London",
  d: "blue",
ans:"ans3"},  
{ question:"Q2: Who won the 2014 FIFA World Cup?",
  a: "England",
  b: "Brazil",
  c: "New York",
  d: "Spain",
ans:"ans4"
},
{ question:"Q3: What is the capital of United States?",
  a: "California",
  b: "England",
  c: "New York",
  d: "444",
ans:"ans3"
},
{ question:"Q4: The Eiffel Tower is located in which following country?",
  a: "France",
  b: "England",
  c: "Italy ",
  d: "444",
ans:"ans1"
}  ] ;

var q = document.querySelector(".question");
var o1 = document.getElementById("option1");
var o2 = document.getElementById("option2");
var o3 = document.getElementById("option3");
var o4 = document.getElementById("option4");

var submit = document.querySelector("#submit");

var answers = document.querySelectorAll(".answer");

var showScore = document.querySelector('#showScore');

var count = 0;
var score = 0;

function loadQue(){
    //console.log(quiz[1].question)
    var list = quiz[count]
    q.innerHTML = list.question;

    o1.innerHTML = list.a;
    o2.innerHTML = list.b;
    o3.innerHTML = list.c;
    o4.innerHTML = list.d;

}
loadQue(quiz);

function checkAns(){
    var answer;
    answers.forEach((curAns) =>{
        if(curAns.checked){
            answer = curAns.id;
        }
       
    });
    return answer;

}
function unselectall(){
    answers.forEach((curAns) => {
        curAns.checked = false;
    })
}

submit.addEventListener('click',function(){
    var checkAnswer = checkAns();
    console.log(checkAnswer);

    if(checkAnswer === quiz[count].ans){
        score++ 
    };
    count++;
    console.log(count);
    unselectall()

    if(count < quiz.length){
        loadQue();
    }
    else{
        
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});