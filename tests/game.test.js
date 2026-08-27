const database = require('../src/database');
const aiMatrix = require('../src/ai-matrix');
const gameCore = require('../src/game-core');
const battleSim = require('../src/battle-simulator');

describe('Rock Paper Scissors Game Suite', () => {
  test('Database contains 4500 fighters', () => {
    expect(database.fighters.length).toBe(4500);
  });

  test('AI Matrix contains 2500 profiles', () => {
    expect(aiMatrix.profiles.length).toBe(2500);
  });

  test('Battle Simulator computes match correctly', () => {
    expect(battleSim.simulateMatch_1('rock', 'scissors')).toBe('p1');
    expect(battleSim.simulateMatch_1('paper', 'rock')).toBe('p1');
    expect(battleSim.simulateMatch_1('scissors', 'paper')).toBe('p1');
    expect(battleSim.simulateMatch_1('rock', 'rock')).toBe('draw');
  });

  test('Game Core computes multipliers correctly', () => {
    expect(gameCore.computeMultiplier_1(10)).toBeGreaterThan(10);
  });
});
