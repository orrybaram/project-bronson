import colors from "../../colors";

const { red, orange, yellow, green, blue, purple, neutral } = colors;

const getColorVariants = (colorArray: string[], levels: number[]) => {
  return colorArray.reduce(
    (acc: { hex: string; color: string }[], color: string) => {
      const colorLevels = levels.map(level => {
        return { hex: colors[color][level], color };
      });

      return [...acc, ...colorLevels];
    },
    []
  );
};

const getBackgroundColors = () => {
  return getColorVariants(
    ["red", "orange", "yellow", "green", "blue", "purple"],
    [20]
  );
};

export const getUnderCoat = (baseColor: string) => {
  return colors[baseColor][0];
};

const getBaseCoats = () => {
  return getColorVariants(
    ["orange", "yellow", "neutral"],
    [40, 50, 60, 70, 80]
  );
};

const getEyeColors = () => {
  return getColorVariants(["neutral"], [90]);
};

export const backgroundColors = getBackgroundColors();
export const baseCoat = getBaseCoats();
export const eyeColors = getEyeColors();
export const secondaryBaseCoat = getBaseCoats();
export const tertiaryBaseCoat = getBaseCoats();
