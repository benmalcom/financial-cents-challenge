import { getRandomDateInCurrentYear } from '@/utils/date';

const getRandomAmount = (min = 1000, max = 10000) => {
  // Generate a random decimal number between min and max
  const randomDecimal = Math.random() * (max - min) + min;
  return Math.round(randomDecimal * 100) / 100;
};

const getRandomPaymentStatus = () => {
  const paymentStatusOptions = ['Paid', 'Overdue'];
  const randomIndex = Math.floor(Math.random() * paymentStatusOptions.length);
  return paymentStatusOptions[randomIndex];
};

export const formatAmount = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(amount);
};

export const getRandomInvoices = (users) => {
  return users.map((user) => ({
    user,
    amount: getRandomAmount(),
    status: getRandomPaymentStatus(),
    due_date: getRandomDateInCurrentYear()
  }));
};
