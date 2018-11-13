import {
  backgroundColors,
  underCoat,
  baseCoat,
  secondaryBaseCoat,
  tertiaryBaseCoat
} from "./getColors";
import { names } from './names';

type ValuesType = {
  backgroundColor: number;
  underCoat: number;
  baseCoat: number;
  hasSpots: boolean;
  secondaryBaseCoat: number;
  tertiaryBaseCoat: number;
  name: number,
};

const getRandomNumber = (range: number) => Math.floor(Math.random() * range);

const getRandomArrayValue = (array: Array<string>) => {
  const randomIndex = getRandomNumber(array.length);
  return randomIndex;
};

const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === 1;
};


// TODO: steps
// 1. Roll D20 - if critical hit, Roll for special character, if not continue.
// 2. Roll for base color
// 3. Generate  underCoat, secondary colors, tertiary color, accent color, name

const generateValues = () => ({
  backgroundColor: getRandomArrayValue(backgroundColors),
  underCoat: getRandomArrayValue(underCoat),
  baseCoat: getRandomArrayValue(baseCoat),
  hasSpots: getProbability(5),
  secondaryBaseCoat: getRandomArrayValue(secondaryBaseCoat),
  tertiaryBaseCoat: getRandomArrayValue(tertiaryBaseCoat),
  name: getRandomArrayValue(names)
});

export default () => {
  const values: ValuesType = generateValues();

  return {
    data: {
      backgroundColor: backgroundColors[values.backgroundColor],
      underCoat: underCoat[values.underCoat],
      baseCoat: baseCoat[values.baseCoat],
      hasSpots: values.hasSpots,
      secondaryBaseCoat: secondaryBaseCoat[values.secondaryBaseCoat],
      tertiaryBaseCoat: tertiaryBaseCoat[values.tertiaryBaseCoat],
      name: names[values.name],
    },
    meta: {
      values
    }
  };
};
