function resetscreen() {
    for (let i = 1; i < 5; i++) {
        let game = document.querySelector(`#game${i}`)
        game.style.display = "none"
        let rule = document.querySelector(`#rules${i}`)
        rule.style.display = "none"
    }
}

//  ====================== HOW MANY POKEMON ===========================

function startgame1() {
    resetscreen();
    var startgame1 = document.querySelector("#game1");
    var game1directions = document.querySelector("#rules1");
    startgame1.style.display = "block";
    game1directions.style.display = "block";
}

var bulbcount = 0; // the mon counts that will compare to the users input
var charcount = 0;
var squirtcount = 0;
var pikacount = 0;

function fillJar() {

    var output = []; // create an array for the random pokemon to generate
    var randomMon = ["./bulbasaur.png", "./charmander.png", "./squirtle.png", "./pikachu.png"];

    for (var i = 0; i < 10; i++) {  // rows and columns will change when difficulty, stopping variable 
        for (var j = 0; j < 6; j++) {
            var number = Math.floor(Math.random() * 4);
            document.getElementById("jar").innerHTML += '\n<img src="' + randomMon[number] + '" style="width:35px"/>';
            output.push(randomMon[number]);
            if (number == 0) {
                bulbcount++;
            } else if (number == 1) {
                charcount++;
            } else if (number == 2) {
                squirtcount++;
            } else if (number == 3) {
                pikacount++;
            }
        }
        document.getElementById("jar").innerHTML += "<div class='row'>";   //starts the new row
    }

    console.log(bulbcount);
console.log(charcount);
console.log(squirtcount);
console.log(pikacount);

    // Make a form to fill out at end of countdown 
    var pokeremove = document.querySelector(".row")
    var userform = document.querySelector("#howmany")
    var restartbtn = document.querySelector("#restart")
    var countdown = 15;

    var timer = setInterval(function () {
        if (countdown <= 0) {
            clearInterval(timer);
            document.getElementById("timer1").innerHTML = "Game Over";
            restartbtn.style.visibility = "visible"; //makes the restart button appear after game ends
            userform.style.display = "block"; //make form appear
            pokeremove.style.display = "none";
        } else {
            document.getElementById("timer1").innerHTML = countdown + " seconds remaining";
        }
        countdown--;
    }, 1000); //end of setInterval function

} //end of fillJar function

function pokecheck() {
    var howmanymon = document.querySelector("#howmany")
    var resultscreen = document.querySelector("#results"); //after form is filled, this

    if (howmanymon.saur.value == bulbcount) {
        document.getElementById("result001").innerText = "Correct!";
    } else {
        document.getElementById("result001").innerText = "Wrong";
    }
    if (howmanymon.mander.value == charcount) {
        document.getElementById("result004").innerText = "Correct!";
    } else {
        document.getElementById("result004").innerText = "Wrong";
    }
    if (howmanymon.tle.value == squirtcount) {
        document.getElementById("result007").innerText = "Correct!";
    } else {
        document.getElementById("result007").innerText = "Wrong";
    }
    if (howmanymon.achu.value == pikacount) {
        document.getElementById("result025").innerText = "Correct!";
    } else {
        document.getElementById("result025").innerText = "Wrong";
    }

    resultscreen.style.display = "block";
    document.getElementById("b001").innerText = bulbcount;
    document.getElementById("userb001").innerText = howmanymon.saur.value;
    document.getElementById("c004").innerText = charcount;
    document.getElementById("userc004").innerText = howmanymon.mander.value;
    document.getElementById("s007").innerText = squirtcount;
    document.getElementById("users007").innerText = howmanymon.tle.value;
    document.getElementById("p025").innerText = squirtcount;
    document.getElementById("userp025").innerText = howmanymon.achu.value;
    howmanymon.style.display = "none";

} //end of pokecheck function

//====================== HOW MANY POKEMON ===========================  

// ====================== CHARGE IT ==================================

function startgame2() {
    resetscreen();
    var startgame2 = document.querySelector("#game2");
    startgame2.style.display = "block";
    var game2directions = document.querySelector("#rules2");
    game2directions.style.display = "block";
}

var matchUp = Math.floor(Math.random() * 10 + 20); //makes the number to match
console.log(matchUp);
document.getElementById("numToWin").innerText = matchUp;

function fillJar2() {

    var e125 = document.querySelector(".electabuzz"); //loads image
    e125.style.display = "block";
    var game3restart = document.querySelector(".game3restart")

    var countdown = 10;
    var timer = setInterval(function () {
        if (countdown <= 0) {
            clearInterval(timer);
            document.getElementById("timer2").innerHTML = "Game Over";
            game3restart.style.visibility = "visible";
            e125.style.display = "none";
            isitcharged();
        } else {
            document.getElementById("timer2").innerHTML = countdown + " seconds";
        }
        countdown--;
    }, 1000); //end of setInterval function
}

clickCount = 0;

function chargeIt() {
    clickCount++;
    console.log(clickCount)
}

var lightson = document.querySelector("#citylight");
var lightsoff = document.querySelector("#citydark");
var lightsfire = document.querySelector("#cityfire");

function isitcharged() {
    if (matchUp == clickCount) {
        lightson.style.display = "block";
    } else if (matchUp < clickCount) {
        lightsfire.style.display = "block";
    } else if (matchUp > clickCount) {
        lightsoff.style.display = "block";
    }
}

