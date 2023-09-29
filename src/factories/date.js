const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomDateInCurrentYear = () => {
  const currentYear = new Date().getFullYear();

  let randomDate = new Date(currentYear, getRandomInt(0, 11), getRandomInt(1, 31));

  while (randomDate >= new Date()) {
    randomDate = new Date(currentYear, getRandomInt(0, 11), getRandomInt(1, 31));
  }

  return randomDate;
};
