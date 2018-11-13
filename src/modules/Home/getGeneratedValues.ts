const backgrounds = ["yellow", "red", "green", "purple", "pink", "cyan"];
const coatColor = ["red", "brown", "black", "orange", "gray"];
const secondaryCoatColor = ["red", "brown", "black", "orange", "gray"];
const tertiaryCoatColor = ["red", "brown", "black", "orange", "gray"];
const bellyColor = ["white"];

const getRandomNumber = (range: number) => Math.floor(Math.random() * range);

const getRandomArrayValue = (array: Array<string>) => {
  const randomIndex = getRandomNumber(array.length);
  console.log(randomIndex);
  return array[randomIndex];
};

const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === 1;
};

export default () => ({
  backgroundColor: getRandomArrayValue(backgrounds),
  coatColor: getRandomArrayValue(coatColor),
  secondaryCoatColor: getRandomArrayValue(secondaryCoatColor),
  tertiaryCoatColor: getRandomArrayValue(tertiaryCoatColor),
  bellyColor: getRandomArrayValue(bellyColor),
  hasSpots: getProbability(5)
});
