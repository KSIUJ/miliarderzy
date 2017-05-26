var points = 0;
var friendPhoneUsed = false, fiftyFiftyUsed = false, askPublicUsed = false; //safelines
var resigned = false;

function helpSplit() {
    $("#helpSplit").addClass("_greyButton")
    $($("[data-correct='false']")[0]).css("text-decoration", "line-through")
    $($("[data-correct='false']")[1]).css("text-decoration", "line-through")
    $($("[data-correct='false']")[0]).css("color", "#222")
    $($("[data-correct='false']")[1]).css("color", "#222")
}
function helpPhone() {
    $("#helpPhone").addClass("_greyButton")
}
function helpQuestion() {
    $("#helpQuestion").addClass("_greyButton")
}

var lostGame = false;
function finish() {
    $("#header").html("Koniec gry")
    won = 0;

    var moneyPoints = ["1 MILION", 500000, 250000, 125000, 75000, 40000, 20000, 10000, 5000, 2000, 1000, 500];
    moneyPoints.reverse();

    if (lostGame || points == 0) {
        if (points >= 2) won = 1000;
        if (points >= 7) won = 40000;
        if (points >= 12) won = "1 MILION";
    }
    else {
        won = moneyPoints[points - 1];
    }
    $("#body").html("Wygrałeś: " + won + " zł<br /<br /><button onClick='location.reload()'>nowa gra</button>")
    $("#body").css("font-size", "66px")
    $("#controls").hide()
}

function nextArrayId(arr) {
    var len = arr.length;
    if (len == 1) return 0;
    return Math.floor(Math.random() * len + 0);
}
function nextQuestion() {
    $("#controls").show()
    $("#nextButton").addClass("_greyButton")
    $("#nextButton").attr("onClick", "");
    var nextQuestionId = nextArrayId(pytania);
    var question = pytania[nextQuestionId];
    var correct = question.odpowiedzi[0];
    pytania.splice(nextQuestionId, 1);

    $("#header").html(question.pytanie);
    $("#body").html("");

    for (var i = 0; i < 4; i++) {
        var nextAnswerId = nextArrayId(question.odpowiedzi);
        var answer = question.odpowiedzi[nextAnswerId];
        question.odpowiedzi.splice(nextAnswerId, 1);
        var isCurrentCorrect = (correct == answer);
        var letter = "<span class='answerLetter'>" + String.fromCharCode(i + 65) + ") " + "</span>"
        $("#body").append("<div class='answer' data-correct='" + isCurrentCorrect + "' onClick='selectAnswer(this, " + isCurrentCorrect + ")'>" + letter + answer + "</div>")
    }
}
function selectAnswer(caller, correct) {
    $("[data-correct='true']").css("background", "green");

    if (correct) {
        points++;
        $("[data-money='" + points + "']").css("background", "green")

        if (points >= 12) {
            $("#finishButton").addClass("_greenButton")
        }
        else {
            $("#nextButton").removeClass("_greyButton")
            $("#nextButton").addClass("_greenButton")
            $("#nextButton").attr("onClick", "nextQuestion()");
        }
    }
    else {
        lostGame = true;
        $(caller).css("background", "#FF7904");
        $("#finishButton").addClass("_greenButton")
    }

    $(".answer").attr("onClick", "");

}

$(function () {
    if (pytania.length < 12) {
        alert("pytań nie może być mniej jak 12!");
        return;
    }
    $("#controls").hide()
});
