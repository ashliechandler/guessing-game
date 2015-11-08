var correctCount = 0;
var answer;
var correctAnswer = []
var wrongAnswer = []

function print(message) {
  document.write(message);
}
var guessingGame = [
["Did I join a traveling circus when I was 12 to become a trapeze acrobat?", "no", "Correct! I did not join a traveling circus, but I did join a polynesian dance troupe.", "Wrong. Unfortunately, I do not possess the skills to be a trapeze acrobat."],
["Did I spend eight months camping and hitchhiking through seven countries in the southern African region?", "yes", "Correct! I traveled through Namibia, Botswana, Zambia, Zimbabwe, Malawi, Mozambique and South Africa.", "Wrong. I am a world traveler goddamnit! Can't you tell?"],
["Did I work on a dairy farm in Munich, Germany?", "no", "Correct! I did, however, milk a cow in Kenya once.", "Wrong. I have never been to Germany, but I have plans to travel there next year."],
["Did I move to Buenos Aires, Argentina to study soccer?", "yes", "Correct! I studied the socioeconomic representation of the Boca Juniors and River Plate soccer teams.", "Wrong. I graduated a semester early from college and moved to Argentina for eight months."],
["I used to be a disaster relief worker. How many disasters have I worked?", "5", "You're right! I have worked five disasters.", "Nope, you're wrong."],
];
for (var i = 0; i < guessingGame.length; i++) {
    var answer = prompt(guessingGame[i][0]);
    answer = answer.toLowerCase();
    if (answer === guessingGame[i][1]) {
        console.log(answer);
        correctAnswer.push("<li>" + guessingGame[i][0] + "<b>" + "<br>Your answer: " + answer + "</b>" + "</li>");
        correctCount += 1;
        var message;
        var question = guessingGame[i][0];
        switch (question) {
          case guessingGame[0][0]:
            message = guessingGame[0][2];
            alert(message);
            break;
          case guessingGame[1][0]:
            message = guessingGame[1][2];
            alert(message);
            break;
          case guessingGame[2][0]:
            message = guessingGame[2][2];
            alert(message);
            break;
          case guessingGame[3][0]:
            message = guessingGame[3][2];
            alert(message);
            break;
        }
    }
    else if ((answer !== guessingGame[i][1]) && (answer === "yes" || answer === "no")) {
        console.log(answer);
        wrongAnswer.push("<li>" + guessingGame[i][0] + "<b>" + "<br>Correct answer: " + guessingGame[i][1] + "</b>" + "</li>");
        var message;
        var question = guessingGame[i][0];
        switch (question) {
            case guessingGame[0][0]:
                message = guessingGame[0][3];
                alert(message);
                break;
            case guessingGame[1][0]:
                message = guessingGame[1][3];
                alert(message);
                break;
            case guessingGame[2][0]:
                message = guessingGame[2][3];
                alert(message);
                break;
            case guessingGame[3][0]:
                message = guessingGame[3][3];
                alert(message);
                break;
        }
    }
    else if ((answer !== "yes") && (answer !== "no") && (answer !== NaN)) {
        var answer = parseInt(answer);
        console.log(answer);
        if (answer === guessingGame[4][1]) {
          console.log("---");
          console.log(guessingGame[4][1]);
            alert(guessingGame[4][2]);
            correctAnswer.push("<li>" + guessingGame[i][0] + "<b>" + "<br>Your answer: " + answer + "</b>" + "</li>");
            correctCount += 1;
        }
        else if (answer !== guessingGame[4][1]) {
            console.log(answer);
            console.log("---");
            console.log(guessingGame[4][1]);
            wrongAnswer.push("<li>" + guessingGame[i][0] + "<b>" + "<br>Correct answer: " + guessingGame[i][1] + "</b>" + "</li>");
            if (answer < "5") {
                alert(guessingGame[4][3] + " That number is too low.");
            }
            else if (answer > "5") {
                alert(guessingGame[4][3] + " That number is too high.");
            }
        }
    }
    else {
        alert("Come again? The answer you provided was not a Yes or No.");
    }
}
var outputCorrectAnswer = correctAnswer.join(" ");
var outputWrongAnswer = wrongAnswer.join(" ");
if (correctCount === 1) {
    alert("You got " + correctCount + " question right!");
    print("<p>You got " + correctCount + " question right!<br></p>");
}
else {
    alert("You got " + correctCount + " questions right!");
    print("<p>You got " + correctCount + " questions right!<br></p>");
}
print("<p>You got these questions correct:</p><ol>" + outputCorrectAnswer + "</ol><br>");
    if (wrongAnswer.length === 0) {
        print(" ");
    }
    else {
        print("<p>You got these questions wrong:</p><ol>" + outputWrongAnswer + "</ol>");
    }
