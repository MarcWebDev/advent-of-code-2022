import { data } from './data.js';

const dataArray = data.split(' ');

enum Points {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
  LOSS = 0,
  DRAW = 3,
  WIN = 6,
}

enum OpponentResponses {
  ROCK = 'A',
  PAPER = 'B',
  SCISSORS = 'C',
}

enum SelfResponses {
  ROCK = 'X',
  PAPER = 'Y',
  SCISSORS = 'Z',
}

enum PartTwoSelfResponses {
  LOSS = "X",
  DRAW = "Y",
  WIN = "Z",
}

function getMyPoints(formattedData: Array<string>) {
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
        } else if (myself === SelfResponses.PAPER) {
          points += Points.PAPER;
          points += Points.WIN;
          continue;
        } else if (myself === SelfResponses.SCISSORS) {
          points += Points.SCISSORS;
          points += Points.LOSS;
          continue;
        }
      } else if (opponent === OpponentResponses.PAPER) {
        if (myself === SelfResponses.ROCK) {
          points += Points.ROCK;
          points += Points.LOSS;
          continue;
        } else if (myself === SelfResponses.PAPER) {
          points += Points.PAPER;
          points += Points.DRAW;
          continue;
        } else if (myself === SelfResponses.SCISSORS) {
          points += Points.SCISSORS;
          points += Points.WIN;
          continue;
        }
      } else if (opponent === OpponentResponses.SCISSORS) {
        if (myself === SelfResponses.ROCK) {
          points += Points.ROCK;
          points += Points.WIN;
          continue;
        } else if (myself === SelfResponses.PAPER) {
          points += Points.PAPER;
          points += Points.LOSS;
          continue;
        } else if (myself === SelfResponses.SCISSORS) {
          points += Points.SCISSORS;
          points += Points.DRAW;
          continue;
        }
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  console.log(`You have a total of ${points} points.`);
}

// getMyPoints(dataArray);

function getMyPointsPartTwo(formattedData: Array<string>) {
  let points = 0;

  for (let i = 0; i < formattedData.length; i++) {
    if (i % 2 === 0) {
      const opponent = formattedData[i];
      const myself = formattedData[i+1];

      if (opponent === OpponentResponses.ROCK) {
        if (myself === PartTwoSelfResponses.LOSS) {
          points += Points.SCISSORS;
          points += Points.LOSS;
          continue;
        } else if (myself === PartTwoSelfResponses.DRAW) {
          points += Points.ROCK;
          points += Points.DRAW;
          continue;
        } else if (myself === PartTwoSelfResponses.WIN) {
          points += Points.PAPER;
          points += Points.WIN;
          continue;
        }
      } else if (opponent === OpponentResponses.PAPER) {
        if (myself === PartTwoSelfResponses.LOSS) {
          points += Points.ROCK;
          points += Points.LOSS;
          continue;
        } else if (myself === PartTwoSelfResponses.DRAW) {
          points += Points.PAPER;
          points += Points.DRAW;
          continue;
        } else if (myself === PartTwoSelfResponses.WIN) {
          points += Points.SCISSORS;
          points += Points.WIN;
          continue;
        }
      } else if (opponent === OpponentResponses.SCISSORS) {
        if (myself === PartTwoSelfResponses.LOSS) {
          points += Points.PAPER;
          points += Points.LOSS;
          continue;
        } else if (myself === PartTwoSelfResponses.DRAW) {
          points += Points.SCISSORS;
          points += Points.DRAW;
          continue;
        } else if (myself === PartTwoSelfResponses.WIN) {
          points += Points.ROCK;
          points += Points.WIN;
          continue;
        }
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  console.log(`You haver a total of ${points} points.`);
}

getMyPointsPartTwo(dataArray);