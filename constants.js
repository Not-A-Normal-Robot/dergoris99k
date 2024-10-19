const piecePlacements = [
    [[0,0],[0,1],[0,2],[0,3]], //I
    [[0,1],[0,2],[1,1],[1,2]], //O
    [[0,1],[0,2],[0,3],[1,2]], //T
    [[0,2],[0,3],[1,1],[1,2]], //S
    [[0,1],[0,2],[1,2],[1,3]], //Z
    [[0,1],[0,2],[0,3],[1,3]], //J
    [[0,1],[0,2],[0,3],[1,1]] //L
];

const classicStyleDropIntervals = [20, 17, 14, 11, 8, 6, 4, 3, 2, 1.5];
const classicStyleGradeConditions = [0, 2000, 6000, 12000, 28000, 45000, 66000, 82000, 140000, Infinity];
const classicStyleDAS = [6, 6, 6, 5, 5, 5, 4, 4, 4, 3];
const classicStyleDASInitial = [16, 16, 16, 13, 13, 13, 10, 10, 10, 8];

//const masterStyleIntervals = [64, 42.667, 32, 25.6, 21.333, 16, 8, 5.333, 4, 3.2, 2.667, 2.286, 2, 1.778, 64, 8, 4, 2.667, 2, 1.6, 1.333, 1.143, 1, 0.5, 0.333, 0.25, 0.2, 0.25, 0.333, 0.05];
//const masterStyleIntervalLevels = [0, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 170, 200, 220, 230, 233, 236, 239, 243, 247, 251, 300, 330, 360, 400, 420, 450, 500, Infinity];

const masterStyleIntervals = [21.333, 16, 10.666, 8, 5.333, 4, 3.2, 2.667, 2.286, 2, 1.6, 1.333, 1.143, 1, 0.667, 0.5, 0.333, 0.25, 0.2, 0.25, 0.333, 0.05];
const masterStyleIntervalLevels = [0, 20, 40, 60, 80, 100, 125, 150, 175, 200, 220, 240, 260, 280, 300, 325, 350, 375, 400, 420, 450, 500, Infinity];
const masterStyleGradeConditions = [0, 1200, 3500, 5800, 8600, 12000, 28000, 45000, 66000, 82000, 120000, 150000, 180000, Infinity];

const dragonStyleDropIntervals = [3, 2, 1, 0.5, 0.333, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05];
const dragonStyleDASInitial = [12, 12, 11, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8];
const dragonStyleARE = [18, 14, 14, 8, 7, 6, 6, 6, 6, 6, 6, 6, 6];
const dragonStyleARELineClear = [26, 14, 14, 14, 12, 10, 10, 10, 10, 10, 10, 10, 10];
const dragonStyleLockDelay = [30, 26, 22, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15];
const dragonStyleLineClear = [12, 6, 6, 6, 5, 4, 4, 4, 4, 4, 4, 4, 4]

const gameboyDropIntervals = [53, 49, 45, 41, 37, 33, 28, 22, 17, 11, 10, 9, 8, 7, 6, 6, 5, 5, 4, 4, 3];
const gameboyPieceOrientations = [ //The 9 digits are the 9 tiles of the piece (3 rows 3 columns), 0 is empty, 1 is filled
    ["000111010", "010110010", "010111000", "010011010"], //T
    ["000011110", "100110010", "000011110", "100110010"], //S
    ["000110011", "010110100", "000110011", "010110100"], //Z
    ["000111001", "010010110", "100111000", "011010010"], //J
    ["000111100", "110010010", "001111000", "010010011"] //L
];

const nesDropIntervals = [48, 43, 38, 33, 28, 23, 18, 13, 8, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1];
const nesLevelLinesLeft = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 100, 100, 100, 100, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 200, 200, 200, 200];
const nesPieceTiles = [0, 0, 0, 2, 1, 2, 1];

const nesPieceOrientations = [ //The 9 digits are the 9 tiles of the piece (3 rows 3 columns), 0 is empty, 1 is filled
    ["000111010", "010110010", "010111000", "010011010"], //T
    ["000011110", "010011001", "000011110", "010011001"], //S
    ["000110011", "001011010", "000110011", "001011010"], //Z
    ["000111001", "010010110", "100111000", "011010010"], //J
    ["000111100", "110010010", "001111000", "010010011"] //L
];

