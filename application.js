var levels = [500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000];
var currLevel;
var points;
var usedQuestions;
var numberOfQuestions;
var isLost;

(function () {
    numberOfQuestions = questions.length;
    if (numberOfQuestions < 12) {
        alert("You need at least 12 questions!");
    }
})();

function loadHomeScreen() {
    $('.intro-section').show();
    $('.question-container').hide();
    $(".next-button").text("Nastepne pytanie");
    $(".level-" + currLevel).removeClass("uk-label-warning");
    for (var i = 0; i < currLevel + 1; i++) {
        $(".level-" + i).removeClass("uk-label-success");
    }
    $(".level-0").addClass("uk-label-warning");
    setHelpers('disabled');
}

function startGame() {
    points = 0;
    currLevel = 0;
    isLost = false;
    usedQuestions = [];
    $('.intro-section').hide();
    $('.question-container').show();
    loadQuestion();
    setHelpers('start');
}

function endGame() {
    $("#end-game span").text(countScore());
    UIkit.modal("#end-game").show();
}

function checkAnswer(event) {
    $(event).css("border", "5px solid gold");
    var isCorrect = $(event).attr("data-correct");
    if (isCorrect === 'false') {
        isLost = true;
        $(".next-button").text("Zobacz wygraną");
        $(event).css("background-color", '#d32c46');
        for (var i = 0; i < 4; i++) {
            var isCorrect = $(".answer-" + i).attr("data-correct");
            if (isCorrect !== 'false') {
                $(".answer-" + i).css("background-color", '#32d296');
            }
            $(".answer-" + i).attr("disabled", true);
        }
    } else {
        $(event).css("background-color", '#32d296');
        $(".level-" + currLevel).removeClass("uk-label-warning");
        $(".level-" + currLevel).addClass("uk-label-success");
        for (var i = 0; i < 4; i++) {
            $(".answer-" + i).attr("disabled", true);
        }
        currLevel++;
    }
    $(".next-button").show();
}

function nextQuestion() {
    if (isLost) {
        endGame();
    } else if (currLevel < 12) {
        loadQuestion();
    } else {
        UIkit.modal("#won-milion").show();
    }
    $(".next-button").hide();
}

function loadQuestion() {
    $(".level-" + currLevel).addClass("uk-label-warning");
    var index = chooseQuestion();
    var question = questions[index];
    $(".question-text > h2").text(question.text);
    var correctAnswer = question.answers[0];
    var answers = JSON.parse(JSON.stringify(question.answers));
    shuffle(answers);

    for (var i = 0; i < 4; i++) {
        var answer = question.answers[i];
        var isCorrect = (correctAnswer === answer);
        var letter = String.fromCharCode(i + 65) + ") ";
        $('.answer-' + i).text(letter + answer);
        $('.answer-' + i).attr("data-correct", isCorrect);
        $('.answer-' + i).css("background-color", "");
        $('.answer-' + i).css("border", "");
        $('.answer-' + i).attr("disabled", false);
    }
}

function countScore() {
    if (currLevel < 2) return 0;
    else if (currLevel < 6) return levels[1];
    else if (currLevel < 12) return levels[6];
    else return levels[11];
}

function chooseQuestion() {
    var index = Math.floor(Math.random() * numberOfQuestions);
    while (usedQuestions.indexOf(index) !== -1) {
        index = Math.floor(Math.random() * numberOfQuestions);
    }
    usedQuestions.push(index);
    return index;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
}

function fiftyFifty() {
    $("#helper-fifty").addClass("custom-disabled");
    var choosen = [];
    while (choosen.length < 2) {
        var number = Math.floor(Math.random() * 4);
        if (choosen.indexOf(number) < 0) {
            var isCorrect = $('.answer-' + number).attr("data-correct");
            if (isCorrect !== 'true') {
                $('.answer-' + number).attr("disabled", true);
                choosen.push(number);
            }
        }
    }
}

function askAudience() {
    $("#helper-audience").addClass("custom-disabled");
    countdown(120);
}

function callFriend() {
    $("#helper-phone").addClass("custom-disabled");
    countdown(60);
}

function countdown(time) {
    $("#timeleft").text(time);
    $("#timer").show();
    var downloadTimer = setInterval(function () {
        time--;
        $("#timeleft").text(time);
        if (time <= 0) {
            clearInterval(downloadTimer);
            UIkit.modal("#end-of-time").show();
            $('#timer').hide();
        }
    }, 1000);
}

function setHelpers(val){
    if (val === 'disabled') {
        $("#helper-audience").addClass("custom-disabled");
        $("#helper-fifty").addClass("custom-disabled");
        $("#helper-phone").addClass("custom-disabled");
    }else {
        $("#helper-audience").removeClass("custom-disabled");
        $("#helper-fifty").removeClass("custom-disabled");
        $("#helper-phone").removeClass("custom-disabled");
    }

}