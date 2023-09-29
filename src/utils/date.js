const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomDateInCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  let randomYear = currentYear;
  let randomMonth = getRandomInt(0, 11);
  let randomDay = getRandomInt(1, 31);

  // Generate a random date until it is before today
  while (
    randomYear > currentYear ||
    (randomYear === currentYear && randomMonth > currentMonth) ||
    (randomYear === currentYear && randomMonth === currentMonth && randomDay >= currentDay)
  ) {
    randomMonth = getRandomInt(0, 11);
    randomDay = getRandomInt(1, 31);
  }

  return new Date(randomYear, randomMonth, randomDay);
};
