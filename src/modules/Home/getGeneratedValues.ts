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

const generateValues = () => {
  const baseColor = getBaseColor()

  return {
    baseCoat: baseColor.hex,
    backgroundColor:
      backgroundColors[getRandomArrayValue(backgroundColors)].hex,
    underCoat: getUnderCoat(baseColor.color),
    hasSpots: getProbability(3),
    secondaryBaseCoat:
      secondaryBaseCoat[getRandomArrayValue(secondaryBaseCoat)].hex,
    tertiaryBaseCoat:
      tertiaryBaseCoat[getRandomArrayValue(tertiaryBaseCoat)].hex,
    name: names[getRandomArrayValue(names)],
    eyeColor: eyeColors[getRandomArrayValue(eyeColors)].hex
  };
};

export default (): { data: ValuesType; meta: MetaType } => {
  const isCriticalHit = getProbability(20);

  const values = isCriticalHit
    ? craftedDogs[getRandomArrayValue(craftedDogs)]
    : generateValues();

  const hash = createHash(values);

  return {
    data: values,
    meta: {
      hash
    }
  };
};
