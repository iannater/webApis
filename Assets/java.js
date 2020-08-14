// create a variable for the button that starts the quiz
$('#quiz').hide();
var startButton = $("#startButton");
var coding = $("#coding");
//Variables needed for the questions, choices, timer
var timeDisplay = $("#time");
var questionDiv = $("#question");
var choice1 = $("#1");
var choice2 = $("#2");
var choice3 = $("#3");
var choice4 = $("#4");

const  questions = [
    {
        question : "What does an id do?",
        choices: ["A. Change the type of document", "B. Allow you to uniquely target a specific element", "C. Indents text", "D. IDK man" ],
        correct : "2"
    },
    {
        question : "CSS stand for?",
        choice1 : "Course Style Script",
        choice2 : "Curious Special Script",
        choice3 : "Cascading Style Sheet",
        choice4 : "IDK man",
        correct : "3"
    },
    {
        question : "What does an id do?",
        choice1 : "Change the type of document",
        choice2 : "Allow you to uniquely target a specific element",
        choice3 : "Indents text",
        choice4 : "IDK man",
        correct : "2"
    },
    {
        question : "What does an id do?",
        choice1 : "Change the type of document",
        choice2 : "Allow you to uniquely target a specific element",
        choice3 : "Indents text",
        choice4 : "IDK man",
        correct : "2"
    },
    
    {
        question : "What does an id do?",
        choice1 : "Change the type of document",
        choice2 : "Allow you to uniquely target a specific element",
        choice3 : "Indents text",
        choice4 : "IDK man",
        correct : "2"
    },]

var counter = 75;
var questionIndex = 0;


//Add an event listener to the button so when someone clicks on it the quiz begins
//startButton.click(startQuiz);
startButton.on("click", startQuiz);
//Start the quiz and show questinos. Hide the div for the homepage content. Show the first question with multiple choice answers. Store the correct answer

function clickedChoice(){
   alert('clickede')
}

function handleQuestions(){
console.log('working')
    var curQuest = questions[questionIndex];

    questionDiv.text(curQuest.question);

    curQuest.choices.forEach( function(i, choice){

        var buttonChoice = $('<button>');
        buttonChoice.attr("class",  "btn btn-success");
        buttonChoice.attr("value", choice);
        buttonChoice.text(i)
        $("#choices").append(buttonChoice)
        //assign event listenr to ea button
        buttonChoice.onclick =  clickedChoice;
    })

}

function timer (){

    counter--;
    console.log(counter)
    timeDisplay.text(counter);
    if(counter == 0){
        console.log('GAME OVER');
        //here you would call the function to handle when game is over
    }
    

}

//end game function should end the quiz
function endTimer(){




}

function startQuiz(){
    console.log("ok")
    coding.hide();
    $("#quiz").show();
    setInterval(timer, 1000);
    handleQuestions();

};
//When the user selects an answer display if the users question was correct alert wether it was correct or now. If wrong decrement 15 seconds of time from the timer. 

//repeat five times

//when finished display an H2 that tells the user they are all done.

//Under the H2 there needs to be a p tag that contains the final score for the quiz reading "Your final score is " + finalScore


//create a text input that allows the user to input their initals. Should have a placeholder text here that says input initials

// Next to the text box we need a submit button that will submit the users final score and initals to the list of highscores on the highscores.html page and take them there. 

//Once on the highscores page the user will see their highscores listed starting with their highest score 1. and so on. This list needs to be sorted highest score to least. 

//Allow user to clear highscores

//Allow user to also "go back" to the start with the goback button.
