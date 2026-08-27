// Fighter Class & Skill Tree Definitions
if (typeof window === 'undefined') { var window = global; }
window.RPS_CHARACTER_SYSTEM = {
  classes: [
    {
      classId: 1,
      className: "Specialist Class #1",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2,
      className: "Specialist Class #2",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 3,
      className: "Specialist Class #3",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 4,
      className: "Specialist Class #4",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 5,
      className: "Specialist Class #5",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 6,
      className: "Specialist Class #6",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 7,
      className: "Specialist Class #7",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 8,
      className: "Specialist Class #8",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 9,
      className: "Specialist Class #9",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 10,
      className: "Specialist Class #10",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 11,
      className: "Specialist Class #11",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 12,
      className: "Specialist Class #12",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 13,
      className: "Specialist Class #13",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 14,
      className: "Specialist Class #14",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 15,
      className: "Specialist Class #15",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 16,
      className: "Specialist Class #16",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 17,
      className: "Specialist Class #17",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 18,
      className: "Specialist Class #18",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 19,
      className: "Specialist Class #19",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 20,
      className: "Specialist Class #20",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 21,
      className: "Specialist Class #21",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 22,
      className: "Specialist Class #22",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 23,
      className: "Specialist Class #23",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 24,
      className: "Specialist Class #24",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 25,
      className: "Specialist Class #25",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 26,
      className: "Specialist Class #26",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 27,
      className: "Specialist Class #27",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 28,
      className: "Specialist Class #28",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 29,
      className: "Specialist Class #29",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 30,
      className: "Specialist Class #30",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 31,
      className: "Specialist Class #31",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 32,
      className: "Specialist Class #32",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 33,
      className: "Specialist Class #33",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 34,
      className: "Specialist Class #34",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 35,
      className: "Specialist Class #35",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 36,
      className: "Specialist Class #36",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 37,
      className: "Specialist Class #37",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 38,
      className: "Specialist Class #38",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 39,
      className: "Specialist Class #39",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 40,
      className: "Specialist Class #40",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 41,
      className: "Specialist Class #41",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 42,
      className: "Specialist Class #42",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 43,
      className: "Specialist Class #43",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 44,
      className: "Specialist Class #44",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 45,
      className: "Specialist Class #45",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 46,
      className: "Specialist Class #46",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 47,
      className: "Specialist Class #47",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 48,
      className: "Specialist Class #48",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 49,
      className: "Specialist Class #49",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 50,
      className: "Specialist Class #50",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 51,
      className: "Specialist Class #51",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 52,
      className: "Specialist Class #52",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 53,
      className: "Specialist Class #53",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 54,
      className: "Specialist Class #54",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 55,
      className: "Specialist Class #55",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 56,
      className: "Specialist Class #56",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 57,
      className: "Specialist Class #57",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 58,
      className: "Specialist Class #58",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 59,
      className: "Specialist Class #59",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 60,
      className: "Specialist Class #60",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 61,
      className: "Specialist Class #61",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 62,
      className: "Specialist Class #62",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 63,
      className: "Specialist Class #63",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 64,
      className: "Specialist Class #64",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 65,
      className: "Specialist Class #65",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 66,
      className: "Specialist Class #66",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 67,
      className: "Specialist Class #67",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 68,
      className: "Specialist Class #68",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 69,
      className: "Specialist Class #69",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 70,
      className: "Specialist Class #70",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 71,
      className: "Specialist Class #71",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 72,
      className: "Specialist Class #72",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 73,
      className: "Specialist Class #73",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 74,
      className: "Specialist Class #74",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 75,
      className: "Specialist Class #75",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 76,
      className: "Specialist Class #76",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 77,
      className: "Specialist Class #77",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 78,
      className: "Specialist Class #78",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 79,
      className: "Specialist Class #79",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 80,
      className: "Specialist Class #80",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 81,
      className: "Specialist Class #81",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 82,
      className: "Specialist Class #82",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 83,
      className: "Specialist Class #83",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 84,
      className: "Specialist Class #84",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 85,
      className: "Specialist Class #85",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 86,
      className: "Specialist Class #86",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 87,
      className: "Specialist Class #87",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 88,
      className: "Specialist Class #88",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 89,
      className: "Specialist Class #89",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 90,
      className: "Specialist Class #90",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 91,
      className: "Specialist Class #91",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 92,
      className: "Specialist Class #92",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 93,
      className: "Specialist Class #93",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 94,
      className: "Specialist Class #94",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 95,
      className: "Specialist Class #95",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 96,
      className: "Specialist Class #96",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 97,
      className: "Specialist Class #97",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 98,
      className: "Specialist Class #98",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 99,
      className: "Specialist Class #99",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 100,
      className: "Specialist Class #100",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 101,
      className: "Specialist Class #101",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 102,
      className: "Specialist Class #102",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 103,
      className: "Specialist Class #103",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 104,
      className: "Specialist Class #104",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 105,
      className: "Specialist Class #105",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 106,
      className: "Specialist Class #106",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 107,
      className: "Specialist Class #107",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 108,
      className: "Specialist Class #108",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 109,
      className: "Specialist Class #109",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 110,
      className: "Specialist Class #110",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 111,
      className: "Specialist Class #111",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 112,
      className: "Specialist Class #112",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 113,
      className: "Specialist Class #113",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 114,
      className: "Specialist Class #114",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 115,
      className: "Specialist Class #115",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 116,
      className: "Specialist Class #116",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 117,
      className: "Specialist Class #117",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 118,
      className: "Specialist Class #118",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 119,
      className: "Specialist Class #119",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 120,
      className: "Specialist Class #120",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 121,
      className: "Specialist Class #121",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 122,
      className: "Specialist Class #122",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 123,
      className: "Specialist Class #123",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 124,
      className: "Specialist Class #124",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 125,
      className: "Specialist Class #125",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 126,
      className: "Specialist Class #126",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 127,
      className: "Specialist Class #127",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 128,
      className: "Specialist Class #128",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 129,
      className: "Specialist Class #129",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 130,
      className: "Specialist Class #130",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 131,
      className: "Specialist Class #131",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 132,
      className: "Specialist Class #132",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 133,
      className: "Specialist Class #133",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 134,
      className: "Specialist Class #134",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 135,
      className: "Specialist Class #135",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 136,
      className: "Specialist Class #136",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 137,
      className: "Specialist Class #137",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 138,
      className: "Specialist Class #138",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 139,
      className: "Specialist Class #139",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 140,
      className: "Specialist Class #140",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 141,
      className: "Specialist Class #141",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 142,
      className: "Specialist Class #142",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 143,
      className: "Specialist Class #143",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 144,
      className: "Specialist Class #144",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 145,
      className: "Specialist Class #145",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 146,
      className: "Specialist Class #146",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 147,
      className: "Specialist Class #147",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 148,
      className: "Specialist Class #148",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 149,
      className: "Specialist Class #149",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 150,
      className: "Specialist Class #150",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 151,
      className: "Specialist Class #151",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 152,
      className: "Specialist Class #152",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 153,
      className: "Specialist Class #153",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 154,
      className: "Specialist Class #154",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 155,
      className: "Specialist Class #155",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 156,
      className: "Specialist Class #156",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 157,
      className: "Specialist Class #157",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 158,
      className: "Specialist Class #158",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 159,
      className: "Specialist Class #159",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 160,
      className: "Specialist Class #160",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 161,
      className: "Specialist Class #161",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 162,
      className: "Specialist Class #162",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 163,
      className: "Specialist Class #163",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 164,
      className: "Specialist Class #164",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 165,
      className: "Specialist Class #165",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 166,
      className: "Specialist Class #166",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 167,
      className: "Specialist Class #167",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 168,
      className: "Specialist Class #168",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 169,
      className: "Specialist Class #169",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 170,
      className: "Specialist Class #170",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 171,
      className: "Specialist Class #171",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 172,
      className: "Specialist Class #172",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 173,
      className: "Specialist Class #173",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 174,
      className: "Specialist Class #174",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 175,
      className: "Specialist Class #175",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 176,
      className: "Specialist Class #176",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 177,
      className: "Specialist Class #177",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 178,
      className: "Specialist Class #178",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 179,
      className: "Specialist Class #179",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 180,
      className: "Specialist Class #180",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 181,
      className: "Specialist Class #181",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 182,
      className: "Specialist Class #182",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 183,
      className: "Specialist Class #183",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 184,
      className: "Specialist Class #184",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 185,
      className: "Specialist Class #185",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 186,
      className: "Specialist Class #186",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 187,
      className: "Specialist Class #187",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 188,
      className: "Specialist Class #188",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 189,
      className: "Specialist Class #189",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 190,
      className: "Specialist Class #190",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 191,
      className: "Specialist Class #191",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 192,
      className: "Specialist Class #192",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 193,
      className: "Specialist Class #193",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 194,
      className: "Specialist Class #194",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 195,
      className: "Specialist Class #195",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 196,
      className: "Specialist Class #196",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 197,
      className: "Specialist Class #197",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 198,
      className: "Specialist Class #198",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 199,
      className: "Specialist Class #199",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 200,
      className: "Specialist Class #200",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 201,
      className: "Specialist Class #201",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 202,
      className: "Specialist Class #202",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 203,
      className: "Specialist Class #203",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 204,
      className: "Specialist Class #204",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 205,
      className: "Specialist Class #205",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 206,
      className: "Specialist Class #206",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 207,
      className: "Specialist Class #207",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 208,
      className: "Specialist Class #208",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 209,
      className: "Specialist Class #209",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 210,
      className: "Specialist Class #210",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 211,
      className: "Specialist Class #211",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 212,
      className: "Specialist Class #212",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 213,
      className: "Specialist Class #213",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 214,
      className: "Specialist Class #214",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 215,
      className: "Specialist Class #215",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 216,
      className: "Specialist Class #216",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 217,
      className: "Specialist Class #217",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 218,
      className: "Specialist Class #218",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 219,
      className: "Specialist Class #219",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 220,
      className: "Specialist Class #220",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 221,
      className: "Specialist Class #221",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 222,
      className: "Specialist Class #222",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 223,
      className: "Specialist Class #223",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 224,
      className: "Specialist Class #224",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 225,
      className: "Specialist Class #225",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 226,
      className: "Specialist Class #226",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 227,
      className: "Specialist Class #227",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 228,
      className: "Specialist Class #228",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 229,
      className: "Specialist Class #229",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 230,
      className: "Specialist Class #230",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 231,
      className: "Specialist Class #231",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 232,
      className: "Specialist Class #232",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 233,
      className: "Specialist Class #233",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 234,
      className: "Specialist Class #234",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 235,
      className: "Specialist Class #235",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 236,
      className: "Specialist Class #236",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 237,
      className: "Specialist Class #237",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 238,
      className: "Specialist Class #238",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 239,
      className: "Specialist Class #239",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 240,
      className: "Specialist Class #240",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 241,
      className: "Specialist Class #241",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 242,
      className: "Specialist Class #242",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 243,
      className: "Specialist Class #243",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 244,
      className: "Specialist Class #244",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 245,
      className: "Specialist Class #245",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 246,
      className: "Specialist Class #246",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 247,
      className: "Specialist Class #247",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 248,
      className: "Specialist Class #248",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 249,
      className: "Specialist Class #249",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 250,
      className: "Specialist Class #250",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 251,
      className: "Specialist Class #251",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 252,
      className: "Specialist Class #252",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 253,
      className: "Specialist Class #253",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 254,
      className: "Specialist Class #254",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 255,
      className: "Specialist Class #255",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 256,
      className: "Specialist Class #256",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 257,
      className: "Specialist Class #257",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 258,
      className: "Specialist Class #258",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 259,
      className: "Specialist Class #259",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 260,
      className: "Specialist Class #260",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 261,
      className: "Specialist Class #261",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 262,
      className: "Specialist Class #262",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 263,
      className: "Specialist Class #263",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 264,
      className: "Specialist Class #264",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 265,
      className: "Specialist Class #265",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 266,
      className: "Specialist Class #266",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 267,
      className: "Specialist Class #267",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 268,
      className: "Specialist Class #268",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 269,
      className: "Specialist Class #269",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 270,
      className: "Specialist Class #270",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 271,
      className: "Specialist Class #271",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 272,
      className: "Specialist Class #272",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 273,
      className: "Specialist Class #273",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 274,
      className: "Specialist Class #274",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 275,
      className: "Specialist Class #275",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 276,
      className: "Specialist Class #276",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 277,
      className: "Specialist Class #277",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 278,
      className: "Specialist Class #278",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 279,
      className: "Specialist Class #279",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 280,
      className: "Specialist Class #280",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 281,
      className: "Specialist Class #281",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 282,
      className: "Specialist Class #282",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 283,
      className: "Specialist Class #283",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 284,
      className: "Specialist Class #284",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 285,
      className: "Specialist Class #285",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 286,
      className: "Specialist Class #286",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 287,
      className: "Specialist Class #287",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 288,
      className: "Specialist Class #288",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 289,
      className: "Specialist Class #289",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 290,
      className: "Specialist Class #290",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 291,
      className: "Specialist Class #291",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 292,
      className: "Specialist Class #292",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 293,
      className: "Specialist Class #293",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 294,
      className: "Specialist Class #294",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 295,
      className: "Specialist Class #295",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 296,
      className: "Specialist Class #296",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 297,
      className: "Specialist Class #297",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 298,
      className: "Specialist Class #298",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 299,
      className: "Specialist Class #299",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 300,
      className: "Specialist Class #300",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 301,
      className: "Specialist Class #301",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 302,
      className: "Specialist Class #302",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 303,
      className: "Specialist Class #303",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 304,
      className: "Specialist Class #304",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 305,
      className: "Specialist Class #305",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 306,
      className: "Specialist Class #306",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 307,
      className: "Specialist Class #307",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 308,
      className: "Specialist Class #308",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 309,
      className: "Specialist Class #309",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 310,
      className: "Specialist Class #310",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 311,
      className: "Specialist Class #311",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 312,
      className: "Specialist Class #312",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 313,
      className: "Specialist Class #313",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 314,
      className: "Specialist Class #314",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 315,
      className: "Specialist Class #315",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 316,
      className: "Specialist Class #316",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 317,
      className: "Specialist Class #317",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 318,
      className: "Specialist Class #318",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 319,
      className: "Specialist Class #319",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 320,
      className: "Specialist Class #320",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 321,
      className: "Specialist Class #321",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 322,
      className: "Specialist Class #322",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 323,
      className: "Specialist Class #323",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 324,
      className: "Specialist Class #324",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 325,
      className: "Specialist Class #325",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 326,
      className: "Specialist Class #326",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 327,
      className: "Specialist Class #327",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 328,
      className: "Specialist Class #328",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 329,
      className: "Specialist Class #329",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 330,
      className: "Specialist Class #330",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 331,
      className: "Specialist Class #331",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 332,
      className: "Specialist Class #332",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 333,
      className: "Specialist Class #333",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 334,
      className: "Specialist Class #334",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 335,
      className: "Specialist Class #335",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 336,
      className: "Specialist Class #336",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 337,
      className: "Specialist Class #337",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 338,
      className: "Specialist Class #338",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 339,
      className: "Specialist Class #339",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 340,
      className: "Specialist Class #340",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 341,
      className: "Specialist Class #341",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 342,
      className: "Specialist Class #342",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 343,
      className: "Specialist Class #343",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 344,
      className: "Specialist Class #344",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 345,
      className: "Specialist Class #345",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 346,
      className: "Specialist Class #346",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 347,
      className: "Specialist Class #347",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 348,
      className: "Specialist Class #348",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 349,
      className: "Specialist Class #349",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 350,
      className: "Specialist Class #350",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 351,
      className: "Specialist Class #351",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 352,
      className: "Specialist Class #352",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 353,
      className: "Specialist Class #353",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 354,
      className: "Specialist Class #354",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 355,
      className: "Specialist Class #355",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 356,
      className: "Specialist Class #356",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 357,
      className: "Specialist Class #357",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 358,
      className: "Specialist Class #358",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 359,
      className: "Specialist Class #359",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 360,
      className: "Specialist Class #360",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 361,
      className: "Specialist Class #361",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 362,
      className: "Specialist Class #362",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 363,
      className: "Specialist Class #363",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 364,
      className: "Specialist Class #364",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 365,
      className: "Specialist Class #365",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 366,
      className: "Specialist Class #366",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 367,
      className: "Specialist Class #367",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 368,
      className: "Specialist Class #368",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 369,
      className: "Specialist Class #369",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 370,
      className: "Specialist Class #370",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 371,
      className: "Specialist Class #371",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 372,
      className: "Specialist Class #372",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 373,
      className: "Specialist Class #373",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 374,
      className: "Specialist Class #374",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 375,
      className: "Specialist Class #375",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 376,
      className: "Specialist Class #376",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 377,
      className: "Specialist Class #377",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 378,
      className: "Specialist Class #378",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 379,
      className: "Specialist Class #379",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 380,
      className: "Specialist Class #380",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 381,
      className: "Specialist Class #381",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 382,
      className: "Specialist Class #382",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 383,
      className: "Specialist Class #383",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 384,
      className: "Specialist Class #384",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 385,
      className: "Specialist Class #385",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 386,
      className: "Specialist Class #386",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 387,
      className: "Specialist Class #387",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 388,
      className: "Specialist Class #388",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 389,
      className: "Specialist Class #389",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 390,
      className: "Specialist Class #390",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 391,
      className: "Specialist Class #391",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 392,
      className: "Specialist Class #392",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 393,
      className: "Specialist Class #393",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 394,
      className: "Specialist Class #394",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 395,
      className: "Specialist Class #395",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 396,
      className: "Specialist Class #396",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 397,
      className: "Specialist Class #397",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 398,
      className: "Specialist Class #398",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 399,
      className: "Specialist Class #399",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 400,
      className: "Specialist Class #400",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 401,
      className: "Specialist Class #401",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 402,
      className: "Specialist Class #402",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 403,
      className: "Specialist Class #403",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 404,
      className: "Specialist Class #404",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 405,
      className: "Specialist Class #405",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 406,
      className: "Specialist Class #406",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 407,
      className: "Specialist Class #407",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 408,
      className: "Specialist Class #408",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 409,
      className: "Specialist Class #409",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 410,
      className: "Specialist Class #410",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 411,
      className: "Specialist Class #411",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 412,
      className: "Specialist Class #412",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 413,
      className: "Specialist Class #413",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 414,
      className: "Specialist Class #414",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 415,
      className: "Specialist Class #415",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 416,
      className: "Specialist Class #416",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 417,
      className: "Specialist Class #417",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 418,
      className: "Specialist Class #418",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 419,
      className: "Specialist Class #419",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 420,
      className: "Specialist Class #420",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 421,
      className: "Specialist Class #421",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 422,
      className: "Specialist Class #422",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 423,
      className: "Specialist Class #423",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 424,
      className: "Specialist Class #424",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 425,
      className: "Specialist Class #425",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 426,
      className: "Specialist Class #426",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 427,
      className: "Specialist Class #427",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 428,
      className: "Specialist Class #428",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 429,
      className: "Specialist Class #429",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 430,
      className: "Specialist Class #430",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 431,
      className: "Specialist Class #431",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 432,
      className: "Specialist Class #432",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 433,
      className: "Specialist Class #433",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 434,
      className: "Specialist Class #434",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 435,
      className: "Specialist Class #435",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 436,
      className: "Specialist Class #436",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 437,
      className: "Specialist Class #437",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 438,
      className: "Specialist Class #438",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 439,
      className: "Specialist Class #439",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 440,
      className: "Specialist Class #440",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 441,
      className: "Specialist Class #441",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 442,
      className: "Specialist Class #442",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 443,
      className: "Specialist Class #443",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 444,
      className: "Specialist Class #444",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 445,
      className: "Specialist Class #445",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 446,
      className: "Specialist Class #446",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 447,
      className: "Specialist Class #447",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 448,
      className: "Specialist Class #448",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 449,
      className: "Specialist Class #449",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 450,
      className: "Specialist Class #450",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 451,
      className: "Specialist Class #451",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 452,
      className: "Specialist Class #452",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 453,
      className: "Specialist Class #453",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 454,
      className: "Specialist Class #454",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 455,
      className: "Specialist Class #455",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 456,
      className: "Specialist Class #456",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 457,
      className: "Specialist Class #457",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 458,
      className: "Specialist Class #458",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 459,
      className: "Specialist Class #459",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 460,
      className: "Specialist Class #460",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 461,
      className: "Specialist Class #461",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 462,
      className: "Specialist Class #462",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 463,
      className: "Specialist Class #463",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 464,
      className: "Specialist Class #464",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 465,
      className: "Specialist Class #465",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 466,
      className: "Specialist Class #466",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 467,
      className: "Specialist Class #467",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 468,
      className: "Specialist Class #468",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 469,
      className: "Specialist Class #469",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 470,
      className: "Specialist Class #470",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 471,
      className: "Specialist Class #471",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 472,
      className: "Specialist Class #472",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 473,
      className: "Specialist Class #473",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 474,
      className: "Specialist Class #474",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 475,
      className: "Specialist Class #475",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 476,
      className: "Specialist Class #476",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 477,
      className: "Specialist Class #477",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 478,
      className: "Specialist Class #478",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 479,
      className: "Specialist Class #479",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 480,
      className: "Specialist Class #480",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 481,
      className: "Specialist Class #481",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 482,
      className: "Specialist Class #482",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 483,
      className: "Specialist Class #483",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 484,
      className: "Specialist Class #484",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 485,
      className: "Specialist Class #485",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 486,
      className: "Specialist Class #486",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 487,
      className: "Specialist Class #487",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 488,
      className: "Specialist Class #488",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 489,
      className: "Specialist Class #489",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 490,
      className: "Specialist Class #490",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 491,
      className: "Specialist Class #491",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 492,
      className: "Specialist Class #492",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 493,
      className: "Specialist Class #493",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 494,
      className: "Specialist Class #494",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 495,
      className: "Specialist Class #495",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 496,
      className: "Specialist Class #496",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 497,
      className: "Specialist Class #497",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 498,
      className: "Specialist Class #498",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 499,
      className: "Specialist Class #499",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 500,
      className: "Specialist Class #500",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 501,
      className: "Specialist Class #501",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 502,
      className: "Specialist Class #502",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 503,
      className: "Specialist Class #503",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 504,
      className: "Specialist Class #504",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 505,
      className: "Specialist Class #505",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 506,
      className: "Specialist Class #506",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 507,
      className: "Specialist Class #507",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 508,
      className: "Specialist Class #508",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 509,
      className: "Specialist Class #509",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 510,
      className: "Specialist Class #510",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 511,
      className: "Specialist Class #511",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 512,
      className: "Specialist Class #512",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 513,
      className: "Specialist Class #513",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 514,
      className: "Specialist Class #514",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 515,
      className: "Specialist Class #515",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 516,
      className: "Specialist Class #516",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 517,
      className: "Specialist Class #517",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 518,
      className: "Specialist Class #518",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 519,
      className: "Specialist Class #519",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 520,
      className: "Specialist Class #520",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 521,
      className: "Specialist Class #521",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 522,
      className: "Specialist Class #522",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 523,
      className: "Specialist Class #523",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 524,
      className: "Specialist Class #524",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 525,
      className: "Specialist Class #525",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 526,
      className: "Specialist Class #526",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 527,
      className: "Specialist Class #527",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 528,
      className: "Specialist Class #528",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 529,
      className: "Specialist Class #529",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 530,
      className: "Specialist Class #530",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 531,
      className: "Specialist Class #531",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 532,
      className: "Specialist Class #532",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 533,
      className: "Specialist Class #533",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 534,
      className: "Specialist Class #534",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 535,
      className: "Specialist Class #535",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 536,
      className: "Specialist Class #536",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 537,
      className: "Specialist Class #537",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 538,
      className: "Specialist Class #538",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 539,
      className: "Specialist Class #539",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 540,
      className: "Specialist Class #540",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 541,
      className: "Specialist Class #541",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 542,
      className: "Specialist Class #542",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 543,
      className: "Specialist Class #543",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 544,
      className: "Specialist Class #544",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 545,
      className: "Specialist Class #545",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 546,
      className: "Specialist Class #546",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 547,
      className: "Specialist Class #547",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 548,
      className: "Specialist Class #548",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 549,
      className: "Specialist Class #549",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 550,
      className: "Specialist Class #550",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 551,
      className: "Specialist Class #551",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 552,
      className: "Specialist Class #552",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 553,
      className: "Specialist Class #553",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 554,
      className: "Specialist Class #554",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 555,
      className: "Specialist Class #555",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 556,
      className: "Specialist Class #556",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 557,
      className: "Specialist Class #557",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 558,
      className: "Specialist Class #558",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 559,
      className: "Specialist Class #559",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 560,
      className: "Specialist Class #560",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 561,
      className: "Specialist Class #561",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 562,
      className: "Specialist Class #562",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 563,
      className: "Specialist Class #563",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 564,
      className: "Specialist Class #564",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 565,
      className: "Specialist Class #565",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 566,
      className: "Specialist Class #566",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 567,
      className: "Specialist Class #567",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 568,
      className: "Specialist Class #568",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 569,
      className: "Specialist Class #569",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 570,
      className: "Specialist Class #570",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 571,
      className: "Specialist Class #571",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 572,
      className: "Specialist Class #572",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 573,
      className: "Specialist Class #573",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 574,
      className: "Specialist Class #574",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 575,
      className: "Specialist Class #575",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 576,
      className: "Specialist Class #576",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 577,
      className: "Specialist Class #577",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 578,
      className: "Specialist Class #578",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 579,
      className: "Specialist Class #579",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 580,
      className: "Specialist Class #580",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 581,
      className: "Specialist Class #581",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 582,
      className: "Specialist Class #582",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 583,
      className: "Specialist Class #583",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 584,
      className: "Specialist Class #584",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 585,
      className: "Specialist Class #585",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 586,
      className: "Specialist Class #586",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 587,
      className: "Specialist Class #587",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 588,
      className: "Specialist Class #588",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 589,
      className: "Specialist Class #589",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 590,
      className: "Specialist Class #590",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 591,
      className: "Specialist Class #591",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 592,
      className: "Specialist Class #592",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 593,
      className: "Specialist Class #593",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 594,
      className: "Specialist Class #594",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 595,
      className: "Specialist Class #595",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 596,
      className: "Specialist Class #596",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 597,
      className: "Specialist Class #597",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 598,
      className: "Specialist Class #598",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 599,
      className: "Specialist Class #599",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 600,
      className: "Specialist Class #600",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 601,
      className: "Specialist Class #601",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 602,
      className: "Specialist Class #602",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 603,
      className: "Specialist Class #603",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 604,
      className: "Specialist Class #604",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 605,
      className: "Specialist Class #605",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 606,
      className: "Specialist Class #606",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 607,
      className: "Specialist Class #607",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 608,
      className: "Specialist Class #608",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 609,
      className: "Specialist Class #609",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 610,
      className: "Specialist Class #610",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 611,
      className: "Specialist Class #611",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 612,
      className: "Specialist Class #612",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 613,
      className: "Specialist Class #613",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 614,
      className: "Specialist Class #614",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 615,
      className: "Specialist Class #615",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 616,
      className: "Specialist Class #616",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 617,
      className: "Specialist Class #617",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 618,
      className: "Specialist Class #618",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 619,
      className: "Specialist Class #619",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 620,
      className: "Specialist Class #620",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 621,
      className: "Specialist Class #621",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 622,
      className: "Specialist Class #622",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 623,
      className: "Specialist Class #623",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 624,
      className: "Specialist Class #624",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 625,
      className: "Specialist Class #625",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 626,
      className: "Specialist Class #626",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 627,
      className: "Specialist Class #627",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 628,
      className: "Specialist Class #628",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 629,
      className: "Specialist Class #629",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 630,
      className: "Specialist Class #630",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 631,
      className: "Specialist Class #631",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 632,
      className: "Specialist Class #632",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 633,
      className: "Specialist Class #633",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 634,
      className: "Specialist Class #634",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 635,
      className: "Specialist Class #635",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 636,
      className: "Specialist Class #636",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 637,
      className: "Specialist Class #637",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 638,
      className: "Specialist Class #638",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 639,
      className: "Specialist Class #639",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 640,
      className: "Specialist Class #640",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 641,
      className: "Specialist Class #641",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 642,
      className: "Specialist Class #642",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 643,
      className: "Specialist Class #643",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 644,
      className: "Specialist Class #644",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 645,
      className: "Specialist Class #645",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 646,
      className: "Specialist Class #646",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 647,
      className: "Specialist Class #647",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 648,
      className: "Specialist Class #648",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 649,
      className: "Specialist Class #649",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 650,
      className: "Specialist Class #650",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 651,
      className: "Specialist Class #651",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 652,
      className: "Specialist Class #652",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 653,
      className: "Specialist Class #653",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 654,
      className: "Specialist Class #654",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 655,
      className: "Specialist Class #655",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 656,
      className: "Specialist Class #656",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 657,
      className: "Specialist Class #657",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 658,
      className: "Specialist Class #658",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 659,
      className: "Specialist Class #659",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 660,
      className: "Specialist Class #660",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 661,
      className: "Specialist Class #661",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 662,
      className: "Specialist Class #662",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 663,
      className: "Specialist Class #663",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 664,
      className: "Specialist Class #664",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 665,
      className: "Specialist Class #665",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 666,
      className: "Specialist Class #666",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 667,
      className: "Specialist Class #667",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 668,
      className: "Specialist Class #668",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 669,
      className: "Specialist Class #669",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 670,
      className: "Specialist Class #670",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 671,
      className: "Specialist Class #671",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 672,
      className: "Specialist Class #672",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 673,
      className: "Specialist Class #673",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 674,
      className: "Specialist Class #674",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 675,
      className: "Specialist Class #675",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 676,
      className: "Specialist Class #676",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 677,
      className: "Specialist Class #677",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 678,
      className: "Specialist Class #678",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 679,
      className: "Specialist Class #679",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 680,
      className: "Specialist Class #680",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 681,
      className: "Specialist Class #681",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 682,
      className: "Specialist Class #682",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 683,
      className: "Specialist Class #683",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 684,
      className: "Specialist Class #684",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 685,
      className: "Specialist Class #685",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 686,
      className: "Specialist Class #686",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 687,
      className: "Specialist Class #687",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 688,
      className: "Specialist Class #688",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 689,
      className: "Specialist Class #689",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 690,
      className: "Specialist Class #690",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 691,
      className: "Specialist Class #691",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 692,
      className: "Specialist Class #692",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 693,
      className: "Specialist Class #693",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 694,
      className: "Specialist Class #694",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 695,
      className: "Specialist Class #695",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 696,
      className: "Specialist Class #696",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 697,
      className: "Specialist Class #697",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 698,
      className: "Specialist Class #698",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 699,
      className: "Specialist Class #699",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 700,
      className: "Specialist Class #700",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 701,
      className: "Specialist Class #701",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 702,
      className: "Specialist Class #702",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 703,
      className: "Specialist Class #703",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 704,
      className: "Specialist Class #704",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 705,
      className: "Specialist Class #705",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 706,
      className: "Specialist Class #706",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 707,
      className: "Specialist Class #707",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 708,
      className: "Specialist Class #708",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 709,
      className: "Specialist Class #709",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 710,
      className: "Specialist Class #710",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 711,
      className: "Specialist Class #711",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 712,
      className: "Specialist Class #712",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 713,
      className: "Specialist Class #713",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 714,
      className: "Specialist Class #714",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 715,
      className: "Specialist Class #715",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 716,
      className: "Specialist Class #716",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 717,
      className: "Specialist Class #717",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 718,
      className: "Specialist Class #718",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 719,
      className: "Specialist Class #719",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 720,
      className: "Specialist Class #720",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 721,
      className: "Specialist Class #721",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 722,
      className: "Specialist Class #722",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 723,
      className: "Specialist Class #723",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 724,
      className: "Specialist Class #724",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 725,
      className: "Specialist Class #725",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 726,
      className: "Specialist Class #726",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 727,
      className: "Specialist Class #727",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 728,
      className: "Specialist Class #728",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 729,
      className: "Specialist Class #729",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 730,
      className: "Specialist Class #730",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 731,
      className: "Specialist Class #731",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 732,
      className: "Specialist Class #732",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 733,
      className: "Specialist Class #733",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 734,
      className: "Specialist Class #734",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 735,
      className: "Specialist Class #735",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 736,
      className: "Specialist Class #736",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 737,
      className: "Specialist Class #737",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 738,
      className: "Specialist Class #738",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 739,
      className: "Specialist Class #739",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 740,
      className: "Specialist Class #740",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 741,
      className: "Specialist Class #741",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 742,
      className: "Specialist Class #742",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 743,
      className: "Specialist Class #743",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 744,
      className: "Specialist Class #744",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 745,
      className: "Specialist Class #745",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 746,
      className: "Specialist Class #746",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 747,
      className: "Specialist Class #747",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 748,
      className: "Specialist Class #748",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 749,
      className: "Specialist Class #749",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 750,
      className: "Specialist Class #750",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 751,
      className: "Specialist Class #751",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 752,
      className: "Specialist Class #752",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 753,
      className: "Specialist Class #753",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 754,
      className: "Specialist Class #754",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 755,
      className: "Specialist Class #755",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 756,
      className: "Specialist Class #756",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 757,
      className: "Specialist Class #757",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 758,
      className: "Specialist Class #758",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 759,
      className: "Specialist Class #759",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 760,
      className: "Specialist Class #760",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 761,
      className: "Specialist Class #761",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 762,
      className: "Specialist Class #762",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 763,
      className: "Specialist Class #763",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 764,
      className: "Specialist Class #764",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 765,
      className: "Specialist Class #765",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 766,
      className: "Specialist Class #766",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 767,
      className: "Specialist Class #767",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 768,
      className: "Specialist Class #768",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 769,
      className: "Specialist Class #769",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 770,
      className: "Specialist Class #770",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 771,
      className: "Specialist Class #771",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 772,
      className: "Specialist Class #772",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 773,
      className: "Specialist Class #773",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 774,
      className: "Specialist Class #774",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 775,
      className: "Specialist Class #775",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 776,
      className: "Specialist Class #776",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 777,
      className: "Specialist Class #777",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 778,
      className: "Specialist Class #778",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 779,
      className: "Specialist Class #779",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 780,
      className: "Specialist Class #780",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 781,
      className: "Specialist Class #781",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 782,
      className: "Specialist Class #782",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 783,
      className: "Specialist Class #783",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 784,
      className: "Specialist Class #784",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 785,
      className: "Specialist Class #785",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 786,
      className: "Specialist Class #786",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 787,
      className: "Specialist Class #787",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 788,
      className: "Specialist Class #788",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 789,
      className: "Specialist Class #789",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 790,
      className: "Specialist Class #790",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 791,
      className: "Specialist Class #791",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 792,
      className: "Specialist Class #792",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 793,
      className: "Specialist Class #793",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 794,
      className: "Specialist Class #794",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 795,
      className: "Specialist Class #795",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 796,
      className: "Specialist Class #796",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 797,
      className: "Specialist Class #797",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 798,
      className: "Specialist Class #798",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 799,
      className: "Specialist Class #799",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 800,
      className: "Specialist Class #800",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 801,
      className: "Specialist Class #801",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 802,
      className: "Specialist Class #802",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 803,
      className: "Specialist Class #803",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 804,
      className: "Specialist Class #804",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 805,
      className: "Specialist Class #805",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 806,
      className: "Specialist Class #806",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 807,
      className: "Specialist Class #807",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 808,
      className: "Specialist Class #808",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 809,
      className: "Specialist Class #809",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 810,
      className: "Specialist Class #810",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 811,
      className: "Specialist Class #811",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 812,
      className: "Specialist Class #812",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 813,
      className: "Specialist Class #813",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 814,
      className: "Specialist Class #814",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 815,
      className: "Specialist Class #815",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 816,
      className: "Specialist Class #816",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 817,
      className: "Specialist Class #817",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 818,
      className: "Specialist Class #818",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 819,
      className: "Specialist Class #819",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 820,
      className: "Specialist Class #820",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 821,
      className: "Specialist Class #821",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 822,
      className: "Specialist Class #822",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 823,
      className: "Specialist Class #823",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 824,
      className: "Specialist Class #824",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 825,
      className: "Specialist Class #825",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 826,
      className: "Specialist Class #826",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 827,
      className: "Specialist Class #827",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 828,
      className: "Specialist Class #828",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 829,
      className: "Specialist Class #829",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 830,
      className: "Specialist Class #830",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 831,
      className: "Specialist Class #831",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 832,
      className: "Specialist Class #832",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 833,
      className: "Specialist Class #833",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 834,
      className: "Specialist Class #834",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 835,
      className: "Specialist Class #835",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 836,
      className: "Specialist Class #836",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 837,
      className: "Specialist Class #837",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 838,
      className: "Specialist Class #838",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 839,
      className: "Specialist Class #839",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 840,
      className: "Specialist Class #840",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 841,
      className: "Specialist Class #841",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 842,
      className: "Specialist Class #842",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 843,
      className: "Specialist Class #843",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 844,
      className: "Specialist Class #844",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 845,
      className: "Specialist Class #845",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 846,
      className: "Specialist Class #846",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 847,
      className: "Specialist Class #847",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 848,
      className: "Specialist Class #848",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 849,
      className: "Specialist Class #849",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 850,
      className: "Specialist Class #850",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 851,
      className: "Specialist Class #851",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 852,
      className: "Specialist Class #852",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 853,
      className: "Specialist Class #853",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 854,
      className: "Specialist Class #854",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 855,
      className: "Specialist Class #855",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 856,
      className: "Specialist Class #856",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 857,
      className: "Specialist Class #857",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 858,
      className: "Specialist Class #858",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 859,
      className: "Specialist Class #859",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 860,
      className: "Specialist Class #860",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 861,
      className: "Specialist Class #861",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 862,
      className: "Specialist Class #862",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 863,
      className: "Specialist Class #863",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 864,
      className: "Specialist Class #864",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 865,
      className: "Specialist Class #865",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 866,
      className: "Specialist Class #866",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 867,
      className: "Specialist Class #867",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 868,
      className: "Specialist Class #868",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 869,
      className: "Specialist Class #869",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 870,
      className: "Specialist Class #870",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 871,
      className: "Specialist Class #871",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 872,
      className: "Specialist Class #872",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 873,
      className: "Specialist Class #873",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 874,
      className: "Specialist Class #874",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 875,
      className: "Specialist Class #875",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 876,
      className: "Specialist Class #876",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 877,
      className: "Specialist Class #877",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 878,
      className: "Specialist Class #878",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 879,
      className: "Specialist Class #879",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 880,
      className: "Specialist Class #880",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 881,
      className: "Specialist Class #881",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 882,
      className: "Specialist Class #882",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 883,
      className: "Specialist Class #883",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 884,
      className: "Specialist Class #884",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 885,
      className: "Specialist Class #885",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 886,
      className: "Specialist Class #886",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 887,
      className: "Specialist Class #887",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 888,
      className: "Specialist Class #888",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 889,
      className: "Specialist Class #889",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 890,
      className: "Specialist Class #890",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 891,
      className: "Specialist Class #891",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 892,
      className: "Specialist Class #892",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 893,
      className: "Specialist Class #893",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 894,
      className: "Specialist Class #894",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 895,
      className: "Specialist Class #895",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 896,
      className: "Specialist Class #896",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 897,
      className: "Specialist Class #897",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 898,
      className: "Specialist Class #898",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 899,
      className: "Specialist Class #899",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 900,
      className: "Specialist Class #900",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 901,
      className: "Specialist Class #901",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 902,
      className: "Specialist Class #902",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 903,
      className: "Specialist Class #903",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 904,
      className: "Specialist Class #904",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 905,
      className: "Specialist Class #905",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 906,
      className: "Specialist Class #906",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 907,
      className: "Specialist Class #907",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 908,
      className: "Specialist Class #908",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 909,
      className: "Specialist Class #909",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 910,
      className: "Specialist Class #910",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 911,
      className: "Specialist Class #911",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 912,
      className: "Specialist Class #912",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 913,
      className: "Specialist Class #913",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 914,
      className: "Specialist Class #914",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 915,
      className: "Specialist Class #915",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 916,
      className: "Specialist Class #916",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 917,
      className: "Specialist Class #917",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 918,
      className: "Specialist Class #918",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 919,
      className: "Specialist Class #919",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 920,
      className: "Specialist Class #920",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 921,
      className: "Specialist Class #921",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 922,
      className: "Specialist Class #922",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 923,
      className: "Specialist Class #923",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 924,
      className: "Specialist Class #924",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 925,
      className: "Specialist Class #925",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 926,
      className: "Specialist Class #926",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 927,
      className: "Specialist Class #927",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 928,
      className: "Specialist Class #928",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 929,
      className: "Specialist Class #929",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 930,
      className: "Specialist Class #930",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 931,
      className: "Specialist Class #931",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 932,
      className: "Specialist Class #932",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 933,
      className: "Specialist Class #933",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 934,
      className: "Specialist Class #934",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 935,
      className: "Specialist Class #935",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 936,
      className: "Specialist Class #936",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 937,
      className: "Specialist Class #937",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 938,
      className: "Specialist Class #938",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 939,
      className: "Specialist Class #939",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 940,
      className: "Specialist Class #940",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 941,
      className: "Specialist Class #941",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 942,
      className: "Specialist Class #942",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 943,
      className: "Specialist Class #943",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 944,
      className: "Specialist Class #944",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 945,
      className: "Specialist Class #945",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 946,
      className: "Specialist Class #946",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 947,
      className: "Specialist Class #947",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 948,
      className: "Specialist Class #948",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 949,
      className: "Specialist Class #949",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 950,
      className: "Specialist Class #950",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 951,
      className: "Specialist Class #951",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 952,
      className: "Specialist Class #952",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 953,
      className: "Specialist Class #953",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 954,
      className: "Specialist Class #954",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 955,
      className: "Specialist Class #955",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 956,
      className: "Specialist Class #956",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 957,
      className: "Specialist Class #957",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 958,
      className: "Specialist Class #958",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 959,
      className: "Specialist Class #959",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 960,
      className: "Specialist Class #960",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 961,
      className: "Specialist Class #961",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 962,
      className: "Specialist Class #962",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 963,
      className: "Specialist Class #963",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 964,
      className: "Specialist Class #964",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 965,
      className: "Specialist Class #965",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 966,
      className: "Specialist Class #966",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 967,
      className: "Specialist Class #967",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 968,
      className: "Specialist Class #968",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 969,
      className: "Specialist Class #969",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 970,
      className: "Specialist Class #970",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 971,
      className: "Specialist Class #971",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 972,
      className: "Specialist Class #972",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 973,
      className: "Specialist Class #973",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 974,
      className: "Specialist Class #974",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 975,
      className: "Specialist Class #975",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 976,
      className: "Specialist Class #976",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 977,
      className: "Specialist Class #977",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 978,
      className: "Specialist Class #978",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 979,
      className: "Specialist Class #979",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 980,
      className: "Specialist Class #980",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 981,
      className: "Specialist Class #981",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 982,
      className: "Specialist Class #982",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 983,
      className: "Specialist Class #983",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 984,
      className: "Specialist Class #984",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 985,
      className: "Specialist Class #985",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 986,
      className: "Specialist Class #986",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 987,
      className: "Specialist Class #987",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 988,
      className: "Specialist Class #988",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 989,
      className: "Specialist Class #989",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 990,
      className: "Specialist Class #990",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 991,
      className: "Specialist Class #991",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 992,
      className: "Specialist Class #992",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 993,
      className: "Specialist Class #993",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 994,
      className: "Specialist Class #994",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 995,
      className: "Specialist Class #995",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 996,
      className: "Specialist Class #996",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 997,
      className: "Specialist Class #997",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 998,
      className: "Specialist Class #998",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 999,
      className: "Specialist Class #999",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1000,
      className: "Specialist Class #1000",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1001,
      className: "Specialist Class #1001",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1002,
      className: "Specialist Class #1002",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1003,
      className: "Specialist Class #1003",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1004,
      className: "Specialist Class #1004",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1005,
      className: "Specialist Class #1005",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1006,
      className: "Specialist Class #1006",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1007,
      className: "Specialist Class #1007",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1008,
      className: "Specialist Class #1008",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1009,
      className: "Specialist Class #1009",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1010,
      className: "Specialist Class #1010",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1011,
      className: "Specialist Class #1011",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1012,
      className: "Specialist Class #1012",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1013,
      className: "Specialist Class #1013",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1014,
      className: "Specialist Class #1014",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1015,
      className: "Specialist Class #1015",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1016,
      className: "Specialist Class #1016",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1017,
      className: "Specialist Class #1017",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1018,
      className: "Specialist Class #1018",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1019,
      className: "Specialist Class #1019",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1020,
      className: "Specialist Class #1020",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1021,
      className: "Specialist Class #1021",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1022,
      className: "Specialist Class #1022",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1023,
      className: "Specialist Class #1023",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1024,
      className: "Specialist Class #1024",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1025,
      className: "Specialist Class #1025",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1026,
      className: "Specialist Class #1026",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1027,
      className: "Specialist Class #1027",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1028,
      className: "Specialist Class #1028",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1029,
      className: "Specialist Class #1029",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1030,
      className: "Specialist Class #1030",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1031,
      className: "Specialist Class #1031",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1032,
      className: "Specialist Class #1032",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1033,
      className: "Specialist Class #1033",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1034,
      className: "Specialist Class #1034",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1035,
      className: "Specialist Class #1035",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1036,
      className: "Specialist Class #1036",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1037,
      className: "Specialist Class #1037",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1038,
      className: "Specialist Class #1038",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1039,
      className: "Specialist Class #1039",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1040,
      className: "Specialist Class #1040",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1041,
      className: "Specialist Class #1041",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1042,
      className: "Specialist Class #1042",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1043,
      className: "Specialist Class #1043",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1044,
      className: "Specialist Class #1044",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1045,
      className: "Specialist Class #1045",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1046,
      className: "Specialist Class #1046",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1047,
      className: "Specialist Class #1047",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1048,
      className: "Specialist Class #1048",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1049,
      className: "Specialist Class #1049",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1050,
      className: "Specialist Class #1050",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1051,
      className: "Specialist Class #1051",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1052,
      className: "Specialist Class #1052",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1053,
      className: "Specialist Class #1053",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1054,
      className: "Specialist Class #1054",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1055,
      className: "Specialist Class #1055",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1056,
      className: "Specialist Class #1056",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1057,
      className: "Specialist Class #1057",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1058,
      className: "Specialist Class #1058",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1059,
      className: "Specialist Class #1059",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1060,
      className: "Specialist Class #1060",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1061,
      className: "Specialist Class #1061",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1062,
      className: "Specialist Class #1062",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1063,
      className: "Specialist Class #1063",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1064,
      className: "Specialist Class #1064",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1065,
      className: "Specialist Class #1065",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1066,
      className: "Specialist Class #1066",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1067,
      className: "Specialist Class #1067",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1068,
      className: "Specialist Class #1068",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1069,
      className: "Specialist Class #1069",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1070,
      className: "Specialist Class #1070",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1071,
      className: "Specialist Class #1071",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1072,
      className: "Specialist Class #1072",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1073,
      className: "Specialist Class #1073",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1074,
      className: "Specialist Class #1074",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1075,
      className: "Specialist Class #1075",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1076,
      className: "Specialist Class #1076",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1077,
      className: "Specialist Class #1077",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1078,
      className: "Specialist Class #1078",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1079,
      className: "Specialist Class #1079",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1080,
      className: "Specialist Class #1080",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1081,
      className: "Specialist Class #1081",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1082,
      className: "Specialist Class #1082",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1083,
      className: "Specialist Class #1083",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1084,
      className: "Specialist Class #1084",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1085,
      className: "Specialist Class #1085",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1086,
      className: "Specialist Class #1086",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1087,
      className: "Specialist Class #1087",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1088,
      className: "Specialist Class #1088",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1089,
      className: "Specialist Class #1089",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1090,
      className: "Specialist Class #1090",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1091,
      className: "Specialist Class #1091",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1092,
      className: "Specialist Class #1092",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1093,
      className: "Specialist Class #1093",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1094,
      className: "Specialist Class #1094",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1095,
      className: "Specialist Class #1095",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1096,
      className: "Specialist Class #1096",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1097,
      className: "Specialist Class #1097",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1098,
      className: "Specialist Class #1098",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1099,
      className: "Specialist Class #1099",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1100,
      className: "Specialist Class #1100",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1101,
      className: "Specialist Class #1101",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1102,
      className: "Specialist Class #1102",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1103,
      className: "Specialist Class #1103",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1104,
      className: "Specialist Class #1104",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1105,
      className: "Specialist Class #1105",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1106,
      className: "Specialist Class #1106",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1107,
      className: "Specialist Class #1107",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1108,
      className: "Specialist Class #1108",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1109,
      className: "Specialist Class #1109",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1110,
      className: "Specialist Class #1110",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1111,
      className: "Specialist Class #1111",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1112,
      className: "Specialist Class #1112",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1113,
      className: "Specialist Class #1113",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1114,
      className: "Specialist Class #1114",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1115,
      className: "Specialist Class #1115",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1116,
      className: "Specialist Class #1116",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1117,
      className: "Specialist Class #1117",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1118,
      className: "Specialist Class #1118",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1119,
      className: "Specialist Class #1119",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1120,
      className: "Specialist Class #1120",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1121,
      className: "Specialist Class #1121",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1122,
      className: "Specialist Class #1122",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1123,
      className: "Specialist Class #1123",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1124,
      className: "Specialist Class #1124",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1125,
      className: "Specialist Class #1125",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1126,
      className: "Specialist Class #1126",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1127,
      className: "Specialist Class #1127",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1128,
      className: "Specialist Class #1128",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1129,
      className: "Specialist Class #1129",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1130,
      className: "Specialist Class #1130",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1131,
      className: "Specialist Class #1131",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1132,
      className: "Specialist Class #1132",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1133,
      className: "Specialist Class #1133",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1134,
      className: "Specialist Class #1134",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1135,
      className: "Specialist Class #1135",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1136,
      className: "Specialist Class #1136",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1137,
      className: "Specialist Class #1137",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1138,
      className: "Specialist Class #1138",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1139,
      className: "Specialist Class #1139",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1140,
      className: "Specialist Class #1140",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1141,
      className: "Specialist Class #1141",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1142,
      className: "Specialist Class #1142",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1143,
      className: "Specialist Class #1143",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1144,
      className: "Specialist Class #1144",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1145,
      className: "Specialist Class #1145",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1146,
      className: "Specialist Class #1146",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1147,
      className: "Specialist Class #1147",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1148,
      className: "Specialist Class #1148",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1149,
      className: "Specialist Class #1149",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1150,
      className: "Specialist Class #1150",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1151,
      className: "Specialist Class #1151",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1152,
      className: "Specialist Class #1152",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1153,
      className: "Specialist Class #1153",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1154,
      className: "Specialist Class #1154",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1155,
      className: "Specialist Class #1155",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1156,
      className: "Specialist Class #1156",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1157,
      className: "Specialist Class #1157",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1158,
      className: "Specialist Class #1158",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1159,
      className: "Specialist Class #1159",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1160,
      className: "Specialist Class #1160",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1161,
      className: "Specialist Class #1161",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1162,
      className: "Specialist Class #1162",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1163,
      className: "Specialist Class #1163",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1164,
      className: "Specialist Class #1164",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1165,
      className: "Specialist Class #1165",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1166,
      className: "Specialist Class #1166",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1167,
      className: "Specialist Class #1167",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1168,
      className: "Specialist Class #1168",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1169,
      className: "Specialist Class #1169",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1170,
      className: "Specialist Class #1170",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1171,
      className: "Specialist Class #1171",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1172,
      className: "Specialist Class #1172",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1173,
      className: "Specialist Class #1173",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1174,
      className: "Specialist Class #1174",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1175,
      className: "Specialist Class #1175",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1176,
      className: "Specialist Class #1176",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1177,
      className: "Specialist Class #1177",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1178,
      className: "Specialist Class #1178",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1179,
      className: "Specialist Class #1179",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1180,
      className: "Specialist Class #1180",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1181,
      className: "Specialist Class #1181",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1182,
      className: "Specialist Class #1182",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1183,
      className: "Specialist Class #1183",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1184,
      className: "Specialist Class #1184",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1185,
      className: "Specialist Class #1185",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1186,
      className: "Specialist Class #1186",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1187,
      className: "Specialist Class #1187",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1188,
      className: "Specialist Class #1188",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1189,
      className: "Specialist Class #1189",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1190,
      className: "Specialist Class #1190",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1191,
      className: "Specialist Class #1191",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1192,
      className: "Specialist Class #1192",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1193,
      className: "Specialist Class #1193",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1194,
      className: "Specialist Class #1194",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1195,
      className: "Specialist Class #1195",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1196,
      className: "Specialist Class #1196",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1197,
      className: "Specialist Class #1197",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1198,
      className: "Specialist Class #1198",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1199,
      className: "Specialist Class #1199",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1200,
      className: "Specialist Class #1200",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1201,
      className: "Specialist Class #1201",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1202,
      className: "Specialist Class #1202",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1203,
      className: "Specialist Class #1203",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1204,
      className: "Specialist Class #1204",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1205,
      className: "Specialist Class #1205",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1206,
      className: "Specialist Class #1206",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1207,
      className: "Specialist Class #1207",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1208,
      className: "Specialist Class #1208",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1209,
      className: "Specialist Class #1209",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1210,
      className: "Specialist Class #1210",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1211,
      className: "Specialist Class #1211",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1212,
      className: "Specialist Class #1212",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1213,
      className: "Specialist Class #1213",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1214,
      className: "Specialist Class #1214",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1215,
      className: "Specialist Class #1215",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1216,
      className: "Specialist Class #1216",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1217,
      className: "Specialist Class #1217",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1218,
      className: "Specialist Class #1218",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1219,
      className: "Specialist Class #1219",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1220,
      className: "Specialist Class #1220",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1221,
      className: "Specialist Class #1221",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1222,
      className: "Specialist Class #1222",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1223,
      className: "Specialist Class #1223",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1224,
      className: "Specialist Class #1224",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1225,
      className: "Specialist Class #1225",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1226,
      className: "Specialist Class #1226",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1227,
      className: "Specialist Class #1227",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1228,
      className: "Specialist Class #1228",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1229,
      className: "Specialist Class #1229",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1230,
      className: "Specialist Class #1230",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1231,
      className: "Specialist Class #1231",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1232,
      className: "Specialist Class #1232",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1233,
      className: "Specialist Class #1233",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1234,
      className: "Specialist Class #1234",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1235,
      className: "Specialist Class #1235",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1236,
      className: "Specialist Class #1236",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1237,
      className: "Specialist Class #1237",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1238,
      className: "Specialist Class #1238",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1239,
      className: "Specialist Class #1239",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1240,
      className: "Specialist Class #1240",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1241,
      className: "Specialist Class #1241",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1242,
      className: "Specialist Class #1242",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1243,
      className: "Specialist Class #1243",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1244,
      className: "Specialist Class #1244",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1245,
      className: "Specialist Class #1245",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1246,
      className: "Specialist Class #1246",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1247,
      className: "Specialist Class #1247",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1248,
      className: "Specialist Class #1248",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1249,
      className: "Specialist Class #1249",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1250,
      className: "Specialist Class #1250",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1251,
      className: "Specialist Class #1251",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1252,
      className: "Specialist Class #1252",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1253,
      className: "Specialist Class #1253",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1254,
      className: "Specialist Class #1254",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1255,
      className: "Specialist Class #1255",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1256,
      className: "Specialist Class #1256",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1257,
      className: "Specialist Class #1257",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1258,
      className: "Specialist Class #1258",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1259,
      className: "Specialist Class #1259",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1260,
      className: "Specialist Class #1260",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1261,
      className: "Specialist Class #1261",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1262,
      className: "Specialist Class #1262",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1263,
      className: "Specialist Class #1263",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1264,
      className: "Specialist Class #1264",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1265,
      className: "Specialist Class #1265",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1266,
      className: "Specialist Class #1266",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1267,
      className: "Specialist Class #1267",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1268,
      className: "Specialist Class #1268",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1269,
      className: "Specialist Class #1269",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1270,
      className: "Specialist Class #1270",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1271,
      className: "Specialist Class #1271",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1272,
      className: "Specialist Class #1272",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1273,
      className: "Specialist Class #1273",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1274,
      className: "Specialist Class #1274",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1275,
      className: "Specialist Class #1275",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1276,
      className: "Specialist Class #1276",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1277,
      className: "Specialist Class #1277",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1278,
      className: "Specialist Class #1278",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1279,
      className: "Specialist Class #1279",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1280,
      className: "Specialist Class #1280",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1281,
      className: "Specialist Class #1281",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1282,
      className: "Specialist Class #1282",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1283,
      className: "Specialist Class #1283",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1284,
      className: "Specialist Class #1284",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1285,
      className: "Specialist Class #1285",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1286,
      className: "Specialist Class #1286",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1287,
      className: "Specialist Class #1287",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1288,
      className: "Specialist Class #1288",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1289,
      className: "Specialist Class #1289",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1290,
      className: "Specialist Class #1290",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1291,
      className: "Specialist Class #1291",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1292,
      className: "Specialist Class #1292",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1293,
      className: "Specialist Class #1293",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1294,
      className: "Specialist Class #1294",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1295,
      className: "Specialist Class #1295",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1296,
      className: "Specialist Class #1296",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1297,
      className: "Specialist Class #1297",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1298,
      className: "Specialist Class #1298",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1299,
      className: "Specialist Class #1299",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1300,
      className: "Specialist Class #1300",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1301,
      className: "Specialist Class #1301",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1302,
      className: "Specialist Class #1302",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1303,
      className: "Specialist Class #1303",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1304,
      className: "Specialist Class #1304",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1305,
      className: "Specialist Class #1305",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1306,
      className: "Specialist Class #1306",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1307,
      className: "Specialist Class #1307",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1308,
      className: "Specialist Class #1308",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1309,
      className: "Specialist Class #1309",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1310,
      className: "Specialist Class #1310",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1311,
      className: "Specialist Class #1311",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1312,
      className: "Specialist Class #1312",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1313,
      className: "Specialist Class #1313",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1314,
      className: "Specialist Class #1314",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1315,
      className: "Specialist Class #1315",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1316,
      className: "Specialist Class #1316",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1317,
      className: "Specialist Class #1317",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1318,
      className: "Specialist Class #1318",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1319,
      className: "Specialist Class #1319",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1320,
      className: "Specialist Class #1320",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1321,
      className: "Specialist Class #1321",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1322,
      className: "Specialist Class #1322",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1323,
      className: "Specialist Class #1323",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1324,
      className: "Specialist Class #1324",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1325,
      className: "Specialist Class #1325",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1326,
      className: "Specialist Class #1326",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1327,
      className: "Specialist Class #1327",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1328,
      className: "Specialist Class #1328",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1329,
      className: "Specialist Class #1329",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1330,
      className: "Specialist Class #1330",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1331,
      className: "Specialist Class #1331",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1332,
      className: "Specialist Class #1332",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1333,
      className: "Specialist Class #1333",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1334,
      className: "Specialist Class #1334",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1335,
      className: "Specialist Class #1335",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1336,
      className: "Specialist Class #1336",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1337,
      className: "Specialist Class #1337",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1338,
      className: "Specialist Class #1338",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1339,
      className: "Specialist Class #1339",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1340,
      className: "Specialist Class #1340",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1341,
      className: "Specialist Class #1341",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1342,
      className: "Specialist Class #1342",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1343,
      className: "Specialist Class #1343",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1344,
      className: "Specialist Class #1344",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1345,
      className: "Specialist Class #1345",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1346,
      className: "Specialist Class #1346",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1347,
      className: "Specialist Class #1347",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1348,
      className: "Specialist Class #1348",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1349,
      className: "Specialist Class #1349",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1350,
      className: "Specialist Class #1350",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1351,
      className: "Specialist Class #1351",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1352,
      className: "Specialist Class #1352",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1353,
      className: "Specialist Class #1353",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1354,
      className: "Specialist Class #1354",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1355,
      className: "Specialist Class #1355",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1356,
      className: "Specialist Class #1356",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1357,
      className: "Specialist Class #1357",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1358,
      className: "Specialist Class #1358",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1359,
      className: "Specialist Class #1359",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1360,
      className: "Specialist Class #1360",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1361,
      className: "Specialist Class #1361",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1362,
      className: "Specialist Class #1362",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1363,
      className: "Specialist Class #1363",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1364,
      className: "Specialist Class #1364",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1365,
      className: "Specialist Class #1365",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1366,
      className: "Specialist Class #1366",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1367,
      className: "Specialist Class #1367",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1368,
      className: "Specialist Class #1368",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1369,
      className: "Specialist Class #1369",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1370,
      className: "Specialist Class #1370",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1371,
      className: "Specialist Class #1371",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1372,
      className: "Specialist Class #1372",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1373,
      className: "Specialist Class #1373",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1374,
      className: "Specialist Class #1374",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1375,
      className: "Specialist Class #1375",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1376,
      className: "Specialist Class #1376",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1377,
      className: "Specialist Class #1377",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1378,
      className: "Specialist Class #1378",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1379,
      className: "Specialist Class #1379",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1380,
      className: "Specialist Class #1380",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1381,
      className: "Specialist Class #1381",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1382,
      className: "Specialist Class #1382",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1383,
      className: "Specialist Class #1383",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1384,
      className: "Specialist Class #1384",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1385,
      className: "Specialist Class #1385",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1386,
      className: "Specialist Class #1386",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1387,
      className: "Specialist Class #1387",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1388,
      className: "Specialist Class #1388",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1389,
      className: "Specialist Class #1389",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1390,
      className: "Specialist Class #1390",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1391,
      className: "Specialist Class #1391",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1392,
      className: "Specialist Class #1392",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1393,
      className: "Specialist Class #1393",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1394,
      className: "Specialist Class #1394",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1395,
      className: "Specialist Class #1395",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1396,
      className: "Specialist Class #1396",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1397,
      className: "Specialist Class #1397",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1398,
      className: "Specialist Class #1398",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1399,
      className: "Specialist Class #1399",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1400,
      className: "Specialist Class #1400",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1401,
      className: "Specialist Class #1401",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1402,
      className: "Specialist Class #1402",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1403,
      className: "Specialist Class #1403",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1404,
      className: "Specialist Class #1404",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1405,
      className: "Specialist Class #1405",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1406,
      className: "Specialist Class #1406",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1407,
      className: "Specialist Class #1407",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1408,
      className: "Specialist Class #1408",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1409,
      className: "Specialist Class #1409",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1410,
      className: "Specialist Class #1410",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1411,
      className: "Specialist Class #1411",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1412,
      className: "Specialist Class #1412",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1413,
      className: "Specialist Class #1413",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1414,
      className: "Specialist Class #1414",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1415,
      className: "Specialist Class #1415",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1416,
      className: "Specialist Class #1416",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1417,
      className: "Specialist Class #1417",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1418,
      className: "Specialist Class #1418",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1419,
      className: "Specialist Class #1419",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1420,
      className: "Specialist Class #1420",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1421,
      className: "Specialist Class #1421",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1422,
      className: "Specialist Class #1422",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1423,
      className: "Specialist Class #1423",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1424,
      className: "Specialist Class #1424",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1425,
      className: "Specialist Class #1425",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1426,
      className: "Specialist Class #1426",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1427,
      className: "Specialist Class #1427",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1428,
      className: "Specialist Class #1428",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1429,
      className: "Specialist Class #1429",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1430,
      className: "Specialist Class #1430",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1431,
      className: "Specialist Class #1431",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1432,
      className: "Specialist Class #1432",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1433,
      className: "Specialist Class #1433",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1434,
      className: "Specialist Class #1434",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1435,
      className: "Specialist Class #1435",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1436,
      className: "Specialist Class #1436",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1437,
      className: "Specialist Class #1437",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1438,
      className: "Specialist Class #1438",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1439,
      className: "Specialist Class #1439",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1440,
      className: "Specialist Class #1440",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1441,
      className: "Specialist Class #1441",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1442,
      className: "Specialist Class #1442",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1443,
      className: "Specialist Class #1443",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1444,
      className: "Specialist Class #1444",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1445,
      className: "Specialist Class #1445",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1446,
      className: "Specialist Class #1446",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1447,
      className: "Specialist Class #1447",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1448,
      className: "Specialist Class #1448",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1449,
      className: "Specialist Class #1449",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1450,
      className: "Specialist Class #1450",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1451,
      className: "Specialist Class #1451",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1452,
      className: "Specialist Class #1452",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1453,
      className: "Specialist Class #1453",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1454,
      className: "Specialist Class #1454",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1455,
      className: "Specialist Class #1455",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1456,
      className: "Specialist Class #1456",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1457,
      className: "Specialist Class #1457",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1458,
      className: "Specialist Class #1458",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1459,
      className: "Specialist Class #1459",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1460,
      className: "Specialist Class #1460",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1461,
      className: "Specialist Class #1461",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1462,
      className: "Specialist Class #1462",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1463,
      className: "Specialist Class #1463",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1464,
      className: "Specialist Class #1464",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1465,
      className: "Specialist Class #1465",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1466,
      className: "Specialist Class #1466",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1467,
      className: "Specialist Class #1467",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1468,
      className: "Specialist Class #1468",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1469,
      className: "Specialist Class #1469",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1470,
      className: "Specialist Class #1470",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1471,
      className: "Specialist Class #1471",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1472,
      className: "Specialist Class #1472",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1473,
      className: "Specialist Class #1473",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1474,
      className: "Specialist Class #1474",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1475,
      className: "Specialist Class #1475",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1476,
      className: "Specialist Class #1476",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1477,
      className: "Specialist Class #1477",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1478,
      className: "Specialist Class #1478",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1479,
      className: "Specialist Class #1479",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1480,
      className: "Specialist Class #1480",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1481,
      className: "Specialist Class #1481",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1482,
      className: "Specialist Class #1482",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1483,
      className: "Specialist Class #1483",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1484,
      className: "Specialist Class #1484",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1485,
      className: "Specialist Class #1485",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1486,
      className: "Specialist Class #1486",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1487,
      className: "Specialist Class #1487",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1488,
      className: "Specialist Class #1488",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1489,
      className: "Specialist Class #1489",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1490,
      className: "Specialist Class #1490",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1491,
      className: "Specialist Class #1491",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1492,
      className: "Specialist Class #1492",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1493,
      className: "Specialist Class #1493",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1494,
      className: "Specialist Class #1494",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1495,
      className: "Specialist Class #1495",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1496,
      className: "Specialist Class #1496",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1497,
      className: "Specialist Class #1497",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1498,
      className: "Specialist Class #1498",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1499,
      className: "Specialist Class #1499",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1500,
      className: "Specialist Class #1500",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1501,
      className: "Specialist Class #1501",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1502,
      className: "Specialist Class #1502",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1503,
      className: "Specialist Class #1503",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1504,
      className: "Specialist Class #1504",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1505,
      className: "Specialist Class #1505",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1506,
      className: "Specialist Class #1506",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1507,
      className: "Specialist Class #1507",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1508,
      className: "Specialist Class #1508",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1509,
      className: "Specialist Class #1509",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1510,
      className: "Specialist Class #1510",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1511,
      className: "Specialist Class #1511",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1512,
      className: "Specialist Class #1512",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1513,
      className: "Specialist Class #1513",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1514,
      className: "Specialist Class #1514",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1515,
      className: "Specialist Class #1515",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1516,
      className: "Specialist Class #1516",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1517,
      className: "Specialist Class #1517",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1518,
      className: "Specialist Class #1518",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1519,
      className: "Specialist Class #1519",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1520,
      className: "Specialist Class #1520",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1521,
      className: "Specialist Class #1521",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1522,
      className: "Specialist Class #1522",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1523,
      className: "Specialist Class #1523",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1524,
      className: "Specialist Class #1524",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1525,
      className: "Specialist Class #1525",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1526,
      className: "Specialist Class #1526",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1527,
      className: "Specialist Class #1527",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1528,
      className: "Specialist Class #1528",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1529,
      className: "Specialist Class #1529",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1530,
      className: "Specialist Class #1530",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1531,
      className: "Specialist Class #1531",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1532,
      className: "Specialist Class #1532",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1533,
      className: "Specialist Class #1533",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1534,
      className: "Specialist Class #1534",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1535,
      className: "Specialist Class #1535",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1536,
      className: "Specialist Class #1536",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1537,
      className: "Specialist Class #1537",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1538,
      className: "Specialist Class #1538",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1539,
      className: "Specialist Class #1539",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1540,
      className: "Specialist Class #1540",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1541,
      className: "Specialist Class #1541",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1542,
      className: "Specialist Class #1542",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1543,
      className: "Specialist Class #1543",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1544,
      className: "Specialist Class #1544",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1545,
      className: "Specialist Class #1545",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1546,
      className: "Specialist Class #1546",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1547,
      className: "Specialist Class #1547",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1548,
      className: "Specialist Class #1548",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1549,
      className: "Specialist Class #1549",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1550,
      className: "Specialist Class #1550",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1551,
      className: "Specialist Class #1551",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1552,
      className: "Specialist Class #1552",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1553,
      className: "Specialist Class #1553",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1554,
      className: "Specialist Class #1554",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1555,
      className: "Specialist Class #1555",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1556,
      className: "Specialist Class #1556",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1557,
      className: "Specialist Class #1557",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1558,
      className: "Specialist Class #1558",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1559,
      className: "Specialist Class #1559",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1560,
      className: "Specialist Class #1560",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1561,
      className: "Specialist Class #1561",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1562,
      className: "Specialist Class #1562",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1563,
      className: "Specialist Class #1563",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1564,
      className: "Specialist Class #1564",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1565,
      className: "Specialist Class #1565",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1566,
      className: "Specialist Class #1566",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1567,
      className: "Specialist Class #1567",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1568,
      className: "Specialist Class #1568",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1569,
      className: "Specialist Class #1569",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1570,
      className: "Specialist Class #1570",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1571,
      className: "Specialist Class #1571",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1572,
      className: "Specialist Class #1572",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1573,
      className: "Specialist Class #1573",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1574,
      className: "Specialist Class #1574",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1575,
      className: "Specialist Class #1575",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1576,
      className: "Specialist Class #1576",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1577,
      className: "Specialist Class #1577",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1578,
      className: "Specialist Class #1578",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1579,
      className: "Specialist Class #1579",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1580,
      className: "Specialist Class #1580",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1581,
      className: "Specialist Class #1581",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1582,
      className: "Specialist Class #1582",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1583,
      className: "Specialist Class #1583",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1584,
      className: "Specialist Class #1584",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1585,
      className: "Specialist Class #1585",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1586,
      className: "Specialist Class #1586",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1587,
      className: "Specialist Class #1587",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1588,
      className: "Specialist Class #1588",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1589,
      className: "Specialist Class #1589",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1590,
      className: "Specialist Class #1590",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1591,
      className: "Specialist Class #1591",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1592,
      className: "Specialist Class #1592",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1593,
      className: "Specialist Class #1593",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1594,
      className: "Specialist Class #1594",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1595,
      className: "Specialist Class #1595",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1596,
      className: "Specialist Class #1596",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1597,
      className: "Specialist Class #1597",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1598,
      className: "Specialist Class #1598",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1599,
      className: "Specialist Class #1599",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1600,
      className: "Specialist Class #1600",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1601,
      className: "Specialist Class #1601",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1602,
      className: "Specialist Class #1602",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1603,
      className: "Specialist Class #1603",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1604,
      className: "Specialist Class #1604",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1605,
      className: "Specialist Class #1605",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1606,
      className: "Specialist Class #1606",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1607,
      className: "Specialist Class #1607",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1608,
      className: "Specialist Class #1608",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1609,
      className: "Specialist Class #1609",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1610,
      className: "Specialist Class #1610",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1611,
      className: "Specialist Class #1611",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1612,
      className: "Specialist Class #1612",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1613,
      className: "Specialist Class #1613",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1614,
      className: "Specialist Class #1614",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1615,
      className: "Specialist Class #1615",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1616,
      className: "Specialist Class #1616",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1617,
      className: "Specialist Class #1617",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1618,
      className: "Specialist Class #1618",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1619,
      className: "Specialist Class #1619",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1620,
      className: "Specialist Class #1620",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1621,
      className: "Specialist Class #1621",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1622,
      className: "Specialist Class #1622",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1623,
      className: "Specialist Class #1623",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1624,
      className: "Specialist Class #1624",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1625,
      className: "Specialist Class #1625",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1626,
      className: "Specialist Class #1626",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1627,
      className: "Specialist Class #1627",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1628,
      className: "Specialist Class #1628",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1629,
      className: "Specialist Class #1629",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1630,
      className: "Specialist Class #1630",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1631,
      className: "Specialist Class #1631",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1632,
      className: "Specialist Class #1632",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1633,
      className: "Specialist Class #1633",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1634,
      className: "Specialist Class #1634",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1635,
      className: "Specialist Class #1635",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1636,
      className: "Specialist Class #1636",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1637,
      className: "Specialist Class #1637",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1638,
      className: "Specialist Class #1638",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1639,
      className: "Specialist Class #1639",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1640,
      className: "Specialist Class #1640",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1641,
      className: "Specialist Class #1641",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1642,
      className: "Specialist Class #1642",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1643,
      className: "Specialist Class #1643",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1644,
      className: "Specialist Class #1644",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1645,
      className: "Specialist Class #1645",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1646,
      className: "Specialist Class #1646",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1647,
      className: "Specialist Class #1647",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1648,
      className: "Specialist Class #1648",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1649,
      className: "Specialist Class #1649",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1650,
      className: "Specialist Class #1650",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1651,
      className: "Specialist Class #1651",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1652,
      className: "Specialist Class #1652",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1653,
      className: "Specialist Class #1653",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1654,
      className: "Specialist Class #1654",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1655,
      className: "Specialist Class #1655",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1656,
      className: "Specialist Class #1656",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1657,
      className: "Specialist Class #1657",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1658,
      className: "Specialist Class #1658",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1659,
      className: "Specialist Class #1659",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1660,
      className: "Specialist Class #1660",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1661,
      className: "Specialist Class #1661",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1662,
      className: "Specialist Class #1662",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1663,
      className: "Specialist Class #1663",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1664,
      className: "Specialist Class #1664",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1665,
      className: "Specialist Class #1665",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1666,
      className: "Specialist Class #1666",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1667,
      className: "Specialist Class #1667",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1668,
      className: "Specialist Class #1668",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1669,
      className: "Specialist Class #1669",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1670,
      className: "Specialist Class #1670",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1671,
      className: "Specialist Class #1671",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1672,
      className: "Specialist Class #1672",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1673,
      className: "Specialist Class #1673",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1674,
      className: "Specialist Class #1674",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1675,
      className: "Specialist Class #1675",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1676,
      className: "Specialist Class #1676",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1677,
      className: "Specialist Class #1677",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1678,
      className: "Specialist Class #1678",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1679,
      className: "Specialist Class #1679",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1680,
      className: "Specialist Class #1680",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1681,
      className: "Specialist Class #1681",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1682,
      className: "Specialist Class #1682",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1683,
      className: "Specialist Class #1683",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1684,
      className: "Specialist Class #1684",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1685,
      className: "Specialist Class #1685",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1686,
      className: "Specialist Class #1686",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1687,
      className: "Specialist Class #1687",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1688,
      className: "Specialist Class #1688",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1689,
      className: "Specialist Class #1689",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1690,
      className: "Specialist Class #1690",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1691,
      className: "Specialist Class #1691",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1692,
      className: "Specialist Class #1692",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1693,
      className: "Specialist Class #1693",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1694,
      className: "Specialist Class #1694",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1695,
      className: "Specialist Class #1695",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1696,
      className: "Specialist Class #1696",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1697,
      className: "Specialist Class #1697",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1698,
      className: "Specialist Class #1698",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1699,
      className: "Specialist Class #1699",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1700,
      className: "Specialist Class #1700",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1701,
      className: "Specialist Class #1701",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1702,
      className: "Specialist Class #1702",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1703,
      className: "Specialist Class #1703",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1704,
      className: "Specialist Class #1704",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1705,
      className: "Specialist Class #1705",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1706,
      className: "Specialist Class #1706",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1707,
      className: "Specialist Class #1707",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1708,
      className: "Specialist Class #1708",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1709,
      className: "Specialist Class #1709",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1710,
      className: "Specialist Class #1710",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1711,
      className: "Specialist Class #1711",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1712,
      className: "Specialist Class #1712",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1713,
      className: "Specialist Class #1713",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1714,
      className: "Specialist Class #1714",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1715,
      className: "Specialist Class #1715",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1716,
      className: "Specialist Class #1716",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1717,
      className: "Specialist Class #1717",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1718,
      className: "Specialist Class #1718",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1719,
      className: "Specialist Class #1719",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1720,
      className: "Specialist Class #1720",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1721,
      className: "Specialist Class #1721",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1722,
      className: "Specialist Class #1722",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1723,
      className: "Specialist Class #1723",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1724,
      className: "Specialist Class #1724",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1725,
      className: "Specialist Class #1725",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1726,
      className: "Specialist Class #1726",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1727,
      className: "Specialist Class #1727",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1728,
      className: "Specialist Class #1728",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1729,
      className: "Specialist Class #1729",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1730,
      className: "Specialist Class #1730",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1731,
      className: "Specialist Class #1731",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1732,
      className: "Specialist Class #1732",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1733,
      className: "Specialist Class #1733",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1734,
      className: "Specialist Class #1734",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1735,
      className: "Specialist Class #1735",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1736,
      className: "Specialist Class #1736",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1737,
      className: "Specialist Class #1737",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1738,
      className: "Specialist Class #1738",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1739,
      className: "Specialist Class #1739",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1740,
      className: "Specialist Class #1740",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1741,
      className: "Specialist Class #1741",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1742,
      className: "Specialist Class #1742",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1743,
      className: "Specialist Class #1743",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1744,
      className: "Specialist Class #1744",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1745,
      className: "Specialist Class #1745",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1746,
      className: "Specialist Class #1746",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1747,
      className: "Specialist Class #1747",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1748,
      className: "Specialist Class #1748",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1749,
      className: "Specialist Class #1749",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1750,
      className: "Specialist Class #1750",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1751,
      className: "Specialist Class #1751",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1752,
      className: "Specialist Class #1752",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1753,
      className: "Specialist Class #1753",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1754,
      className: "Specialist Class #1754",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1755,
      className: "Specialist Class #1755",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1756,
      className: "Specialist Class #1756",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1757,
      className: "Specialist Class #1757",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1758,
      className: "Specialist Class #1758",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1759,
      className: "Specialist Class #1759",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1760,
      className: "Specialist Class #1760",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1761,
      className: "Specialist Class #1761",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1762,
      className: "Specialist Class #1762",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1763,
      className: "Specialist Class #1763",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1764,
      className: "Specialist Class #1764",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1765,
      className: "Specialist Class #1765",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1766,
      className: "Specialist Class #1766",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1767,
      className: "Specialist Class #1767",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1768,
      className: "Specialist Class #1768",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1769,
      className: "Specialist Class #1769",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1770,
      className: "Specialist Class #1770",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1771,
      className: "Specialist Class #1771",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1772,
      className: "Specialist Class #1772",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1773,
      className: "Specialist Class #1773",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1774,
      className: "Specialist Class #1774",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1775,
      className: "Specialist Class #1775",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1776,
      className: "Specialist Class #1776",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1777,
      className: "Specialist Class #1777",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1778,
      className: "Specialist Class #1778",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1779,
      className: "Specialist Class #1779",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1780,
      className: "Specialist Class #1780",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1781,
      className: "Specialist Class #1781",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1782,
      className: "Specialist Class #1782",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1783,
      className: "Specialist Class #1783",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1784,
      className: "Specialist Class #1784",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1785,
      className: "Specialist Class #1785",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1786,
      className: "Specialist Class #1786",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1787,
      className: "Specialist Class #1787",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1788,
      className: "Specialist Class #1788",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1789,
      className: "Specialist Class #1789",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1790,
      className: "Specialist Class #1790",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1791,
      className: "Specialist Class #1791",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1792,
      className: "Specialist Class #1792",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1793,
      className: "Specialist Class #1793",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1794,
      className: "Specialist Class #1794",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1795,
      className: "Specialist Class #1795",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1796,
      className: "Specialist Class #1796",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1797,
      className: "Specialist Class #1797",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1798,
      className: "Specialist Class #1798",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1799,
      className: "Specialist Class #1799",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1800,
      className: "Specialist Class #1800",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1801,
      className: "Specialist Class #1801",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1802,
      className: "Specialist Class #1802",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1803,
      className: "Specialist Class #1803",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1804,
      className: "Specialist Class #1804",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1805,
      className: "Specialist Class #1805",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1806,
      className: "Specialist Class #1806",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1807,
      className: "Specialist Class #1807",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1808,
      className: "Specialist Class #1808",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1809,
      className: "Specialist Class #1809",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1810,
      className: "Specialist Class #1810",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1811,
      className: "Specialist Class #1811",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1812,
      className: "Specialist Class #1812",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1813,
      className: "Specialist Class #1813",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1814,
      className: "Specialist Class #1814",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1815,
      className: "Specialist Class #1815",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1816,
      className: "Specialist Class #1816",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1817,
      className: "Specialist Class #1817",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1818,
      className: "Specialist Class #1818",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1819,
      className: "Specialist Class #1819",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1820,
      className: "Specialist Class #1820",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1821,
      className: "Specialist Class #1821",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1822,
      className: "Specialist Class #1822",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1823,
      className: "Specialist Class #1823",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1824,
      className: "Specialist Class #1824",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1825,
      className: "Specialist Class #1825",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1826,
      className: "Specialist Class #1826",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1827,
      className: "Specialist Class #1827",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1828,
      className: "Specialist Class #1828",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1829,
      className: "Specialist Class #1829",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1830,
      className: "Specialist Class #1830",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1831,
      className: "Specialist Class #1831",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1832,
      className: "Specialist Class #1832",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1833,
      className: "Specialist Class #1833",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1834,
      className: "Specialist Class #1834",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1835,
      className: "Specialist Class #1835",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1836,
      className: "Specialist Class #1836",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1837,
      className: "Specialist Class #1837",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1838,
      className: "Specialist Class #1838",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1839,
      className: "Specialist Class #1839",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1840,
      className: "Specialist Class #1840",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1841,
      className: "Specialist Class #1841",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1842,
      className: "Specialist Class #1842",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1843,
      className: "Specialist Class #1843",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1844,
      className: "Specialist Class #1844",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1845,
      className: "Specialist Class #1845",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1846,
      className: "Specialist Class #1846",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1847,
      className: "Specialist Class #1847",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1848,
      className: "Specialist Class #1848",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1849,
      className: "Specialist Class #1849",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1850,
      className: "Specialist Class #1850",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1851,
      className: "Specialist Class #1851",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1852,
      className: "Specialist Class #1852",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1853,
      className: "Specialist Class #1853",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1854,
      className: "Specialist Class #1854",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1855,
      className: "Specialist Class #1855",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1856,
      className: "Specialist Class #1856",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1857,
      className: "Specialist Class #1857",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1858,
      className: "Specialist Class #1858",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1859,
      className: "Specialist Class #1859",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1860,
      className: "Specialist Class #1860",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1861,
      className: "Specialist Class #1861",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1862,
      className: "Specialist Class #1862",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1863,
      className: "Specialist Class #1863",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1864,
      className: "Specialist Class #1864",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1865,
      className: "Specialist Class #1865",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1866,
      className: "Specialist Class #1866",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1867,
      className: "Specialist Class #1867",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1868,
      className: "Specialist Class #1868",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1869,
      className: "Specialist Class #1869",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1870,
      className: "Specialist Class #1870",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1871,
      className: "Specialist Class #1871",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1872,
      className: "Specialist Class #1872",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1873,
      className: "Specialist Class #1873",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1874,
      className: "Specialist Class #1874",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1875,
      className: "Specialist Class #1875",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1876,
      className: "Specialist Class #1876",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1877,
      className: "Specialist Class #1877",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1878,
      className: "Specialist Class #1878",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1879,
      className: "Specialist Class #1879",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1880,
      className: "Specialist Class #1880",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1881,
      className: "Specialist Class #1881",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1882,
      className: "Specialist Class #1882",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1883,
      className: "Specialist Class #1883",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1884,
      className: "Specialist Class #1884",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1885,
      className: "Specialist Class #1885",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1886,
      className: "Specialist Class #1886",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1887,
      className: "Specialist Class #1887",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1888,
      className: "Specialist Class #1888",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1889,
      className: "Specialist Class #1889",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1890,
      className: "Specialist Class #1890",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1891,
      className: "Specialist Class #1891",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1892,
      className: "Specialist Class #1892",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1893,
      className: "Specialist Class #1893",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1894,
      className: "Specialist Class #1894",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1895,
      className: "Specialist Class #1895",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1896,
      className: "Specialist Class #1896",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1897,
      className: "Specialist Class #1897",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1898,
      className: "Specialist Class #1898",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1899,
      className: "Specialist Class #1899",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 1900,
      className: "Specialist Class #1900",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 1901,
      className: "Specialist Class #1901",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 1902,
      className: "Specialist Class #1902",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 1903,
      className: "Specialist Class #1903",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 1904,
      className: "Specialist Class #1904",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 1905,
      className: "Specialist Class #1905",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 1906,
      className: "Specialist Class #1906",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 1907,
      className: "Specialist Class #1907",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 1908,
      className: "Specialist Class #1908",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 1909,
      className: "Specialist Class #1909",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 1910,
      className: "Specialist Class #1910",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 1911,
      className: "Specialist Class #1911",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 1912,
      className: "Specialist Class #1912",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 1913,
      className: "Specialist Class #1913",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 1914,
      className: "Specialist Class #1914",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 1915,
      className: "Specialist Class #1915",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 1916,
      className: "Specialist Class #1916",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 1917,
      className: "Specialist Class #1917",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 1918,
      className: "Specialist Class #1918",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 1919,
      className: "Specialist Class #1919",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 1920,
      className: "Specialist Class #1920",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 1921,
      className: "Specialist Class #1921",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 1922,
      className: "Specialist Class #1922",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 1923,
      className: "Specialist Class #1923",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 1924,
      className: "Specialist Class #1924",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 1925,
      className: "Specialist Class #1925",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 1926,
      className: "Specialist Class #1926",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 1927,
      className: "Specialist Class #1927",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 1928,
      className: "Specialist Class #1928",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 1929,
      className: "Specialist Class #1929",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 1930,
      className: "Specialist Class #1930",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 1931,
      className: "Specialist Class #1931",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 1932,
      className: "Specialist Class #1932",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 1933,
      className: "Specialist Class #1933",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 1934,
      className: "Specialist Class #1934",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 1935,
      className: "Specialist Class #1935",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 1936,
      className: "Specialist Class #1936",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 1937,
      className: "Specialist Class #1937",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 1938,
      className: "Specialist Class #1938",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 1939,
      className: "Specialist Class #1939",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 1940,
      className: "Specialist Class #1940",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 1941,
      className: "Specialist Class #1941",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 1942,
      className: "Specialist Class #1942",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 1943,
      className: "Specialist Class #1943",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 1944,
      className: "Specialist Class #1944",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 1945,
      className: "Specialist Class #1945",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 1946,
      className: "Specialist Class #1946",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 1947,
      className: "Specialist Class #1947",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 1948,
      className: "Specialist Class #1948",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 1949,
      className: "Specialist Class #1949",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 1950,
      className: "Specialist Class #1950",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 1951,
      className: "Specialist Class #1951",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 1952,
      className: "Specialist Class #1952",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 1953,
      className: "Specialist Class #1953",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 1954,
      className: "Specialist Class #1954",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 1955,
      className: "Specialist Class #1955",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 1956,
      className: "Specialist Class #1956",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 1957,
      className: "Specialist Class #1957",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 1958,
      className: "Specialist Class #1958",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 1959,
      className: "Specialist Class #1959",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 1960,
      className: "Specialist Class #1960",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 1961,
      className: "Specialist Class #1961",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 1962,
      className: "Specialist Class #1962",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 1963,
      className: "Specialist Class #1963",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 1964,
      className: "Specialist Class #1964",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 1965,
      className: "Specialist Class #1965",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 1966,
      className: "Specialist Class #1966",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 1967,
      className: "Specialist Class #1967",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 1968,
      className: "Specialist Class #1968",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 1969,
      className: "Specialist Class #1969",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 1970,
      className: "Specialist Class #1970",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 1971,
      className: "Specialist Class #1971",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 1972,
      className: "Specialist Class #1972",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 1973,
      className: "Specialist Class #1973",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 1974,
      className: "Specialist Class #1974",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 1975,
      className: "Specialist Class #1975",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 1976,
      className: "Specialist Class #1976",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 1977,
      className: "Specialist Class #1977",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 1978,
      className: "Specialist Class #1978",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 1979,
      className: "Specialist Class #1979",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 1980,
      className: "Specialist Class #1980",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 1981,
      className: "Specialist Class #1981",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 1982,
      className: "Specialist Class #1982",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 1983,
      className: "Specialist Class #1983",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 1984,
      className: "Specialist Class #1984",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 1985,
      className: "Specialist Class #1985",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 1986,
      className: "Specialist Class #1986",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 1987,
      className: "Specialist Class #1987",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 1988,
      className: "Specialist Class #1988",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 1989,
      className: "Specialist Class #1989",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 1990,
      className: "Specialist Class #1990",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 1991,
      className: "Specialist Class #1991",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 1992,
      className: "Specialist Class #1992",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 1993,
      className: "Specialist Class #1993",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 1994,
      className: "Specialist Class #1994",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 1995,
      className: "Specialist Class #1995",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 1996,
      className: "Specialist Class #1996",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 1997,
      className: "Specialist Class #1997",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 1998,
      className: "Specialist Class #1998",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 1999,
      className: "Specialist Class #1999",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2000,
      className: "Specialist Class #2000",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2001,
      className: "Specialist Class #2001",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2002,
      className: "Specialist Class #2002",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2003,
      className: "Specialist Class #2003",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2004,
      className: "Specialist Class #2004",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2005,
      className: "Specialist Class #2005",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2006,
      className: "Specialist Class #2006",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2007,
      className: "Specialist Class #2007",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2008,
      className: "Specialist Class #2008",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2009,
      className: "Specialist Class #2009",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2010,
      className: "Specialist Class #2010",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2011,
      className: "Specialist Class #2011",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2012,
      className: "Specialist Class #2012",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2013,
      className: "Specialist Class #2013",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2014,
      className: "Specialist Class #2014",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2015,
      className: "Specialist Class #2015",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2016,
      className: "Specialist Class #2016",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2017,
      className: "Specialist Class #2017",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2018,
      className: "Specialist Class #2018",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2019,
      className: "Specialist Class #2019",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2020,
      className: "Specialist Class #2020",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2021,
      className: "Specialist Class #2021",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2022,
      className: "Specialist Class #2022",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2023,
      className: "Specialist Class #2023",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2024,
      className: "Specialist Class #2024",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2025,
      className: "Specialist Class #2025",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2026,
      className: "Specialist Class #2026",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2027,
      className: "Specialist Class #2027",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2028,
      className: "Specialist Class #2028",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2029,
      className: "Specialist Class #2029",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2030,
      className: "Specialist Class #2030",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2031,
      className: "Specialist Class #2031",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2032,
      className: "Specialist Class #2032",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2033,
      className: "Specialist Class #2033",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2034,
      className: "Specialist Class #2034",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2035,
      className: "Specialist Class #2035",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2036,
      className: "Specialist Class #2036",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2037,
      className: "Specialist Class #2037",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2038,
      className: "Specialist Class #2038",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2039,
      className: "Specialist Class #2039",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2040,
      className: "Specialist Class #2040",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2041,
      className: "Specialist Class #2041",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2042,
      className: "Specialist Class #2042",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2043,
      className: "Specialist Class #2043",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2044,
      className: "Specialist Class #2044",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2045,
      className: "Specialist Class #2045",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2046,
      className: "Specialist Class #2046",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2047,
      className: "Specialist Class #2047",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2048,
      className: "Specialist Class #2048",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2049,
      className: "Specialist Class #2049",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2050,
      className: "Specialist Class #2050",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2051,
      className: "Specialist Class #2051",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2052,
      className: "Specialist Class #2052",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2053,
      className: "Specialist Class #2053",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2054,
      className: "Specialist Class #2054",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2055,
      className: "Specialist Class #2055",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2056,
      className: "Specialist Class #2056",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2057,
      className: "Specialist Class #2057",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2058,
      className: "Specialist Class #2058",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2059,
      className: "Specialist Class #2059",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2060,
      className: "Specialist Class #2060",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2061,
      className: "Specialist Class #2061",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2062,
      className: "Specialist Class #2062",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2063,
      className: "Specialist Class #2063",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2064,
      className: "Specialist Class #2064",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2065,
      className: "Specialist Class #2065",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2066,
      className: "Specialist Class #2066",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2067,
      className: "Specialist Class #2067",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2068,
      className: "Specialist Class #2068",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2069,
      className: "Specialist Class #2069",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2070,
      className: "Specialist Class #2070",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2071,
      className: "Specialist Class #2071",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2072,
      className: "Specialist Class #2072",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2073,
      className: "Specialist Class #2073",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2074,
      className: "Specialist Class #2074",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2075,
      className: "Specialist Class #2075",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2076,
      className: "Specialist Class #2076",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2077,
      className: "Specialist Class #2077",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2078,
      className: "Specialist Class #2078",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2079,
      className: "Specialist Class #2079",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2080,
      className: "Specialist Class #2080",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2081,
      className: "Specialist Class #2081",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2082,
      className: "Specialist Class #2082",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2083,
      className: "Specialist Class #2083",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2084,
      className: "Specialist Class #2084",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2085,
      className: "Specialist Class #2085",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2086,
      className: "Specialist Class #2086",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2087,
      className: "Specialist Class #2087",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2088,
      className: "Specialist Class #2088",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2089,
      className: "Specialist Class #2089",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2090,
      className: "Specialist Class #2090",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2091,
      className: "Specialist Class #2091",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2092,
      className: "Specialist Class #2092",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2093,
      className: "Specialist Class #2093",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2094,
      className: "Specialist Class #2094",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2095,
      className: "Specialist Class #2095",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2096,
      className: "Specialist Class #2096",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2097,
      className: "Specialist Class #2097",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2098,
      className: "Specialist Class #2098",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2099,
      className: "Specialist Class #2099",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2100,
      className: "Specialist Class #2100",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2101,
      className: "Specialist Class #2101",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2102,
      className: "Specialist Class #2102",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2103,
      className: "Specialist Class #2103",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2104,
      className: "Specialist Class #2104",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2105,
      className: "Specialist Class #2105",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2106,
      className: "Specialist Class #2106",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2107,
      className: "Specialist Class #2107",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2108,
      className: "Specialist Class #2108",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2109,
      className: "Specialist Class #2109",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2110,
      className: "Specialist Class #2110",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2111,
      className: "Specialist Class #2111",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2112,
      className: "Specialist Class #2112",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2113,
      className: "Specialist Class #2113",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2114,
      className: "Specialist Class #2114",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2115,
      className: "Specialist Class #2115",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2116,
      className: "Specialist Class #2116",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2117,
      className: "Specialist Class #2117",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2118,
      className: "Specialist Class #2118",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2119,
      className: "Specialist Class #2119",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2120,
      className: "Specialist Class #2120",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2121,
      className: "Specialist Class #2121",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2122,
      className: "Specialist Class #2122",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2123,
      className: "Specialist Class #2123",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2124,
      className: "Specialist Class #2124",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2125,
      className: "Specialist Class #2125",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2126,
      className: "Specialist Class #2126",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2127,
      className: "Specialist Class #2127",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2128,
      className: "Specialist Class #2128",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2129,
      className: "Specialist Class #2129",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2130,
      className: "Specialist Class #2130",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2131,
      className: "Specialist Class #2131",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2132,
      className: "Specialist Class #2132",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2133,
      className: "Specialist Class #2133",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2134,
      className: "Specialist Class #2134",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2135,
      className: "Specialist Class #2135",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2136,
      className: "Specialist Class #2136",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2137,
      className: "Specialist Class #2137",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2138,
      className: "Specialist Class #2138",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2139,
      className: "Specialist Class #2139",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2140,
      className: "Specialist Class #2140",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2141,
      className: "Specialist Class #2141",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2142,
      className: "Specialist Class #2142",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2143,
      className: "Specialist Class #2143",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2144,
      className: "Specialist Class #2144",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2145,
      className: "Specialist Class #2145",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2146,
      className: "Specialist Class #2146",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2147,
      className: "Specialist Class #2147",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2148,
      className: "Specialist Class #2148",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2149,
      className: "Specialist Class #2149",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2150,
      className: "Specialist Class #2150",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2151,
      className: "Specialist Class #2151",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2152,
      className: "Specialist Class #2152",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2153,
      className: "Specialist Class #2153",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2154,
      className: "Specialist Class #2154",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2155,
      className: "Specialist Class #2155",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2156,
      className: "Specialist Class #2156",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2157,
      className: "Specialist Class #2157",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2158,
      className: "Specialist Class #2158",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2159,
      className: "Specialist Class #2159",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2160,
      className: "Specialist Class #2160",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2161,
      className: "Specialist Class #2161",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2162,
      className: "Specialist Class #2162",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2163,
      className: "Specialist Class #2163",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2164,
      className: "Specialist Class #2164",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2165,
      className: "Specialist Class #2165",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2166,
      className: "Specialist Class #2166",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2167,
      className: "Specialist Class #2167",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2168,
      className: "Specialist Class #2168",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2169,
      className: "Specialist Class #2169",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2170,
      className: "Specialist Class #2170",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2171,
      className: "Specialist Class #2171",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2172,
      className: "Specialist Class #2172",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2173,
      className: "Specialist Class #2173",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2174,
      className: "Specialist Class #2174",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2175,
      className: "Specialist Class #2175",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2176,
      className: "Specialist Class #2176",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2177,
      className: "Specialist Class #2177",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2178,
      className: "Specialist Class #2178",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2179,
      className: "Specialist Class #2179",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2180,
      className: "Specialist Class #2180",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2181,
      className: "Specialist Class #2181",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2182,
      className: "Specialist Class #2182",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2183,
      className: "Specialist Class #2183",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2184,
      className: "Specialist Class #2184",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2185,
      className: "Specialist Class #2185",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2186,
      className: "Specialist Class #2186",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2187,
      className: "Specialist Class #2187",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2188,
      className: "Specialist Class #2188",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2189,
      className: "Specialist Class #2189",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2190,
      className: "Specialist Class #2190",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2191,
      className: "Specialist Class #2191",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2192,
      className: "Specialist Class #2192",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2193,
      className: "Specialist Class #2193",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2194,
      className: "Specialist Class #2194",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2195,
      className: "Specialist Class #2195",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2196,
      className: "Specialist Class #2196",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2197,
      className: "Specialist Class #2197",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2198,
      className: "Specialist Class #2198",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2199,
      className: "Specialist Class #2199",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2200,
      className: "Specialist Class #2200",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2201,
      className: "Specialist Class #2201",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2202,
      className: "Specialist Class #2202",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2203,
      className: "Specialist Class #2203",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2204,
      className: "Specialist Class #2204",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2205,
      className: "Specialist Class #2205",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2206,
      className: "Specialist Class #2206",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2207,
      className: "Specialist Class #2207",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2208,
      className: "Specialist Class #2208",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2209,
      className: "Specialist Class #2209",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2210,
      className: "Specialist Class #2210",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2211,
      className: "Specialist Class #2211",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2212,
      className: "Specialist Class #2212",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2213,
      className: "Specialist Class #2213",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2214,
      className: "Specialist Class #2214",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2215,
      className: "Specialist Class #2215",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2216,
      className: "Specialist Class #2216",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2217,
      className: "Specialist Class #2217",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2218,
      className: "Specialist Class #2218",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2219,
      className: "Specialist Class #2219",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2220,
      className: "Specialist Class #2220",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2221,
      className: "Specialist Class #2221",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2222,
      className: "Specialist Class #2222",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2223,
      className: "Specialist Class #2223",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2224,
      className: "Specialist Class #2224",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2225,
      className: "Specialist Class #2225",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2226,
      className: "Specialist Class #2226",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2227,
      className: "Specialist Class #2227",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2228,
      className: "Specialist Class #2228",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2229,
      className: "Specialist Class #2229",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2230,
      className: "Specialist Class #2230",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2231,
      className: "Specialist Class #2231",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2232,
      className: "Specialist Class #2232",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2233,
      className: "Specialist Class #2233",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2234,
      className: "Specialist Class #2234",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2235,
      className: "Specialist Class #2235",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2236,
      className: "Specialist Class #2236",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2237,
      className: "Specialist Class #2237",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2238,
      className: "Specialist Class #2238",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2239,
      className: "Specialist Class #2239",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2240,
      className: "Specialist Class #2240",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2241,
      className: "Specialist Class #2241",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2242,
      className: "Specialist Class #2242",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2243,
      className: "Specialist Class #2243",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2244,
      className: "Specialist Class #2244",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2245,
      className: "Specialist Class #2245",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2246,
      className: "Specialist Class #2246",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2247,
      className: "Specialist Class #2247",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2248,
      className: "Specialist Class #2248",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2249,
      className: "Specialist Class #2249",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2250,
      className: "Specialist Class #2250",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2251,
      className: "Specialist Class #2251",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2252,
      className: "Specialist Class #2252",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2253,
      className: "Specialist Class #2253",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2254,
      className: "Specialist Class #2254",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2255,
      className: "Specialist Class #2255",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2256,
      className: "Specialist Class #2256",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2257,
      className: "Specialist Class #2257",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2258,
      className: "Specialist Class #2258",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2259,
      className: "Specialist Class #2259",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2260,
      className: "Specialist Class #2260",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2261,
      className: "Specialist Class #2261",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2262,
      className: "Specialist Class #2262",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2263,
      className: "Specialist Class #2263",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2264,
      className: "Specialist Class #2264",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2265,
      className: "Specialist Class #2265",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2266,
      className: "Specialist Class #2266",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2267,
      className: "Specialist Class #2267",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2268,
      className: "Specialist Class #2268",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2269,
      className: "Specialist Class #2269",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2270,
      className: "Specialist Class #2270",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2271,
      className: "Specialist Class #2271",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2272,
      className: "Specialist Class #2272",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2273,
      className: "Specialist Class #2273",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2274,
      className: "Specialist Class #2274",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2275,
      className: "Specialist Class #2275",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2276,
      className: "Specialist Class #2276",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2277,
      className: "Specialist Class #2277",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2278,
      className: "Specialist Class #2278",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2279,
      className: "Specialist Class #2279",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2280,
      className: "Specialist Class #2280",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2281,
      className: "Specialist Class #2281",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2282,
      className: "Specialist Class #2282",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2283,
      className: "Specialist Class #2283",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2284,
      className: "Specialist Class #2284",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2285,
      className: "Specialist Class #2285",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2286,
      className: "Specialist Class #2286",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2287,
      className: "Specialist Class #2287",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2288,
      className: "Specialist Class #2288",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2289,
      className: "Specialist Class #2289",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2290,
      className: "Specialist Class #2290",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2291,
      className: "Specialist Class #2291",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2292,
      className: "Specialist Class #2292",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2293,
      className: "Specialist Class #2293",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2294,
      className: "Specialist Class #2294",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2295,
      className: "Specialist Class #2295",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2296,
      className: "Specialist Class #2296",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2297,
      className: "Specialist Class #2297",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2298,
      className: "Specialist Class #2298",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2299,
      className: "Specialist Class #2299",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2300,
      className: "Specialist Class #2300",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2301,
      className: "Specialist Class #2301",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2302,
      className: "Specialist Class #2302",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2303,
      className: "Specialist Class #2303",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2304,
      className: "Specialist Class #2304",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2305,
      className: "Specialist Class #2305",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2306,
      className: "Specialist Class #2306",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2307,
      className: "Specialist Class #2307",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2308,
      className: "Specialist Class #2308",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2309,
      className: "Specialist Class #2309",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2310,
      className: "Specialist Class #2310",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2311,
      className: "Specialist Class #2311",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2312,
      className: "Specialist Class #2312",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2313,
      className: "Specialist Class #2313",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2314,
      className: "Specialist Class #2314",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2315,
      className: "Specialist Class #2315",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2316,
      className: "Specialist Class #2316",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2317,
      className: "Specialist Class #2317",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2318,
      className: "Specialist Class #2318",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2319,
      className: "Specialist Class #2319",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2320,
      className: "Specialist Class #2320",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2321,
      className: "Specialist Class #2321",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2322,
      className: "Specialist Class #2322",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2323,
      className: "Specialist Class #2323",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2324,
      className: "Specialist Class #2324",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2325,
      className: "Specialist Class #2325",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2326,
      className: "Specialist Class #2326",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2327,
      className: "Specialist Class #2327",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2328,
      className: "Specialist Class #2328",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2329,
      className: "Specialist Class #2329",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2330,
      className: "Specialist Class #2330",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2331,
      className: "Specialist Class #2331",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2332,
      className: "Specialist Class #2332",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2333,
      className: "Specialist Class #2333",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2334,
      className: "Specialist Class #2334",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2335,
      className: "Specialist Class #2335",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2336,
      className: "Specialist Class #2336",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2337,
      className: "Specialist Class #2337",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2338,
      className: "Specialist Class #2338",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2339,
      className: "Specialist Class #2339",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2340,
      className: "Specialist Class #2340",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2341,
      className: "Specialist Class #2341",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2342,
      className: "Specialist Class #2342",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2343,
      className: "Specialist Class #2343",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2344,
      className: "Specialist Class #2344",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2345,
      className: "Specialist Class #2345",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2346,
      className: "Specialist Class #2346",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2347,
      className: "Specialist Class #2347",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2348,
      className: "Specialist Class #2348",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2349,
      className: "Specialist Class #2349",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2350,
      className: "Specialist Class #2350",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2351,
      className: "Specialist Class #2351",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2352,
      className: "Specialist Class #2352",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2353,
      className: "Specialist Class #2353",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2354,
      className: "Specialist Class #2354",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2355,
      className: "Specialist Class #2355",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2356,
      className: "Specialist Class #2356",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2357,
      className: "Specialist Class #2357",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2358,
      className: "Specialist Class #2358",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2359,
      className: "Specialist Class #2359",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2360,
      className: "Specialist Class #2360",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2361,
      className: "Specialist Class #2361",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2362,
      className: "Specialist Class #2362",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2363,
      className: "Specialist Class #2363",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2364,
      className: "Specialist Class #2364",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2365,
      className: "Specialist Class #2365",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2366,
      className: "Specialist Class #2366",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2367,
      className: "Specialist Class #2367",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2368,
      className: "Specialist Class #2368",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2369,
      className: "Specialist Class #2369",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2370,
      className: "Specialist Class #2370",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2371,
      className: "Specialist Class #2371",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2372,
      className: "Specialist Class #2372",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2373,
      className: "Specialist Class #2373",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2374,
      className: "Specialist Class #2374",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2375,
      className: "Specialist Class #2375",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2376,
      className: "Specialist Class #2376",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2377,
      className: "Specialist Class #2377",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2378,
      className: "Specialist Class #2378",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2379,
      className: "Specialist Class #2379",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2380,
      className: "Specialist Class #2380",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2381,
      className: "Specialist Class #2381",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2382,
      className: "Specialist Class #2382",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2383,
      className: "Specialist Class #2383",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2384,
      className: "Specialist Class #2384",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2385,
      className: "Specialist Class #2385",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2386,
      className: "Specialist Class #2386",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2387,
      className: "Specialist Class #2387",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2388,
      className: "Specialist Class #2388",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2389,
      className: "Specialist Class #2389",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2390,
      className: "Specialist Class #2390",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2391,
      className: "Specialist Class #2391",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2392,
      className: "Specialist Class #2392",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2393,
      className: "Specialist Class #2393",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2394,
      className: "Specialist Class #2394",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2395,
      className: "Specialist Class #2395",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2396,
      className: "Specialist Class #2396",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2397,
      className: "Specialist Class #2397",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2398,
      className: "Specialist Class #2398",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2399,
      className: "Specialist Class #2399",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2400,
      className: "Specialist Class #2400",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2401,
      className: "Specialist Class #2401",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2402,
      className: "Specialist Class #2402",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2403,
      className: "Specialist Class #2403",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2404,
      className: "Specialist Class #2404",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2405,
      className: "Specialist Class #2405",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2406,
      className: "Specialist Class #2406",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2407,
      className: "Specialist Class #2407",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2408,
      className: "Specialist Class #2408",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2409,
      className: "Specialist Class #2409",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2410,
      className: "Specialist Class #2410",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2411,
      className: "Specialist Class #2411",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2412,
      className: "Specialist Class #2412",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2413,
      className: "Specialist Class #2413",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2414,
      className: "Specialist Class #2414",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2415,
      className: "Specialist Class #2415",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2416,
      className: "Specialist Class #2416",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2417,
      className: "Specialist Class #2417",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2418,
      className: "Specialist Class #2418",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2419,
      className: "Specialist Class #2419",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2420,
      className: "Specialist Class #2420",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2421,
      className: "Specialist Class #2421",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2422,
      className: "Specialist Class #2422",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2423,
      className: "Specialist Class #2423",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2424,
      className: "Specialist Class #2424",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2425,
      className: "Specialist Class #2425",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2426,
      className: "Specialist Class #2426",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2427,
      className: "Specialist Class #2427",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2428,
      className: "Specialist Class #2428",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2429,
      className: "Specialist Class #2429",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2430,
      className: "Specialist Class #2430",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2431,
      className: "Specialist Class #2431",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2432,
      className: "Specialist Class #2432",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2433,
      className: "Specialist Class #2433",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2434,
      className: "Specialist Class #2434",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2435,
      className: "Specialist Class #2435",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2436,
      className: "Specialist Class #2436",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2437,
      className: "Specialist Class #2437",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2438,
      className: "Specialist Class #2438",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2439,
      className: "Specialist Class #2439",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2440,
      className: "Specialist Class #2440",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2441,
      className: "Specialist Class #2441",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2442,
      className: "Specialist Class #2442",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2443,
      className: "Specialist Class #2443",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2444,
      className: "Specialist Class #2444",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2445,
      className: "Specialist Class #2445",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2446,
      className: "Specialist Class #2446",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2447,
      className: "Specialist Class #2447",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2448,
      className: "Specialist Class #2448",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2449,
      className: "Specialist Class #2449",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2450,
      className: "Specialist Class #2450",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2451,
      className: "Specialist Class #2451",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2452,
      className: "Specialist Class #2452",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2453,
      className: "Specialist Class #2453",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2454,
      className: "Specialist Class #2454",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2455,
      className: "Specialist Class #2455",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2456,
      className: "Specialist Class #2456",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2457,
      className: "Specialist Class #2457",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2458,
      className: "Specialist Class #2458",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2459,
      className: "Specialist Class #2459",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2460,
      className: "Specialist Class #2460",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2461,
      className: "Specialist Class #2461",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2462,
      className: "Specialist Class #2462",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2463,
      className: "Specialist Class #2463",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2464,
      className: "Specialist Class #2464",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2465,
      className: "Specialist Class #2465",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2466,
      className: "Specialist Class #2466",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2467,
      className: "Specialist Class #2467",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2468,
      className: "Specialist Class #2468",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2469,
      className: "Specialist Class #2469",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2470,
      className: "Specialist Class #2470",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2471,
      className: "Specialist Class #2471",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2472,
      className: "Specialist Class #2472",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2473,
      className: "Specialist Class #2473",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2474,
      className: "Specialist Class #2474",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2475,
      className: "Specialist Class #2475",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2476,
      className: "Specialist Class #2476",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2477,
      className: "Specialist Class #2477",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2478,
      className: "Specialist Class #2478",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2479,
      className: "Specialist Class #2479",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2480,
      className: "Specialist Class #2480",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2481,
      className: "Specialist Class #2481",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2482,
      className: "Specialist Class #2482",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2483,
      className: "Specialist Class #2483",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2484,
      className: "Specialist Class #2484",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2485,
      className: "Specialist Class #2485",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2486,
      className: "Specialist Class #2486",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2487,
      className: "Specialist Class #2487",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2488,
      className: "Specialist Class #2488",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2489,
      className: "Specialist Class #2489",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2490,
      className: "Specialist Class #2490",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2491,
      className: "Specialist Class #2491",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2492,
      className: "Specialist Class #2492",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2493,
      className: "Specialist Class #2493",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2494,
      className: "Specialist Class #2494",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2495,
      className: "Specialist Class #2495",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2496,
      className: "Specialist Class #2496",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2497,
      className: "Specialist Class #2497",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2498,
      className: "Specialist Class #2498",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2499,
      className: "Specialist Class #2499",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2500,
      className: "Specialist Class #2500",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2501,
      className: "Specialist Class #2501",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2502,
      className: "Specialist Class #2502",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2503,
      className: "Specialist Class #2503",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2504,
      className: "Specialist Class #2504",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2505,
      className: "Specialist Class #2505",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2506,
      className: "Specialist Class #2506",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2507,
      className: "Specialist Class #2507",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2508,
      className: "Specialist Class #2508",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2509,
      className: "Specialist Class #2509",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2510,
      className: "Specialist Class #2510",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2511,
      className: "Specialist Class #2511",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2512,
      className: "Specialist Class #2512",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2513,
      className: "Specialist Class #2513",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2514,
      className: "Specialist Class #2514",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2515,
      className: "Specialist Class #2515",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2516,
      className: "Specialist Class #2516",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2517,
      className: "Specialist Class #2517",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2518,
      className: "Specialist Class #2518",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2519,
      className: "Specialist Class #2519",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2520,
      className: "Specialist Class #2520",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2521,
      className: "Specialist Class #2521",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2522,
      className: "Specialist Class #2522",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2523,
      className: "Specialist Class #2523",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2524,
      className: "Specialist Class #2524",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2525,
      className: "Specialist Class #2525",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2526,
      className: "Specialist Class #2526",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2527,
      className: "Specialist Class #2527",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2528,
      className: "Specialist Class #2528",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2529,
      className: "Specialist Class #2529",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2530,
      className: "Specialist Class #2530",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2531,
      className: "Specialist Class #2531",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2532,
      className: "Specialist Class #2532",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2533,
      className: "Specialist Class #2533",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2534,
      className: "Specialist Class #2534",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2535,
      className: "Specialist Class #2535",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2536,
      className: "Specialist Class #2536",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2537,
      className: "Specialist Class #2537",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2538,
      className: "Specialist Class #2538",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2539,
      className: "Specialist Class #2539",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2540,
      className: "Specialist Class #2540",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2541,
      className: "Specialist Class #2541",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2542,
      className: "Specialist Class #2542",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2543,
      className: "Specialist Class #2543",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2544,
      className: "Specialist Class #2544",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2545,
      className: "Specialist Class #2545",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2546,
      className: "Specialist Class #2546",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2547,
      className: "Specialist Class #2547",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2548,
      className: "Specialist Class #2548",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2549,
      className: "Specialist Class #2549",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2550,
      className: "Specialist Class #2550",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2551,
      className: "Specialist Class #2551",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2552,
      className: "Specialist Class #2552",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2553,
      className: "Specialist Class #2553",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2554,
      className: "Specialist Class #2554",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2555,
      className: "Specialist Class #2555",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2556,
      className: "Specialist Class #2556",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2557,
      className: "Specialist Class #2557",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2558,
      className: "Specialist Class #2558",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2559,
      className: "Specialist Class #2559",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2560,
      className: "Specialist Class #2560",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2561,
      className: "Specialist Class #2561",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2562,
      className: "Specialist Class #2562",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2563,
      className: "Specialist Class #2563",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2564,
      className: "Specialist Class #2564",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2565,
      className: "Specialist Class #2565",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2566,
      className: "Specialist Class #2566",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2567,
      className: "Specialist Class #2567",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2568,
      className: "Specialist Class #2568",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2569,
      className: "Specialist Class #2569",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2570,
      className: "Specialist Class #2570",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2571,
      className: "Specialist Class #2571",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2572,
      className: "Specialist Class #2572",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2573,
      className: "Specialist Class #2573",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2574,
      className: "Specialist Class #2574",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2575,
      className: "Specialist Class #2575",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2576,
      className: "Specialist Class #2576",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2577,
      className: "Specialist Class #2577",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2578,
      className: "Specialist Class #2578",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2579,
      className: "Specialist Class #2579",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2580,
      className: "Specialist Class #2580",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2581,
      className: "Specialist Class #2581",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2582,
      className: "Specialist Class #2582",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2583,
      className: "Specialist Class #2583",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2584,
      className: "Specialist Class #2584",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2585,
      className: "Specialist Class #2585",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2586,
      className: "Specialist Class #2586",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2587,
      className: "Specialist Class #2587",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2588,
      className: "Specialist Class #2588",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2589,
      className: "Specialist Class #2589",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2590,
      className: "Specialist Class #2590",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2591,
      className: "Specialist Class #2591",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2592,
      className: "Specialist Class #2592",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2593,
      className: "Specialist Class #2593",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2594,
      className: "Specialist Class #2594",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2595,
      className: "Specialist Class #2595",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2596,
      className: "Specialist Class #2596",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2597,
      className: "Specialist Class #2597",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2598,
      className: "Specialist Class #2598",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2599,
      className: "Specialist Class #2599",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2600,
      className: "Specialist Class #2600",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2601,
      className: "Specialist Class #2601",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2602,
      className: "Specialist Class #2602",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2603,
      className: "Specialist Class #2603",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2604,
      className: "Specialist Class #2604",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2605,
      className: "Specialist Class #2605",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2606,
      className: "Specialist Class #2606",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2607,
      className: "Specialist Class #2607",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2608,
      className: "Specialist Class #2608",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2609,
      className: "Specialist Class #2609",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2610,
      className: "Specialist Class #2610",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2611,
      className: "Specialist Class #2611",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2612,
      className: "Specialist Class #2612",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2613,
      className: "Specialist Class #2613",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2614,
      className: "Specialist Class #2614",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2615,
      className: "Specialist Class #2615",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2616,
      className: "Specialist Class #2616",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2617,
      className: "Specialist Class #2617",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2618,
      className: "Specialist Class #2618",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2619,
      className: "Specialist Class #2619",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2620,
      className: "Specialist Class #2620",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2621,
      className: "Specialist Class #2621",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2622,
      className: "Specialist Class #2622",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2623,
      className: "Specialist Class #2623",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2624,
      className: "Specialist Class #2624",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2625,
      className: "Specialist Class #2625",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2626,
      className: "Specialist Class #2626",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2627,
      className: "Specialist Class #2627",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2628,
      className: "Specialist Class #2628",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2629,
      className: "Specialist Class #2629",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2630,
      className: "Specialist Class #2630",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2631,
      className: "Specialist Class #2631",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2632,
      className: "Specialist Class #2632",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2633,
      className: "Specialist Class #2633",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2634,
      className: "Specialist Class #2634",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2635,
      className: "Specialist Class #2635",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2636,
      className: "Specialist Class #2636",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2637,
      className: "Specialist Class #2637",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2638,
      className: "Specialist Class #2638",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2639,
      className: "Specialist Class #2639",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2640,
      className: "Specialist Class #2640",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2641,
      className: "Specialist Class #2641",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2642,
      className: "Specialist Class #2642",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2643,
      className: "Specialist Class #2643",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2644,
      className: "Specialist Class #2644",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2645,
      className: "Specialist Class #2645",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2646,
      className: "Specialist Class #2646",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2647,
      className: "Specialist Class #2647",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2648,
      className: "Specialist Class #2648",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2649,
      className: "Specialist Class #2649",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2650,
      className: "Specialist Class #2650",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2651,
      className: "Specialist Class #2651",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2652,
      className: "Specialist Class #2652",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2653,
      className: "Specialist Class #2653",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2654,
      className: "Specialist Class #2654",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2655,
      className: "Specialist Class #2655",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2656,
      className: "Specialist Class #2656",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2657,
      className: "Specialist Class #2657",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2658,
      className: "Specialist Class #2658",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2659,
      className: "Specialist Class #2659",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2660,
      className: "Specialist Class #2660",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2661,
      className: "Specialist Class #2661",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2662,
      className: "Specialist Class #2662",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2663,
      className: "Specialist Class #2663",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2664,
      className: "Specialist Class #2664",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2665,
      className: "Specialist Class #2665",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2666,
      className: "Specialist Class #2666",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2667,
      className: "Specialist Class #2667",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2668,
      className: "Specialist Class #2668",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2669,
      className: "Specialist Class #2669",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2670,
      className: "Specialist Class #2670",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2671,
      className: "Specialist Class #2671",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2672,
      className: "Specialist Class #2672",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2673,
      className: "Specialist Class #2673",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2674,
      className: "Specialist Class #2674",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2675,
      className: "Specialist Class #2675",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2676,
      className: "Specialist Class #2676",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2677,
      className: "Specialist Class #2677",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2678,
      className: "Specialist Class #2678",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2679,
      className: "Specialist Class #2679",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2680,
      className: "Specialist Class #2680",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2681,
      className: "Specialist Class #2681",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2682,
      className: "Specialist Class #2682",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2683,
      className: "Specialist Class #2683",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2684,
      className: "Specialist Class #2684",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2685,
      className: "Specialist Class #2685",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2686,
      className: "Specialist Class #2686",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2687,
      className: "Specialist Class #2687",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2688,
      className: "Specialist Class #2688",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2689,
      className: "Specialist Class #2689",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2690,
      className: "Specialist Class #2690",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2691,
      className: "Specialist Class #2691",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2692,
      className: "Specialist Class #2692",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2693,
      className: "Specialist Class #2693",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2694,
      className: "Specialist Class #2694",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2695,
      className: "Specialist Class #2695",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2696,
      className: "Specialist Class #2696",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2697,
      className: "Specialist Class #2697",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2698,
      className: "Specialist Class #2698",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2699,
      className: "Specialist Class #2699",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2700,
      className: "Specialist Class #2700",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2701,
      className: "Specialist Class #2701",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2702,
      className: "Specialist Class #2702",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2703,
      className: "Specialist Class #2703",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2704,
      className: "Specialist Class #2704",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2705,
      className: "Specialist Class #2705",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2706,
      className: "Specialist Class #2706",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2707,
      className: "Specialist Class #2707",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2708,
      className: "Specialist Class #2708",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2709,
      className: "Specialist Class #2709",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2710,
      className: "Specialist Class #2710",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2711,
      className: "Specialist Class #2711",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2712,
      className: "Specialist Class #2712",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2713,
      className: "Specialist Class #2713",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2714,
      className: "Specialist Class #2714",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2715,
      className: "Specialist Class #2715",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2716,
      className: "Specialist Class #2716",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2717,
      className: "Specialist Class #2717",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2718,
      className: "Specialist Class #2718",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2719,
      className: "Specialist Class #2719",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2720,
      className: "Specialist Class #2720",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2721,
      className: "Specialist Class #2721",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2722,
      className: "Specialist Class #2722",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2723,
      className: "Specialist Class #2723",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2724,
      className: "Specialist Class #2724",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2725,
      className: "Specialist Class #2725",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2726,
      className: "Specialist Class #2726",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2727,
      className: "Specialist Class #2727",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2728,
      className: "Specialist Class #2728",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2729,
      className: "Specialist Class #2729",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2730,
      className: "Specialist Class #2730",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2731,
      className: "Specialist Class #2731",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2732,
      className: "Specialist Class #2732",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2733,
      className: "Specialist Class #2733",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2734,
      className: "Specialist Class #2734",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2735,
      className: "Specialist Class #2735",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2736,
      className: "Specialist Class #2736",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2737,
      className: "Specialist Class #2737",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2738,
      className: "Specialist Class #2738",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2739,
      className: "Specialist Class #2739",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2740,
      className: "Specialist Class #2740",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2741,
      className: "Specialist Class #2741",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2742,
      className: "Specialist Class #2742",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2743,
      className: "Specialist Class #2743",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2744,
      className: "Specialist Class #2744",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2745,
      className: "Specialist Class #2745",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2746,
      className: "Specialist Class #2746",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2747,
      className: "Specialist Class #2747",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2748,
      className: "Specialist Class #2748",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2749,
      className: "Specialist Class #2749",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2750,
      className: "Specialist Class #2750",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2751,
      className: "Specialist Class #2751",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2752,
      className: "Specialist Class #2752",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2753,
      className: "Specialist Class #2753",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2754,
      className: "Specialist Class #2754",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2755,
      className: "Specialist Class #2755",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2756,
      className: "Specialist Class #2756",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2757,
      className: "Specialist Class #2757",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2758,
      className: "Specialist Class #2758",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2759,
      className: "Specialist Class #2759",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2760,
      className: "Specialist Class #2760",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2761,
      className: "Specialist Class #2761",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2762,
      className: "Specialist Class #2762",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2763,
      className: "Specialist Class #2763",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2764,
      className: "Specialist Class #2764",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2765,
      className: "Specialist Class #2765",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2766,
      className: "Specialist Class #2766",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2767,
      className: "Specialist Class #2767",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2768,
      className: "Specialist Class #2768",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2769,
      className: "Specialist Class #2769",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2770,
      className: "Specialist Class #2770",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2771,
      className: "Specialist Class #2771",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2772,
      className: "Specialist Class #2772",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2773,
      className: "Specialist Class #2773",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2774,
      className: "Specialist Class #2774",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2775,
      className: "Specialist Class #2775",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2776,
      className: "Specialist Class #2776",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2777,
      className: "Specialist Class #2777",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2778,
      className: "Specialist Class #2778",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2779,
      className: "Specialist Class #2779",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2780,
      className: "Specialist Class #2780",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2781,
      className: "Specialist Class #2781",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2782,
      className: "Specialist Class #2782",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2783,
      className: "Specialist Class #2783",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2784,
      className: "Specialist Class #2784",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2785,
      className: "Specialist Class #2785",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2786,
      className: "Specialist Class #2786",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2787,
      className: "Specialist Class #2787",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2788,
      className: "Specialist Class #2788",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2789,
      className: "Specialist Class #2789",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2790,
      className: "Specialist Class #2790",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2791,
      className: "Specialist Class #2791",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2792,
      className: "Specialist Class #2792",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2793,
      className: "Specialist Class #2793",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2794,
      className: "Specialist Class #2794",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2795,
      className: "Specialist Class #2795",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2796,
      className: "Specialist Class #2796",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2797,
      className: "Specialist Class #2797",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2798,
      className: "Specialist Class #2798",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2799,
      className: "Specialist Class #2799",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2800,
      className: "Specialist Class #2800",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2801,
      className: "Specialist Class #2801",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2802,
      className: "Specialist Class #2802",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2803,
      className: "Specialist Class #2803",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2804,
      className: "Specialist Class #2804",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2805,
      className: "Specialist Class #2805",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2806,
      className: "Specialist Class #2806",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2807,
      className: "Specialist Class #2807",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2808,
      className: "Specialist Class #2808",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2809,
      className: "Specialist Class #2809",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2810,
      className: "Specialist Class #2810",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2811,
      className: "Specialist Class #2811",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2812,
      className: "Specialist Class #2812",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2813,
      className: "Specialist Class #2813",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2814,
      className: "Specialist Class #2814",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2815,
      className: "Specialist Class #2815",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2816,
      className: "Specialist Class #2816",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2817,
      className: "Specialist Class #2817",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2818,
      className: "Specialist Class #2818",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2819,
      className: "Specialist Class #2819",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2820,
      className: "Specialist Class #2820",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2821,
      className: "Specialist Class #2821",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2822,
      className: "Specialist Class #2822",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2823,
      className: "Specialist Class #2823",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2824,
      className: "Specialist Class #2824",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2825,
      className: "Specialist Class #2825",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2826,
      className: "Specialist Class #2826",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2827,
      className: "Specialist Class #2827",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2828,
      className: "Specialist Class #2828",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2829,
      className: "Specialist Class #2829",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2830,
      className: "Specialist Class #2830",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2831,
      className: "Specialist Class #2831",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2832,
      className: "Specialist Class #2832",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2833,
      className: "Specialist Class #2833",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2834,
      className: "Specialist Class #2834",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2835,
      className: "Specialist Class #2835",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2836,
      className: "Specialist Class #2836",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2837,
      className: "Specialist Class #2837",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2838,
      className: "Specialist Class #2838",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2839,
      className: "Specialist Class #2839",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2840,
      className: "Specialist Class #2840",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2841,
      className: "Specialist Class #2841",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2842,
      className: "Specialist Class #2842",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2843,
      className: "Specialist Class #2843",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2844,
      className: "Specialist Class #2844",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2845,
      className: "Specialist Class #2845",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2846,
      className: "Specialist Class #2846",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2847,
      className: "Specialist Class #2847",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2848,
      className: "Specialist Class #2848",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2849,
      className: "Specialist Class #2849",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2850,
      className: "Specialist Class #2850",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2851,
      className: "Specialist Class #2851",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2852,
      className: "Specialist Class #2852",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2853,
      className: "Specialist Class #2853",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2854,
      className: "Specialist Class #2854",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2855,
      className: "Specialist Class #2855",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2856,
      className: "Specialist Class #2856",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2857,
      className: "Specialist Class #2857",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2858,
      className: "Specialist Class #2858",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2859,
      className: "Specialist Class #2859",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2860,
      className: "Specialist Class #2860",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2861,
      className: "Specialist Class #2861",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2862,
      className: "Specialist Class #2862",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2863,
      className: "Specialist Class #2863",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2864,
      className: "Specialist Class #2864",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2865,
      className: "Specialist Class #2865",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2866,
      className: "Specialist Class #2866",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2867,
      className: "Specialist Class #2867",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2868,
      className: "Specialist Class #2868",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2869,
      className: "Specialist Class #2869",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2870,
      className: "Specialist Class #2870",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2871,
      className: "Specialist Class #2871",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2872,
      className: "Specialist Class #2872",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2873,
      className: "Specialist Class #2873",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2874,
      className: "Specialist Class #2874",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2875,
      className: "Specialist Class #2875",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2876,
      className: "Specialist Class #2876",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2877,
      className: "Specialist Class #2877",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2878,
      className: "Specialist Class #2878",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2879,
      className: "Specialist Class #2879",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2880,
      className: "Specialist Class #2880",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2881,
      className: "Specialist Class #2881",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2882,
      className: "Specialist Class #2882",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2883,
      className: "Specialist Class #2883",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2884,
      className: "Specialist Class #2884",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2885,
      className: "Specialist Class #2885",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2886,
      className: "Specialist Class #2886",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2887,
      className: "Specialist Class #2887",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2888,
      className: "Specialist Class #2888",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2889,
      className: "Specialist Class #2889",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2890,
      className: "Specialist Class #2890",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2891,
      className: "Specialist Class #2891",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2892,
      className: "Specialist Class #2892",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2893,
      className: "Specialist Class #2893",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2894,
      className: "Specialist Class #2894",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2895,
      className: "Specialist Class #2895",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2896,
      className: "Specialist Class #2896",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2897,
      className: "Specialist Class #2897",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2898,
      className: "Specialist Class #2898",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2899,
      className: "Specialist Class #2899",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 2900,
      className: "Specialist Class #2900",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    },
    {
      classId: 2901,
      className: "Specialist Class #2901",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 11,
      critChance: 0.06
    },
    {
      classId: 2902,
      className: "Specialist Class #2902",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 12,
      critChance: 0.07
    },
    {
      classId: 2903,
      className: "Specialist Class #2903",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 13,
      critChance: 0.08
    },
    {
      classId: 2904,
      className: "Specialist Class #2904",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 14,
      critChance: 0.09
    },
    {
      classId: 2905,
      className: "Specialist Class #2905",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 15,
      critChance: 0.10
    },
    {
      classId: 2906,
      className: "Specialist Class #2906",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 16,
      critChance: 0.11
    },
    {
      classId: 2907,
      className: "Specialist Class #2907",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 17,
      critChance: 0.12
    },
    {
      classId: 2908,
      className: "Specialist Class #2908",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 18,
      critChance: 0.13
    },
    {
      classId: 2909,
      className: "Specialist Class #2909",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 19,
      critChance: 0.14
    },
    {
      classId: 2910,
      className: "Specialist Class #2910",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 20,
      critChance: 0.15
    },
    {
      classId: 2911,
      className: "Specialist Class #2911",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 21,
      critChance: 0.16
    },
    {
      classId: 2912,
      className: "Specialist Class #2912",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 22,
      critChance: 0.17
    },
    {
      classId: 2913,
      className: "Specialist Class #2913",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 23,
      critChance: 0.18
    },
    {
      classId: 2914,
      className: "Specialist Class #2914",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 24,
      critChance: 0.19
    },
    {
      classId: 2915,
      className: "Specialist Class #2915",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 25,
      critChance: 0.20
    },
    {
      classId: 2916,
      className: "Specialist Class #2916",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 26,
      critChance: 0.21
    },
    {
      classId: 2917,
      className: "Specialist Class #2917",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 27,
      critChance: 0.22
    },
    {
      classId: 2918,
      className: "Specialist Class #2918",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 28,
      critChance: 0.23
    },
    {
      classId: 2919,
      className: "Specialist Class #2919",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 29,
      critChance: 0.24
    },
    {
      classId: 2920,
      className: "Specialist Class #2920",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 30,
      critChance: 0.25
    },
    {
      classId: 2921,
      className: "Specialist Class #2921",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 31,
      critChance: 0.26
    },
    {
      classId: 2922,
      className: "Specialist Class #2922",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 32,
      critChance: 0.27
    },
    {
      classId: 2923,
      className: "Specialist Class #2923",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 33,
      critChance: 0.28
    },
    {
      classId: 2924,
      className: "Specialist Class #2924",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 34,
      critChance: 0.29
    },
    {
      classId: 2925,
      className: "Specialist Class #2925",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 35,
      critChance: 0.05
    },
    {
      classId: 2926,
      className: "Specialist Class #2926",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 36,
      critChance: 0.06
    },
    {
      classId: 2927,
      className: "Specialist Class #2927",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 37,
      critChance: 0.07
    },
    {
      classId: 2928,
      className: "Specialist Class #2928",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 38,
      critChance: 0.08
    },
    {
      classId: 2929,
      className: "Specialist Class #2929",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 39,
      critChance: 0.09
    },
    {
      classId: 2930,
      className: "Specialist Class #2930",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 40,
      critChance: 0.10
    },
    {
      classId: 2931,
      className: "Specialist Class #2931",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 41,
      critChance: 0.11
    },
    {
      classId: 2932,
      className: "Specialist Class #2932",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 42,
      critChance: 0.12
    },
    {
      classId: 2933,
      className: "Specialist Class #2933",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 43,
      critChance: 0.13
    },
    {
      classId: 2934,
      className: "Specialist Class #2934",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 44,
      critChance: 0.14
    },
    {
      classId: 2935,
      className: "Specialist Class #2935",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 45,
      critChance: 0.15
    },
    {
      classId: 2936,
      className: "Specialist Class #2936",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 46,
      critChance: 0.16
    },
    {
      classId: 2937,
      className: "Specialist Class #2937",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 47,
      critChance: 0.17
    },
    {
      classId: 2938,
      className: "Specialist Class #2938",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 48,
      critChance: 0.18
    },
    {
      classId: 2939,
      className: "Specialist Class #2939",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 49,
      critChance: 0.19
    },
    {
      classId: 2940,
      className: "Specialist Class #2940",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 50,
      critChance: 0.20
    },
    {
      classId: 2941,
      className: "Specialist Class #2941",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 51,
      critChance: 0.21
    },
    {
      classId: 2942,
      className: "Specialist Class #2942",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 52,
      critChance: 0.22
    },
    {
      classId: 2943,
      className: "Specialist Class #2943",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 53,
      critChance: 0.23
    },
    {
      classId: 2944,
      className: "Specialist Class #2944",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 54,
      critChance: 0.24
    },
    {
      classId: 2945,
      className: "Specialist Class #2945",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 55,
      critChance: 0.25
    },
    {
      classId: 2946,
      className: "Specialist Class #2946",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 56,
      critChance: 0.26
    },
    {
      classId: 2947,
      className: "Specialist Class #2947",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 57,
      critChance: 0.27
    },
    {
      classId: 2948,
      className: "Specialist Class #2948",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 58,
      critChance: 0.28
    },
    {
      classId: 2949,
      className: "Specialist Class #2949",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 59,
      critChance: 0.29
    },
    {
      classId: 2950,
      className: "Specialist Class #2950",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 60,
      critChance: 0.05
    },
    {
      classId: 2951,
      className: "Specialist Class #2951",
      passiveSkill: "Elemental Shield Level 1",
      bonusDamage: 61,
      critChance: 0.06
    },
    {
      classId: 2952,
      className: "Specialist Class #2952",
      passiveSkill: "Elemental Shield Level 2",
      bonusDamage: 62,
      critChance: 0.07
    },
    {
      classId: 2953,
      className: "Specialist Class #2953",
      passiveSkill: "Elemental Shield Level 3",
      bonusDamage: 63,
      critChance: 0.08
    },
    {
      classId: 2954,
      className: "Specialist Class #2954",
      passiveSkill: "Elemental Shield Level 4",
      bonusDamage: 64,
      critChance: 0.09
    },
    {
      classId: 2955,
      className: "Specialist Class #2955",
      passiveSkill: "Elemental Shield Level 5",
      bonusDamage: 65,
      critChance: 0.10
    },
    {
      classId: 2956,
      className: "Specialist Class #2956",
      passiveSkill: "Elemental Shield Level 6",
      bonusDamage: 66,
      critChance: 0.11
    },
    {
      classId: 2957,
      className: "Specialist Class #2957",
      passiveSkill: "Elemental Shield Level 7",
      bonusDamage: 67,
      critChance: 0.12
    },
    {
      classId: 2958,
      className: "Specialist Class #2958",
      passiveSkill: "Elemental Shield Level 8",
      bonusDamage: 68,
      critChance: 0.13
    },
    {
      classId: 2959,
      className: "Specialist Class #2959",
      passiveSkill: "Elemental Shield Level 9",
      bonusDamage: 69,
      critChance: 0.14
    },
    {
      classId: 2960,
      className: "Specialist Class #2960",
      passiveSkill: "Elemental Shield Level 10",
      bonusDamage: 70,
      critChance: 0.15
    },
    {
      classId: 2961,
      className: "Specialist Class #2961",
      passiveSkill: "Elemental Shield Level 11",
      bonusDamage: 71,
      critChance: 0.16
    },
    {
      classId: 2962,
      className: "Specialist Class #2962",
      passiveSkill: "Elemental Shield Level 12",
      bonusDamage: 72,
      critChance: 0.17
    },
    {
      classId: 2963,
      className: "Specialist Class #2963",
      passiveSkill: "Elemental Shield Level 13",
      bonusDamage: 73,
      critChance: 0.18
    },
    {
      classId: 2964,
      className: "Specialist Class #2964",
      passiveSkill: "Elemental Shield Level 14",
      bonusDamage: 74,
      critChance: 0.19
    },
    {
      classId: 2965,
      className: "Specialist Class #2965",
      passiveSkill: "Elemental Shield Level 15",
      bonusDamage: 75,
      critChance: 0.20
    },
    {
      classId: 2966,
      className: "Specialist Class #2966",
      passiveSkill: "Elemental Shield Level 16",
      bonusDamage: 76,
      critChance: 0.21
    },
    {
      classId: 2967,
      className: "Specialist Class #2967",
      passiveSkill: "Elemental Shield Level 17",
      bonusDamage: 77,
      critChance: 0.22
    },
    {
      classId: 2968,
      className: "Specialist Class #2968",
      passiveSkill: "Elemental Shield Level 18",
      bonusDamage: 78,
      critChance: 0.23
    },
    {
      classId: 2969,
      className: "Specialist Class #2969",
      passiveSkill: "Elemental Shield Level 19",
      bonusDamage: 79,
      critChance: 0.24
    },
    {
      classId: 2970,
      className: "Specialist Class #2970",
      passiveSkill: "Elemental Shield Level 20",
      bonusDamage: 80,
      critChance: 0.25
    },
    {
      classId: 2971,
      className: "Specialist Class #2971",
      passiveSkill: "Elemental Shield Level 21",
      bonusDamage: 81,
      critChance: 0.26
    },
    {
      classId: 2972,
      className: "Specialist Class #2972",
      passiveSkill: "Elemental Shield Level 22",
      bonusDamage: 82,
      critChance: 0.27
    },
    {
      classId: 2973,
      className: "Specialist Class #2973",
      passiveSkill: "Elemental Shield Level 23",
      bonusDamage: 83,
      critChance: 0.28
    },
    {
      classId: 2974,
      className: "Specialist Class #2974",
      passiveSkill: "Elemental Shield Level 24",
      bonusDamage: 84,
      critChance: 0.29
    },
    {
      classId: 2975,
      className: "Specialist Class #2975",
      passiveSkill: "Elemental Shield Level 25",
      bonusDamage: 85,
      critChance: 0.05
    },
    {
      classId: 2976,
      className: "Specialist Class #2976",
      passiveSkill: "Elemental Shield Level 26",
      bonusDamage: 86,
      critChance: 0.06
    },
    {
      classId: 2977,
      className: "Specialist Class #2977",
      passiveSkill: "Elemental Shield Level 27",
      bonusDamage: 87,
      critChance: 0.07
    },
    {
      classId: 2978,
      className: "Specialist Class #2978",
      passiveSkill: "Elemental Shield Level 28",
      bonusDamage: 88,
      critChance: 0.08
    },
    {
      classId: 2979,
      className: "Specialist Class #2979",
      passiveSkill: "Elemental Shield Level 29",
      bonusDamage: 89,
      critChance: 0.09
    },
    {
      classId: 2980,
      className: "Specialist Class #2980",
      passiveSkill: "Elemental Shield Level 30",
      bonusDamage: 90,
      critChance: 0.10
    },
    {
      classId: 2981,
      className: "Specialist Class #2981",
      passiveSkill: "Elemental Shield Level 31",
      bonusDamage: 91,
      critChance: 0.11
    },
    {
      classId: 2982,
      className: "Specialist Class #2982",
      passiveSkill: "Elemental Shield Level 32",
      bonusDamage: 92,
      critChance: 0.12
    },
    {
      classId: 2983,
      className: "Specialist Class #2983",
      passiveSkill: "Elemental Shield Level 33",
      bonusDamage: 93,
      critChance: 0.13
    },
    {
      classId: 2984,
      className: "Specialist Class #2984",
      passiveSkill: "Elemental Shield Level 34",
      bonusDamage: 94,
      critChance: 0.14
    },
    {
      classId: 2985,
      className: "Specialist Class #2985",
      passiveSkill: "Elemental Shield Level 35",
      bonusDamage: 95,
      critChance: 0.15
    },
    {
      classId: 2986,
      className: "Specialist Class #2986",
      passiveSkill: "Elemental Shield Level 36",
      bonusDamage: 96,
      critChance: 0.16
    },
    {
      classId: 2987,
      className: "Specialist Class #2987",
      passiveSkill: "Elemental Shield Level 37",
      bonusDamage: 97,
      critChance: 0.17
    },
    {
      classId: 2988,
      className: "Specialist Class #2988",
      passiveSkill: "Elemental Shield Level 38",
      bonusDamage: 98,
      critChance: 0.18
    },
    {
      classId: 2989,
      className: "Specialist Class #2989",
      passiveSkill: "Elemental Shield Level 39",
      bonusDamage: 99,
      critChance: 0.19
    },
    {
      classId: 2990,
      className: "Specialist Class #2990",
      passiveSkill: "Elemental Shield Level 40",
      bonusDamage: 100,
      critChance: 0.20
    },
    {
      classId: 2991,
      className: "Specialist Class #2991",
      passiveSkill: "Elemental Shield Level 41",
      bonusDamage: 101,
      critChance: 0.21
    },
    {
      classId: 2992,
      className: "Specialist Class #2992",
      passiveSkill: "Elemental Shield Level 42",
      bonusDamage: 102,
      critChance: 0.22
    },
    {
      classId: 2993,
      className: "Specialist Class #2993",
      passiveSkill: "Elemental Shield Level 43",
      bonusDamage: 103,
      critChance: 0.23
    },
    {
      classId: 2994,
      className: "Specialist Class #2994",
      passiveSkill: "Elemental Shield Level 44",
      bonusDamage: 104,
      critChance: 0.24
    },
    {
      classId: 2995,
      className: "Specialist Class #2995",
      passiveSkill: "Elemental Shield Level 45",
      bonusDamage: 105,
      critChance: 0.25
    },
    {
      classId: 2996,
      className: "Specialist Class #2996",
      passiveSkill: "Elemental Shield Level 46",
      bonusDamage: 106,
      critChance: 0.26
    },
    {
      classId: 2997,
      className: "Specialist Class #2997",
      passiveSkill: "Elemental Shield Level 47",
      bonusDamage: 107,
      critChance: 0.27
    },
    {
      classId: 2998,
      className: "Specialist Class #2998",
      passiveSkill: "Elemental Shield Level 48",
      bonusDamage: 108,
      critChance: 0.28
    },
    {
      classId: 2999,
      className: "Specialist Class #2999",
      passiveSkill: "Elemental Shield Level 49",
      bonusDamage: 109,
      critChance: 0.29
    },
    {
      classId: 3000,
      className: "Specialist Class #3000",
      passiveSkill: "Elemental Shield Level 0",
      bonusDamage: 10,
      critChance: 0.05
    }
  ]
};
if (typeof module !== 'undefined') { module.exports = window.RPS_CHARACTER_SYSTEM; }
