// function changeText(value){
//    document.getElementById('pText').innerHTML = "You pressed " + value;
// }
// Experimenting with JS and HTML

var questionsAndAnswers = [
   {
      question: "What is the answer to this?",
      answer: "It's 123!"
   },
   {
      question: "What is your favourite food?",
      answer:"It's chicken!"
   }
]

var randomQuestion = Math.floor(Math.random() * questionsAndAnswers.length);
console.log(randomQuestion, questionsAndAnswers[randomQuestion]);