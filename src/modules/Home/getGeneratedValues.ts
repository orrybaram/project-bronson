import {
  backgroundColors,
  baseCoat,
  eyeColors,
  secondaryBaseCoat,
  tertiaryBaseCoat,
  getUnderCoat
} from "./getColors";
import { darken } from "polished";
import names from "./names";
import craftedDogs from "./craftedDogs";
import { MetaType, ValuesType } from "./Home.types";
import {
  getRandomArrayValue,
  getRandomRange,
  getProbability,
  createHash
} from "../../lib/utils";

const getBaseColor = () => baseCoat[getRandomArrayValue(baseCoat)];

const getSpotDarkness = () => Math.random() / 10 + 0.01;

const getSpotSize = () => {
  const size = getRandomRange(20, 30);
  return {
    width: `${size}px`,
    height: `${size}px`
  };
};

const generateSpotStyles = (baseCoat: string) => {
  const boxShadow = generateSpotBoxShadows(baseCoat);

  return {
    ...getSpotSize(),
    backgroundColor: darken(0.05, baseCoat),
    boxShadow
  };
};

const generateSpotBoxShadows = (baseCoat: string) => {
  const spotAmount = getRandomRange(3, 10);
  const spots = Array(spotAmount).fill(null);

  const boxShadows = spots.map(() => {
    const color = darken(getSpotDarkness(), baseCoat);
    const spread = getRandomRange(-8, -4);
    const x = getRandomRange(-40, 40);
    const y = getRandomRange(-10, 40);

    return `${x}px ${y}px 0 ${spread}px ${color}`;
  });
  return boxShadows.join(",");
};

const generateValues = () => {
  const baseColor = getBaseColor();
  const name = names[getRandomArrayValue(names)];
  const hasSpots = getProbability(4);
  const spotStyles = generateSpotStyles(baseColor.hex);

  return {
    baseCoat: baseColor.hex,
    backgroundColor:
      backgroundColors[getRandomArrayValue(backgroundColors)].hex,
    underCoat: getUnderCoat(baseColor.color),
    hasSpots,
    spotStyles,
    secondaryBaseCoat:
      secondaryBaseCoat[getRandomArrayValue(secondaryBaseCoat)].hex,
    tertiaryBaseCoat:
      tertiaryBaseCoat[getRandomArrayValue(tertiaryBaseCoat)].hex,
    name: names[getRandomArrayValue(names)],
    eyeColor: eyeColors[getRandomArrayValue(eyeColors)].hex,
    isButtFirst: getProbability(4),
    heightModifier: getRandomRange(1, 8),
    scaleModifier: 1,
  };
};

export default (): { data: ValuesType; meta: MetaType } => {
  const isCriticalHit = getProbability(1);

  let values = generateValues()
  if (isCriticalHit) {
    values = {
      ...values,
      ...craftedDogs[getRandomArrayValue(craftedDogs)],
    }
  }

  const hash = createHash(values);

  return {
    data: values,
    meta: {
      hash
    }
  };
};
