import colors from "../../colors";

const { red, orange, yellow, green, blue, purple, neutral } = colors;

const getColorVariants = (colorArray: string[], levels: number[]) => {
  return colorArray.reduce((acc: string[], color: string) => {
    const colorLevels = levels.map(level => {
      return colors[color][level];
    });

    return [...acc, ...colorLevels];
  }, []);
};

const getBackgroundColors = () => {
  return getColorVariants(
    ["red", "orange", "yellow", "green", "blue", "purple"],
    [20]
  );
};

const getBellyColors = () => {
  return getColorVariants(
    ["orange", "yellow", "neutral"],
    [0]
  );
}

const getCoatColors = () => {
  return getColorVariants(
    ["red", "orange", "yellow", "neutral"],
    [40, 50, 60, 70, 80, 90, 100]
  );
}

export const backgroundColors = getBackgroundColors();

export const bellyColor = getBellyColors();
export const coatColor = getCoatColors();
export const secondaryCoatColor = getCoatColors();
export const tertiaryCoatColor = getCoatColors();
