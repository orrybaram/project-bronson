export const createHash = (values: Object) => btoa(JSON.stringify(values));

export const getRandomNumber = (range: number) =>
  Math.floor(Math.random() * range) + 1;

export const getRandomArrayValue = (array: Array<any>) => {
  const randomIndex = getRandomNumber(array.length) - 1;
  return randomIndex;
};

export const getProbability = (consequent: number) => {
  return getRandomNumber(consequent) === consequent;
};

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRandomRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);