// function changeText(value){
//    document.getElementById('pText').innerHTML = "You pressed " + value;
// }
// Experimenting with JS and HTML

alert("Click on the button to generate a question! Think of the answer and check if you were right!");

var questionsAndAnswers = [
   {
      question: "What is the answer to this?",
      answer: "It's 123!"
   },
   {
      question: "What is your favourite food?",
      answer:"It's chicken!"
   },
   {
      question: "What is your name?",
      answer:"It's Brad!"
   }
]

// var randomQuestion = Math.floor(Math.random() * questionsAndAnswers.length);
// console.log(randomQuestion, questionsAndAnswers[randomQuestion]);
// Experimenting with random to generate random array selections



// Generates a random selection from the questions and answers array, that cannot be the same as the previous
function randomQuestionFunc(){
   var arrayLength = questionsAndAnswers.length;
   do{
      var randomQuestion = Math.floor(Math.random() * arrayLength);
   } while (randomQuestion === randomQuestionFunc.last);
   randomQuestionFunc.last = randomQuestion;
   return randomQuestion;
}


// Generates a random question using the above function, replaces the text on the page and hides the answer
function generateQuestion(value){
   var i = randomQuestionFunc();
   var qMessage = questionsAndAnswers[i].question;
   var aMessage = questionsAndAnswers[i].answer;
   document.getElementById('qTxt').innerHTML = qMessage;
   document.getElementById('aTxt').style.display="none";
   document.getElementById('aTxt').innerHTML = aMessage;
}


// Shows the answer and displays it again
function showAnswer(){
   document.getElementById('aTxt').style.display="block";
}

function addFunction(){
   var qInputValue = document.getElementById("questionInput").value;
   var aInputValue = document.getElementById("answerInput").value;
   var newObj = {
      question: qInputValue,
      answer: aInputValue
   }

   if (qInputValue == '' && aInputValue == ''){
      alert("Enter a question and answer!");
   } else if (qInputValue == ''){
      alert("Enter a question!");
   } else if (aInputValue == ''){
      alert("Enter an answer!");
   } else{
      questionsAndAnswers.push(newObj);
      alert("Flashcard added successfully!");
   }
   document.getElementById("questionInput").value = "";
   document.getElementById("answerInput").value = "";
}