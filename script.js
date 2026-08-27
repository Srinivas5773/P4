// Rock Paper Scissors Game Logic

const choices = ['rock', 'paper', 'scissors'];

const choiceEmojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

// DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerDisplayEl = document.getElementById('player-display');
const computerDisplayEl = document.getElementById('computer-display');
const resultMessageEl = document.getElementById('result-message');
const choiceButtons = document.querySelectorAll('.btn-choice');
const resetBtn = document.getElementById('reset-btn');
const historyListEl = document.getElementById('history-list');

// State variables
let playerScore = parseInt(localStorage.getItem('rps_playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('rps_computerScore')) || 0;
let isPlaying = false;

// Web Audio API Sound Synthesizer
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'click') {
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  } else if (type === 'win') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'lose') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'draw') {
    osc.frequency.setValueAtTime(350, now);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

// Initialize Scores from LocalStorage
function updateScoreboard() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  localStorage.setItem('rps_playerScore', playerScore);
  localStorage.setItem('rps_computerScore', computerScore);
}

// Generate Computer Choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine Winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'draw';

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  }

  return 'computer';
}

// Add item to match history
function addHistoryItem(playerChoice, computerChoice, result) {
  const li = document.createElement('li');
  li.classList.add('history-item', result === 'player' ? 'win' : result === 'computer' ? 'lose' : 'draw');
  
  let resultText = result === 'player' ? 'You Won' : result === 'computer' ? 'You Lost' : 'Draw';
  li.innerHTML = `
    <span>${choiceEmojis[playerChoice]} vs ${choiceEmojis[computerChoice]}</span>
    <strong>${resultText}</strong>
  `;

  historyListEl.prepend(li);
  
  // Limit history items to 5
  if (historyListEl.children.length > 5) {
    historyListEl.removeChild(historyListEl.lastChild);
  }
}

// Play Round Function
function playRound(playerChoice) {
  if (isPlaying) return;
  isPlaying = true;
  playSound('click');

  // Disable buttons during round
  choiceButtons.forEach(btn => btn.disabled = true);

  // Reset visual displays to shaking state
  playerDisplayEl.className = 'choice-circle shake';
  computerDisplayEl.className = 'choice-circle shake';
  playerDisplayEl.textContent = '✊';
  computerDisplayEl.textContent = '✊';
  resultMessageEl.className = 'result-message';
  resultMessageEl.textContent = 'Deciding...';

  // Wait 1 second for shake animation
  setTimeout(() => {
    const computerChoice = getComputerChoice();

    playerDisplayEl.classList.remove('shake');
    computerDisplayEl.classList.remove('shake');

    playerDisplayEl.textContent = choiceEmojis[playerChoice];
    computerDisplayEl.textContent = choiceEmojis[computerChoice];

    const result = getWinner(playerChoice, computerChoice);

    if (result === 'player') {
      playerScore++;
      playerDisplayEl.classList.add('winner');
      computerDisplayEl.classList.add('loser');
      resultMessageEl.textContent = `🎉 You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
      resultMessageEl.classList.add('win');
      playSound('win');
    } else if (result === 'computer') {
      computerScore++;
      computerDisplayEl.classList.add('winner');
      playerDisplayEl.classList.add('loser');
      resultMessageEl.textContent = `💥 You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
      resultMessageEl.classList.add('lose');
      playSound('lose');
    } else {
      resultMessageEl.textContent = `🤝 It's a Tie! Both chose ${capitalize(playerChoice)}.`;
      resultMessageEl.classList.add('draw');
      playSound('draw');
    }

    updateScoreboard();
    addHistoryItem(playerChoice, computerChoice, result);

    // Re-enable buttons
    choiceButtons.forEach(btn => btn.disabled = false);
    isPlaying = false;
  }, 900);
}

// Helper Capitalize Function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Reset Game
function resetGame() {
  playSound('click');
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  
  playerDisplayEl.className = 'choice-circle';
  computerDisplayEl.className = 'choice-circle';
  playerDisplayEl.textContent = '❓';
  computerDisplayEl.textContent = '❓';
  
  resultMessageEl.className = 'result-message';
  resultMessageEl.textContent = 'Select an option below to play!';
  
  historyListEl.innerHTML = '';
}

// Event Listeners
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const choice = button.getAttribute('data-choice');
    playRound(choice);
  });
});

resetBtn.addEventListener('click', resetGame);

// Initial Score setup on load
updateScoreboard();
