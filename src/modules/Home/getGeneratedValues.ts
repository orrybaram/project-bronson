const backgrounds = ["yellow", "red", "green", "purple", "pink", "cyan"];

const getRandomArrayValue = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default () => ({
  background: getRandomArrayValue(backgrounds)
});
