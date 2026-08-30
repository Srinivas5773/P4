/**
 * Session Manager for Rock Paper Scissors Game Suite
 * Manages active player sessions, win streaks, and round history.
 */

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  createSession(playerId) {
    const session = {
      id: playerId,
      roundsPlayed: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      streak: 0,
      history: [],
      createdAt: new Date().toISOString()
    };
    this.sessions.set(playerId, session);
    return session;
  }

  getSession(playerId) {
    return this.sessions.get(playerId) || this.createSession(playerId);
  }

  recordRound(playerId, playerMove, aiMove, result) {
    const session = this.getSession(playerId);
    session.roundsPlayed += 1;
    if (result === 'win') {
      session.wins += 1;
      session.streak += 1;
    } else if (result === 'loss') {
      session.losses += 1;
      session.streak = 0;
    } else {
      session.draws += 1;
    }

    session.history.push({
      round: session.roundsPlayed,
      playerMove,
      aiMove,
      result,
      timestamp: new Date().toISOString()
    });

    return session;
  }

  resetSession(playerId) {
    return this.createSession(playerId);
  }
}

module.exports = new SessionManager();
