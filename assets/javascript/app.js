

var questionArray = [{
    
    choices: ["Picasso", "Dali", "Miro", "Klee",],
    corAnswer: " Picasso",
    artWork:  "assets/images/artWorkOne.jpg"
}, {
    choices: ["DaVinci", "Michelangelo", "Raphael", "Titian"],
    corAnswer: "Michelangelo",
    artWork:  "assets/images/artWorkTwo.jpg"
}, {
    choices: ["Banksy", "Pollock", "Warhol", "Lichtenstein"],
    corAnswer: "Warhol",
    artWork:  "assets/images/artWorkThree.jpg"
}, {
    choices: ["Renoir", "VanGogh", "Monet", "Degas"],
    corAnswer: "Degas",
    artWork:  "assets/images/artWorkFour.jpg"
}, {
    choices: ["Miro", "Picasso", "Pollock", "Duchamp"],
    corAnswer: "Pollock",
    artWork:  "assets/images/artWorkFive.jpg"
}, {
    choices: ["Titian", "DaVinci", "Rembrandt", "Vermeer"],
    corAnswer: "Vermeer",
    artWork:  "assets/images/artWorkSix.jpg"
}, {
    choices: ["Kahlo", "Degas", "Monet", "Rivera"],
    corAnswer: "Kahlo",
    artWork:  "assets/images/artWorkSeven.jpg"
}, {
    choices: ["Duchamp", "Dali", "Gaugin", "VanGogh"],
    corAnswer: "VanGogh",
    artWork:  "assets/images/artWorkEight.jpg"
}, {
    choices: ["Michelangelo", "DaVinci", "Titian", "Raphael"],
    corAnswer: "DaVinci",
    artWork:  "assets/images/artWorkNine.jpg"
}, {
    choices: ["VanGogh", "O'keeffe", "Monet", "Degas"],
    corAnswer: "Monet",
    artWork:  "assets/images/artWorkTen.jpg"
    
    
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

        var $inputC = $("<input type = 'button'class = 'buttons' id = 'buttonC' value='a' >");
        $inputC.appendTo($("#choicePanelThree"));
        $("#choicePanelThree").append(questionArray[index].choices[2]);

        var $inputD = $("<input type = 'button'class = 'buttons' id = 'buttonD' value='a' >");
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
        
    }
    function wrongAns() {
        hidePanels()
        $("#messagePanel").text("Nope, The correct answer was " + questionArray[index].corAnswer);
        
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
    function gameOver(){
        hidePanels()
        $("#messagePanel").text("You got " + correctAnswers + "correct and " + wrongAnswers + " wrong. Press start to play again.");
        $("#reStartButton").show(3000)
        $("#nextButton").hide(3000)
        $(".artWork").hide(3000)
    }