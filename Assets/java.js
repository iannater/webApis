//Hide the quiz before the start button is clicked
$('#quiz').hide();
// create a variable for the button that starts the quiz
var startButton = $("#startButton");
var coding = $("#coding");
//Variables needed for the questions, choices, timer
var timeDisplay = $("#time");
var questionDiv = $("#question");

const  questions = [
    {
        question : "What does an ID do?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ]
    },
    {
        question : "Question # 2?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ]
    },
    {
        question : "Question # 3?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ]
    },
    {
        question : "Question # 4?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ]
    },
    
    {
        question : "Question # 5?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ]
    },]

var counter = 75;
var questionIndex = 0;


//Add an event listener to the button so when someone clicks on it the quiz begins
startButton.click(startQuiz);

//Start the quiz and show questions. Hide the div for the homepage content. Show the first question with multiple choice answers. Store the correct answer

function startQuiz(){
    //hide the home page info about the quiz
    coding.hide();
    //unhide the quiz content
    $("#quiz").show();
    //start counting down a second at a time from the timer 
    setInterval(timer, 1000);
    //Display the current question
    handleQuestions();
};

function handleQuestions(){

    var curQuest = questions[questionIndex];
    questionDiv.text(curQuest.question);
    curQuest.choices.forEach( function(i, choice){

        var buttonChoice = $('<button>');
        buttonChoice.attr("class",  "btn btn-success multiBut");
        buttonChoice.attr("value", choice);
        buttonChoice.text(i);
        $("#choices").append(buttonChoice);
        //assign event listenr to each button
        buttonChoice.click(clickedChoice);
    })
};

function clickedChoice(){
    if(choices[1] === true) {
         alert("you got it right")  
         console.log(clickedChoice)
  }
  else{
      alert("you got it wrong")
  }
}

function timer (){

    counter--;
    timeDisplay.text(counter);
    if(counter == 0){
        alert('GAME OVER');
        //here you would call the function to handle when game is over
    }
    

}

//end game function should end the quiz
function endTimer(){




}


//When the user selects an answer display if the users question was correct alert wether it was correct or now. If wrong decrement 15 seconds of time from the timer. 

//repeat five times

//when finished display an H2 that tells the user they are all done.

//Under the H2 there needs to be a p tag that contains the final score for the quiz reading "Your final score is " + finalScore


//create a text input that allows the user to input their initals. Should have a placeholder text here that says input initials

// Next to the text box we need a submit button that will submit the users final score and initals to the list of highscores on the highscores.html page and take them there. 

//Once on the highscores page the user will see their highscores listed starting with their highest score 1. and so on. This list needs to be sorted highest score to least. 

//Allow user to clear highscores

//Allow user to also "go back" to the start with the goback button.
