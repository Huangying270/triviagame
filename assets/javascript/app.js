$(document).ready(function(){

    var time = 5;
    var answerChosen = false;
    var determining = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // question number 0 is the first question of the array as well as the answers
    var questionNumber = 0;

    var question = ["1","2","3"];
    var answer = ["1","2","3"];
    var aChoice = ["1","1","1"];
    var bChoice = ["2","2","2"];
    var cChoice = ["3","3","3"];
    var dChoice = ["4","4","4"];

    function showArrays() {
        $("#question").show();
        $("#Choice1").show();
        $("#Choice2").show();
        $("#Choice3").show();
        $("#Choice4").show();
    }
    
    function hideArrays() {
        $("#question").hide();
        $("#Choice1").hide();
        $("#Choice2").hide();
        $("#Choice3").hide();
        $("#Choice4").hide();
    }

    function hideResults() {
        $("#totalCorrect").hide();
        $("#totalIncorrect").hide();
        $("#totalUnanswer").hide();
        $("#Restart").hide();
    }
    
    function displayTrivia() {
        hideResults();
        $("#answer").hide();
        $("#timer").show();
        showArrays();
        $("#question").text(question[questionNumber]);
        $("#Choice1").text(aChoice[questionNumber]);
        $("#Choice2").text(bChoice[questionNumber]);
        $("#Choice3").text(cChoice[questionNumber]);
        $("#Choice4").text(dChoice[questionNumber]);
    }
    // logged onto console without questions or answers
    console.log(displayTrivia);
    
    $(".start").on("click", function(){
        displayTrivia();
    })
    // trivia gets displayed, need to make choices clickable and move to next question




})

// variables: timer, correct, incorrect, unanswered, chosen answer, determining correct answer
// array of questions and answers
// only 1 answer can be selected
// timer starts when start button is clicked
// game resets when its over