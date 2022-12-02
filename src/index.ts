import { data } from './data.js';

// Logs the amount of calories of the top-carrying elf
function getMostCarriedCalories(elfData: Array<Array<number>>) {
  let mostCalories = 0;
  let mostCaloriesIndex = 0;

  for (let i = 0; i < elfData.length; i++) {
    let arraySum = 0;

    for (let y = 0; y < elfData[i].length; y++) {
      arraySum += elfData[i][y];
    }

    if (arraySum > mostCalories) {
      mostCalories = arraySum;
      mostCaloriesIndex = i;
    }
  }

  console.log(
    `Elf ${
      mostCaloriesIndex + 1
    } is carrying ${mostCalories} Calories (most calories of all).`
  );
}

// getMostCarriedCalories(data);

// Logs the amount of calories of the top three carrying-elves
function getTopThreeElfCalorieSum(elfData: Array<Array<number>>) {
  let values = [];

  for (let i = 0; i < elfData.length; i++) {
    let arraySum = 0;

    for (let y = 0; y < elfData[i].length; y++) {
      arraySum += elfData[i][y];
    }

    values.push(arraySum);
  }

  values.sort((a: number, b: number) => b - a);

  console.log(
    `The top three elves carry a total of ${values[0] + values[1] + values[2]} calories.`
  );
}

getTopThreeElfCalorieSum(data);