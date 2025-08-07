function wordGame() {
  return {
    currentScreen: "start",
    gameSettings: {
      language: "english",
      teams: 2,
      words: 20,
    },
    timeRemaining: 60,
    timerInterval: null,
    currentTeam: 1,
    currentRound: 1,
    timerRunning: false,
    currentWordIndex: 0,
    nextWordClicks: 0,
    previousWordClicks: 0,
    roundScore: 0,
    showRoundScore: false,
    teamScores: {},

    // Word arrays
    dutchWords: [
      "kat",
      "hond",
      "huis",
      "auto",
      "boek",
      "boom",
      "water",
      "brood",
      "kaas",
      "melk",
      "tafel",
      "stoel",
      "deur",
      "raam",
      "lamp",
      "telefoon",
      "computer",
      "pen",
      "papier",
      "koffie",
      "thee",
      "appel",
      "bananen",
      "brood",
      "boter",
      "zout",
      "peper",
      "suiker",
      "wijn",
      "bier",
    ],

    englishWords: [
      "cat",
      "dog",
      "house",
      "car",
      "book",
      "tree",
      "water",
      "bread",
      "cheese",
      "milk",
      "table",
      "chair",
      "door",
      "window",
      "lamp",
      "phone",
      "computer",
      "pen",
      "paper",
      "coffee",
      "tea",
      "apple",
      "banana",
      "bread",
      "butter",
      "salt",
      "pepper",
      "sugar",
      "wine",
      "beer",
    ],

    teamColors: [
      "#FF1744", // Vibrant Red
      "#00E676", // Vibrant Green
      "#2196F3", // Vibrant Blue
      "#FF9800", // Vibrant Orange
      "#9C27B0", // Vibrant Purple
      "#FFEB3B", // Vibrant Yellow
      "#00BCD4", // Vibrant Cyan
      "#FF5722", // Vibrant Deep Orange
    ],

    // Team management
    increaseTeams() {
      if (this.gameSettings.teams < 8) {
        this.gameSettings.teams++;
      }
    },

    decreaseTeams() {
      if (this.gameSettings.teams > 2) {
        this.gameSettings.teams--;
      }
    },

    // Word count management
    increaseWords() {
      if (this.gameSettings.words < 100) {
        this.gameSettings.words += 5;
      }
    },

    decreaseWords() {
      if (this.gameSettings.words > 10) {
        this.gameSettings.words -= 5;
      }
    },

    // Shuffle array using Fisher-Yates algorithm
    shuffleArray(array) {
      const shuffled = [...array]; // Create a copy to avoid mutating original
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },

    // Start the game
    startGame() {
      // Stop any existing timer first
      this.stopTimer();

      // Reset game state
      this.currentTeam = 1;
      this.currentRound = 1;
      this.timerRunning = false;
      this.timeRemaining = 60;

      // Initialize team scores
      this.initializeTeamScores();

      // Randomize word arrays
      this.dutchWords = this.shuffleArray(this.dutchWords);
      this.englishWords = this.shuffleArray(this.englishWords);

      // Add a little animation delay before switching screens
      const startBtn = document.querySelector(".start-btn");
      if (startBtn) {
        startBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.currentScreen = "game";
          // Reset button transform
          if (startBtn) {
            startBtn.style.transform = "";
          }
        }, 150);
      } else {
        this.currentScreen = "game";
      }

      // Log the game settings for debugging
      console.log("Starting game with settings:", this.gameSettings);
      console.log("Words randomized for this game");
    },

    // Start timer
    startTimer() {
      this.timerRunning = true;
      this.timeRemaining = 60;
      this.timerInterval = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining -= 0.1;
        } else {
          this.stopTimer();
          this.nextRound();
        }
      }, 100);
    },

    // Start a round
    startRound() {
      this.resetRoundState();
      this.startTimer();
    },

    // Initialize team scores and randomize team colors
    initializeTeamScores() {
      this.teamScores = {};
      for (let i = 1; i <= this.gameSettings.teams; i++) {
        this.teamScores[i] = 0;
      }

      // Randomize team colors
      this.teamColors = this.shuffleArray([...this.teamColors]);
    },

    // Reset round state
    resetRoundState() {
      this.currentWordIndex = 0;
      this.nextWordClicks = 0;
      this.previousWordClicks = 0;
      this.roundScore = 0;
      this.showRoundScore = false;
    },

    // Get current word based on language setting
    getCurrentWord() {
      const words =
        this.gameSettings.language === "dutch"
          ? this.dutchWords
          : this.gameSettings.language === "english"
          ? this.englishWords
          : this.gameSettings.language === "both"
          ? this.currentWordIndex % 2 === 0
            ? this.dutchWords
            : this.englishWords
          : this.englishWords;

      return words[this.currentWordIndex] || "No more words";
    },

    // Navigate to next word
    nextWord() {
      if (!this.timerRunning) return;

      this.nextWordClicks++;
      this.currentWordIndex++;

      // Check if we've reached the word limit
      const maxWords =
        this.gameSettings.language === "both"
          ? Math.min(this.dutchWords.length, this.englishWords.length) * 2
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        this.currentScreen = "gameComplete";
        this.stopTimer();
        return;
      }

      // Wrap around if we reach the end (only if not using word limit)
      if (this.currentWordIndex >= maxWords) {
        this.currentWordIndex = 0;
      }
    },

    // Navigate to previous word
    previousWord() {
      if (!this.timerRunning) return;

      this.previousWordClicks++;
      this.currentWordIndex--;

      // Wrap around if we go below 0
      if (this.currentWordIndex < 0) {
        const maxWords =
          this.gameSettings.language === "both"
            ? Math.min(this.dutchWords.length, this.englishWords.length) * 2
            : this.gameSettings.language === "dutch"
            ? this.dutchWords.length
            : this.englishWords.length;
        this.currentWordIndex = maxWords - 1;
      }
    },

    // Create audio context for sound effects
    createAudioContext() {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
      }
    },

    // Play point sound effect with increasing pitch
    playPointSound(pointNumber) {
      this.createAudioContext();

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      // Calculate pitch based on point number (higher points = higher pitch)
      const baseFrequency = 400; // Starting frequency
      const pitchIncrement = 50; // Hz increase per point
      const frequency = baseFrequency + pointNumber * pitchIncrement;
      const endFrequency = frequency + 200; // Slight rise during the sound

      oscillator.frequency.setValueAtTime(
        frequency,
        this.audioContext.currentTime
      );
      oscillator.frequency.exponentialRampToValueAtTime(
        endFrequency,
        this.audioContext.currentTime + 0.1
      );

      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.1
      );

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    },

    // Animate score counting
    animateScore(teamId, startScore, endScore, duration = 3000) {
      const startTime = Date.now();
      const scoreDifference = endScore - startScore;
      let lastPlayedScore = startScore;
      let pointCounter = 0; // Track which point we're on

      // Add visual highlight to the score element
      this.$nextTick(() => {
        const scoreElement = document.querySelector(
          `[x-text="teamScores[${teamId}] || 0"]`
        );
        if (scoreElement) {
          scoreElement.classList.add("animating");
        }
      });

      const updateScore = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentScore = Math.round(
          startScore + scoreDifference * easeOutQuart
        );

        this.teamScores[teamId] = currentScore;

        // Play sound when score increases
        if (currentScore > lastPlayedScore) {
          pointCounter++; // Increment point counter
          this.playPointSound(pointCounter);
          lastPlayedScore = currentScore;
        }

        if (progress < 1) {
          requestAnimationFrame(updateScore);
        } else {
          // Remove highlight when animation completes
          this.$nextTick(() => {
            const scoreElement = document.querySelector(
              `[x-text="teamScores[${teamId}] || 0"]`
            );
            if (scoreElement) {
              scoreElement.classList.remove("animating");
            }
          });
        }
      };

      updateScore();
    },

    // End round and calculate score
    endRound() {
      if (!this.timerRunning) return;

      this.roundScore = this.nextWordClicks - this.previousWordClicks;

      // Get the current score before adding new points
      const currentScore = this.teamScores[this.currentTeam];
      const newScore = currentScore + this.roundScore;

      this.stopTimer();

      // Check if we've reached the word limit after ending the round
      const maxWords =
        this.gameSettings.language === "both"
          ? Math.min(this.dutchWords.length, this.englishWords.length) * 2
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        this.currentScreen = "gameComplete";
      } else {
        // Immediately switch to next team
        this.nextRound();

        // Start the score animation for the previous team during the next team's turn
        setTimeout(() => {
          this.animateScore(
            this.currentTeam - 1 || this.gameSettings.teams,
            currentScore,
            newScore,
            3000
          );
        }, 500); // Small delay to let the team switch happen first
      }
    },

    // Move to next round
    nextRound() {
      this.timerRunning = false;
      this.currentRound++;
      // Calculate which team should play in this round
      this.currentTeam =
        ((this.currentRound - 1) % this.gameSettings.teams) + 1;

      // Check if we've reached the word limit
      const maxWords =
        this.gameSettings.language === "both"
          ? Math.min(this.dutchWords.length, this.englishWords.length) * 2
          : this.gameSettings.language === "dutch"
          ? this.dutchWords.length
          : this.englishWords.length;

      if (
        this.currentWordIndex >= this.gameSettings.words ||
        this.currentWordIndex >= maxWords
      ) {
        // Game is complete - all words have been used
        this.currentScreen = "gameComplete";
      }
    },

    // Stop timer
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.timerRunning = false;
    },

    // Go back to start screen
    goBackToStart() {
      this.stopTimer();
      this.currentScreen = "start";
    },

    // Get timer progress style
    get timerProgressStyle() {
      const progress = ((60 - this.timeRemaining) / 60) * 360;
      return {
        "--progress": `${progress}deg`,
      };
    },

    // Get current team color
    get currentTeamColor() {
      return {
        backgroundColor: this.teamColors[this.currentTeam - 1],
      };
    },

    // Get current team style
    get currentTeamStyle() {
      return {
        borderColor: this.teamColors[this.currentTeam - 1],
        boxShadow: `0 15px 35px ${this.teamColors[this.currentTeam - 1]}40`,
      };
    },

    // Check if it's time to show the start round button
    get shouldShowStartRound() {
      return !this.timerRunning;
    },

    // Get winning team
    getWinningTeam() {
      let winningTeam = 1;
      let highestScore = this.teamScores[1];

      for (let team = 2; team <= this.gameSettings.teams; team++) {
        if (this.teamScores[team] > highestScore) {
          highestScore = this.teamScores[team];
          winningTeam = team;
        }
      }

      return { team: winningTeam, score: highestScore };
    },

    // Initialize the component
    init() {
      // Add some initial animations
      this.$nextTick(() => {
        const titleWords = document.querySelectorAll(".title-word");
        titleWords.forEach((word, index) => {
          setTimeout(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
          }, index * 200);
        });
      });
    },
  };
}

// Add some CSS for initial animations
document.addEventListener("DOMContentLoaded", function () {
  // Add initial animation styles
  const style = document.createElement("style");
  style.textContent = `
        .title-word {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .start-content {
            opacity: 0;
            transform: translateY(30px);
            animation: slideIn 0.8s ease-out forwards;
        }
        
        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);
});
