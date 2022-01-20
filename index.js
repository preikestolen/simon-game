function clicked(event) {
    // console.log(event.target.classList[1]);
    var classNum = event.target.classList.length;
    var obj = document.querySelector("." + event.target.classList[classNum - 1]);
    obj.classList.add("user-clicked");
    setTimeout(() => obj.classList.remove("user-clicked"), 100);
    return event.target.classList[1];
}

function pcClicked(arr) {
    var randNum = Math.random() * 4;
    randNum = Math.floor(randNum);
    switch (randNum) {
        case 0:
            // class top left
            arr.push("top-left");
            var obj = $(".top-left");
            obj.toggleClass("pc-clicked");
            setTimeout(() => obj.toggleClass("pc-clicked"), 100);
            break;
        case 1:
            // class top right
            arr.push("top-right");
            var obj = $(".top-right");
            obj.toggleClass("pc-clicked");
            setTimeout(() => obj.toggleClass("pc-clicked"), 100);
            break;
        case 2:
            // class bottom left
            arr.push("bottom-left");
            var obj = $(".bottom-left");
            obj.toggleClass("pc-clicked");
            setTimeout(() => obj.toggleClass("pc-clicked"), 100);
            break;
        case 3:
            // class bottom right
            arr.push("bottom-right");
            var obj = $(".bottom-right");
            obj.toggleClass("pc-clicked");
            setTimeout(() => obj.toggleClass("pc-clicked"), 100);
            break;
    }
    // console.log(arr);
}

function check(clickClass) {
    counter++;
    console.log(counter);
    if (clickClass == arr[counter]) {
        console.log("good job");
        if (arr.length - 1 == counter) {
            counter = -1;
            arr = [];
            console.log("done");
            return "done";
        }
        return true;
    } else if (arr.length - 1 < counter) {
        counter = -1;
        arr = [];
    } else {
        // wrong button clicked
        console.log("wrong");
        return false;
    }

}




function oneRound(num) {
    for (let i = 1; i < num; i++) {
        setTimeout(() => pcClicked(arr), 1000 * i);
    }
}


function game() {
    // music


    var level = 2;
    var nextLevel = false;
    for (let i = 0; i < document.querySelectorAll(".btn-lg").length; i++) {
        document.querySelectorAll(".btn-lg")[i].addEventListener("click", function (event) {
            var clickedClass = clicked(event);
            var res = check(clickedClass);

            var audio = document.querySelector("audio");
            audio.play();
            audio.onended = function () {
                audio.currentTime = 0;
                audio.play();
            }

            if (res == false) {
                counter = -1;
                arr = [];
                level = 2;
                nextLevel = false;
                // console.log("you lost");
                setTimeout(function () {
                    document.querySelector("h1").innerHTML = "You lost!";
                    document.querySelector("body").classList.toggle("lost-background");
                }, 500);
                document.querySelector("body").classList.toggle("lost-background");
                gameStartAnimation();
                setTimeout(function () {
                    oneRound(2);
                }, 5000);
            }
            if (res == "done") {
                counter = -1;
                document.querySelector("h1").innerHTML = "Level " + level;
                level++;
                nextLevel = true;
                oneRound(level);
            }
        });
        if (nextLevel == true) {
            continue;
        }
    }
}

var counter = -1;
var arr = [];
gameStartAnimation();
setTimeout(function () {
    oneRound(2);
}, 5000);
game();

var counter2 = 0;
$("#info-button").click(function () {
    $(".container").slideToggle();
    $("p").fadeToggle();
    if (counter2 % 2 == 0) {
        document.querySelector("#info-button").innerHTML = "Return to the game ⬇️";
    }
    else {
        document.querySelector("#info-button").innerHTML = "Click for how to play ⬆️";
    }
    counter2++;
});

function gameStartAnimation() {
    setTimeout(function () {
        document.querySelector("h1").innerHTML = "Game starts in 3";
    }, 1000);
    setTimeout(function () {
        document.querySelector("h1").innerHTML = "Game starts in 2";
    }, 2000);
    setTimeout(function () {
        document.querySelector("h1").innerHTML = "Game starts in 1";
    }, 3000);
    setTimeout(function () {
        document.querySelector("h1").innerHTML = "Game started, watch for the boxes!";
    }, 4000);
}