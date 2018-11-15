import {
  backgroundColors,
  baseCoat,
  eyeColors,
  secondaryBaseCoat,
  tertiaryBaseCoat,
  getUnderCoat
} from "./getColors";
import { names } from "./names";
import craftedDogs from "./craftedDogs";
import { MetaType, ValuesType } from "./Home.types";

const createHash = (values: Object) => btoa(JSON.stringify(values));

const getRandomNumber = (range: number) =>
  Math.floor(Math.random() * range) + 1;

const getRandomArrayValue = (array: Array<any>) => {
  const randomIndex = getRandomNumber(array.length) - 1;
  return randomIndex;
};

const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === consequent;
};

const getBaseColor = () => baseCoat[getRandomArrayValue(baseCoat)];

const generateValues = (baseColor: { hex: string; color: string }) => {
  return {
    baseCoat: baseColor.hex,
    backgroundColor:
      backgroundColors[getRandomArrayValue(backgroundColors)].hex,
    underCoat: getUnderCoat(baseColor.color),
    hasSpots: getProbability(1),
    secondaryBaseCoat:
      secondaryBaseCoat[getRandomArrayValue(secondaryBaseCoat)].hex,
    tertiaryBaseCoat:
      tertiaryBaseCoat[getRandomArrayValue(tertiaryBaseCoat)].hex,
    name: names[getRandomArrayValue(names)],
    eyeColor: eyeColors[getRandomArrayValue(eyeColors)].hex
  };
};

export default (): { data: ValuesType; meta: MetaType } => {
  // TODO: steps
  // 1. Roll D20 - if critical hit, Roll for special character, if not continue.
  // 2. Roll for base color
  // 3. Generate  underCoat, secondary colors, tertiary color, accent color, name

  const baseColor = getBaseColor();

  const isCriticalHit = getProbability(20);

  const values = isCriticalHit
    ? craftedDogs[getRandomArrayValue(craftedDogs)]
    : generateValues(baseColor);

  const hash = createHash(values);

  return {
    data: values,
    meta: {
      hash
    }
  };
};