const dxDropIntervals = [52, 48, 44, 40, 36, 32, 27, 21, 16, 10, 9, 8, 7, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
//Currently unused
const dxPieceOrientations = [ //The 9 digits are the 9 tiles of the piece (3 rows 3 columns), 0 is empty, 1 is filled
    ["000111010", "010110010", "010111000", "010011010"], //T
    ["011110000", "010011001", "000011110", "100110010"], //S
    ["110011000", "001011010", "000110011", "010110100"], //Z
    ["000111001", "010010110", "100111000", "011010010"], //J
    ["000111100", "110010010", "001111000", "010010011"] //L
];
const dxAlternateCenters = [
    [[2,1],[1,0],[0,1],[1,2]], //T
    [[0,1],[1,2],[2,1],[1,0]], //S
    [[0,1],[1,2],[2,1],[1,0]], //Z
    [[2,1],[1,0],[0,1],[1,2]], //J
    [[2,1],[1,0],[0,1],[1,2]], //L
];
const dxBackgroundColours = ["#ffd300", "#ff25ff", "#00cae2", "#00d200", "#c2c2c2", "#000000", "#0000ff"];

const segaEasyDropIntervals = [48, 32, 24, 18, 14, 12, 10, 8, 6, 4, 12, 10, 8, 6, 4, 2];
const segaNormalDropIntervals = [48, 24, 18, 15, 12, 10, 8, 6, 4, 2, 10, 8, 6, 4, 2, 1];
const segaHardDropIntervals = [40, 20, 16, 12, 10, 8, 6, 4, 2, 1, 10, 8, 6, 4, 2, 1];
const segaHardestDropIntervals = [30, 15, 12, 10, 8, 6, 4, 2, 1, 1, 8, 6, 4, 2, 1, 1];
const segaBackgroundLevels = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9];
const segaPieceOrientations = [ //The 9 digits are the 9 tiles of the piece (3 rows 3 columns), 0 is empty, 1 is filled
    ["000111010", "010110010", "000010111", "010011010"], //T
    ["000011110", "100110010", "000011110", "100110010"], //S
    ["000110011", "001011010", "000110011", "010110100"], //Z
    ["000111001", "010010110", "000100111", "011010010"], //J
    ["000111100", "110010010", "000001111", "010010011"] //L
];
const segaLineScores = [
    [100, 100, 200, 200, 300, 300, 400, 400, 500],
    [400, 400, 800, 800, 1200, 1200, 1600, 1600, 2000],
    [900, 900, 1800, 1800, 2700, 2700, 3600, 3600, 4500],
    [2000, 2000, 4000, 4000, 6000, 6000, 8000, 8000, 10000]
];
const segaSoftdropScores = [1, 1, 2, 2, 3, 3, 4, 4, 5];

const tgmIntervals = [64, 42.667, 32, 25.6, 21.333, 16, 8, 5.333, 4, 3.2, 2.667, 2.286, 2, 1.778, 64, 8, 4, 2.667, 2, 1.6, 1.333, 1.143, 1, 0.5, 0.333, 0.25, 0.2, 0.25, 0.333, 0.05];
const tgmIntervalLevels = [0, 30, 35, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 170, 200, 220, 230, 233, 236, 239, 243, 247, 251, 300, 330, 360, 400, 420, 450, 500, Infinity];
const tgmGradeConditions = [0, 400, 800, 1400, 2000, 3500, 5500, 8000, 12000, 16000, 22000, 30000, 40000, 52000, 66000, 82000, 100000, 120000, Infinity];
const tgmPieceOrientations = [ //The 9 digits are the 9 tiles of the piece (3 rows 3 columns), 0 is empty, 1 is filled
    ["000111010", "010110010", "000010111", "010011010"], //T
    ["000011110", "100110010", "000011110", "100110010"], //S
    ["000110011", "001011010", "000110011", "001011010"], //Z
    ["000111001", "010010110", "000100111", "011010010"], //J
    ["000111100", "110010010", "000001111", "010010011"] //L
];