// Create an array of ojbects to hold questions and answers
questions = [{
        name: "Igor",
        ques: "This orchestral concert work by Russian composer Igor Stravinsky started a riot with it's debut in 1913",
        answers: ["Rite of Spring", "Incantation and Dance", "The Planets", "Navigation Inn"],
        correct: "Rite of Spring"
    },
    {
        name: "Gustav",
        ques: "Which of these composers composed 'The Planets' between 1914 and 1916",
        answers: ["Gustav Holst", "Ludwig Van Beethoven", "Wolfgang Amadeus Mozart", "Richard Wagner"],
        correct: "Gustav Holst"
    },
    {
        name: "Wagner",
        ques: "Richard Wagner composed 'Tannhauser', 'Ride of the Valkyries', and 'Bridal Chorus'",
        answers: ["True", "False"],
        correct: "True"
    },

    {
        name: "Dvorak",
        ques: "Symphony Number 9 in E minor is popularly known as the 'New World Symphony'. Who composed it?",
        answers: ["Henry Aldrich", "Leni Alexander","Henry Aldrich", "Antonin Dvorak "],
        correct: "Antonin Dvorak"
    },

    {
        name: "Mozart",
        ques: "The classic 'Don Giovanni' was composed by this great composer from Salzburg, Austria.",
        answers: ["Malcolm Archer", "Wolfgang Amadeus Mozart","Ludwig Abel", "Gustav Holst"],
        correct: "Wolfgang Amadeus Mozart"
    },

    {
        name: "Barber",
        ques: "'Largo al factotum' is an aria sung by the title character from which of these operas?",
        answers: ["Don Giovanni", "Aida","Carmen", "The Barber of Seville"],
        correct: "The Barber of Seville"
    },

    {
        name: "Barber",
        ques: " What sinister and spooky-sounding organ piece attributed to Bach is now firmly associated with the Halloween holiday and other tales of horror?",
        answers: ["Happy Birthday", " Toccata and Fugue in D Minor ","Fantasie Improumptu in C-sharp minor", "Jupiter"],
        correct: "The Barber of Seville"
    }]



//GLOBAL VARIABLES
var correctCount = 0;
var wrongCount = 0;
var choice;

//Display one question to screen/ prompt user for answer
var startGame = () => {
    $("#startBtn").on("click",function(){
        $(".introWrap").css("display","none")
        $(".gameWrap").css("display", "grid");
    })
    }
    startGame()

//Randomize questions
var displayQuestion = () => {
index = Math.floor(Math.random()*questions.length)
choice = questions[index];

$("#question").html("Question 1: "  + choice.ques)

var selectedAnswers = $.map(choice.answers, function(val, i){
    return "<div>" + val + "<div>";

});
$("#answer").html(selectedAnswers.join(""));
}
displayQuestion();


//loop through answers of chosen question and display to HTML

    
    
   




//Create 30 second timer

//Compare user choice to correct answer

//If answer is correct: alert "Correct!", stop timer, display gif, display next question, reset timer, correct answers++

//Else, alert "Nope!", stop timer, display gif, display next question, reset timer, wrong answers++

//If questionsArr.length < 1 then run end game function to display score