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

const CRITICAL_HIT_PROBABILITY = 20;
const HAS_SPOTS_PROBABILITY = 4;
const IS_BUTT_FIRST_PROBABILITY = 4;
const IS_FLIPPED_PROBABILITY = 2;

const getBaseColor = () => baseCoat[getRandomArrayValue(baseCoat)];
const getBaseColorDarkness = () => Math.random() / 10 + 0.01;
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
  const hasSpots = getProbability(HAS_SPOTS_PROBABILITY);
  const spotStyles = generateSpotStyles(baseColor.hex);

  return {
    baseCoat: darken(getBaseColorDarkness(), baseColor.hex),
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
    isButtFirst: getProbability(IS_BUTT_FIRST_PROBABILITY),
    heightModifier: getRandomRange(1, 8),
    scaleModifier: 1,
    isFlipped: getProbability(IS_FLIPPED_PROBABILITY),
  };
};

export default (): { data: ValuesType; meta: MetaType } => {
  const isCriticalHit = getProbability(CRITICAL_HIT_PROBABILITY);

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
