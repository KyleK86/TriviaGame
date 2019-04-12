// Create an array of ojbects to hold questions and answers
questions = [{
        name: "Igor",
        ques: "This orchestral concert work by Russian composer Igor Stravinsky started a riot with it's debut in 1913",
        answers: ["Rite of Spring", "Incantation and Dance", "The Planets", "Navigation Inn"],
        correct: "Rite of Spring",
        gif: "https://thumbs.gfycat.com/FantasticTallEkaltadeta-size_restricted.gif",
        hasBeenAsked: false,
    },
    {
        name: "Gustav",
        ques: "Which of these composers composed 'The Planets' between 1914 and 1916",
        answers: ["Gustav Holst", "Ludwig Van Beethoven", "Wolfgang Amadeus Mozart", "Richard Wagner"],
        correct: "Gustav Holst",
        gif: "http://theirreverencia.com/wp-content/uploads/2014/07/mars-intensifies.gif",
        hasBeenAsked: false,
    },
    {
        name: "Wagner",
        ques: "Richard Wagner composed 'Tannhauser', 'Ride of the Valkyries', and 'Bridal Chorus'",
        answers: ["True", "False"],
        correct: "True",
        gif: "https://thumbs.gfycat.com/ResponsibleDishonestAustraliankestrel-small.gif",
        hasBeenAsked: false,
    },

    {
        name: "Dvorak",
        ques: "Symphony Number 9 in E minor is popularly known as the 'New World Symphony'. Who composed it?",
        answers: ["Henry Aldrich", "Leni Alexander", "Henry Aldrich", "Antonin Dvorak "],
        correct: "Antonin Dvorak",
        gif: "http://i.imgur.com/Wma99RE.gif",
        hasBeenAsked: false,
    },

    {
        name: "Mozart",
        ques: "The classic 'Don Giovanni' was composed by this great composer from Salzburg, Austria.",
        answers: ["Malcolm Archer", "Wolfgang Amadeus Mozart", "Ludwig Abel", "Gustav Holst"],
        correct: "Wolfgang Amadeus Mozart",
        gif: "https://media.giphy.com/media/mGj3SVN7xbPQ4/giphy.gif",
        hasBeenAsked: false,
    },

    {
        name: "Barber",
        ques: "'Largo al factotum' is an aria sung by the title character from which of these operas?",
        answers: ["Don Giovanni", "Aida", "Carmen", "The Barber of Seville"],
        correct: "The Barber of Seville",
        gif: "https://media1.giphy.com/media/zjdWIkMmV9lK/giphy.gif",
        hasBeenAsked: false,
    },

    {
        name: "Fugue",
        ques: "What sinister and spooky-sounding organ piece attributed to Bach is now firmly associated with the Halloween holiday and other tales of horror?",
        answers: ["Happy Birthday", "Toccata and Fugue in D Minor", "Fantasie Improumptu in C-sharp minor", "Jupiter"],
        correct: "Toccata and Fugue in D Minor",
        gif: "https://i.gifer.com/1bHn.gif",
        hasBeenAsked: false,
    },

    {
        name: "Bach",
        ques: "Johann Sebastian Bach's 'Hunting Cantata', BWV 208, contains an animal-related aria popularly known by what name?",
        answers: ["Three Little Pigs", "The Cat is Out Of The Bag", "Sheep May Safely Graze", "Let Sleeping Dogs Lie"],
        correct: "Sheep May Safely Graze",
        gif: "https://media0.giphy.com/media/Uz4j1O0pg7Jf2/giphy.gif",
        hasBeenAsked: false,
    },

    {
        name: "Beethoven",
        ques: "A certain composer sent a series of love letters to an unknown woman, known only as the 'Immortal Beloved'. Who was this composer?",
        answers: ["Tomaso Albinoni", "Wolfgang Amadeus Mozart", "Charles Albrecht ", "Ludwig Van Beethoven"],
        correct: "Ludwig Van Beethoven",
        gif: "https://media.giphy.com/media/4njYZD26XnY7C/giphy.gif",
        hasBeenAsked: false,
    },


    {
        name: "Hungarian",
        ques: " How many 'Hungarian Dances' are there?",
        answers: ["6", "34", "21", "132"],
        correct: "21",
        gif: "https://thumbs.gfycat.com/AptBabyishIndri-max-1mb.gif",
        hasBeenAsked: false,
    }
]



//GLOBAL VARIABLES
var questionNumber = 0;
var maxCount = 10;
var skippedCount = 0;
var missedCount = 0;
var answer;
var userChoice = ""
var correctCount = 0;
var wrongCount = 0;
var choice;
var count = 30;
isRunning = false;


//Set Timer to 30 seconds per question
var runTimer = () => {
    if (!isRunning) {
        intervalId = setInterval(countDown, 1000);
        isRunning = true;
    }
}

var countDown = () => {
    $("#timeLeft").html("Time Remaining " + count + " seconds. ");
    count--;
    //If count hits zero and there ARE questions remaining
    if (count === -1) {
        skippedCount++;
        stopTimer();
        displayGif();
        $("#answer").html("<p>Time is up!</p>")
        answerCheck();
    }
}

//Stop timer and clear interval
var stopTimer = () => {
    isRunning = false;
    clearInterval(intervalId);
}



//Randomize questions
var displayQuestion = () => {
    count = 30;
    $("#gifDisplay").css("display", "none");
    index = Math.floor(Math.random() * questions.length)
    choice = questions[index];
    answer = choice.correct;
    questionNumber++;


    $("#question").html(`Question ${questionNumber}:${choice.ques}`)

    //loop through answers of chosen question and display to HTML
    for (i = 0; i < choice.answers.length; i++) {
        var selectedAnswers = $("<div>");
        selectedAnswers.addClass("answerChoices");
        selectedAnswers.text(choice.answers[i]);
        $("#answer").append(selectedAnswers);
       
        runTimer();
        countDown();
        answerCheck();

    }
}

//click function to capture the user's choice
var answerCheck = () => {
    $(document).on("click", ".answerChoices", function (e) {
        countDown();
        var clickedItem = e.target;
        userChoice = clickedItem.innerText;

        //Compare user choice to correct answer
        if (userChoice === choice.correct) {
            stopTimer();
            displayGif()
            correctCount++;
            $("#answer").html("<div> Nicely Done!</div>");

        } else {
            stopTimer();
            displayGif();
            wrongCount++;
            $("#answer").html("<div> Incorrect! The answer was " + choice.correct + "</div>");

        }
        // //If there are no more questions, then this logic runs
        // if ((correctCount + wrongCount + skippedCount) === maxCount) {
        //     for (i = 0; i < newArray.length; i++) {
        //         questions.push(newArray[i]);
        //     }

        // }

    })
};



function displayGif() {
    $("#gifDisplay").css("display", "block");
    $("#gifDisplay").attr("src", choice.gif);
    setTimeout(displayQuestion,4*1000);
}

//Display one question to screen/ prompt user for answer


$("#startBtn").on("click", function () {

    $(".introWrap").css("display", "none")
    $(".gameWrap").css("display", "grid");
    displayQuestion();
    console.log(count);

})