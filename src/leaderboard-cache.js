/**
 * Leaderboard Cache and Ranking Utility
 * Caches top fighter rankings and provides efficient score indexing.
 */

class LeaderboardCache {
  constructor() {
    this.cache = new Map();
    this.ttl = 60000; // 60 seconds TTL
    this.lastUpdated = null;
  }

  setLeaderboard(category, entries) {
    this.cache.set(category, {
      data: entries.sort((a, b) => b.score - a.score),
      updatedAt: Date.now()
    });
    this.lastUpdated = new Date().toISOString();
  }

  getLeaderboard(category, limit = 10) {
    const entry = this.cache.get(category);
    if (!entry) return [];
    return entry.data.slice(0, limit);
  }

  clear() {
    this.cache.clear();
    this.lastUpdated = null;
  }
}

module.exports = new LeaderboardCache();
