"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const dataArray = data_js_1.data.split(' ');
var Points;
(function (Points) {
    Points[Points["ROCK"] = 1] = "ROCK";
    Points[Points["PAPER"] = 2] = "PAPER";
    Points[Points["SCISSORS"] = 3] = "SCISSORS";
    Points[Points["LOSS"] = 0] = "LOSS";
    Points[Points["DRAW"] = 3] = "DRAW";
    Points[Points["WIN"] = 6] = "WIN";
})(Points || (Points = {}));
var OpponentResponses;
(function (OpponentResponses) {
    OpponentResponses["ROCK"] = "A";
    OpponentResponses["PAPER"] = "B";
    OpponentResponses["SCISSORS"] = "C";
})(OpponentResponses || (OpponentResponses = {}));
var SelfResponses;
(function (SelfResponses) {
    SelfResponses["ROCK"] = "X";
    SelfResponses["PAPER"] = "Y";
    SelfResponses["SCISSORS"] = "Z";
})(SelfResponses || (SelfResponses = {}));
var PartTwoSelfResponses;
(function (PartTwoSelfResponses) {
    PartTwoSelfResponses["LOSS"] = "X";
    PartTwoSelfResponses["DRAW"] = "Y";
    PartTwoSelfResponses["WIN"] = "Z";
})(PartTwoSelfResponses || (PartTwoSelfResponses = {}));
function getMyPoints(formattedData) {
    let points = 0;
    for (let i = 0; i < formattedData.length; i++) {
        if (i % 2 === 0) {
            const opponent = formattedData[i];
            const myself = formattedData[i + 1];
            if (opponent === OpponentResponses.ROCK) {
                if (myself === SelfResponses.ROCK) {
                    points += Points.ROCK;
                    points += Points.DRAW;
                    continue;
                }
                else if (myself === SelfResponses.PAPER) {
                    points += Points.PAPER;
                    points += Points.WIN;
                    continue;
                }
                else if (myself === SelfResponses.SCISSORS) {
                    points += Points.SCISSORS;
                    points += Points.LOSS;
                    continue;
                }
            }
            else if (opponent === OpponentResponses.PAPER) {
                if (myself === SelfResponses.ROCK) {
                    points += Points.ROCK;
                    points += Points.LOSS;
                    continue;
                }
                else if (myself === SelfResponses.PAPER) {
                    points += Points.PAPER;
                    points += Points.DRAW;
                    continue;
                }
                else if (myself === SelfResponses.SCISSORS) {
                    points += Points.SCISSORS;
                    points += Points.WIN;
                    continue;
                }
            }
            else if (opponent === OpponentResponses.SCISSORS) {
                if (myself === SelfResponses.ROCK) {
                    points += Points.ROCK;
                    points += Points.WIN;
                    continue;
                }
                else if (myself === SelfResponses.PAPER) {
                    points += Points.PAPER;
                    points += Points.LOSS;
                    continue;
                }
                else if (myself === SelfResponses.SCISSORS) {
                    points += Points.SCISSORS;
                    points += Points.DRAW;
                    continue;
                }
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
    console.log(`You have a total of ${points} points.`);
}
// getMyPoints(dataArray);
function getMyPointsPartTwo(formattedData) {
    let points = 0;
    for (let i = 0; i < formattedData.length; i++) {
        if (i % 2 === 0) {
            const opponent = formattedData[i];
            const myself = formattedData[i + 1];
            if (opponent === OpponentResponses.ROCK) {
                if (myself === PartTwoSelfResponses.LOSS) {
                    points += Points.SCISSORS;
                    points += Points.LOSS;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.DRAW) {
                    points += Points.ROCK;
                    points += Points.DRAW;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.WIN) {
                    points += Points.PAPER;
                    points += Points.WIN;
                    continue;
                }
            }
            else if (opponent === OpponentResponses.PAPER) {
                if (myself === PartTwoSelfResponses.LOSS) {
                    points += Points.ROCK;
                    points += Points.LOSS;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.DRAW) {
                    points += Points.PAPER;
                    points += Points.DRAW;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.WIN) {
                    points += Points.SCISSORS;
                    points += Points.WIN;
                    continue;
                }
            }
            else if (opponent === OpponentResponses.SCISSORS) {
                if (myself === PartTwoSelfResponses.LOSS) {
                    points += Points.PAPER;
                    points += Points.LOSS;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.DRAW) {
                    points += Points.SCISSORS;
                    points += Points.DRAW;
                    continue;
                }
                else if (myself === PartTwoSelfResponses.WIN) {
                    points += Points.ROCK;
                    points += Points.WIN;
                    continue;
                }
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
    console.log(`You haver a total of ${points} points.`);
}
getMyPointsPartTwo(dataArray);
//# sourceMappingURL=index.js.map