function btnremove(element) {  //removes the start button when clicked
    element.remove();
}

// ====================== CHARGE IT ==================================

// ==============================  FIRE WATER GRASS =========================================

function startgame3() {
    resetscreen();
    var startgame3 = document.querySelector("#game3");
    startgame3.style.display = "block";
    var game3directions = document.querySelector("#rules3");
    game3directions.style.display = "block";
}

var oppstats = [];
    var opponentchoice = Math.floor(Math.random() * 3); // get a value
    oppstats.push(opponentchoice);
    var fwgtypes = ["./fire.png", "./waterp.png", "./grassp.png"]; // assigns value to type
    oppstats.push(fwgtypes[opponentchoice]);

    function fillJar3() {
        var displayfwg = document.querySelector(".selecttype");
displayfwg.style.display = "block";
}

console.log(oppstats)
document.getElementById("opptype").innerHTML = '<img src="' + oppstats[1] + '"style="width:50px"/>'; //results
var typegone = document.querySelector(".selecttype");
var displayfwgresults = document.querySelector(".fwgresultpage");

function chosefire() {
    typegone.style.display = "none";
    displayfwgresults.style.display = "block";
    document.getElementById("playtype").innerHTML = '<img src="./firep.png" style="width:50px"/>';
    // document.getElementById("playtype").innerHTML = `<img src="${winConditions.fire.winImg}" style="width:50px"/>`;
    if (oppstats[0] == 0) {
        document.getElementById("fwgresult").innerHTML = '<img src="./mrmime.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "Draw!";
    } else if (oppstats[0] == 1) {
        document.getElementById("fwgresult").innerHTML = '<img src="./nursejenny.png" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You lose!";
    } else if (oppstats[0] == 2) {
        document.getElementById("fwgresult").innerHTML = '<img src="./charizard.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You win";
    }
}

function chosewater() {
    typegone.style.display = "none";
    displayfwgresults.style.display = "block";
    document.getElementById("playtype").innerHTML = '<img src="./waterp.png" style="width:50px"/>';
    if (oppstats[0] == 0) {
        document.getElementById("fwgresult").innerHTML = '<img src="./blastoise.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You win!";
    } else if (oppstats[0] == 1) {
        document.getElementById("fwgresult").innerHTML = '<img src="./mrmime.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "Draw!";
    } else if (oppstats[0] == 2) {
        document.getElementById("fwgresult").innerHTML = '<img src="./nursejenny.png" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You lose!";
    }
}

function chosegrass() {
    typegone.style.display = "none";
    displayfwgresults.style.display = "block";
    document.getElementById("playtype").innerHTML = '<img src="./grassp.png" style="width:50px"/>';
    if (oppstats[0] == 0) {
        document.getElementById("fwgresult").innerHTML = '<img src="./nursejenny.png" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You lose!";
    } else if (oppstats[0] == 1) {
        document.getElementById("fwgresult").innerHTML = '<img src="./venusaur.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "You win!";
    } else if (oppstats[0] == 2) {
        document.getElementById("fwgresult").innerHTML = '<img src="./mrmime.gif" style="width:200px"/>';
        document.getElementById("fwgresult2").innerHTML = "Draw!";
    }
}

// ==============================  FIRE WATER GRASS ========================================= 

//  ===============================  FIND HAUNTER ==========================================

function startgame4() {
    resetscreen();
    var startgame4 = document.querySelector("#game4");
    startgame4.style.display = "block";
    var game4directions = document.querySelector("#rules4");
    game4directions.style.display = "block";
}


function fillJar4() {
    var hauntedbuilding = document.querySelector("#building");
    hauntedbuilding.style.display = "block";
}

var haunterroom = Math.floor(Math.random() * 12);
console.log(haunterroom);
var rooms = ["c01", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "c11", "c12"];
var haunterloc = rooms[haunterroom];
console.log(haunterloc);
var guesses = 3;


function opensesame(id) {

    var here = document.getElementById(id);
    var here2 = here.getAttribute('data-door');
    console.log(here2);

    if (here2 == haunterloc) {

        var game4winner = document.querySelector("#game4end");
        document.getElementById("building").innerHTML = "";
        game4winner.style.display = "block";
    } else {
        if (guesses > 0) {

            document.getElementById(id).src = "./opendoor.png";
            guesses--;
            if (guesses == 0) {
                document.getElementById(id).src = "./opendoor.png"
                haunterloc.innerHTML = './haunter.gif';
                document.getElementById("building").innerHTML = "";
                var fhloser = document.querySelector("#overlay");
                fhloser.style.display = "block";
                // alert("YOU LOSE!");
            } document.getElementById("haunterguess").innerHTML = guesses + " guesses remaining";
            console.log(guesses);
        }
    }
}

function btnremove(element) {  //removes the start button when clicked
    element.remove();
}

function play1() {
    var audio1 = document.getElementById("countmusic");
    audio1.volume = 0.05;
    audio1.play();
}

function play2() {
    var audio2 = document.getElementById("chargemusic");
    audio2.volume = 0.05;
    audio2.play();
}

function play4() {
    var audio4 = document.getElementById("hauntermusic");
    audio4.volume = 0.05;
    audio4.play();
}
