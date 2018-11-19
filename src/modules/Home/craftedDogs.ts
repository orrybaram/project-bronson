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
    backgroundColor: colors.neutral[50],
    baseCoat: colors.neutral[20],
    eyeColor: colors.red[50],
    hasSpots: false,
    name: "Ghost",
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
    backgroundColor: colors.yellow[20],
    baseCoat: colors.red[50],
    hasSpots: false,
    name: "Clifford",
    secondaryBaseCoat: colors.neutral[20],
    tertiaryBaseCoat: colors.neutral[20],
    underCoat: colors.red[40],
    isButtFirst: false,
    heightModifier: 8,
    scaleModifier: 1.8,
    isFlipped: false,
  },
  {
    name: getTinyName(),
    scaleModifier: 0.55,
    isFlipped: false,
  }
];
