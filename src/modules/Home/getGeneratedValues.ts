import {
  backgroundColors,
  baseCoat,
  eyeColors,
  secondaryBaseCoat,
  tertiaryBaseCoat,
  underCoat,
} from "./getColors";
import { names } from "./names";
import craftedDogs from './craftedDogs';

type ValuesType = {
  backgroundColor: string;
  underCoat: string;
  baseCoat: string;
  hasSpots: boolean;
  secondaryBaseCoat: string;
  tertiaryBaseCoat: string;
  name: string;
  eyeColor: string,
};

const createHash = (values: Object) => btoa(JSON.stringify(values));

const getRandomNumber = (range: number) => (Math.floor(Math.random() * range) + 1);

const getRandomArrayValue = (array: Array<any>) => {
  const randomIndex = getRandomNumber(array.length) - 1;
  return randomIndex;
};

const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === consequent;
};

const generateValues = () => ({
  backgroundColor: backgroundColors[getRandomArrayValue(backgroundColors)],
  underCoat: underCoat[getRandomArrayValue(underCoat)],
  baseCoat: baseCoat[getRandomArrayValue(baseCoat)],
  hasSpots: getProbability(5),
  secondaryBaseCoat: secondaryBaseCoat[getRandomArrayValue(secondaryBaseCoat)],
  tertiaryBaseCoat: tertiaryBaseCoat[getRandomArrayValue(tertiaryBaseCoat)],
  name: names[getRandomArrayValue(names)],
  eyeColor: eyeColors[getRandomArrayValue(eyeColors)],
});

export default () => {
  // TODO: steps
  // 1. Roll D20 - if critical hit, Roll for special character, if not continue.
  // 2. Roll for base color
  // 3. Generate  underCoat, secondary colors, tertiary color, accent color, name

  const isCriticalHit = getProbability(20);

  const values = isCriticalHit
    ? craftedDogs[getRandomArrayValue(craftedDogs)]
    : generateValues();

  const hash = createHash(values);

  return {
    data: values,
    meta: {
      values,
      hash
    }
  };
};
