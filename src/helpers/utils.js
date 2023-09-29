export const getRandomAmount = (min = 100, max = 10000) => {
  const randomDecimal = Math.random() * (max - min) + min;
  return Math.round(randomDecimal * 100) / 100;
};

export const getRandomInvoicePaymentStatus = () => {
  const paymentStatusOptions = ['Paid', 'Overdue'];
  const randomIndex = Math.floor(Math.random() * paymentStatusOptions.length);
  return paymentStatusOptions[randomIndex];
};
