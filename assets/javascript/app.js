$(document).ready(function(){

    var time = 30;
    var answerChosen = false;
    //    var determining = 0; (Same variable as question Number)
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // question number 0 is the first question of the array as well as the answers
    var questionNumber = 0;
    var ticks;

    var question = ["What is pokemon number 1 in the Pokedex","What is fire weak against","Who is the most Iconic Pokemon"];
    var answer = ["Bulbasaur","Water","Pikachu"];
    var aChoice = ["Bulbasaur","Flying","Eevee"];
    var bChoice = ["Charmander","Electric","Pikachu"];
    var cChoice = ["Squirtle","Water","Charizard"];
    var dChoice = ["Pikachu","Fighting","Dragonite"];

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
    
    // function to check answer, if/else
    function checkAnswer() {
        hideArrays();
        if($(this).text() == answer[questionNumber]) {
            answerChosen = true;
            $("#answer").show();
            $("#answer").html("The answer is: " + answer[questionNumber]);
            correct++;
            questionNumber++;
        } else {
            answerChosen = false;
            $("#answer").show();
            $("#answer").html("The answer is: " + answer[questionNumber]);
            incorrect++;
            questionNumber++;
        }

        endGame();
    }

    function endGame() {
        if(questionNumber === question.length) {
            $("#timer").hide();
            $("#totalCorrect").show();
            $("#totalCorrect").html("Correct: " + correct);
            $("#totalIncorrect").show();
            $("#totalIncorrect").html("Incorrect: " + incorrect);
            $("#totalUnanswer").show();
            $("#totalUnanswer").html("Unanswered: " + unanswered);
            $("#Restart").html("Click Start to play again");
            time = 30;
        }
    }

    // make choices selectable
    $("#Choice1").on("click", checkAnswer)
    $("#Choice2").on("click", checkAnswer)
    $("#Choice3").on("click", checkAnswer)
    $("#Choice4").on("click", checkAnswer)

    function displayTime() {
        time--;
        $("#timer").html("Time remaining: " + time);
        if(time <= 0){
            stopTime();
        }
    }

    function stopTime() {
        clearInterval(ticks);
    }

    // need a new variable for countdown
    function startTime() {
        clearInterval(ticks);
        ticks = setInterval(displayTime, 1000);
    }
    
    $(".start").on("click", function(){
        displayTrivia();
        startTime();
    })
    // trivia gets displayed, need to make choices clickable and move to next question




})

// variables: timer, correct, incorrect, unanswered, chosen answer, determining correct answer
// array of questions and answers
// only 1 answer can be selected
// timer starts when start button is clicked
// game resets when its over