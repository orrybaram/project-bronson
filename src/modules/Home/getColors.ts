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

const getunderCoats = () => {
  return getColorVariants(
    ["orange", "yellow", "neutral"],
    [0]
  );
}

const getbaseCoats = () => {
  return getColorVariants(
    ["orange", "yellow", "neutral"],
    [40, 50, 60, 70, 80]
  );
}

export const backgroundColors = getBackgroundColors();
export const underCoat = getunderCoats();
export const baseCoat = getbaseCoats();
export const secondaryBaseCoat = getbaseCoats();
export const tertiaryBaseCoat = getbaseCoats();
