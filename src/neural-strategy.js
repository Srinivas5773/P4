/**
 * Neural Strategy and Adaptive Weight Predictor
 * Provides adaptive move prediction based on player history patterns.
 */

class NeuralStrategy {
  constructor() {
    this.counters = {
      rock: 'paper',
      paper: 'scissors',
      scissors: 'rock'
    };
  }

  predictNextMove(playerHistory) {
    if (!playerHistory || playerHistory.length === 0) {
      const moves = ['rock', 'paper', 'scissors'];
      return moves[Math.floor(Math.random() * moves.length)];
    }

    const counts = { rock: 0, paper: 0, scissors: 0 };
    playerHistory.slice(-10).forEach(h => {
      if (counts[h.playerMove] !== undefined) {
        counts[h.playerMove]++;
      }
    });

    let mostFrequent = 'rock';
    let max = -1;
    for (const [move, count] of Object.entries(counts)) {
      if (count > max) {
        max = count;
        mostFrequent = move;
      }
    }

    // Return the move that counters the player's most frequent move
    return this.counters[mostFrequent];
  }
}

module.exports = new NeuralStrategy();
