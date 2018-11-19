import colors from "lib/colors";
import names from "./names";
import { getRandomArrayValue } from "lib/utils";

const getTinyName = () => {
  const littlePrefixes = ["Tiny", "Mini", "Lil'"];

  return `${littlePrefixes[getRandomArrayValue(littlePrefixes)]} ${
    names[getRandomArrayValue(names)]
  }`;
};

export default [
  {
    backgroundColor: colors.neutral[40],
    baseCoat: colors.neutral[20],
    eyeColor: colors.blue[50],
    hasSpots: false,
    name: "White walker",
    secondaryBaseCoat: colors.neutral[20],
    tertiaryBaseCoat: colors.neutral[20],
    underCoat: colors.neutral[10],
    isButtFirst: false,
    heightModifier: 4,
  },
  {
    backgroundColor: colors.neutral[80],
    baseCoat: colors.neutral[100],
    eyeColor: colors.red[70],
    hasSpots: false,
    name: "Scary boi",
    secondaryBaseCoat: colors.neutral[20],
    tertiaryBaseCoat: colors.neutral[20],
    underCoat: colors.neutral[90],
    isButtFirst: false,
    heightModifier: 8,
  },
  {
    name: getTinyName(),
    scaleModifier: 0.55,
    isFlipped: false,
  }
];
