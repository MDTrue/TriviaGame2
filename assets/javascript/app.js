

var questionArray = [{
    
    choices: ["Picasso", "Dali", "Miro", "Klee",],
    corAnswer: " Picasso",
    artWork:  "assets/images/artWorkOne.jpg",
    artWorkText: "Picasso's ponytail series, inspired by model and muse, Sylvette David, is one of his least known.",
}, {
    choices: ["DaVinci", "Michelangelo", "Raphael", "Titian"],
    corAnswer: "Michelangelo",
    artWork:  "assets/images/artWorkTwo.jpg",
    artWorkText: "Painted when he was 12 or 13 it earned him early recognition of his talent."
}, {
    choices: ["Banksy", "Pollock", "Warhol", "Lichtenstein"],
    corAnswer: "Warhol",
    artWork:  "assets/images/artWorkThree.jpg",
    artWorkText: "Andy Warhol was a conservationist and he created this endangered species series in 1983."
}, {
    choices: ["Renoir", "VanGogh", "Monet", "Degas"],
    corAnswer: "Degas",
    artWork:  "assets/images/artWorkFour.jpg",
    artWorkText: "Degas hated painting portraits, but he accepted this commission from a woman he had previously painted as a dancer. After seeing it she refused to pay."

}, {
    choices: ["Miro", "Picasso", "Pollock", "Duchamp"],
    corAnswer: "Pollock",
    artWork:  "assets/images/artWorkFive.jpg",
    artWorkText: "This is an early Pollock showing his art school training, before he started dripping paint"
}, {
    choices: ["Titian", "DaVinci", "Rembrandt", "Vermeer"],
    corAnswer: "Vermeer",
    artWork:  "assets/images/artWorkSix.jpg",
    artWorkText: "Called the ugly Vermeer, it was probably painted for his mother-in-law who was a devote catholic, and supporting him and his 10 kids."
}, {
    choices: ["Kahlo", "Degas", "Monet", "Rivera"],
    corAnswer: "Kahlo",
    artWork:  "assets/images/artWorkSeven.jpg",
    artWorkText: "She didn't only paint self portraits"
}, {
    choices: ["Duchamp", "Dali", "Gaugin", "VanGogh"],
    corAnswer: "VanGogh",
    artWork:  "assets/images/artWorkEight.jpg",
    artWorkText: "Doubted as a real Van Gogh it was verified by x-rays revealing a lost painting of wrestlers that he painted over."
}, {
    choices: ["Michelangelo", "DaVinci", "Titian", "Raphael"],
    corAnswer: "DaVinci",
    artWork:  "assets/images/artWorkNine.jpg",
    artWorkText: "Although called 'St. John the Baptist' its basically a portrait of DaVinci's partner for twenty five years, Salai."

}, {
    choices: ["VanGogh", "O'keeffe", "Monet", "Degas"],
    corAnswer: "Monet",
    artWork:  "assets/images/artWorkTen.jpg",
    artWorkText: "Others painted sunflowers besides Van Gogh, but not as well."
    
    
}]
// console.log(questionArray[1].question) just a check to help me 
var corAnswerArr = ["a", "b", "c", "d", "c","d","a","d","b","c"];
var userAnswerArr = [];
var userAnswer
var correctAnswers = 0
var wrongAnswers = 0
var index = 0;
var questionText = "Who Painted this?"
// loadChoices()
// startTimer()
$("#startButton").click(function () {
    for(var j;j <questionArray.length;j++)
    showPanels();
    console.log("start")
    startTimer()
    $("#choicePanelOne").empty();
    $("#choicePanelTwo").empty();
    $("#choicePanelThree").empty();
    $("#choicePanelFour").empty();
    loadChoices()
    $("#startButton").hide(3000)
    $("#reStartButton").hide(3000)
    
})
$("#nextButton").click(function () {
    if(index < (questionArray.length) -1)  {
    showPanels();
    index++;
    clearInterval(interval)
    startTimer();
    $("#choicePanelOne").empty();
    $("#choicePanelTwo").empty();
    $("#choicePanelThree").empty();
    $("#choicePanelFour").empty();
    loadChoices();
    console.log(index)
    console.log(questionArray[index].choices[0])
    } else  {
       gameOver()
    }
})
$("#reStartButton").click(function () {
    location.reload();
});
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
            userAnswer = "e";
            userAnswerArr.push("e");
            hidePanels()
            $("#messagePanel").text("Times up!");

            // alert("times up")
        }
    }
}
// function loadQuestion() {
    //     $("#quizPanel").html(questionText)
    // }
    // loadQuestion()  a text check for me.
    
    function loadChoices() {
        $("#quizPanel").html(questionText);
        $(".artWork").attr('src', (questionArray[index].artWork)) 
        
        var $inputA = $("<input type = 'button'class = 'buttons' id = 'buttonA' value='a' >");
        $inputA.appendTo($("#choicePanelOne"));
        $("#choicePanelOne").append(questionArray[index].choices[0]);
        
        
        var $inputB = $("<input type = 'button'class = 'buttons' id = 'buttonB' value='b' >");
        $inputB.appendTo($("#choicePanelTwo"));
        $("#choicePanelTwo").append(questionArray[index].choices[1]);

        var $inputC = $("<input type = 'button'class = 'buttons' id = 'buttonC' value='c' >");
        $inputC.appendTo($("#choicePanelThree"));
        $("#choicePanelThree").append(questionArray[index].choices[2]);

        var $inputD = $("<input type = 'button'class = 'buttons' id = 'buttonD' value='d' >");
        $inputD.appendTo($("#choicePanelFour"));
        $("#choicePanelFour").append(questionArray[index].choices[3]);
        
        
        $("#buttonA").click(function () {
            console.log("abutton clicked")
            clearInterval(interval)
            userAnswer = "a";
            userAnswerArr.push("a");
            evalAnswer()
        })
        $("#buttonB").click(function () {
            clearInterval(interval)
            userAnswer = "b";
            userAnswerArr.push("b");
            evalAnswer()
        });
        $("#buttonC").click(function () {
            clearInterval(interval)
            userAnswer = "c";
            userAnswerArr.push("c");
            evalAnswer()
        });
        $("#buttonD").click(function () {
            clearInterval(interval)
            userAnswer = "d";
            userAnswerArr.push("d");
            evalAnswer()
        });
        

        console.log(userAnswerArr)
        
    }
    
    function evalAnswer(){
        if (userAnswer === corAnswerArr[index]) {
            correctAnswers++
            rightAns();
            console.log(correctAnswers)
        } else {
            wrongAnswers++
            wrongAns();
            console.log(wrongAnswers)
        }
    }
    
    // loadQuestion()
    
    
    
    
    function rightAns() {
        hidePanels()
        $("#messagePanel").text("Yes! Good job!");
        $("#messagePanelTwo").text(questionArray[index].artWorkText);
    }
    function wrongAns() {
        hidePanels()
        $("#messagePanel").text("Nope, The correct answer was " + questionArray[index].corAnswer);
        $("#messagePanelTwo").text("");
        
    }
    function hidePanels() {
        $("#quizPanel").hide(3000)
        $("#choicePanelOne").hide(3000)
        $("#choicePanelTwo").hide(3000)
        $("#choicePanelThree").hide(3000)
        $("#choicePanelFour").hide(3000)
        $("#messagePanel").show(3000)
        $("#messagePanelTwo").show(3000)
    }
    function showPanels() {
        $("#quizPanel").show(3000)
        $("#choicePanelOne").show(3000)
        $("#choicePanelTwo").show(3000)
        $("#choicePanelThree").show(3000)
        $("#choicePanelFour").show(3000)
        $("#messagePanel").hide(3000)
        $("#messagePanelTwo").hide(3000)
    }
    function gameOver(){
        hidePanels()
        $("#messagePanel").text("You got " + correctAnswers + " correct and " + wrongAnswers + " wrong. Press restart to play again.");
        $("#reStartButton").show(3000)
        $("#messagePanelTwo").text("");
        $("#nextButton").hide(3000)
        $(".artWork").attr('src', ("assets/images/artQuestionMark.jpg"))
    }
 