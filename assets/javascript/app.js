

var questionArray = [{
    question: "who",
    choices: ["boat", "desk", 4, 5,],
    corAnswer: "a"
}, {
    question: "what",
    choices: ["carriage", "horse", 8, 9],
    corAnswer: "b"
}, {
    question: "when",
    choices: ["lantern", "jaw", 12, 13],
    corAnswer: "c"
}, {
    question: "where",
    choices: [14, 15, 16, 17],
    corAnswer: "d"
}]
// console.log(questionArray[1].question) just a check to help me 
var corAnswerArr = ["a", "b", "c", "d"];
var userAnswerArr = [];
var userAnswer
var correctAnswers = 0
var wrongAnswers = 0
var index = 0;
var questionText = "Who Painted this?"

function loadQuestion() {
    $("#quizPanel").html(questionText)
}
// loadQuestion()  a text check for me.

loadQuestion()
loadChoices()
choose()

//timer
function startTimer() {
    var counter = 0
    var timeSpan = 20
    var timer = $("#countDown");
    timer.html(counter)

    interval = setInterval(timeIt, 1000);

    function timeIt() {
        counter++;
        timer.html(timeSpan - counter)
        if (counter == timeSpan) {
            clearInterval(interval)
            // alert("times up")
        }
    }
}
startTimer()
function loadChoices() {
    var $inputA = $("<input type = 'button'class = 'buttons' id = 'buttonA' value='a' />");
    $inputA.appendTo($("#choicePanelOne"));
    $("#choicePanelOne").append(questionArray[index].choices[0]);

    var $inputB = $("<input type = 'button'class = 'buttons' id = 'buttonB' value='b' />");
    $inputB.appendTo($("#choicePanelTwo"));
    $("#choicePanelTwo").append(questionArray[index].choices[1]);
}
function choose(){
$("#buttonA").click(function () {
    clearInterval(interval)
    userAnswer = "a";
    userAnswerArr.push("a");
    if (userAnswer === corAnswerArr[index]) {
        correctAnswers++
        rightAns();
    } else {
        wrongAnswers++
        wrongAns();
    }

})
$("#buttonB").click(function () {
    clearInterval(interval)
    userAnswer = "b";
    userAnswerArr.push("b");
    if (userAnswer === corAnswerArr[index]) {
        correctAnswers++
        rightAns();
    } else {
        wrongAnswers++
        wrongAns();
    }
});
}
function rightAns() {
    hidePanels()
    $("#messagePanel").append("Yes! Good job!");

}
function wrongAns() {
    hidePanels()
    $("#messagePanel").append("Nope, Better luck next time!");

}
function hidePanels() {
    $("#quizPanel").hide(3000)
    $("#choicePanelOne").hide(3000)
    $("#choicePanelTwo").hide(3000)
    $("#choicePanelThree").hide(3000)
    $("#choicePanelFour").hide(3000)
    $("#messagePanel").show(3000)
}
function showPanels() {
    $("#quizPanel").show(3000)
    $("#choicePanelOne").show(3000)
    $("#choicePanelTwo").show(3000)
    $("#choicePanelThree").show(3000)
    $("#choicePanelFour").show(3000)
    $("#messagePanel").hide(3000)
}
$("#nextButton").click(function () {
    showPanels();
    index++
    startTimer()
    $("#choicePanelOne").empty();
    $("#choicePanelTwo").empty()


    loadChoices()
    choose()
})

console.log(index)
console.log(questionArray[index].choices[0])
console.log(userAnswerArr)
console.log(correctAnswers)
console.log(wrongAnswers)