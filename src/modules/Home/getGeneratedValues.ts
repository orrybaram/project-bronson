import {
  backgroundColors,
  bellyColor,
  coatColor,
  secondaryCoatColor,
  tertiaryCoatColor
} from "./colors";

type ValuesType = {
  backgroundColor: number;
  bellyColor: number;
  coatColor: number;
  hasSpots: boolean;
  secondaryCoatColor: number;
  tertiaryCoatColor: number;
};

const getRandomNumber = (range: number) => Math.floor(Math.random() * range);

const getRandomArrayValue = (array: Array<string>) => {
  const randomIndex = getRandomNumber(array.length);
  return randomIndex;
};

const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === 1;
};

const generateValues = () => ({
  backgroundColor: getRandomArrayValue(backgroundColors),
  bellyColor: getRandomArrayValue(bellyColor),
  coatColor: getRandomArrayValue(coatColor),
  hasSpots: getProbability(5),
  secondaryCoatColor: getRandomArrayValue(secondaryCoatColor),
  tertiaryCoatColor: getRandomArrayValue(tertiaryCoatColor)
});

export default () => {
  const values: ValuesType = generateValues();

  return {
    data: {
      backgroundColor: backgroundColors[values.backgroundColor],
      bellyColor: bellyColor[values.bellyColor],
      coatColor: coatColor[values.coatColor],
      hasSpots: values.hasSpots,
      secondaryCoatColor: secondaryCoatColor[values.secondaryCoatColor],
      tertiaryCoatColor: tertiaryCoatColor[values.tertiaryCoatColor]
    },
    meta: {
      values
    }
  };
};
