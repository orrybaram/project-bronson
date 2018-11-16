import {
  backgroundColors,
  baseCoat,
  eyeColors,
  secondaryBaseCoat,
  tertiaryBaseCoat,
  getUnderCoat
} from "./getColors";
import names from "./names";
import craftedDogs from "./craftedDogs";
import { MetaType, ValuesType } from "./Home.types";
import { getRandomArrayValue, getProbability, createHash } from '../../lib/utils';

const getBaseColor = () => baseCoat[getRandomArrayValue(baseCoat)];

const generateValues = () => {
  const baseColor = getBaseColor()
  const name = names[getRandomArrayValue(names)];

  return {
    baseCoat: baseColor.hex,
    backgroundColor:
      backgroundColors[getRandomArrayValue(backgroundColors)].hex,
    underCoat: getUnderCoat(baseColor.color),
    hasSpots: getProbability(4),
    secondaryBaseCoat:
      secondaryBaseCoat[getRandomArrayValue(secondaryBaseCoat)].hex,
    tertiaryBaseCoat:
      tertiaryBaseCoat[getRandomArrayValue(tertiaryBaseCoat)].hex,
    name: names[getRandomArrayValue(names)],
    eyeColor: eyeColors[getRandomArrayValue(eyeColors)].hex,
    isButtFirst: getProbability(4),
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
