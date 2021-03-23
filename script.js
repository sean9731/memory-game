//Global Constants
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var infinityPattern = [];
var bestScore = 0;
var arcadeMode = false;

//initialize infinityPattern with a random element
infinityPattern.push(Math.floor(Math.random() * 4) + 1);


//add event listener to see which mode was clicked
document.getElementById("arcadeBtn").addEventListener("click", function() {
  arcadeMode = true;
  startGame();
});

function startGame() {
  progress = 0;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("arcadeBtn").classList.add("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  arcadeMode = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("arcadeBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  if (arcadeMode == false) {
    let delay = nextClueWaitTime;
    for (let i = 0; i <= progress; i++) {
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
      setTimeout(playSingleClue, delay, pattern[i]);
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
  } else {
    let delay = nextClueWaitTime;
    for (let i = 0; i <= progress; i++) {
      console.log(
        "play single clue: " + infinityPattern[i] + " in " + delay + "ms"
      );
      setTimeout(playSingleClue, delay, infinityPattern[i]);
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
  }
}

function loseGame() {
  stopGame();
  alert("Game over. You lost...");
}

function winGame() {
  stopGame();
  alert("Congrats! You win!");
}

function guess(btn) {
  console.log("user guessed:" + btn);
  if (!gamePlaying) {
    return;
  }
  if (arcadeMode == false) {
    if (btn == pattern[guessCounter]) {
      if (guessCounter == progress) {
        if (progress == pattern.length - 1) {
          winGame();
        } else {
          progress += 1;
          playClueSequence();
        }
      } else {
        guessCounter += 1;
      }
    } else {
      loseGame();
    }
    //
  } else {
    if (btn == infinityPattern[guessCounter]) {
      //procedurally generate a pattern
      infinityPattern.push(Math.floor(Math.random() * 4) + 1);

      if (guessCounter == progress) {
        if (progress == infinityPattern.length - 1) {
          winGame();
        } else {
          progress += 1;
          playClueSequence();
        }
      } else {
        guessCounter += 1;
      }
    } else {
      //set best score htmL to equal newest high score
      if (progress > bestScore) {
        document.getElementById("bestScore").innerText =
          "Best Score: " + progress;
        bestScore = progress;
      }
      stopGame();
      alert("You got a score of : " + progress);
      
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
