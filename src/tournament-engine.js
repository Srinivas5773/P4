/**
 * Tournament Bracket and Simulation Engine
 * Generates single-elimination tournament brackets and computes match ladders.
 */

class TournamentEngine {
  constructor() {
    this.rounds = [];
  }

  generateBracket(fighters) {
    if (fighters.length < 2) return null;
    const shuffled = [...fighters].sort(() => 0.5 - Math.random());
    const matches = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      if (i + 1 < shuffled.length) {
        matches.push({
          matchId: Math.floor(i / 2) + 1,
          player1: shuffled[i],
          player2: shuffled[i + 1],
          winner: null
        });
      }
    }
    return {
      totalMatches: matches.length,
      matches
    };
  }

  simulateBracketRound(bracket, adjudicatorFn) {
    bracket.matches.forEach(m => {
      m.winner = adjudicatorFn ? adjudicatorFn(m.player1, m.player2) : m.player1;
    });
    return bracket;
  }
}

module.exports = new TournamentEngine();
