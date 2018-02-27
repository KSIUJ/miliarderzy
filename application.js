var levels = [500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000];
var currLevel, points, usedQuestions, i, numberOfQuestions, isLost,
    downloadTimer, timer_elem, helper_audience_elem, helper_fifty_elem,
    helper_phone_elem, next_button_elem, timeleft_elem,
    intro_elem, question_container_elem;


(function () {
    numberOfQuestions = questions.length;
    if (numberOfQuestions < 12) {
        alert("You need at least 12 questions!");
    }
})();

function loadHomeScreen() {
    intro_elem.show();
    question_container_elem.hide();
    next_button_elem.text("Nastepne pytanie");
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
    intro_elem.hide();
    question_container_elem.show();
    loadQuestion();
    setHelpers('start');
}

function endGame() {
    $("#end-game span").text(countScore());
    UIkit.modal("#end-game").show();
}

function checkAnswer() {
    stopTimer();
    $(this).css("border", "5px solid gold");
    var isCorrect = $(this).attr("data-correct");
    if (isCorrect === 'false') {
        isLost = true;
        next_button_elem.text("Zobacz wygraną");
        $(this).css("background-color", '#d32c46');
        for (i = 0; i < 4; i++) {
            var ans_elem = $(".answer-" + i);
            isCorrect = ans_elem.attr("data-correct");
            if (isCorrect !== 'false') {
                ans_elem.css("background-color", '#32d296');
            }
            ans_elem.attr("disabled", true);
        }
    } else {
        $(this).css("background-color", '#32d296');
        var level_elem = $(".level-" + currLevel);
        level_elem.removeClass("uk-label-warning");
        level_elem.addClass("uk-label-success");
        for (i = 0; i < 4; i++) {
            $(".answer-" + i).attr("disabled", true);
        }
        currLevel++;
    }
    next_button_elem.show();
}

function nextQuestion() {
    if (isLost) {
        endGame();
    } else if (currLevel < 12) {
        loadQuestion();
    } else {
        UIkit.modal("#won-milion").show();
    }
    next_button_elem.hide();
}

function loadQuestion() {
    $(".level-" + currLevel).addClass("uk-label-warning");
    var index = chooseQuestion();
    var question = questions[index];
    $(".question-text > h2").text(question.text);
    var correctAnswer = question.correct;
    var answers = question.answers;
    shuffle(answers);

    for (var i = 0; i < 4; i++) {
        var answer = answers[i];
        var isCorrect = (correctAnswer === answer);
        var letter = String.fromCharCode(i + 65) + ") ";
        var answers_elem = $('.answer-' + i);
        answers_elem.text(letter + answer);
        answers_elem.attr("disabled", false).attr("data-correct", isCorrect);
        answers_elem.css("background-color", "").css("border", "");
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
    for (i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
}

function fiftyFifty() {
    stopTimer();
    helper_fifty_elem.addClass("custom-disabled");
    var choosen = [];
    while (choosen.length < 2) {
        var number = Math.floor(Math.random() * 4);
        if (choosen.indexOf(number) < 0) {
            var ans_elem = $('.answer-' + number);
            var isCorrect = ans_elem.attr("data-correct");
            if (isCorrect !== 'true') {
                ans_elem.attr("disabled", true);
                choosen.push(number);
            }
        }
    }
}

function stopTimer() {
    clearInterval(downloadTimer);
    timer_elem.hide();
}

function askAudience() {
    stopTimer();
    helper_audience_elem.addClass("custom-disabled");
    countdown(120);
}

function callFriend() {
    stopTimer();
    helper_phone_elem.addClass("custom-disabled");
    countdown(60);
}

function countdown(time) {
    timeleft_elem.text(time);
    timer_elem.show();
    downloadTimer = setInterval(function () {
        time--;
        timeleft_elem.text(time);
        if (time <= 0) {
            clearInterval(downloadTimer);
            UIkit.modal("#end-of-time").show();
            timer_elem.hide();
        }
    }, 1000);
}

function setHelpers(val) {
    if (val === 'disabled') {
        helper_audience_elem.addClass("custom-disabled");
        helper_fifty_elem.addClass("custom-disabled");
        helper_phone_elem.addClass("custom-disabled");
    } else {
        helper_audience_elem.removeClass("custom-disabled");
        helper_fifty_elem.removeClass("custom-disabled");
        helper_phone_elem.removeClass("custom-disabled");
    }
}

$(document).ready(function (e) {
    timer_elem = $('#timer');
    helper_audience_elem = $("#helper-audience");
    helper_fifty_elem = $("#helper-fifty");
    helper_phone_elem = $("#helper-phone");
    next_button_elem = $("#next-button");
    timeleft_elem = $("#timeleft");
    intro_elem = $('.intro-section');
    question_container_elem = $('.question-container');

    $('#start-button').click(startGame);
    $('#call-button').click(callFriend);
    $('#audience-button').click(askAudience);
    $("#fifty-button").click(fiftyFifty);
    $(".load-homescreen").click(loadHomeScreen);
    $(".answer-button").click(checkAnswer);
    next_button_elem.click(nextQuestion);
});
