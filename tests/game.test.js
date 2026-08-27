const database = require('../src/database');
const aiMatrix = require('../src/ai-matrix');
const gameCore = require('../src/game-core');
const battleSim = require('../src/battle-simulator');
const characterSystem = require('../src/character-system');
const itemCatalog = require('../src/item-catalog');
const questEngine = require('../src/quest-engine');

describe('Rock Paper Scissors Game Suite', () => {
  test('Database contains 8000 fighters', () => {
    expect(database.fighters.length).toBe(8000);
  });

  test('AI Matrix contains 4000 profiles', () => {
    expect(aiMatrix.profiles.length).toBe(4000);
  });

  test('Character System contains 3000 classes', () => {
    expect(characterSystem.classes.length).toBe(3000);
  });

  test('Item Catalog contains 3000 items', () => {
    expect(itemCatalog.items.length).toBe(3000);
  });

  test('Quest Engine contains 3000 quests', () => {
    expect(questEngine.quests.length).toBe(3000);
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
