// function changeText(value){
//    document.getElementById('pText').innerHTML = "You pressed " + value;
// }
// Experimenting with JS and HTML

alert("Click on the button to generate a question! Think of the answer and check if you were right!");

var questionsAndAnswers = [
   {
      question: "Loss of sensation over the 'Sergeant's Badge' area would indicate injury of which nerve?",
      answer: "The Axillary Nerve!"
   },
   {
      question: "What is contained within the carotid sheath?",
      answer: "The carotid artery, INternal jugular vein and vagus nerve!"
   },
   {
      question: "At which vertebarl level does the oesophagus pass through the diaphragm?",
      answer: "T10 (10 letters in Oesophagus)!"
   },
   {
      question: "What is the role of the chief cells in the stomache?",
      answer: "They produce pepsinogen!"
   },
   {
      question: "Where do the ureters constrict?",
      answer: "1. Ureteropelvic Junction <br> 2. Crossing the common iliac artery <br> 3. Ureterovesical Junction with bladder"
   },
   {
      question: "Which of the following hormones is secreted by the posterior pituitary glands? <br> a. FFH <br> b. ADH <br> c. Prolactin <br> d. TSH",
      answer: "Correct answer is... B! ADH!"
   },
   {
      question: "Multiple Sclerosis is an auto-immune disease. What is the cause and some common symptoms?",
      answer: "Cause: The immune system attacks myelin and oligodendrocytes.<br>Symptoms: Fatigue, Muscle Weakness, Numbness, Bladder/Bowel problems and Speech/Swallowing issues."
   },
   {
      question: "What is happening during Stage-2 of a cardiac myocyte's action potential?",
      answer: "Plateau-calcium influx and transient potassium channels close."
   },
   {
      question: "What is the difference between a CF potentiator and a CF corrector?",
      answer: "Potentiator: They increase activity of defective CFTR at cell surface e.g. Ivacaftor.<br> Corrector: Increase trafficking of CFTR to plasma membrane e.g. Lumacaftor."
   },
   {
      question: "Where on the nephron do thiazide diuretics act?",
      answer: "In the DCT (They block the NA/CL cotransporter)."
   },
   {
      question: "What muscles make up the levator ani?",
      answer: "The pubococcygeus, puboroctalis and iliococcygeus."
   },
   {
      question: "What is the main mechanism used by the immune system to kill parasites?",
      answer: "Plasma cells produce anti-bodies, specifically IgE, which bind to the parasite. Eosinophils bind to the anti-bodies, using their FcεRI receptors. This activates Eosinophils and stimulates degranulation (anti-parasitic proteins are released)."
   },
   {
      question: "What is the general role of the anterior compartment of the thigh and what muscles are found in this compartment?",
      answer: "Role:Hip Flexion, Knee Extension<br>Muscles:  Iliopsoas (Psoas major+minor and iliacus)<br>Rectus femoris<br>Vastus (medialis, intermedialis and lateralis)<br>Pectineus<br>Sartorius<br> <br>*Vastus + Rectus = Quadriceps*"
   },
   {
      question: "What is a normal blood pressue?",
      answer: "Between 90/60mmHg and 120/80mmHg."
   },
   {
      question: "What three shunts exist in fetal circulation?",
      answer: "Ductus venosus (bypass liver), foramen ovale (RA -> LA), ductus arteriosus (PA -> Aorta)"
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