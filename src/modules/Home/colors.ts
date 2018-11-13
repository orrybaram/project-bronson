import colors from "../../colors";

const { red, orange, yellow, green, blue, purple, neutral } = colors;

const getBackgroundColors = () => {
  const levels = [0, 10, 20, 30];

  return Object.keys(colors)
    .filter(x => x !== "neutral")
    .reduce((acc: string[], color: string) => {

      const colorLevels = levels.map(level => {
        return colors[color][level];
      })

      return [...acc, ...colorLevels];
    }, []);
};

export const backgroundColors = getBackgroundColors();

export const bellyColor = ["white"];
export const coatColor = ["red", "brown", "black", "orange", "gray"];
export const secondaryCoatColor = ["red", "brown", "black", "orange", "gray"];
export const tertiaryCoatColor = ["red", "brown", "black", "orange", "gray"];
